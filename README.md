# 🚀 Jobs - Hiring Dashboard

This is a full-stack web application built as part of the Jobs Challenge, where the goal is to review hundreds of candidate submissions and **intelligently select a diverse and qualified team of 5 people to hire**.
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
- 📄 JSON file used as a database (`form-submissions.json`)

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

<img width="1920" height="946" alt="Screenshot 2025-07-24 121406" src="https://github.com/user-attachments/assets/bc37b570-3b3a-498d-bb76-3c6545d90878" />



<img width="1699" height="838" alt="Screenshot 2025-07-24 121109" src="https://github.com/user-attachments/assets/e98be6b2-dd27-4ac0-ba3e-e7337d7a1d35" />



<img width="1740" height="682" alt="Screenshot 2025-07-24 121134" src="https://github.com/user-attachments/assets/0cedafce-c10b-4066-a2b3-5e65a4ce9366" />



<img width="1635" height="636" alt="Screenshot 2025-07-24 121143" src="https://github.com/user-attachments/assets/45995eb6-07ff-4505-b858-d35992747c7c" />



<img width="1647" height="642" alt="Screenshot 2025-07-24 121158" src="https://github.com/user-attachments/assets/db49e2fb-eb15-4761-a260-fa22cf208d0c" />



<img width="1669" height="887" alt="Screenshot 2025-07-24 121209" src="https://github.com/user-attachments/assets/3422476b-6e5c-4fca-b092-429f20954c62" />





## ⚙️ How to Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/100b-jobs-dashboard.git
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
