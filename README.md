# EchoPostsApp
# 📝 Social Posting App

A simple React-based web application for creating and viewing social posts with user authentication, image uploads, and infinite scrolling.

🔗 **Live Demo:** [https://your-app.vercel.app](https://your-app.vercel.app)

---

## 📚 Table of Contents
- [Features](#-features)
- [Screenshots](#-screenshots)
- [Technologies Used](#-technologies-used)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Backend Setup](#-backend-setup)
- [Image Upload (imgBB)](#️-image-upload-imgbb)
- [Deployment](#-deployment)
- [Future Improvements](#-future-improvements)
- [License](#-license)

---

## ✨ Features

- ✅ User Registration & Login
- 🖼️ Add Posts with image upload via imgBB
- 📜 View All Posts (Home Page)
- 👤 View Only Your Posts (User Page)
- 🧽 Edit & Delete Your Own Posts
- 🔄 Infinite Scrolling for All Posts

---

## 📸 Screenshots
```markdown
![Home Page](screenshots/homepage.png)
![Add Post](screenshots/addpost.png)
![User Page](screenshots/userpage.png)
---
Technologies Used
| Frontend     | Backend        | Auth             | Other     |
| ------------ | -------------- | ---------------- | --------- |
| React        | JSON Server    | json-server-auth | Axios     |
| React Router | Local JSON API | JWT (mocked)     | imgBB API |
| CSS          |                |                  | Vercel    |
---
📂 Project Structure
/src
  /components
    /common
      Header.jsx
      Loading.jsx
      PostCard.jsx
    /auth
      LoginForm.jsx
      RegisterForm.jsx
  /context
    AuthContext.jsx
  /hooks
    useAuth.js
    useInfiniteScroll.js
  /pages
    Home.jsx
    Login.jsx
    AddPost.jsx
    UserPosts.jsx
  /services
    api.js
    auth.js
    posts.js
  /utils
    constants.js
    helpers.js
  App.jsx
  main.jsx
---
🧪 Future Improvements

📝 Add form validation and error messages

💬 Add like and comment functionality

📱 Improve responsiveness on mobile

👥 Add user profile pictures

📦 Use a real backend (e.g., Node.js + MongoDB)

