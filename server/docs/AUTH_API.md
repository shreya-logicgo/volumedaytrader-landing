# Auth API Documentation

Admin panel authentication for Volume Day Trader backend.

**Base URL (local):** `http://localhost:5000/api/auth`

**Content-Type:** `application/json` for all requests with a body.

**Postman:** Import [VolumeDayTrader-Auth.postman_collection.json](./postman/VolumeDayTrader-Auth.postman_collection.json) — guide: [POSTMAN.md](./POSTMAN.md)

---

## Quick reference

| # | Method | Endpoint | Auth required |
|---|--------|----------|---------------|
| 1 | `POST` | `/login` | No |
| 2 | `GET` | `/me` | Yes (Bearer JWT) |
| 3 | `PATCH` | `/change-password` | Yes (Bearer JWT) |
| 4 | `POST` | `/forgot-password` | No |
| 5 | `POST` | `/reset-password` | No |
| 6 | `POST` | `/reset-password-emergency` | No (server secret) |

---

## Authentication header

Protected routes need:

```http
Authorization: Bearer <token>
```

`token` comes from **Login** or **Change password** responses.

---

## Password rules

- `newPassword` must be at least **8 characters** (reset & change password).

---

## 1. Login

| | |
|--|--|
| **Method** | `POST` |
| **URL** | `/api/auth/login` |
| **Auth** | None |

### Request body

```json
{
  "email": "admin@example.com",
  "password": "YourPassword123"
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `email` | string | Yes | Admin email (lowercased on server) |
| `password` | string | Yes | Plain password |

### Success `200`

```json
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "admin": {
    "id": "674a1b2c3d4e5f6789012345",
    "email": "admin@example.com",
    "role": "admin"
  }
}
```

### Errors

| Status | Body |
|--------|------|
| `400` | `{ "error": "Email and password are required" }` |
| `401` | `{ "error": "Invalid email or password" }` |

---

## 2. Get current admin (Me)

| | |
|--|--|
| **Method** | `GET` |
| **URL** | `/api/auth/me` |
| **Auth** | Bearer JWT |

### Request body

None.

### Headers

```http
Authorization: Bearer <token>
```

### Success `200`

```json
{
  "admin": {
    "id": "674a1b2c3d4e5f6789012345",
    "email": "admin@example.com",
    "role": "admin"
  }
}
```

### Errors

| Status | Body |
|--------|------|
| `401` | `{ "error": "Authentication required" }` |
| `401` | `{ "error": "Invalid or expired token" }` |

---

## 3. Change password (logged in)

| | |
|--|--|
| **Method** | `PATCH` |
| **URL** | `/api/auth/change-password` |
| **Auth** | Bearer JWT |

Use when admin **knows** the current password.

### Request body

```json
{
  "currentPassword": "OldPassword123",
  "newPassword": "NewPassword456"
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `currentPassword` | string | Yes | Existing password |
| `newPassword` | string | Yes | New password (min 8 chars) |

### Headers

```http
Authorization: Bearer <token>
Content-Type: application/json
```

### Success `200`

```json
{
  "message": "Password updated successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "admin": {
    "id": "674a1b2c3d4e5f6789012345",
    "email": "admin@example.com",
    "role": "admin"
  }
}
```

Use the new `token` in the admin panel after a successful change.

### Errors

| Status | Body |
|--------|------|
| `400` | `{ "error": "currentPassword and newPassword are required" }` |
| `400` | `{ "error": "Password must be at least 8 characters" }` |
| `401` | `{ "error": "Authentication required" }` |
| `401` | `{ "error": "Current password is incorrect" }` |
| `404` | `{ "error": "Admin not found" }` |

---

## 4. Forgot password

| | |
|--|--|
| **Method** | `POST` |
| **URL** | `/api/auth/forgot-password` |
| **Auth** | None |

Sends a reset email via **Brevo SMTP** (team `.env` — see `docs/BREVO_SETUP.md`). Link format:

`{ADMIN_CLIENT_URL}/reset-password?token=...&email=...`

Can send to **any** registered admin email (yopmail, Gmail, etc.) when Brevo sender is verified.

Returns **404** if email is not registered (no email sent).

**Dev note:** If Brevo is not configured, the reset link is printed in the **server terminal**.

### Request body

```json
{
  "email": "admin@example.com"
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `email` | string | Yes | Registered admin email |

### Success `200`

```json
{
  "message": "Password reset link has been sent to your email."
}
```

Only sent when the email exists in the `admins` collection.

### Errors

| Status | Body |
|--------|------|
| `400` | `{ "error": "Email is required" }` |
| `404` | `{ "error": "No admin account found with this email" }` |
| `502` | `{ "error": "Failed to send reset email..." }` (production / email misconfigured) |
| `503` | Email service not configured |

### Token expiry

Reset token expires in **1 hour**.

---

## 5. Reset password (from email link)

| | |
|--|--|
| **Method** | `POST` |
| **URL** | `/api/auth/reset-password` |
| **Auth** | None |

Use `token` and `email` from the forgot-password email (or dev terminal link).

### Request body

```json
{
  "email": "admin@example.com",
  "token": "d63588981fd054cd3b0b18b3799d5c8f316a129547877d103d9b04d61aa27cbd",
  "newPassword": "NewPassword456"
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `email` | string | Yes | Same email used in forgot-password |
| `token` | string | Yes | Token from URL query `?token=` |
| `newPassword` | string | Yes | New password (min 8 chars) |

### Success `200`

```json
{
  "message": "Password reset successfully. You can log in with your new password."
}
```

### Errors

| Status | Body |
|--------|------|
| `400` | `{ "error": "email, token, and newPassword are required" }` |
| `400` | `{ "error": "Password must be at least 8 characters" }` |
| `400` | `{ "error": "Invalid or expired reset link" }` |
| `400` | `{ "error": "Reset link has expired. Request a new one." }` |

---

## 6. Reset password — emergency (optional)

| | |
|--|--|
| **Method** | `POST` |
| **URL** | `/api/auth/reset-password-emergency` |
| **Auth** | None |

**Not for admin UI.** Requires `ADMIN_RESET_SECRET` in server `.env`.

### Request body

```json
{
  "email": "admin@example.com",
  "resetSecret": "your-ADMIN_RESET_SECRET-from-env",
  "newPassword": "NewPassword456"
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `email` | string | Yes | Admin email |
| `resetSecret` | string | Yes | Must match `ADMIN_RESET_SECRET` in `.env` |
| `newPassword` | string | Yes | New password (min 8 chars) |

### Success `200`

```json
{
  "message": "Password reset successfully. Please login with the new password."
}
```

### Errors

| Status | Body |
|--------|------|
| `400` | Missing fields / password validation |
| `403` | `{ "error": "Invalid reset secret" }` |
| `404` | `{ "error": "Admin not found" }` |
| `503` | Reset not configured on server |

---

## Auth flows

### A. Normal login

```text
POST /login  →  save token  →  use Bearer token on /me and protected routes
```

### B. Forgot password

```text
POST /forgot-password
    →  email (or dev terminal) with link ?token=...&email=...
POST /reset-password  { email, token, newPassword }
POST /login  { email, newPassword }
```

### C. Change password while logged in

```text
POST /login  →  token
PATCH /change-password  (Bearer token + currentPassword + newPassword)
    →  new token in response
```

---

## Environment variables

| Variable | Used for |
|----------|----------|
| `JWT_SECRET` | Sign & verify JWT |
| `JWT_EXPIRES_IN` | Token lifetime (default `7d`) |
| `ADMIN_CLIENT_URL` | Reset link in email (e.g. `http://localhost:5173`) |
| `BREVO_SMTP_KEY` | One line: `login@email.com\|xsmtpsib-key` (see `docs/BREVO_SETUP.md`) |
| `ADMIN_RESET_SECRET` | Emergency reset only |
| `ADMIN_EMAIL` / `ADMIN_PASSWORD` | `npm run seed:admin` only |

---

## Postman collection tips

1. Create environment variable `baseUrl` = `http://localhost:5000`
2. After login, set `token` from response → Authorization → Bearer `{{token}}`
3. Forgot password: no auth
4. Reset password: body only, no Bearer

---

## Related scripts (terminal, not HTTP)

| Command | Purpose |
|---------|---------|
| `npm run seed:admin` | Create first admin from `.env` |
| `npm run reset:admin-password` | Reset password from `.env` (no email) |
| `npm run dev` | Start API server |

---

## Health check (non-auth)

| Method | URL | Body |
|--------|-----|------|
| `GET` | `/api/health` | None |

```json
{
  "ok": true,
  "message": "API is running",
  "database": "volumedaytrader"
}
```
