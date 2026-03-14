"use client";

import { ShieldCheck } from "lucide-react";

export default function Header({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (t: string) => void }) {
  return (
    // py-6 縮小厚度，剛好符合您畫的紅框比例
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50 px-10 py-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo 改為優雅的襯線字體，不再使用黑色大方塊 */}
        <div className="flex items-center gap-3">
          <ShieldCheck size={20} className="text-gray-400" />
          <span 
            style={{ fontFamily: '"Noto Serif TC", serif', letterSpacing: '0.3em' }} 
            className="text-xl font-bold uppercase text-[#1D1D1F]"
          >
            GARY WANG
          </span>
        </div>

        {/* 綠色圈圈：導覽列改為大寫 (uppercase) 並稍微放大字體 */}
        <nav className="flex gap-10 text-[12px] font-black uppercase tracking-[0.4em]">
          {["about", "cv", "projects", "publications", "awards"].map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`transition-all duration-300 ${
                activeTab === tab ? "text-black border-b-2 border-black pb-1" : "text-gray-300 hover:text-black"
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}