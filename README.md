# Vue3Jobs 🚀

A full-stack MEVN (MongoDB, Express, Vue, Node) job listing application where users can browse and manage job postings.

Live Demo: https://vue3jobs.netlify.app  
Backend API: https://vue3jobs.onrender.com  

---

## 📌 Tech Stack

### Frontend
- Vue 3
- Vite
- Axios
- Vue Router
- Netlify (Deployment)

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Render (Deployment)

---

## ✨ Features

- View all available jobs
- View single job details
- Create new job listings
- REST API integration
- Loading states
- Error handling
- Production deployment (Netlify + Render)

---

## 📂 Project Structure

```text
Vue3Jobs/
│
├── backend/       # Express Backend
├── public/        # Static assets
├── src/           # Vue Frontend source
├── README.md
├── package.json
└── vite.config.js
```

---

# ⚙️ Local Development Setup

## 1️⃣ Clone the Repository & Install Dependencies

```bash
git clone https://github.com/TechsavyRaj/Vue3Jobs.git
cd Vue3Jobs
npm install
```

---

## 2️⃣ Configure Environment

Create a single `.env` file in the **root directory** of your project (same level as `vite.config.js`). It will contain settings for both the backend and frontend:

```env
PORT=8000
MONGO_URI=mongodb://127.0.0.1:27017/vue3jobs
FRONTEND_URL=http://localhost:3000
VITE_API_URL=http://localhost:8000
```

---

## 3️⃣ Run Backend

```bash
npm run server
```

The Express API server will start on:

```text
http://localhost:8000
```

---

## 4️⃣ Run Frontend

Open a new terminal window and run:

```bash
npm run dev
```

The Vue Vite frontend will launch (usually on port 3000):

```text
http://localhost:3000
```

---

# 🌍 Deployment

## Backend (Render)

* Connect GitHub repo
* Set Build Command to: `npm install`
* Set Start Command to: `npm run server`
* Add environment variable:

  ```env
  MONGO_URI=your_mongodb_connection_string
  ```
* Deploy as Web Service

## Frontend (Netlify)

* Connect GitHub repo
* Set Build Command to: `npm run build`
* Set Publish directory to: `dist`
* Add environment variable:

  ```env
  VITE_API_URL=https://your-render-backend-url.onrender.com
  ```
* Trigger deploy

---

# 🔐 Environment Variables

You only need one `.env` file at the root of the project.

| Variable | Description |
| --- | --- |
| `PORT` | Express Server active port (Recommended: 8000) |
| `MONGO_URI` | MongoDB Connection String (Local or Atlas) |
| `FRONTEND_URL` | Used by CORS in Backend to grant access (e.g. `http://localhost:3000`) |
| `VITE_API_URL` | Used by Frontend Axios to reach API (e.g. `http://localhost:8000`) |

---

# 🧠 API Endpoints

| Method | Endpoint      | Description    |
| ------ | ------------- | -------------- |
| GET    | /api/jobs     | Get all jobs   |
| GET    | /api/jobs/:id | Get single job |
| POST   | /api/jobs     | Create job     |

---

# 🚀 Future Improvements

* Authentication (JWT)
* Admin dashboard
* Pagination
* Search & filters
* Edit & delete jobs
* Role-based access

---

# 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

# 📄 License

This project is open source and available under the MIT License.

---

# 👨‍💻 Author

**Raj Gupta**
GitHub: [https://github.com/TechsavyRaj](https://github.com/TechsavyRaj)  
LinkedIn: [https://linkedin.com/in/techsavyraj?trk=public_profile_browsemap](https://linkedin.com/in/TechsavyRaj)

---

If you found this project helpful, consider giving it a ⭐ on GitHub!

---

## 🙏 Credits
This project is inspired by and based on tutorials from  
**[Brad Traversy](https://github.com/bradtraversy)** — a fantastic educator in web development.  
Special thanks to him for sharing knowledge and resources that helped shape this project.
