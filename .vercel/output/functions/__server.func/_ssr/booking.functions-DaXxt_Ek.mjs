import { T as TSS_SERVER_FUNCTION, a as createServerFn } from "./server-DcBPHt8D.mjs";
import { c as createClient } from "../_libs/supabase__supabase-js.mjs";
import crypto from "node:crypto";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import { o as objectType, s as stringType, n as numberType } from "../_libs/zod.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:stream";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
var createServerRpc = (serverFnMeta, splitImportFn) => {
  const url = "/_serverFn/" + serverFnMeta.id;
  return Object.assign(splitImportFn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const __vite_import_meta_env__$2 = {};
let _supabase = null;
let _initialized = false;
function getSupabaseCredentials() {
  const url = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL || (typeof import.meta !== "undefined" && __vite_import_meta_env__$2 ? "https://qkiqebduuryncwqvktqe.supabase.co" : void 0);
  const anonKey = process.env.SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY || (typeof import.meta !== "undefined" && __vite_import_meta_env__$2 ? "sb_publishable_Dw-KJc-8QnCHYKbLPSCKtA_vgMU3O8G" : void 0);
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || anonKey;
  return { url, key: serviceKey };
}
function getSupabase() {
  if (_initialized) return _supabase;
  const { url, key } = getSupabaseCredentials();
  if (url && key) {
    try {
      _supabase = createClient(url, key, {
        auth: {
          persistSession: false
          // Server environment, don't persist sessions
        }
      });
      console.log("✅ Supabase client initialized successfully with URL:", url);
    } catch (error) {
      console.error("Failed to initialize Supabase client:", error);
    }
  } else {
    console.warn(
      "⚠️ Supabase env vars are missing. Set SUPABASE_URL and SUPABASE_ANON_KEY (or SUPABASE_SERVICE_ROLE_KEY) to enable the live booking system.",
      { url: !!url, key: !!key }
    );
  }
  _initialized = true;
  return _supabase;
}
const __vite_import_meta_env__$1 = {};
const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || (typeof import.meta !== "undefined" && __vite_import_meta_env__$1 ? void 0 : void 0);
const rawPrivateKey = process.env.GOOGLE_PRIVATE_KEY || (typeof import.meta !== "undefined" && __vite_import_meta_env__$1 ? void 0 : void 0);
const privateKey = rawPrivateKey ? rawPrivateKey.replace(/\\n/g, "\n") : null;
const calendarId = process.env.GOOGLE_CALENDAR_ID || (typeof import.meta !== "undefined" && __vite_import_meta_env__$1 ? void 0 : void 0) || "primary";
let cachedToken = null;
function base64url(str) {
  return Buffer.from(str).toString("base64url");
}
function generateJWT(email, key) {
  const header = JSON.stringify({ alg: "RS256", typ: "JWT" });
  const now = Math.floor(Date.now() / 1e3);
  const claim = JSON.stringify({
    iss: email,
    scope: "https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events",
    aud: "https://oauth2.googleapis.com/token",
    exp: now + 3600,
    iat: now
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
async function getAccessToken() {
  if (!clientEmail || !privateKey) {
    throw new Error("Missing Google Service Account credentials.");
  }
  if (cachedToken && cachedToken.expiresAt > Date.now() + 3e5) {
    return cachedToken.token;
  }
  const jwt = generateJWT(clientEmail, privateKey);
  const params = new URLSearchParams();
  params.append("grant_type", "urn:ietf:params:oauth:grant-type:jwt-bearer");
  params.append("assertion", jwt);
  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: params.toString()
  });
  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`Google OAuth token retrieval failed: ${response.statusText} - ${errText}`);
  }
  const data = await response.json();
  cachedToken = {
    token: data.access_token,
    expiresAt: Date.now() + data.expires_in * 1e3
  };
  return data.access_token;
}
async function createGoogleEvent(params) {
  const isConfigured = !!(clientEmail && privateKey);
  if (!isConfigured) {
    console.log("Mocking Google Calendar event creation (no credentials configured).");
    return {
      eventId: "mock_event_" + Math.random().toString(36).substring(2, 11),
      meetLink: "https://meet.google.com/mock-" + Math.random().toString(36).substring(2, 5) + "-" + Math.random().toString(36).substring(5, 9) + "-" + Math.random().toString(36).substring(9, 12),
      eventLink: "https://calendar.google.com"
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
        timeZone: "UTC"
      },
      end: {
        dateTime: params.endIso,
        timeZone: "UTC"
      },
      attendees: [{ email: params.clientEmail }],
      conferenceData: {
        createRequest: {
          requestId,
          conferenceSolutionKey: {
            type: "hangoutsMeet"
          }
        }
      }
    };
    const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(
      calendarId
    )}/events?conferenceDataVersion=1`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });
    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`Google Calendar Event insertion failed: ${response.statusText} - ${errText}`);
    }
    const eventData = await response.json();
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
      meetLink,
      eventLink: eventData.htmlLink
    };
  } catch (error) {
    console.error("Google Calendar Event Creation Error:", error);
    return {
      eventId: "failed_event_" + Math.random().toString(36).substring(2, 11),
      meetLink: "https://meet.google.com/fallback-consultation",
      eventLink: "https://calendar.google.com"
    };
  }
}
const __vite_import_meta_env__ = {};
const resendApiKey = process.env.RESEND_API_KEY || (typeof import.meta !== "undefined" && __vite_import_meta_env__ ? void 0 : void 0);
const emailFrom = process.env.EMAIL_FROM || (typeof import.meta !== "undefined" && __vite_import_meta_env__ ? void 0 : void 0) || "Hunain Haider <onboarding@resend.dev>";
const adminEmail = process.env.ADMIN_EMAIL || (typeof import.meta !== "undefined" && __vite_import_meta_env__ ? void 0 : void 0) || "";
async function sendConfirmationEmail(params) {
  if (!resendApiKey) {
    console.log(`
[Mock Email Sent]
To: ${params.clientEmail}
From: ${emailFrom}
Subject: Booking Confirmed - ${params.serviceName} with Hunain Haider
Body: Hello ${params.clientName}, your booking for ${params.serviceName} is confirmed for ${params.date} at ${params.time} (${params.duration} min). Join via Google Meet: ${params.meetLink}.
    `);
    return true;
  }
  const formattedDate = (/* @__PURE__ */ new Date(`${params.date}T${params.time}`)).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Booking Confirmed</title>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            background-color: #0b0f19;
            color: #f3f4f6;
            margin: 0;
            padding: 40px 20px;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #111827;
            border: 1px solid #1f2937;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          }
          .header {
            background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
            padding: 30px;
            text-align: center;
          }
          .header h1 {
            margin: 0;
            color: #ffffff;
            font-size: 24px;
            font-weight: 800;
            letter-spacing: -0.025em;
          }
          .content {
            padding: 40px 30px;
          }
          .greeting {
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 20px;
            color: #ffffff;
          }
          .details-card {
            background-color: #1f2937;
            border-radius: 8px;
            padding: 24px;
            margin-bottom: 30px;
            border-left: 4px solid #3b82f6;
          }
          .details-row {
            display: flex;
            margin-bottom: 12px;
            font-size: 15px;
          }
          .details-row:last-child {
            margin-bottom: 0;
          }
          .label {
            width: 120px;
            color: #9ca3af;
            font-weight: 500;
          }
          .value {
            color: #ffffff;
            font-weight: 600;
            flex: 1;
          }
          .cta-container {
            text-align: center;
            margin: 35px 0;
          }
          .btn-meet {
            background-color: #3b82f6;
            color: #ffffff !important;
            padding: 14px 28px;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            font-size: 15px;
            display: inline-block;
            box-shadow: 0 4px 14px 0 rgba(59, 130, 246, 0.3);
          }
          .btn-meet:hover {
            background-color: #2563eb;
          }
          .instructions {
            font-size: 14px;
            color: #9ca3af;
            line-height: 1.6;
            border-top: 1px solid #1f2937;
            padding-top: 25px;
          }
          .footer {
            background-color: #0f172a;
            padding: 20px;
            text-align: center;
            font-size: 12px;
            color: #6b7280;
            border-top: 1px solid #1f2937;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Consultation Confirmed</h1>
          </div>
          <div class="content">
            <div class="greeting">Hi ${params.clientName},</div>
            <p>Your session with <strong>Hunain Haider</strong> has been successfully booked. Below are the appointment details:</p>
            
            <div class="details-card">
              <div class="details-row">
                <div class="label">Service:</div>
                <div class="value">${params.serviceName}</div>
              </div>
              <div class="details-row">
                <div class="label">Date:</div>
                <div class="value">${formattedDate}</div>
              </div>
              <div class="details-row">
                <div class="label">Time:</div>
                <div class="value">${params.time} (UTC / Detected local timezone)</div>
              </div>
              <div class="details-row">
                <div class="label">Duration:</div>
                <div class="value">${params.duration} Minutes</div>
              </div>
              <div class="details-row">
                <div class="label">Industry:</div>
                <div class="value">${params.industry}</div>
              </div>
            </div>

            <div class="cta-container">
              <a href="${params.meetLink}" class="btn-meet" target="_blank">Join Google Meet</a>
            </div>

            <div class="instructions">
              <strong>Meeting Instructions:</strong>
              <ul>
                <li>Please test your audio and camera before joining the Google Meet.</li>
                <li>Be ready to talk about your project scope, targets, and any technical hurdles.</li>
                <li>If you need to reschedule, please notify at least 12 hours in advance.</li>
              </ul>
            </div>
          </div>
          <div class="footer">
            &copy; 2026 WebGaebel. All rights reserved.<br>
            Karachi, Sindh, Pakistan
          </div>
        </div>
      </body>
    </html>
  `;
  try {
    const toEmails = [params.clientEmail];
    if (adminEmail && adminEmail !== params.clientEmail) {
      toEmails.push(adminEmail);
    }
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: emailFrom,
        to: toEmails,
        subject: `Booking Confirmed: ${params.serviceName} - ${params.clientName}`,
        html: htmlContent
      })
    });
    if (!response.ok) {
      const errText = await response.text();
      console.error(`Resend API Error: ${response.statusText} - ${errText}`);
      return false;
    }
    return true;
  } catch (error) {
    console.error("Failed to send email through Resend:", error);
    return false;
  }
}
const DEFAULT_SERVICE_NAMES = ["Mobile App Development", "Web Development", "Shopify Development", "Amazon Services", "Graphic Design", "Video Editing", "Digital Marketing", "Data Solutions", "SEO Services", "SaaS Development", "WordPress Development", "AI Development", "UI/UX Design", "Custom Web App Development", "E-Commerce Business Startup", "Website Maintenance & Support", "Consultation"];
const WEBSITE_SERVICE_ORDER = ["Mobile App Development", "Web Development", "Shopify Development", "Amazon Services", "Graphic Design", "Video Editing", "Digital Marketing", "Data Solutions", "SEO Services", "SaaS Development", "WordPress Development", "AI Development", "UI/UX Design", "Custom Web App Development", "E-Commerce Business Startup", "Website Maintenance & Support", "Consultation"];
const DEFAULT_SLOT_TIMES = ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30"];
function buildDefaultSlotRows(date) {
  return DEFAULT_SLOT_TIMES.map((time) => ({
    date,
    time,
    is_booked: false
  }));
}
function sortServicesToWebsiteOrder(services) {
  const order = new Map(WEBSITE_SERVICE_ORDER.map((name, index) => [name.toLowerCase(), index]));
  return [...services].sort((a, b) => {
    const aIndex = order.get(a.toLowerCase());
    const bIndex = order.get(b.toLowerCase());
    if (aIndex !== void 0 && bIndex !== void 0) return aIndex - bIndex;
    if (aIndex !== void 0) return -1;
    if (bIndex !== void 0) return 1;
    return a.localeCompare(b);
  });
}
const getActiveServices_createServerFn_handler = createServerRpc({
  id: "eaa70a2b922f85433adcdede7ed613103f61d2c78f00b134b8acb21497edc179",
  name: "getActiveServices",
  filename: "src/lib/api/booking.functions.ts"
}, (opts) => getActiveServices.__executeServer(opts));
const getActiveServices = createServerFn({
  method: "GET"
}).handler(getActiveServices_createServerFn_handler, async () => {
  const supabase = getSupabase();
  if (supabase) {
    try {
      const {
        data,
        error
      } = await supabase.from("services").select("name").eq("active", true).order("name", {
        ascending: true
      });
      if (error) throw error;
      if (data && data.length > 0) {
        return sortServicesToWebsiteOrder(data.map((s) => s.name));
      }
    } catch (err) {
      console.error("Failed to query services from Supabase:", err);
    }
  }
  return DEFAULT_SERVICE_NAMES;
});
const getAvailableSlots_createServerFn_handler = createServerRpc({
  id: "31c5a3d3afebec4ab63fa3354eabaf9639affbd798d736b246f829fda62c9e01",
  name: "getAvailableSlots",
  filename: "src/lib/api/booking.functions.ts"
}, (opts) => getAvailableSlots.__executeServer(opts));
const getAvailableSlots = createServerFn({
  method: "POST"
}).validator(objectType({
  date: stringType()
})).handler(getAvailableSlots_createServerFn_handler, async ({
  data
}) => {
  const supabase = getSupabase();
  if (supabase) {
    try {
      const {
        data: dbSlots,
        error: slotsError
      } = await supabase.from("slots").select("time, is_booked").eq("date", data.date).order("time", {
        ascending: true
      });
      if (slotsError) {
        console.error("Supabase Slots Query Error:", slotsError);
        throw slotsError;
      }
      if (!dbSlots || dbSlots.length === 0) {
        const {
          error: insertError
        } = await supabase.from("slots").upsert(buildDefaultSlotRows(data.date), {
          onConflict: "date,time"
        });
        if (insertError) {
          console.error("Supabase Slot Seed Error:", insertError);
          throw insertError;
        }
        const {
          data: seededSlots,
          error: seededError
        } = await supabase.from("slots").select("time, is_booked").eq("date", data.date).order("time", {
          ascending: true
        });
        if (seededError) {
          console.error("Supabase Seeded Slots Query Error:", seededError);
          throw seededError;
        }
        return {
          allSlots: (seededSlots ?? []).map((s) => s.time),
          bookedSlots: (seededSlots ?? []).filter((s) => s.is_booked).map((s) => s.time)
        };
      }
      const {
        data: bookingsData,
        error: bookingsError
      } = await supabase.from("bookings").select("time").eq("date", data.date);
      if (bookingsError) {
        console.error("Supabase Bookings Query Error:", bookingsError);
        throw bookingsError;
      }
      const allSlots = dbSlots.map((s) => s.time);
      const bookedTimes = /* @__PURE__ */ new Set();
      bookingsData?.forEach((b) => {
        if (b.time) bookedTimes.add(b.time);
      });
      dbSlots.forEach((s) => {
        if (s.is_booked) bookedTimes.add(s.time);
      });
      return {
        allSlots,
        bookedSlots: Array.from(bookedTimes),
        availableSlots: allSlots.filter((time) => !bookedTimes.has(time))
      };
    } catch (err) {
      console.error("Failed to query booked slots from Supabase:", err);
    }
  }
  return {
    allSlots: DEFAULT_SLOT_TIMES,
    bookedSlots: ["10:00", "14:00"],
    availableSlots: DEFAULT_SLOT_TIMES.filter((time) => !["10:00", "14:00"].includes(time))
  };
});
const createBooking_createServerFn_handler = createServerRpc({
  id: "d3806421c8cd5aa79208f45a3ee18d75679e4c670c44b608d027f6f3e1e322de",
  name: "createBooking",
  filename: "src/lib/api/booking.functions.ts"
}, (opts) => createBooking.__executeServer(opts));
const createBooking = createServerFn({
  method: "POST"
}).validator(objectType({
  fullName: stringType().min(1, "Full name is required"),
  email: stringType().email("Invalid email address"),
  phone: stringType().optional(),
  serviceName: stringType().min(1, "Service selection is required"),
  industry: stringType().min(1, "Industry selection is required"),
  date: stringType(),
  // "YYYY-MM-DD"
  time: stringType(),
  // "HH:MM"
  duration: numberType().int().positive(),
  // 30, 45, or 60 minutes
  message: stringType().optional()
})).handler(createBooking_createServerFn_handler, async ({
  data
}) => {
  const supabase = getSupabase();
  if (supabase) {
    const {
      data: existingBooking,
      error: existingBookingError
    } = await supabase.from("bookings").select("id").eq("date", data.date).eq("time", data.time).maybeSingle();
    if (existingBookingError) {
      throw existingBookingError;
    }
    if (existingBooking) {
      throw new Error("Selected time slot is already booked.");
    }
    const {
      data: existingSlot,
      error: existingSlotError
    } = await supabase.from("slots").select("is_booked").eq("date", data.date).eq("time", data.time).maybeSingle();
    if (existingSlotError) {
      throw existingSlotError;
    }
    if (existingSlot?.is_booked) {
      throw new Error("Selected time slot is already booked.");
    }
  }
  const startDateTime = /* @__PURE__ */ new Date(`${data.date}T${data.time}:00`);
  const endDateTime = new Date(startDateTime.getTime() + data.duration * 60 * 1e3);
  const startIso = startDateTime.toISOString();
  const endIso = endDateTime.toISOString();
  const calResult = await createGoogleEvent({
    serviceName: data.serviceName,
    clientName: data.fullName,
    clientEmail: data.email,
    phone: data.phone,
    industry: data.industry,
    description: data.message || "",
    startIso,
    endIso
  });
  let databaseRecordId = null;
  if (supabase) {
    try {
      const {
        data: inserted,
        error: insertError
      } = await supabase.from("bookings").insert({
        full_name: data.fullName,
        email: data.email,
        phone: data.phone || null,
        service: data.serviceName,
        industry: data.industry,
        date: data.date,
        time: data.time,
        duration: data.duration,
        message: data.message || null,
        meet_link: calResult.meetLink,
        calendar_event_id: calResult.eventId,
        status: "confirmed"
        // Auto confirm appointments
      }).select("id").single();
      if (insertError) {
        throw insertError;
      }
      databaseRecordId = inserted?.id;
      console.log(`Saved booking into Supabase bookings table: ID = ${databaseRecordId}`);
      const {
        error: slotUpsertError
      } = await supabase.from("slots").upsert({
        date: data.date,
        time: data.time,
        is_booked: true
      }, {
        onConflict: "date,time"
      });
      if (slotUpsertError) {
        console.error("Failed to mark slot as booked in slots table:", slotUpsertError);
      }
    } catch (err) {
      console.error("Failed to insert booking record in Supabase:", err);
      throw err;
    }
  } else {
    console.log("Supabase client is not initialized. Skipping database save (Mock Mode).");
  }
  const emailSent = await sendConfirmationEmail({
    clientEmail: data.email,
    clientName: data.fullName,
    serviceName: data.serviceName,
    date: data.date,
    time: data.time,
    duration: data.duration,
    meetLink: calResult.meetLink,
    message: data.message,
    industry: data.industry,
    phone: data.phone
  });
  return {
    success: true,
    bookingId: databaseRecordId || "mock_id_" + Math.random().toString(36).substring(2, 9),
    meetLink: calResult.meetLink,
    emailSent,
    details: {
      fullName: data.fullName,
      serviceName: data.serviceName,
      date: data.date,
      time: data.time,
      duration: data.duration,
      meetLink: calResult.meetLink
    }
  };
});
const createContactSubmission_createServerFn_handler = createServerRpc({
  id: "eecc189f949d59cd5c438e9d80d0a10ac2fa01fa86efad0e724b6f5d02a95381",
  name: "createContactSubmission",
  filename: "src/lib/api/booking.functions.ts"
}, (opts) => createContactSubmission.__executeServer(opts));
const createContactSubmission = createServerFn({
  method: "POST"
}).validator(objectType({
  name: stringType().min(1, "Name is required"),
  email: stringType().email("Invalid email address"),
  company: stringType().optional(),
  message: stringType().min(1, "Message is required")
})).handler(createContactSubmission_createServerFn_handler, async ({
  data
}) => {
  const supabase = getSupabase();
  if (!supabase) {
    console.warn("Supabase client not available — contact form submission NOT saved to database.");
    return {
      success: true,
      saved: false
    };
  }
  const {
    error
  } = await supabase.from("contact_messages").insert({
    name: data.name,
    email: data.email,
    company: data.company || null,
    message: data.message,
    source: "website"
  });
  if (error) {
    throw error;
  }
  return {
    success: true,
    saved: true,
    table: "contact_messages"
  };
});
const getBookedSlots_createServerFn_handler = createServerRpc({
  id: "930e0bbe89d26cfa8d88e5c6e821378acb4309e08a1b1cd65dde89be6c34c38c",
  name: "getBookedSlots",
  filename: "src/lib/api/booking.functions.ts"
}, (opts) => getBookedSlots.__executeServer(opts));
const getBookedSlots = createServerFn({
  method: "POST"
}).validator(objectType({
  date: stringType()
})).handler(getBookedSlots_createServerFn_handler, async ({
  data
}) => {
  const res = await getAvailableSlots({
    data: {
      date: data.date
    }
  });
  return res.bookedSlots;
});
export {
  createBooking_createServerFn_handler,
  createContactSubmission_createServerFn_handler,
  getActiveServices_createServerFn_handler,
  getAvailableSlots_createServerFn_handler,
  getBookedSlots_createServerFn_handler
};
