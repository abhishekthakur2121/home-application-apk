# HouseBuddy Backend (Node.js + Express + MongoDB)

A minimal auth/OTP backend to pair with the React Native frontend.

## Stack
- Node.js, Express
- MongoDB (Mongoose)
- Helmet, CORS, Morgan
- Dotenv

## Endpoints
Base URL: http://localhost:5000

- POST /api/auth/signup
  - Body: { "username": string, "phone_number": string }
  - 201 Created: { success: true, message }
- POST /api/auth/login
  - Body: { "username": string, "phone_number": string }
  - 200 OK: { success: true, message }
- POST /api/auth/verify-otp
  - Body: { "phone_number": string, "otp": string }
  - 200 OK: { success: true, message: 'OTP verified' }
- POST /api/auth/resend-otp
  - Body: { "phone_number": string }
  - 200 OK: { success: true, message: 'OTP resent' }
- GET /api/health
  - 200 OK: { ok: true, service: 'housebuddy-backend' }

Notes: OTP is generated, stored hashed? (current demo stores in plain for simplicity) with an expiry of 5 minutes and deleted on success.

## Dev setup
1. Ensure MongoDB is running locally (default URL: mongodb://127.0.0.1:27017)
2. Create env file

```bash
cp .env.example .env
# adjust MONGO_URI if needed
```

3. Install deps and start dev server

```bash
npm install
npm run dev
# Server at http://localhost:5000
```

## Project structure
```
src/
  config/
    db.js
  controllers/
    authController.js
  middleware/
    errorHandler.js
  models/
    User.js
    Otp.js
  routes/
    authRoutes.js
  utils/
    otp.js
  index.js
```

## TODO / Next
- Issue JWT on OTP verify and return token to the app
- Rate-limit OTP requests and attempts
- Use a proper SMS provider to deliver OTPs
- Hash OTP codes at rest
