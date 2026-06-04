# Postman collection

Test all APIs without writing code first.

---

## Files

| File | Purpose |
|------|---------|
| [postman/VolumeDayTrader-Auth.postman_collection.json](./postman/VolumeDayTrader-Auth.postman_collection.json) | Single collection — Health, Auth, Inquiries |
| [AUTH_API.md](./AUTH_API.md) | Auth API reference |
| [INQUIRY_API.md](./INQUIRY_API.md) | Inquiry API reference |

---

## Import into Postman

1. Open **Postman**
2. **Import** → **Upload Files**
3. Select:
   ```
   server/docs/postman/VolumeDayTrader-Auth.postman_collection.json
   ```
4. Collection appears: **Volume Day Trader API**

---

## Before you test

1. MongoDB running
2. Server running:

   ```powershell
   cd D:\volumedaytrader-landing\server
   npm run dev
   ```

3. Admin exists (`npm run seed:admin` if needed)
4. Brevo configured in `.env` for forgot-password email (optional — dev prints link in terminal)

---

## Collection variables

Click collection → **Variables** tab:

| Variable | Default | Description |
|----------|---------|-------------|
| `baseUrl` | `http://localhost:5000` | API server |
| `token` | *(empty)* | Auto-filled after **Login** |
| `adminEmail` | `volumedaytrader@yopmail.com` | Your admin email |
| `adminPassword` | `Volumedaytrader123` | Your admin password |
| `resetToken` | *(empty)* | Paste from forgot-password email URL |
| `resetSecret` | — | Only for emergency reset |
| `inquiryFirstName` | `John` | Contact form |
| `inquiryLastName` | `Doe` | Contact form |
| `inquiryEmail` | `john@example.com` | Contact form |
| `inquiryPhone` | `1234567890` | Contact form |
| `inquiryMessage` | *(sample text)* | Contact form (min 10 chars) |
| `lastTicketNumber` | *(empty)* | Auto-filled after Submit inquiry |

Change `adminEmail` / `adminPassword` to match your `.env` / database.

---

## Recommended test order

### 1. Health

- **Health Check** → `GET /api/health`  
- Expect `200` and `"ok": true`

### 2. Login

- **Login** → `POST /api/auth/login`  
- Expect `200`, `token`, `admin`  
- `token` is saved automatically for other requests

### 3. Protected routes

- **Get Me** → needs Bearer (uses `{{token}}`)
- **Change Password** → `PATCH`, body: `currentPassword`, `newPassword`

### 4. Forgot password flow

1. **Forgot Password** → `POST` with `{ "email": "..." }`  
   - `404` if email not in database  
   - `200` if email sent (check inbox or server terminal)

2. Copy `token` from email link:
   ```
   http://localhost:5173/reset-password?token=ABC123...&email=...
   ```
   Paste into collection variable **`resetToken`**

3. **Reset Password** → `POST` (not PATCH)  
   ```json
   {
     "email": "{{adminEmail}}",
     "token": "{{resetToken}}",
     "newPassword": "NewPassword1234"
   }
   ```

4. Update `adminPassword` variable → run **Login** again

---

## Quick reference

| Request in collection | Method | URL | Auth |
|----------------------|--------|-----|------|
| Health Check | GET | `/api/health` | No |
| Login | POST | `/api/auth/login` | No |
| Get Me | GET | `/api/auth/me` | Bearer |
| Change Password | PATCH | `/api/auth/change-password` | Bearer |
| Forgot Password | POST | `/api/auth/forgot-password` | No |
| Reset Password | POST | `/api/auth/reset-password` | No |
| Reset Emergency | POST | `/api/auth/reset-password-emergency` | No |
| Submit inquiry | POST | `/api/inquiries` | No |
| List all inquiries | GET | `/api/inquiries` | Bearer |

---

## Common mistakes

| Mistake | Fix |
|---------|-----|
| `change-password` for email token reset | Use **Reset Password** (`POST /reset-password`) |
| Forgot password with unknown email | `404` — seed admin or use registered email |
| `Authentication required` on `/me` | Run **Login** first |
| `Invalid or expired reset link` | New forgot-password request; paste new `resetToken` |

---

## Share with team

- Commit the `.json` file to Git (safe — no secrets inside)
- Share `.env` values separately (JWT, Brevo key) — never in Postman collection

---

## Related docs

- [AUTH_API.md](./AUTH_API.md) — detailed request/response docs  
- [BREVO_SETUP.md](./BREVO_SETUP.md) — email configuration
