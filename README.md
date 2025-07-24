# react-hiring-dashboard
# 🚀 Jobs - Hiring Dashboard

This is a full-stack web application built as part of the **100B Jobs Challenge**, where the goal is to review hundreds of candidate submissions and **intelligently select a diverse and qualified team of 5 people to hire**.

---

## 🧠 Project Objective

You’ve just raised $100M in funding and need to **hire quickly and wisely**. This tool helps evaluate and shortlist candidates based on:

- Work experience
- Skills
- Education
- Salary expectations
- Diversity in location, background, and expertise

---

## 🛠 Tech Stack

### Frontend:
- ⚛️ React.js
- 📄 Tailwind CSS

### Backend:
- 🔧 Node.js + Express
- 📄 JSON file used as a mock database (`form-submissions.json`)

---

## 📦 Folder Structure

```

100b-jobs/
│
├── backend/
│   ├── routes/
│   │   ├── candidates.js
│   │   └── shortlist.js
│   ├── form-submissions.json
│   └── index.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   └── App.js
│   └── package.json
│
└── README.md

````

---

## ⚙️ How to Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/shankars2002/100b-jobs-dashboard.git
cd 100b-jobs-dashboard
````

---

### 2. Run the Backend (Express)

```bash
cd backend
npm install
node index.js
```

> Runs on `http://localhost:5000`

---

### 3. Run the Frontend (React)

```bash
cd frontend
npm install
npm start
```

> Runs on `http://localhost:3000`

---

## 🧑‍💼 Hiring Logic & Scoring

Each candidate is scored based on:

| Criteria             | Points |
| -------------------- | ------ |
| Experience (5+ yrs)  | +2     |
| Top School           | +2     |
| Multiple Skills      | +1     |
| Low Salary (<\$100K) | +2     |

Final shortlisting picks the **top 5 with diverse skill sets**.

---

## 📊 Final Hires (Example)

* 👩‍💻 Noble Flamingo – Legal + Engg + Top School
* 🧠 Energetic Iguana – 12+ skills + AWS + React + Cost-effective
* 👨‍🔧 Brave Kangaroo – Full-stack + WebSockets + Affordable
* 💼 Thoughtful Fox – Strong ML/DS + REST APIs
* 🧑‍💼 Strong Zebra – GoLang + Kotlin + SQL expert

---
