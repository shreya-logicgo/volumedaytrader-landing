const nodemailer = require("nodemailer");

const BREVO_SMTP_HOST = "smtp-relay.brevo.com";
const BREVO_SMTP_PORT = 587;
const BREVO_API_URL = "https://api.brevo.com/v3/smtp/email";
const BREVO_SENDERS_URL = "https://api.brevo.com/v3/senders";

function buildResetUrl(email, token) {
  const base = process.env.ADMIN_CLIENT_URL || "http://localhost:5173";
  const params = new URLSearchParams({ token, email });
  return `${base.replace(/\/$/, "")}/reset-password?${params.toString()}`;
}

/**
 * BREVO_SMTP_KEY supports:
 * 1) email|xsmtpsib-...     → SMTP (recommended)
 * 2) email|xkeysib-...      → Brevo API
 * 3) xkeysib-...            → Brevo API (uses first verified sender in Brevo)
 */
function parseBrevoConfig() {
  const raw = process.env.BREVO_SMTP_KEY?.trim();
  if (!raw) {
    return null;
  }

  const separator = raw.includes("|") ? "|" : raw.includes(":") ? ":" : null;

  if (separator) {
    const [user, key] = raw.split(separator).map((s) => s.trim());
    if (!user || !key) {
      return null;
    }
    if (key.startsWith("xkeysib-")) {
      return { mode: "api", apiKey: key, senderEmail: user };
    }
    if (key.startsWith("xsmtpsib-")) {
      return { mode: "smtp", user, pass: key };
    }
    return null;
  }

  if (raw.startsWith("xkeysib-")) {
    return { mode: "api", apiKey: raw, senderEmail: null };
  }

  if (raw.startsWith("xsmtpsib-")) {
    return { mode: "smtp-missing-email", pass: raw };
  }

  return null;
}

function getSmtpTransporter(config) {
  return nodemailer.createTransport({
    host: BREVO_SMTP_HOST,
    port: BREVO_SMTP_PORT,
    secure: false,
    auth: { user: config.user, pass: config.pass },
  });
}

async function getVerifiedSenderEmail(apiKey) {
  const res = await fetch(BREVO_SENDERS_URL, {
    headers: { "api-key": apiKey, accept: "application/json" },
  });

  if (!res.ok) {
    throw new Error("Could not load senders from Brevo. Check your API key.");
  }

  const data = await res.json();
  const verified = data.senders?.find((s) => s.active !== false);
  if (!verified?.email) {
    throw new Error(
      "No verified sender in Brevo. Add a sender in Brevo → Senders, or use email|key in .env"
    );
  }
  return verified.email;
}

async function sendViaBrevoApi(apiKey, senderEmail, toEmail, resetUrl) {
  const res = await fetch(BREVO_API_URL, {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "content-type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      sender: { name: "Volume Day Trader", email: senderEmail },
      to: [{ email: toEmail }],
      subject: "Reset your admin password — Volume Day Trader",
      htmlContent: buildResetEmailHtml(resetUrl),
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(body || `Brevo API error ${res.status}`);
  }
}

function buildResetEmailHtml(resetUrl) {
  return `
    <div style="font-family: sans-serif; max-width: 480px;">
      <h2>Password reset</h2>
      <p>You requested to reset your admin panel password.</p>
      <p><a href="${resetUrl}" style="display:inline-block;padding:12px 20px;background:#111;color:#fff;text-decoration:none;border-radius:6px;">Reset password</a></p>
      <p>Or copy this link:</p>
      <p style="word-break:break-all;color:#555;">${resetUrl}</p>
      <p style="color:#888;font-size:14px;">This link expires in 1 hour. If you did not request this, ignore this email.</p>
    </div>
  `;
}

function logDevFallback(toEmail, resetUrl, reason) {
  console.warn("\n⚠ Email NOT sent:", reason);
  console.log("--- Password reset link (dev fallback) ---");
  console.log("To:", toEmail);
  console.log(resetUrl);
  console.log("---\n");
}

async function sendPasswordResetEmail(toEmail, token) {
  const resetUrl = buildResetUrl(toEmail, token);
  const config = parseBrevoConfig();
  const isDev = process.env.NODE_ENV !== "production";

  if (!config) {
    const reason =
      "BREVO_SMTP_KEY missing or wrong format. Use: email|xsmtpsib-key OR xkeysib-api-key";
    if (isDev) {
      logDevFallback(toEmail, resetUrl, reason);
      return { devMode: true, resetUrl, emailSent: false };
    }
    const err = new Error(reason);
    err.statusCode = 503;
    throw err;
  }

  if (config.mode === "smtp-missing-email") {
    const reason =
      "xsmtpsib key needs login email: BREVO_SMTP_KEY=your@email.com|xsmtpsib-key";
    if (isDev) {
      logDevFallback(toEmail, resetUrl, reason);
      return { devMode: true, resetUrl, emailSent: false };
    }
    const err = new Error(reason);
    err.statusCode = 503;
    throw err;
  }

  try {
    if (config.mode === "smtp") {
      const transporter = getSmtpTransporter(config);
      await transporter.sendMail({
        from: `"Volume Day Trader" <${config.user}>`,
        to: toEmail,
        subject: "Reset your admin password — Volume Day Trader",
        html: buildResetEmailHtml(resetUrl),
      });
    } else {
      const senderEmail =
        config.senderEmail || (await getVerifiedSenderEmail(config.apiKey));
      await sendViaBrevoApi(
        config.apiKey,
        senderEmail,
        toEmail,
        resetUrl
      );
      console.log("Reset email sent via Brevo API to:", toEmail);
    }
    return { sent: true, emailSent: true };
  } catch (error) {
    console.error("Brevo error:", error.message);

    if (isDev) {
      logDevFallback(toEmail, resetUrl, error.message);
      return { devMode: true, resetUrl, emailSent: false };
    }

    const err = new Error("Failed to send reset email");
    err.statusCode = 502;
    throw err;
  }
}

module.exports = {
  sendPasswordResetEmail,
  buildResetUrl,
};
