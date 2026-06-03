# Brevo email setup

## Option A — API key only (what you have now)

If your key starts with **`xkeysib-`**, put only that in `.env`:

```env
BREVO_SMTP_KEY=xkeysib-your-api-key-here
```

The app uses Brevo API and your **first verified sender** in Brevo.

1. Brevo → **SMTP & API** → **API Keys** → copy key (`xkeysib-...`)
2. Brevo → **Senders** → add & **verify** your email (e.g. `abhishekvithani.logicgo@gmail.com`)

---

## Option B — SMTP key (email + key)

```env
BREVO_SMTP_KEY=your-brevo-login@email.com|xsmtpsib-your-smtp-key
```

| Part | From Brevo |
|------|------------|
| Before `\|` | SMTP **Login** email |
| After `\|` | **SMTP key** (`xsmtpsib-...`) — not API key |

Get SMTP key: Brevo → **SMTP & API** → **SMTP** → Generate SMTP key

---

## Wrong key type?

| Key starts with | Use for |
|-----------------|---------|
| `xkeysib-` | API (Option A) |
| `xsmtpsib-` | SMTP (Option B, with email) |

**Do not mix them up** — API key does not work as SMTP password.

---

## Test

Restart server after changing `.env`:

```powershell
npm run dev
```

**POST** `/api/auth/forgot-password`

```json
{ "email": "volumedaytrader@yopmail.com" }
```

Check server terminal: `Reset email sent via Brevo API to: ...`  
If you see `⚠ Email NOT sent` — fix `.env` format or verify sender in Brevo.

Check Brevo → **Transactional** → **Logs** for delivery status.
