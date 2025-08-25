# NailIB Redesign Assignment

A modern, responsive landing page redesign for NailIB.com, inspired by the sleek, AI-focused design aesthetic of Cluely.com.
This project was built as part of the Full-Stack Developer Assignment using Next.js, Tailwind CSS, Node.js, Express, and MongoDB Atlas.

🔗 Live Demo (Frontend): https://nailib.vercel.app/

📂 GitHub Repository: https://github.com/HarshdeepSingh-Dev/nailib

## Features

- Next.js with SSR for optimized performance & SEO
- Responsive design (mobile-first) with Tailwind CSS
- Framer Motion animations for smooth transitions
- TypeScript on frontend for type safety
- User Authentication with JWT (login/signup/logout)
- Password hashing using bcryptjs
- RESTful APIs with Express & MongoDB Atlas
- Testimonials and Educators showcase sections
- Dedicated Contact Us page
- Authentication pages (Sign In / Sign Up)

## Tech Stack
### Frontend
- Next.js(with SSR)
- TypeScript
- Tailwind CSS
- Framer Motion
- React Hook Form
- Axios

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT (jsonwebtoken)
- bcryptjs

## Deployment
- Frontend: Vercel
-  Backend: Render

## Setup & Installation
### Prerequisites
- Node.js (v18+)
- MongoDB Atlas account

## Clone Repository
- git clone https://github.com/HarshdeepSingh-Dev/nailib.git
- cd nailib

## Frontend Setup
- cd client
- npm install
- npm run dev

## Backend Setup
- cd server
- npm install
- npm start

## 🔑 Environment Variables
### Create a .env file in both frontend and backend directories
### Example for backend:
- MONGO_URI=your_mongodb_atlas_connection_string
- JWT_SECRET=your_jwt_secret
- PORT=5000

## 📌 API Endpoints (Backend)
- POST /api/auth/register → Register user
- POST /api/auth/signin → Login user & get JWT

## Development Timeline
### Time Spent: ~3-4 days
