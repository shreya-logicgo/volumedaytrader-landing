# Inquiry (Contact Form) API

Public contact form submission with email notifications and admin ticket list.

**Base URL (local):** `http://localhost:5000/api/inquiries`

**Postman:** Import [VolumeDayTrader-Auth.postman_collection.json](./postman/VolumeDayTrader-Auth.postman_collection.json) → folder **Inquiries**.

---

## Quick reference

| # | Method | Endpoint | Auth required |
|---|--------|----------|---------------|
| 1 | `POST` | `/api/inquiries` | No |
| 2 | `GET` | `/api/inquiries` | Yes (Bearer JWT) |

---

## Environment

| Variable | Default | Description |
|----------|---------|-------------|
| `INQUIRY_NOTIFY_EMAIL` | `volumedaytrader@yopmail.com` | Receives every new inquiry |
| `BREVO_SMTP_KEY` | — | **Required** — real `xkeysib-` or `email\|xsmtpsib-` key from Brevo |
| `BREVO_SENDER_EMAIL` | — | Recommended with API key — must be verified in Brevo |

---

## 1. Submit inquiry (public)

| | |
|--|--|
| **Method** | `POST` |
| **URL** | `/api/inquiries` |
| **Auth** | None |

### Request body

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "message": "I would like more information about your indicators."
}
```

| Field | Type | Required |
|-------|------|----------|
| `firstName` | string | Yes |
| `lastName` | string | Yes |
| `email` | string | Yes |
| `phone` | string | No |
| `message` | string | Yes (min 10 chars) |

### Behavior

1. Saves inquiry in MongoDB with ticket id (e.g. `VDT-20260603-A1B2C3`).
2. Sends inquiry details to `INQUIRY_NOTIFY_EMAIL` (default: `volumedaytrader@yopmail.com`).
3. Sends confirmation email to the user's `email` with the ticket number.

### Success `201`

```json
{
  "message": "Your email was successfully received and a ticket has been generated.",
  "ticketNumber": "VDT-20260603-A1B2C3",
  "inquiry": {
    "id": "674a1b2c3d4e5f6789012345",
    "ticketNumber": "VDT-20260603-A1B2C3",
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "createdAt": "2026-06-03T12:00:00.000Z"
  }
}
```

### Errors

| Status | Reason |
|--------|--------|
| `400` | Missing/invalid fields |
| `502` | Email send failed (production) |
| `503` | Brevo not configured (production) |

---

## 2. List all inquiries (admin)

| | |
|--|--|
| **Method** | `GET` |
| **URL** | `/api/inquiries` |
| **Auth** | `Authorization: Bearer <token>` |

Use the token from `POST /api/auth/login`.

### Success `200`

```json
{
  "count": 2,
  "inquiries": [
    {
      "_id": "674a1b2c3d4e5f6789012345",
      "ticketNumber": "VDT-20260603-A1B2C3",
      "firstName": "John",
      "lastName": "Doe",
      "email": "john@example.com",
      "phone": "1234567890",
      "message": "I would like more information...",
      "createdAt": "2026-06-03T12:00:00.000Z",
      "updatedAt": "2026-06-03T12:00:00.000Z"
    }
  ]
}
```

### Errors

| Status | Reason |
|--------|--------|
| `401` | Missing or invalid JWT |
| `403` | Valid token but not an admin role |

---

## Landing page

Set in `landing-page/.env.local`:

```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

Ensure `CLIENT_URL` in server `.env` matches your Next.js origin (e.g. `http://localhost:3000`) for CORS.
