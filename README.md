# Contact Form Backend — Demo Project

## What is included
- Express backend with `/api/contact` POST and GET
- Mongoose model to store submissions
- Nodemailer integration (uses SMTP credentials from .env)
- Basic security: Helmet, CORS, rate limiting
- Tests with Jest + Supertest
- Simple frontend `frontend/index.html` to test the API

## Quick start (local)
1. Install Node.js (v16+ recommended)
2. Clone/unzip project and run:
   ```bash
   npm install
   cp .env.example .env
   # edit .env with your values (MONGO_URI, EMAIL_USER, EMAIL_PASS, ADMIN_EMAIL)
   npm start
   ```
3. Open `frontend/index.html` in your browser or use Postman/curl to POST to `http://localhost:4000/api/contact`.

## Tests
```bash
npm test
```

## Deployment
- Use Vercel/Render/Heroku for backend; add environment variables in the platform dashboard.
