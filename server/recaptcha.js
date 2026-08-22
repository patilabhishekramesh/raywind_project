export async function verifyRecaptcha(token, env, ip) {
  const secret = env.RECAPTCHA_SECRET_KEY;
  if (!secret) {
    console.error("[enquiry] RECAPTCHA_SECRET_KEY is missing.");
    return { ok: false, error: "Security check is not configured. Please call or WhatsApp us." };
  }

  const response = String(token || "").trim();
  if (!response) {
    return { ok: false, error: "Please tick the I’m not a robot box." };
  }

  const body = new URLSearchParams({
    secret,
    response,
  });
  if (ip && ip !== "unknown") {
    body.set("remoteip", ip);
  }

  let data;
  try {
    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });
    data = await res.json();
  } catch (err) {
    console.error("[enquiry] reCAPTCHA verify failed:", err);
    return { ok: false, error: "Could not verify the security check. Please try again." };
  }

  if (!data?.success) {
    return { ok: false, error: "Please confirm you are not a robot and try again." };
  }

  return { ok: true };
}
