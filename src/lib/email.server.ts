const resendApiKey =
  process.env.RESEND_API_KEY ||
  (typeof import.meta !== "undefined" && import.meta.env
    ? import.meta.env.RESEND_API_KEY || import.meta.env.VITE_RESEND_API_KEY
    : undefined);

const emailFrom =
  process.env.EMAIL_FROM ||
  (typeof import.meta !== "undefined" && import.meta.env
    ? import.meta.env.EMAIL_FROM || import.meta.env.VITE_EMAIL_FROM
    : undefined) ||
  "Hunain Haider <onboarding@resend.dev>";

const adminEmail =
  process.env.ADMIN_EMAIL ||
  (typeof import.meta !== "undefined" && import.meta.env
    ? import.meta.env.ADMIN_EMAIL || import.meta.env.VITE_ADMIN_EMAIL
    : undefined) ||
  ""; // Admin copy (Hunain's email)

interface EmailParams {
  clientEmail: string;
  clientName: string;
  serviceName: string;
  date: string; // "2026-06-08"
  time: string; // "09:00"
  duration: number; // minutes
  meetLink: string;
  message?: string;
  industry: string;
  phone?: string;
}

export async function sendConfirmationEmail(params: EmailParams): Promise<boolean> {
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

  const formattedDate = new Date(`${params.date}T${params.time}`).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
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
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: emailFrom,
        to: toEmails,
        subject: `Booking Confirmed: ${params.serviceName} - ${params.clientName}`,
        html: htmlContent,
      }),
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
