import { sendEnquiryMail, validateEnquiry } from "./mail.js";
import { verifyRecaptcha } from "./recaptcha.js";

const hits = new Map();
const WINDOW_MS = 15 * 60 * 1000;
const MAX_HITS = 5;

function clientIp(req) {
  const forwarded = req.headers["x-forwarded-for"];
  if (typeof forwarded === "string" && forwarded.trim()) {
    return forwarded.split(",")[0].trim();
  }
  return req.socket?.remoteAddress || "unknown";
}

function tooMany(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_HITS) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

function sendJson(res, status, payload) {
  const body = JSON.stringify(payload);
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");
  res.end(body);
}

function readJson(req, limit = 16_384) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let size = 0;
    req.on("data", (chunk) => {
      size += chunk.length;
      if (size > limit) {
        reject(new Error("payload_too_large"));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });
    req.on("end", () => {
      if (!chunks.length) {
        resolve({});
        return;
      }
      try {
        resolve(JSON.parse(Buffer.concat(chunks).toString("utf8")));
      } catch {
        reject(new Error("invalid_json"));
      }
    });
    req.on("error", reject);
  });
}

async function getJsonPayload(req) {
  if (req.body !== undefined && req.body !== null) {
    if (typeof req.body === "object" && !Buffer.isBuffer(req.body)) {
      return req.body;
    }
    if (typeof req.body === "string") {
      try {
        return JSON.parse(req.body);
      } catch {
        throw new Error("invalid_json");
      }
    }
  }
  return readJson(req);
}

export async function handleEnquiry(req, res, env) {
  if (req.method === "OPTIONS") {
    res.statusCode = 204;
    res.end();
    return;
  }

  if (req.method !== "POST") {
    sendJson(res, 405, { ok: false, error: "Please submit the enquiry form." });
    return;
  }

  if (tooMany(clientIp(req))) {
    sendJson(res, 429, {
      ok: false,
      error: "Too many enquiries from this device. Please wait a few minutes or call us.",
    });
    return;
  }

  let payload;
  try {
    payload = await getJsonPayload(req);
  } catch (err) {
    const tooLarge = err instanceof Error && err.message === "payload_too_large";
    sendJson(res, tooLarge ? 413 : 400, {
      ok: false,
      error: tooLarge ? "Enquiry is too large." : "Could not read the enquiry. Please try again.",
    });
    return;
  }

  const captcha = await verifyRecaptcha(payload.captchaToken, env, clientIp(req));
  if (!captcha.ok) {
    sendJson(res, 400, captcha);
    return;
  }

  const parsed = validateEnquiry(payload);
  if (!parsed.ok) {
    sendJson(res, 400, parsed);
    return;
  }

  try {
    await sendEnquiryMail(parsed.data, env);
    sendJson(res, 200, { ok: true });
  } catch (err) {
    console.error("[enquiry] mail failed:", err);
    sendJson(res, 500, {
      ok: false,
      error: "We could not send the enquiry just now. Please try WhatsApp or call us.",
    });
  }
}
