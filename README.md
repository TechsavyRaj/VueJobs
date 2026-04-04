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

## 2️⃣ Setup Backend

Create a `.env` file inside the `backend/` folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Run backend server:

```bash
npm run server
```

Server will run on:

```text
http://localhost:5000
```

---

## 3️⃣ Setup Frontend

Create a `.env` file in the root directory (where `vite.config.js` is located):

```env
VITE_API_URL=http://localhost:5000
```

Run frontend development server:

```bash
npm run dev
```

Frontend will run on:

```text
http://localhost:5173
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

### Backend

| Variable  | Description                     |
| --------- | ------------------------------- |
| MONGO_URI | MongoDB Atlas connection string |
| PORT      | Server port                     |

### Frontend

| Variable     | Description          |
| ------------ | -------------------- |
| VITE_API_URL | Backend API base URL |

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
