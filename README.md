# 📨 NodeJS Backend for Contact Form

A secure and efficient backend project built using **Node.js**, **Express.js**, and **MongoDB** to handle contact form submissions.  
This project demonstrates both backend logic and frontend connectivity as part of the **Naan Mudhalvan Project**.

---

## 🚀 Features

- Store contact form submissions in **MongoDB**
- Send confirmation and admin emails using **Nodemailer**
- Input validation and error handling
- Rate limiting, Helmet.js, and CORS for security
- Clean UI frontend for user submissions
- Unit testing using **Jest**
- Easy deployment on GitHub + Netlify/Vercel

---

## ⚙️ Technology Stack

| Layer | Technology |
|-------|-------------|
| Backend | Node.js, Express.js |
| Database | MongoDB (Mongoose ORM) |
| Frontend | HTML, CSS, JavaScript |
| Testing | Jest |
| Email | Nodemailer |
| Deployment | GitHub, Netlify / Vercel |

---

## 🧩 Folder Structure

```
contact-form-project/
│
├── controllers/         # Logic for form submissions
├── models/              # Mongoose schema for Contact
├── routes/              # API routes for contact form
├── frontend/            # HTML form and client-side JS
├── __tests__/           # Jest API tests
├── server.js            # Entry point
├── .env                 # Environment variables
├── README.md            # Documentation
└── package.json
```

---

## 🌱 Environment Configuration

Create a `.env` file in the project root:

```env
PORT=4000
MONGO_URI=mongodb://127.0.0.1:27017/contactForm
EMAIL_USER=example@gmail.com
EMAIL_PASS=your-app-password
ADMIN_EMAIL=example@gmail.com
```

> ⚠️ Never upload `.env` to GitHub. Keep it private.

---

## 🧑‍💻 Setup & Run (VS Code)

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/contact-form-project.git
   cd contact-form-project
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start MongoDB**
   ```bash
   mongod
   ```

4. **Start the Backend Server**
   ```bash
   npm start
   ```
   ✅ The server will start on **http://localhost:4000**

5. **Run Frontend**
   - Open `frontend/index.html`
   - Right-click → “Open with Live Server”
   - Opens at **http://127.0.0.1:5500/frontend/index.html**

---

## 🧾 API Documentation

### **POST /api/contact**
Submit a contact form.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Hello",
  "message": "This is a test message."
}
```

**Response:**
```json
{
  "message": "Form submitted successfully!"
}
```

---

## 🧪 Testing

Run unit tests with Jest:
```bash
npm test
```

Includes:
- ✅ Valid form submission test
- ❌ Missing field test
- ⏱️ Timeout & async check handling

---

## 📷 Screenshots

| Step | Screenshot | Description |
|------|-------------|--------------|
| 1 | ![1](1.jpeg) | Checking Node.js version |
| 2 | ![2](2.jpeg) | Installing dependencies in VS Code |
| 3 | ![3](3.jpeg) | Setting up .env configuration |
| 4 | ![4](4.jpeg) | Server running successfully on port 4000 |
| 5 | ![5](5.jpeg) | Opening index.html with Live Server |
| 6 | ![6](6.jpeg) | Basic contact form layout |
| 7 | ![7](7.jpeg) | Submitting form with user data |
| 8 | ![8](8.jpeg) | Form submission success response |
| 9 | ![9](9.jpeg) | Backend terminal showing POST request |
| 10 | ![10](10.jpeg) | Clean project environment and folders |
| 11 | ![11](11.jpeg) | .env file setup displayed in VS Code |
| 12 | ![12](12.jpeg) | Server started in local test mode |
| 13 | ![13](13.png) | POST request success in test mode |

---

## 🎬 Project Demonstration Summary

1. The **user** opens the frontend contact form in the browser.  
2. They fill in **name, email, subject, and message**.  
3. On clicking **Send**, the frontend triggers a POST request to the backend endpoint `http://localhost:4000/api/contact`.  
4. The **Express.js backend** validates data and stores it into **MongoDB**.  
5. If email credentials are provided in `.env`, a **confirmation email** is sent to both user and admin.  
6. Finally, the frontend displays:  
   ```json
   { "message": "Form submitted successfully!" }
   ```
7. All entries are logged in the backend console and saved securely in MongoDB.

---

## 🏁 Final Notes

- This project is developed for **educational and demonstration** purposes under the *Naan Mudhalvan* initiative.  
- It demonstrates complete full-stack integration from **frontend → backend → database**.  
- You can easily extend it by adding authentication, file uploads, or UI frameworks like React.

---

✅ **Project Title:** NodeJS Backend for Contact Form  
📅 **Category:** Web Development (Backend Integration)  
🏷️ **Status:** Working model (tested locally and ready for deployment)
