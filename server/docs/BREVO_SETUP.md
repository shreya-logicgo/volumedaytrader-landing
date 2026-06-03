# Brevo email setup

## Option A — API key + verified sender (recommended)

1. Brevo → **SMTP & API** → **API Keys** → create & copy key (`xkeysib-...`)
2. Brevo → **Senders** → add & **verify** your email (e.g. `you@yourdomain.com`)

```env
BREVO_SENDER_EMAIL=you@yourdomain.com
BREVO_SMTP_KEY=xkeysib-paste-your-real-key-here
```

| Variable | Example | Role |
|----------|---------|------|
| `BREVO_SENDER_EMAIL` | any email | **From** address sent to Brevo |
| `INQUIRY_NOTIFY_EMAIL` | `volumedaytrader@yopmail.com` | **To** — receives inquiry copies |

**Using yopmail?** See **[YOPMAIL_SETUP.md](./YOPMAIL_SETUP.md)** — add `GMAIL_APP_PASSWORD` so emails reach yopmail inboxes.

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
