# Yopmail setup (contact form emails)

Yopmail can **receive** inquiry emails. It cannot be a verified **sender** in Brevo.

## How it works

| Setting | Example | Purpose |
|---------|---------|---------|
| `INQUIRY_NOTIFY_EMAIL` | `volumedaytrader@yopmail.com` | Inquiries delivered **here** |
| `BREVO_SENDER_EMAIL` | `you@gmail.com` | Brevo **FROM** (must be verified) |
| `GMAIL_USER` + `GMAIL_APP_PASSWORD` | Gmail + App Password | Sends **to yopmail** reliably |

When the recipient is yopmail (or other disposable inbox), the server uses **Gmail SMTP** first so mail actually arrives.

## Setup (5 minutes)

1. Google Account → **Security** → **2-Step Verification** (enable if off)
2. **App passwords** → create password for "Mail" / "Volume Day Trader"
3. Copy the 16-character password into `server/.env`:

```env
GMAIL_USER=shreya.logicgo@gmail.com
GMAIL_APP_PASSWORD=abcd efgh ijkl mnop
EMAIL_USE_GMAIL_FOR_DISPOSABLE=true
INQUIRY_NOTIFY_EMAIL=volumedaytrader@yopmail.com
BREVO_SENDER_EMAIL=shreya.logicgo@gmail.com
```

4. Restart server: `npm run dev`
5. Test: `npm run test:inquiry-email`
6. Open yopmail: https://yopmail.com → inbox name **`volumedaytrader`** (before @)

## Check inbox name

For `volumedaytrader@yopmail.com`, the yopmail inbox name is **`volumedaytrader`**, not the full email.

## Still no mail?

- Check spam in yopmail (refresh inbox)
- Server log should say: `Email sent via Gmail SMTP to: ...`
- Brevo → Transactional → Logs (if fallback to Brevo was used)
