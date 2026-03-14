"use client";

import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Projects from "./components/Projects";
import Publications from "./components/Publications"; // 確保導入
import Awards from "./components/Awards"; 
// import CV from "./components/CV"; // 之後補上時取消註釋

export default function GaryWangPortfolio() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* 導覽列：極簡白底 */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-[#E2E8F0] z-50 py-8 px-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="font-['Playfair_Display'] text-2xl font-bold text-[#0F172A] tracking-tight underline decoration-indigo-200 decoration-4 underline-offset-8">
            GARY WANG
          </span>
          <nav className="flex gap-10 text-xs font-bold uppercase tracking-[0.2em] text-[#64748B]">
            {["about", "projects", "publications", "awards", "cv"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`hover:text-[#2563EB] transition-all duration-300 relative pb-1 ${
                  activeTab === tab 
                    ? "text-[#2563EB] after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-[#2563EB]" 
                    : "after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#2563EB] hover:after:w-full after:transition-all"
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <div className="max-w-7xl mx-auto flex">
        {/* 左側 Sidebar */}
        <Sidebar />

        {/* 右側內容：遵循你的間距建議 */}
        <main className="flex-1 pt-48 pb-32 px-10 md:ml-[25rem]">
          <div className="max-w-3xl">
            {/* 動態切換分頁 */}
            {activeTab === "about" && <About />}
            {activeTab === "projects" && <Projects />}
            {activeTab === "publications" && <Publications />}
            { activeTab === "awards" && <Awards /> }
            
            {/* 預留區塊：等你建立 Awards.tsx 和 CV.tsx 後即可顯示 */}
            
            {/* {activeTab === "cv" && <CV />} */}
          </div>
        </main>
      </div>
    </div>
  );
}