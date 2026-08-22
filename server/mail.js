import nodemailer from "nodemailer";

const ALLOWED_SERVICES = new Set([
  "On-Grid Solar",
  "Off-Grid Solar",
  "Hybrid Solar",
  "Commercial / Industrial Solar",
  "Wind Energy",
  "Solar Maintenance",
  "Electrical Services",
  "Energy Audit / Other",
  "Not sure",
]);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NAME_RE = /^[\p{L}\p{M}][\p{L}\p{M}'’.\- ]{1,79}$/u;

const DEFAULT_SITE_URL = "https://raywindsolution.com";

function siteUrl(env) {
  return env.SITE_URL || DEFAULT_SITE_URL;
}

let transporter;

export function getAllowedServices() {
  return ALLOWED_SERVICES;
}

export function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function normalizePhone(raw) {
  const digits = String(raw || "").replace(/\D/g, "");
  if (digits.length === 10 && /^[6-9]/.test(digits)) return digits;
  if (digits.length === 12 && digits.startsWith("91") && /^[6-9]/.test(digits.slice(2))) {
    return digits.slice(2);
  }
  if (digits.length === 11 && digits.startsWith("0") && /^[6-9]/.test(digits.slice(1))) {
    return digits.slice(1);
  }
  return null;
}

export function validateEnquiry(input) {
  const name = String(input.name || "").trim().replace(/\s+/g, " ");
  const phoneRaw = String(input.phone || "").trim();
  const email = String(input.email || "").trim();
  const service = String(input.service || "").trim();
  const message = String(input.message || "").trim();

  if (String(input.website || "").trim()) {
    return { ok: false, error: "Unable to send enquiry. Please try again." };
  }
  if (!NAME_RE.test(name)) {
    return { ok: false, error: "Please enter your full name." };
  }
  const phone = normalizePhone(phoneRaw);
  if (!phone) {
    return { ok: false, error: "Please enter a valid 10-digit mobile number." };
  }
  if (email && !EMAIL_RE.test(email)) {
    return { ok: false, error: "Please enter a valid email address, or leave it blank." };
  }
  if (!ALLOWED_SERVICES.has(service)) {
    return { ok: false, error: "Please choose a service." };
  }
  if (message.length > 1200) {
    return { ok: false, error: "Please keep your message under 1,200 characters." };
  }

  return {
    ok: true,
    data: {
      name,
      phone,
      email,
      service,
      message,
    },
  };
}

function getTransporter(env) {
  if (!transporter) {
    const user = env.SMTP_USER;
    const pass = String(env.SMTP_PASS || "").replace(/\s+/g, "");
    if (!user || !pass) {
      throw new Error("SMTP credentials are not configured.");
    }
    transporter = nodemailer.createTransport({
      host: env.SMTP_HOST || "smtp.gmail.com",
      port: Number(env.SMTP_PORT || 465),
      secure: env.SMTP_SECURE !== "false",
      auth: { user, pass },
    });
  }
  return transporter;
}

function formatWhen() {
  return new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

function wrapEmail(title, inner) {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${title}</title>
  </head>
  <body style="margin:0;padding:20px 12px;background:#f1f5f9;font-family:Segoe UI,Helvetica,Arial,sans-serif;color:#334155;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;">
            ${inner}
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function dataTable(rows) {
  const body = rows
    .map(
      ([label, value]) => `
      <tr>
        <th style="padding:10px 12px;border:1px solid #e2e8f0;background:#f8fafc;text-align:left;font-size:13px;font-weight:600;color:#64748b;width:34%;">${label}</th>
        <td style="padding:10px 12px;border:1px solid #e2e8f0;font-size:14px;color:#0f172a;">${value}</td>
      </tr>`,
    )
    .join("");

  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">${body}</table>`;
}

function leadEmailHtml(enquiry, env) {
  const name = escapeHtml(enquiry.name);
  const phone = escapeHtml(enquiry.phone);
  const email = enquiry.email ? escapeHtml(enquiry.email) : "—";
  const service = escapeHtml(enquiry.service);
  const message = enquiry.message
    ? escapeHtml(enquiry.message).replace(/\n/g, "<br />")
    : "—";
  const when = escapeHtml(`${formatWhen()} IST`);
  const site = escapeHtml(siteUrl(env));

  return wrapEmail(
    "Website enquiry",
    `
    <tr>
      <td style="padding:18px 20px;border-bottom:1px solid #e2e8f0;">
        <p style="margin:0;font-size:16px;font-weight:600;color:#0f172a;">New website enquiry</p>
        <p style="margin:4px 0 0;font-size:12px;color:#64748b;">${site}</p>
      </td>
    </tr>
    <tr>
      <td style="padding:18px 20px 20px;">
        ${dataTable([
          ["Name", `<strong>${name}</strong>`],
          ["Phone", `<a href="tel:+91${phone}" style="color:#0a9e6b;text-decoration:none;">+91 ${phone}</a>`],
          ["Email", email],
          ["Service", `<strong>${service}</strong>`],
          ["Submitted", when],
          ["Message", message],
        ])}
      </td>
    </tr>`,
  );
}

function leadEmailText(enquiry, env) {
  return [
    "New website enquiry",
    siteUrl(env),
    "",
    `Name: ${enquiry.name}`,
    `Phone: +91 ${enquiry.phone}`,
    `Email: ${enquiry.email || "—"}`,
    `Service: ${enquiry.service}`,
    `Submitted: ${formatWhen()} IST`,
    `Message: ${enquiry.message || "—"}`,
  ].join("\n");
}

function visitorEmailHtml(enquiry) {
  const name = escapeHtml(enquiry.name);
  const service = escapeHtml(enquiry.service);
  const phone = escapeHtml(enquiry.phone);

  return wrapEmail(
    "Enquiry received",
    `
    <tr>
      <td style="padding:20px;">
        <p style="margin:0 0 10px;font-size:15px;color:#0f172a;">Hi ${name},</p>
        <p style="margin:0 0 16px;font-size:14px;line-height:1.55;color:#475569;">
          We received your enquiry. Our team will call you on <strong>+91 ${phone}</strong> shortly.
        </p>
        ${dataTable([
          ["Service", service],
          ["Phone", `+91 ${phone}`],
        ])}
      </td>
    </tr>`,
  );
}

export async function sendEnquiryMail(enquiry, env) {
  const mailer = getTransporter(env);
  const fromUser = env.SMTP_USER;
  const fromName = env.MAIL_FROM_NAME || "Raywind Website Enquiry";
  const to = env.MAIL_TO || fromUser;

  await mailer.sendMail({
    from: `"${fromName}" <${fromUser}>`,
    to,
    replyTo: enquiry.email || undefined,
    subject: `[Website Enquiry] ${enquiry.service} — ${enquiry.name}`,
    text: leadEmailText(enquiry, env),
    html: leadEmailHtml(enquiry, env),
    headers: {
      "X-Raywind-Source": "website-enquiry-form",
    },
  });

  if (enquiry.email) {
    await mailer.sendMail({
      from: `"${fromName}" <${fromUser}>`,
      to: enquiry.email,
      subject: "Enquiry received | Raywind Powertech Solutions",
      text: [
        `Hi ${enquiry.name},`,
        "",
        "We received your enquiry.",
        `Service: ${enquiry.service}`,
        `We will call you on +91 ${enquiry.phone} shortly.`,
      ].join("\n"),
      html: visitorEmailHtml(enquiry),
      headers: {
        "X-Raywind-Source": "website-enquiry-confirmation",
      },
    });
  }
}
