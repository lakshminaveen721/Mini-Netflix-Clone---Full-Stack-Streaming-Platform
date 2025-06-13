# 🎬 Mini Netflix Clone - Full Stack Streaming Platform

A full-featured Netflix-like web application built with React, Node.js, MongoDB, and AWS S3. It supports user authentication, video streaming, admin uploads, analytics, and role-based access.

---

## 🛠 Tech Stack

- **Frontend:** React.js, React Router
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Auth:** JWT (JSON Web Tokens)
- **Storage:** AWS S3 (video upload)
- **DevOps:** Docker, Docker Compose
- **Extras:** Postman Collection, Admin Dashboard

---

## 🚀 Features

- User login & registration (JWT auth)
- Stream hosted videos (HLS / MP4)
- Admin dashboard for video uploads (AWS S3)
- View analytics: total views, latest uploads
- Role-based access (upload only for admins)
- Dockerized full stack setup
- Postman collection for API testing

---

##yaml

---

## ⚙️ Setup Instructions

### 1. 🐳 Docker-Based Setup (Recommended)

```bash
docker-compose up --build
```
-----------------------------------

Frontend: http://localhost:3000

Backend API: http://localhost:5000
-------------------------

Manual Setup (Without Docker)
👉 Backend (Node.js)
```
cd server
npm install
# Create a .env file and set variables below
npm start
```
-------
###.env
```
MONGO_URI=mongodb://localhost:27017/netflix_clone
JWT_SECRET=your_jwt_secret
AWS_ACCESS_KEY=your_aws_key
AWS_SECRET_KEY=your_aws_secret
AWS_REGION=us-west-1
AWS_BUCKET_NAME=your_s3_bucket
```
##Frontend(React)

```bash
cd client
npm install
npm start
```
-----

##API Endpoints

| Method | Endpoint               | Description            |
| ------ | ---------------------- | ---------------------- |
| POST   | `/api/auth/register`   | Register user          |
| POST   | `/api/auth/login`      | Login and get JWT      |
| GET    | `/api/videos`          | Fetch all videos       |
| POST   | `/api/videos`          | Add new video (admin)  |
| POST   | `/api/videos/view/:id` | Increment view count   |
| POST   | `/api/upload/video`    | Upload video to AWS S3 |

##Authenication

- Use the /api/auth/login endpoint to get a JWT.
- Pass it in headers as:

```makefile

Authorization: Bearer <your_token>
```
-----

Postman Testing
- Import the included file: mini_netflix_clone.postman_collection.json
- Contains routes for auth, video fetch/upload, and view counter.

---------

Admin Dashboard
Navigate to:
http://localhost:3000/admin

Features:

-Upload .mp4 or .m3u8 videos
-Preview after upload
-Track upload success
--------------------
📈 Video Metadata
Each uploaded video is saved with:

-Title
-URL (S3)
-Tags
-UploadedBy
-Views count
-Upload date
--------------------
☁️ Deployment
Backend:

-Use Railway
-Set environment variables for Mongo, JWT, AWS

Frontend:

- Deploy client/ to Vercel
- Set env: REACT_APP_API_URL=https://your-backend-url
