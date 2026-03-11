# 🎓 Gary Wang — Academic Research Portfolio

<p align="center">
Minimalist academic portfolio built with modern web technologies  
for AI research presentation and academic identity
</p>

<p align="center">

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-Strong--Typed-blue?logo=typescript)
![Tailwind](https://img.shields.io/badge/TailwindCSS-v4-38bdf8?logo=tailwindcss)
![License](https://img.shields.io/badge/license-MIT-green)

</p>

---

# 🌏 Overview

This project is a **minimalist academic portfolio website** designed for  
**Gary Wang — AI Researcher based in Tokyo**.

The website serves as a **digital academic identity**, presenting research
interests, academic background, and professional profile in a clean and
modern interface.

Developed by **YCCP Systems**, the project emphasizes:

- Elegant academic aesthetics
- Responsive performance
- Scalable modular architecture
- Modern React ecosystem

---

# 🎨 Design Philosophy

### Academic Minimalism

A **serif-driven design language** combined with grayscale palettes and
generous whitespace to create a calm academic atmosphere.

### Mobile-First Architecture

Responsive layout optimized for:

- 📱 iPhone
- 📱 iPad
- 💻 Desktop

### Modular Information Layout

Research areas are presented in structured sections allowing visitors to
understand the research direction within **3 seconds**.

Example research topics:

- Trustworthy AI  
- LLM Security  
- AI Safety  
- Machine Learning Systems  

### Interactive Experience

Key UX elements include:

- Glassmorphism Navigation Bar
- Dynamic Sidebar Navigation
- Academic Style Portrait Display
- Smooth Section Transitions

---

# 🛠 Tech Stack

| Layer | Technology | Description |
|------|-------------|-------------|
| Framework | **Next.js 15** | App Router architecture with React Server Components |
| Styling | **Tailwind CSS v4** | Next-generation high-performance styling engine |
| Language | **TypeScript** | Strong typing for maintainable architecture |
| Icons | **Lucide React** | Lightweight and consistent SVG icon system |
| Architecture | **YCCP v4 Engine** | Internal engineering standard for scalable projects |

---

# 📂 Project Structure


```text
MyAcademicWebsite/
└── frontend/
    ├── app/
    │   ├── globals.css      # Tailwind v4 全域配置
    │   ├── layout.tsx       # 根佈局 (HTML 地基)
    │   └── page.tsx         # 核心頁面內容 (YCCP 響應式佈局)
    ├── public/
    │   └── me.jpg           # 個人形象照片
    ├── .gitignore           # Git 忽略清單
    ├── package.json         # 專案套件管理
    └── tsconfig.json        # TypeScript 設定

---

# 🚀 Quick Start

### 1. Install Node.js

Install **Node.js (LTS version)**

https://nodejs.org

---

### 2. Install dependencies

```bash
cd frontend
npm install
3. Start development server
npm run dev

Open in browser:

http://localhost:3000

Hot reload is enabled for development.

4. Build production version
npm run build
🔧 Maintenance Guide
Update profile photo

Replace the file:

public/me.jpg
Modify research topics

Edit inside:

app/page.tsx

Search for:

researchTopics
Change footer signature

Search for:

YCCP

inside the project.

📊 Project Goals

This academic portfolio is designed to:

Present research directions clearly

Build professional academic identity

Support international collaboration

Act as a researcher's digital landing page

👨‍💻 Credits

Principal Researcher

Gary Wang
Tokyo, Japan

Design & Engineering

YCCP Systems

Repository

a357615-source

Last Updated

2026-03-11