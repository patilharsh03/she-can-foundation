# 🌸 She Can Foundation – Full Stack Contact Management System

A full-stack web application built for the **She Can Foundation Full Stack Development Internship Task**.

The application allows users to submit contact messages through a responsive form, while administrators can securely access an admin dashboard to view all submissions stored in MongoDB Atlas.

---

## 🚀 Live Demo

### Frontend

https://she-can-foundation-umber-one.vercel.app/

### Backend API

https://she-can-foundation-14hn.onrender.com/

> **Note:** The backend is hosted on Render's free tier and may take 30–60 seconds to wake up if inactive.

---

## 📋 Features

### User Features

* Submit contact form
* Name, Email, and Message fields
* Form validation
* Success confirmation message
* Responsive design

### Admin Features

* Admin Login
* Protected Admin Dashboard
* View all submitted messages
* Logout functionality

### Backend Features

* REST API built with Express.js
* MongoDB Atlas integration
* Data persistence with Mongoose
* Error handling

---

## 🛠️ Tech Stack

### Frontend

* React
* React Router DOM
* CSS

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

### Deployment

* Vercel (Frontend)
* Render (Backend)

---

## 🏗️ Architecture

```text
User Form
    ↓
Form Validation
    ↓
POST API
    ↓
Express Backend
    ↓
MongoDB Atlas
    ↓
Stored Data

Admin Login
    ↓
Protected Route
    ↓
Admin Dashboard
    ↓
GET API
    ↓
View Submissions
```

---

## 🔌 API Endpoints

### Get All Contact Submissions

```http
GET /api/contact
```

Example:

```http
https://she-can-foundation-14hn.onrender.com/api/contact
```

Response:

```json
{
  "success": true,
  "count": 1,
  "data": []
}
```

---

### Create Contact Submission

```http
POST /api/contact
```

Request Body:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, this is a test message."
}
```

Response:

```json
{
  "success": true,
  "message": "Form submitted successfully"
}
```

---

## 🔐 Admin Access

Admin dashboard is protected through authentication.

### Routes

```text
/
/admin/login
/admin
```

### Demo Credentials

```text
Email: hello@gmail.com
Password: admin123
```

---

## 📂 Project Structure

```text
she-can-foundation/
│
├── src/
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Admin.jsx
│   │   └── Login.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── config.js
│   └── main.jsx
│
├── public/
│
├── server/
│   ├── models/
│   │   └── Contact.js
│   │
│   ├── index.js
│   ├── package.json
│   └── .env
│
├── package.json
└── README.md
```

---

## ⚙️ Local Setup

### Clone Repository

```bash
git clone https://github.com/patilharsh03/she-can-foundation.git
```

### Install Frontend Dependencies

```bash
npm install
```

### Install Backend Dependencies

```bash
cd server
npm install
```

### Environment Variables

Create a `.env` file inside the `server` folder:

```env
MONGODB_URI=your_mongodb_connection_string
```

### Start Backend

```bash
cd server
npm start
```

### Start Frontend

```bash
npm run dev
```

---

## ✅ Assignment Requirements Covered

### Basic Requirements

* Name Field
* Email Field
* Message Field
* Submit Button
* Success Message

### Additional Features

* Database Integration (MongoDB Atlas)
* Authentication
* Admin Panel
* REST APIs
* Form Validation
* Responsive Design
* Backend Features

---