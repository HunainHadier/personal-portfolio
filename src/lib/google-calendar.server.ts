import crypto from "node:crypto";

const clientEmail =
  process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL ||
  (typeof import.meta !== "undefined" && import.meta.env
    ? import.meta.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || import.meta.env.VITE_GOOGLE_SERVICE_ACCOUNT_EMAIL
    : undefined);

const rawPrivateKey =
  process.env.GOOGLE_PRIVATE_KEY ||
  (typeof import.meta !== "undefined" && import.meta.env
    ? import.meta.env.GOOGLE_PRIVATE_KEY || import.meta.env.VITE_GOOGLE_PRIVATE_KEY
    : undefined);

// Handle escaped newlines in keys (e.g. from environment variable syntax)
const privateKey = rawPrivateKey ? rawPrivateKey.replace(/\\n/g, "\n") : null;

const calendarId =
  process.env.GOOGLE_CALENDAR_ID ||
  (typeof import.meta !== "undefined" && import.meta.env
    ? import.meta.env.GOOGLE_CALENDAR_ID || import.meta.env.VITE_GOOGLE_CALENDAR_ID
    : undefined) ||
  "primary";

// Cache for the access token to avoid requesting it repeatedly
let cachedToken: { token: string; expiresAt: number } | null = null;

function base64url(str: string | Buffer): string {
  return Buffer.from(str).toString("base64url");
}

function generateJWT(email: string, key: string): string {
  const header = JSON.stringify({ alg: "RS256", typ: "JWT" });
  const now = Math.floor(Date.now() / 1000);
  const claim = JSON.stringify({
    iss: email,
    scope: "https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events",
    aud: "https://oauth2.googleapis.com/token",
    exp: now + 3600,
    iat: now,
  });

  const payload = `${base64url(header)}.${base64url(claim)}`;
  
  try {
    const sign = crypto.createSign("RSA-SHA256");
    sign.update(payload);
    const signature = sign.sign(key, "base64url");
    return `${payload}.${signature}`;
  } catch (error) {
    console.error("Error signing JWT. Check your GOOGLE_PRIVATE_KEY format.", error);
    throw error;
  }
}

async function getAccessToken(): Promise<string> {
  if (!clientEmail || !privateKey) {
    throw new Error("Missing Google Service Account credentials.");
  }

  // Use cached token if still valid (give 5-minute buffer)
  if (cachedToken && cachedToken.expiresAt > Date.now() + 300000) {
    return cachedToken.token;
  }

  const jwt = generateJWT(clientEmail, privateKey);
  const params = new URLSearchParams();
  params.append("grant_type", "urn:ietf:params:oauth:grant-type:jwt-bearer");
  params.append("assertion", jwt);

  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params.toString(),
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`Google OAuth token retrieval failed: ${response.statusText} - ${errText}`);
  }

  const data = (await response.json()) as { access_token: string; expires_in: number };
  cachedToken = {
    token: data.access_token,
    expiresAt: Date.now() + data.expires_in * 1000,
  };

  return data.access_token;
}

interface CalendarEventParams {
  serviceName: string;
  clientName: string;
  clientEmail: string;
  phone?: string;
  industry: string;
  description?: string;
  startIso: string; // "2026-06-08T09:00:00Z"
  endIso: string;
}

interface CalendarEventResult {
  eventId: string;
  meetLink: string;
  eventLink: string;
}

export async function createGoogleEvent(
  params: CalendarEventParams
): Promise<CalendarEventResult> {
  const isConfigured = !!(clientEmail && privateKey);

  if (!isConfigured) {
    console.log("Mocking Google Calendar event creation (no credentials configured).");
    return {
      eventId: "mock_event_" + Math.random().toString(36).substring(2, 11),
      meetLink: "https://meet.google.com/mock-" + Math.random().toString(36).substring(2, 5) + "-" + Math.random().toString(36).substring(5, 9) + "-" + Math.random().toString(36).substring(9, 12),
      eventLink: "https://calendar.google.com",
    };
  }

  try {
    const accessToken = await getAccessToken();
    const requestId = crypto.randomUUID();

    const body = {
      summary: `${params.serviceName} - ${params.clientName}`,
      description: `
Client: ${params.clientName}
Email: ${params.clientEmail}
Phone/WhatsApp: ${params.phone || "Not provided"}
Industry: ${params.industry}

Project Description:
${params.description || "No project description provided."}
      `.trim(),
      start: {
        dateTime: params.startIso,
        timeZone: "UTC",
      },
      end: {
        dateTime: params.endIso,
        timeZone: "UTC",
      },
      attendees: [{ email: params.clientEmail }],
      conferenceData: {
        createRequest: {
          requestId: requestId,
          conferenceSolutionKey: {
            type: "hangoutsMeet",
          },
        },
      },
    };

    // Google Calendar Event insert API endpoint
    const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(
      calendarId
    )}/events?conferenceDataVersion=1`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`Google Calendar Event insertion failed: ${response.statusText} - ${errText}`);
    }

    const eventData = (await response.json()) as {
      id: string;
      htmlLink: string;
      conferenceData?: {
        entryPoints?: Array<{
          entryPointType: string;
          uri: string;
        }>;
      };
    };

    // Extract meet link
    let meetLink = "https://meet.google.com/mock-appointment";
    if (eventData.conferenceData?.entryPoints) {
      const videoEntryPoint = eventData.conferenceData.entryPoints.find(
        (ep) => ep.entryPointType === "video"
      );
      if (videoEntryPoint) {
        meetLink = videoEntryPoint.uri;
      }
    }

    return {
      eventId: eventData.id,
      meetLink: meetLink,
      eventLink: eventData.htmlLink,
    };
  } catch (error) {
    console.error("Google Calendar Event Creation Error:", error);
    // Return mock fallback rather than failing the transaction for the end user
    return {
      eventId: "failed_event_" + Math.random().toString(36).substring(2, 11),
      meetLink: "https://meet.google.com/fallback-consultation",
      eventLink: "https://calendar.google.com",
    };
  }
}
