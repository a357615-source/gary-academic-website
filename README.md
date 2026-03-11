# 🎓 Gary Wang — Academic Research Portfolio
> **🚀 Powered by YCCP Systems v4 Professional Standard**

<p align="center">
  <strong>Minimalist academic portfolio built with modern web technologies for AI research presentation and academic identity.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15-black?logo=nextdotjs" alt="Next.js">
  <img src="https://img.shields.io/badge/TypeScript-Strong--Typed-blue?logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/TailwindCSS-v4-38bdf8?logo=tailwindcss" alt="Tailwind">
  <img src="https://img.shields.io/badge/License-MIT-green" alt="License">
</p>

---

## 🌏 Overview

This project is a **minimalist academic portfolio website** designed for **Gary Wang — AI Researcher based in Tokyo**. 

The website serves as a digital academic identity, presenting research interests, academic background, and professional profile in a clean and modern interface. Developed by **YCCP Systems**, the project emphasizes:

- **Elegant Academic Aesthetics**: Serif-driven design for a calm research atmosphere.
- **High Performance**: Optimized with Next.js 15 Server Components.
- **Mobile-First**: Seamless experience across iPhone, iPad, and Desktop.

---

## 🛠 Tech Stack

| Layer | Technology | Description |
|:---:|:---|:---|
| **Framework** | **Next.js 15** | App Router architecture with React Server Components |
| **Styling** | **Tailwind CSS v4** | Next-generation high-performance styling engine |
| **Language** | **TypeScript** | Strong typing for a maintainable and robust architecture |
| **Icons** | **Lucide React** | Lightweight and consistent SVG icon system |

---
## 📂 Project Structure

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
```
---
## 🚀 Quick Start

### 1. Prerequisites
Ensure you have **Node.js (LTS version)** installed on your machine. [Download Node.js](https://nodejs.org).

### 2. Installation
Navigate to the frontend directory and install the necessary dependencies:


```bash
cd frontend
npm install
```
### 3. Development
Start the local development server:

```bash
npm run dev
Open http://localhost:3000 in your browser to view the website.
```

### 4. Build for Production
To generate a production-ready build:

```bash
npm run build
```

### 🔧 Maintenance Guide
Update Profile Photo: Replace the image file at public/me.jpg.

Modify Research Topics: Edit the researchTopics array inside app/page.tsx.

Change Footer Signature: Search for the string YCCP inside the project to customize system credits.

### 👨‍💻 Credits & Metadata
Principal Researcher: Gary Wang (Tokyo, Japan)

Design & Engineering: YCCP Systems

Repository: a357615-source

Last Updated: 2026-03-11


