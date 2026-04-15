# 👥 KeenKeeper — Keep Your Friendships Alive

<p align="center">
  A modern friendship management web app built with <b>Next.js (App Router)</b><br/>
  helping you stay connected with people who matter most ❤️
</p>

<p align="center">
  <a href="https://keen-keeper-silk.vercel.app/">
    <img src="https://img.shields.io/badge/Live-Demo-green?style=for-the-badge" />
  </a>
  <a href="https://github.com/anaitullah31/keen-keeper">
    <img src="https://img.shields.io/badge/GitHub-Repo-black?style=for-the-badge" />
  </a>
</p>

---

## 🌐 Live Links

🔗 **Live Site:** https://keen-keeper-silk.vercel.app/  
🔗 **Repository:** https://github.com/anaitullah31/keen-keeper  

---

## 📖 About The Project

**KeenKeeper** is a responsive and interactive web application designed to help users **track, manage, and maintain meaningful relationships**.

It provides an intuitive interface to:
- Monitor communication frequency  
- Track interactions (Call, Text, Video)  
- Analyze relationship patterns through visual insights  

💡 The goal: *Never lose touch with important people in your life.*

---

## 🚀 Tech Stack

| Technology | Purpose |
|-----------|--------|
| **Next.js (App Router)** | Routing |
| **React.js** | UI components |
| **Tailwind CSS** | Styling & responsiveness |
| **Recharts** | Analytics visualization |
| **React Icons** | Icons |
| **Context API** | Global state management |
| **Vercel** | Deployment |

---

## ✨ Core Features

### 🔝 Smart Navbar
- Fully responsive design  
- Active route highlighting  
- Icon-based navigation  

---

### 🎯 Home Page
- Clean hero/banner section  
- CTA button (Add Friend)  
- Summary stats cards  
- Fully responsive layout  

---

### 👫 Friends Management
- Dynamic friend cards from JSON  
- Each card includes:
  - 📸 Profile Image  
  - 🧑 Name  
  - 📅 Last contact time  
  - 🏷️ Tags  
  - 🔴 Status (color-coded)  
- Click → Navigate to details page  

---

### 👤 Friend Details Page

#### 🧾 Left Panel
- Profile info (image, email, bio, tags)  
- Status badge  
- Action buttons:
  - ⏰ Snooze  
  - 📦 Archive  
  - 🗑️ Delete  

#### 📊 Right Panel
- Stats cards (Days, Goal, Next Due)  
- Relationship goal section  
- Quick Check-In actions  

---

### ⚡ Interaction System
- One-click interaction:
  - 📞 Call  
  - 💬 Text  
  - 🎥 Video  
- Automatically:
  - Adds timeline entry  
  - Uses current date  
  - Shows toast notification  

---

### 📜 Timeline Page
- Full interaction history  
- Includes:
  - 📅 Date  
  - 🔣 Icon  
  - 📝 Title  
- 🔍 Search by name/type  
- 🎯 Filter by interaction type  

---

### 📊 Analytics (Stats Page)
- Beautiful Pie Chart (Recharts)  
- Displays:
  - Call  
  - Text  
  - Video interaction distribution  

---

## 📱 Responsive Design

✔ Mobile  
✔ Tablet  
✔ Desktop  

All layouts are fully responsive using Tailwind CSS grid system.

---

## 🛠️ Additional Features

- ✅ Custom 404 Page  
- ✅ Loading UI (Skeleton/Spinner)  
- ✅ Toast notifications  
- ✅ Production-safe routing (no reload errors)  

---

## 🧠 Advanced Concepts Used

- 🔄 Next.js App Router (Server + Client Components)  
- 📊 Data transformation using `reduce()`  
- 🔍 Search & filter logic  
- 🌐 External image handling (Next/Image config)  
- ⚡ Context API for global state  

---


---

## 🚀 Getting Started

```bash
git clone https://github.com/anaitullah31/keen-keeper.git
cd keen-keeper
npm install
npm run dev

---

## 📌 Future Improvements

- 🔃 Sort timeline (newest/oldest)  
- ⏱️ Debounced search  
- 🌙 Dark mode  
- 🔐 Authentication system  

---

## 🙌 Author

👤 **Anaitullah**  
💼 Frontend Developer | Next.js Enthusiast  

---
