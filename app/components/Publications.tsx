"use client";

import React from "react";
import { BookOpen, Bookmark } from "lucide-react";
import { resumeData } from "../data/resumeData";

export default function Publications() {
  const serifTitle = "font-['Playfair_Display'] text-3xl font-bold text-slate-900 mb-12 pb-4 border-b border-slate-100 uppercase tracking-widest";
  
  // 修正排序：從 13 開始倒序排列 (13, 12, 11... 01)
  const sortedPublications = [...resumeData.publications].sort((a, b) => b.id - a.id);

  return (
    <div className="animate-in fade-in duration-1000 max-w-4xl mx-auto pb-32">
      <h2 className={serifTitle}>Selected Publications</h2>

      <div className="space-y-6">
        {sortedPublications.map((pub) => (
          <div 
            key={pub.id} 
            className="group bg-white border border-slate-100 rounded-[16px] p-8 transition-all duration-300 hover:border-indigo-400 hover:shadow-md flex gap-8 items-start"
          >
            {/* 左側大編號：回歸原本的大尺寸與字體 */}
            <div className="hidden md:block shrink-0">
              <span className="font-['Playfair_Display'] text-4xl font-black text-slate-100 group-hover:text-indigo-50 transition-colors">
                {String(pub.id).padStart(2, '0')}
              </span>
            </div>

            {/* 右側內容區 */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                {/* 標籤 */}
                <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border ${
                  pub.type === "Journal" 
                  ? "bg-indigo-50 text-indigo-700 border-indigo-100" 
                  : "bg-slate-50 text-slate-500 border-slate-200"
                }`}>
                  {pub.type}
                </span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  {pub.publisher}
                </span>
              </div>

              {/* 標題：回歸 Playfair 字體與較大字級 */}
              <h3 className="font-['Playfair_Display'] text-xl font-bold text-slate-900 leading-snug mb-3 group-hover:text-indigo-600 transition-colors">
                {pub.title}
              </h3>
              
              <div className="flex items-center gap-4 text-sm text-slate-500 font-medium">
                <div className="flex items-center gap-2">
                  <BookOpen size={14} className="text-slate-300" />
                  <span>Field: {pub.field}</span>
                </div>
                <div className="w-1 h-1 bg-slate-200 rounded-full" />
                <span className="italic opacity-70">Wang, G. Y., et al.</span>
              </div>
            </div>

            {/* 外部連結圖示已依照標註移除 */}
          </div>
        ))}
      </div>

      {/* --- 結尾區：依照標註移除深藍色大方塊，改用極簡設計 --- */}
      <div className="mt-24 py-12 border-t border-slate-100 text-center">
        <Bookmark className="mx-auto text-slate-200 mb-6" size={24} />
        <p className="font-['Playfair_Display'] text-xl italic text-slate-400 max-w-lg mx-auto leading-relaxed">
          "Fusing intelligence with security to build a resilient cloud ecosystem."
        </p>
        <div className="mt-6 flex justify-center gap-3">
            <div className="w-1.5 h-1.5 bg-indigo-100 rounded-full" />
            <div className="w-1.5 h-1.5 bg-indigo-300 rounded-full" />
            <div className="w-1.5 h-1.5 bg-indigo-100 rounded-full" />
        </div>
      </div>
    </div>
  );
}