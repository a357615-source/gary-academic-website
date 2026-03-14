"use client";

import React, { useState } from "react";
import { Award, Eye, X, Bookmark, Trophy, Medal } from "lucide-react";
import { resumeData } from "../data/resumeData";

export default function Awards() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const serifTitle = "font-['Playfair_Display'] text-3xl font-bold text-slate-900 mb-12 pb-4 border-b border-slate-100 uppercase tracking-widest";

  // --- 輔助邏輯：提取年份 ---
  const getYear = (title: string): number => {
    const match = title.match(/\d{4}/);
    return match ? parseInt(match[0]) : 0;
  };

  // --- 輔助邏輯：手動關聯圖片 ---
  const getAwardImage = (title: string) => {
    if (title.includes("2019金融科技")) return "/image_d16e6d.png";
    if (title.includes("2022年資安金盾獎")) return "/image_d16e50.png";
    return null;
  };

  // --- 核心邏輯：將年份「由近到遠」排序 ---
  const sortedAwards = [...resumeData.honors_and_awards].sort((a, b) => {
    return getYear(b) - getYear(a); // 2024 -> 2023 -> ... -> 2019
  });

  return (
    <div className="animate-in fade-in duration-1000 max-w-4xl mx-auto pb-32">
      <h2 className={serifTitle}>Honors & Awards</h2>

      <div className="space-y-6">
        {sortedAwards.map((awardStr: string, index: number) => {
          const awardImg = getAwardImage(awardStr);
          const awardYear = getYear(awardStr);
          const isHighHonor = awardStr.includes("第二名") || awardStr.includes("佳作");

          return (
            <div 
              key={index}
              className="group bg-white border border-slate-100 rounded-[16px] p-8 transition-all duration-300 hover:border-indigo-400 hover:shadow-md flex gap-8 items-start"
            >
              {/* 左側大年份 - 現在由近到遠排列 */}
              <div className="hidden md:block shrink-0">
                <span className="font-['Playfair_Display'] text-4xl font-black text-slate-100 group-hover:text-indigo-50 transition-colors">
                  {awardYear !== 0 ? awardYear : "ACHV"}
                </span>
              </div>

              {/* 中間內容區 */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter ${
                    isHighHonor ? "bg-indigo-600 text-white" : "bg-slate-900 text-white"
                  }`}>
                    {isHighHonor ? "Top Achievement" : "Finalist"}
                  </span>
                  <div className="text-slate-300">
                    {isHighHonor ? <Trophy size={14} /> : <Medal size={14} />}
                  </div>
                </div>
                
                <h3 className="font-['Playfair_Display'] text-xl font-bold text-slate-900 leading-snug mb-2 group-hover:text-indigo-600 transition-colors">
                  {awardStr}
                </h3>
              </div>

              {/* 右側證書預覽 */}
              {awardImg && (
                <div 
                  className="relative cursor-pointer group/img shrink-0"
                  onClick={() => setSelectedImg(awardImg)}
                >
                  <div className="w-20 h-28 bg-slate-50 rounded-lg border border-slate-200 overflow-hidden relative shadow-sm">
                    <img 
                      src={awardImg} 
                      alt="Certificate Preview" 
                      className="w-full h-full object-cover opacity-80 group-hover/img:opacity-100 transition-all duration-500 scale-100 group-hover/img:scale-110"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover/img:bg-black/20 transition-all">
                      <Eye className="text-white opacity-0 group-hover/img:opacity-100" size={20} />
                    </div>
                  </div>
                  <p className="text-[9px] text-center mt-2 font-black text-slate-300 uppercase tracking-widest group-hover/img:text-indigo-600 transition-colors">
                    View Proof
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* --- 結尾裝飾 --- */}
      <div className="mt-24 py-12 border-t border-slate-100 text-center">
        <Bookmark className="mx-auto text-slate-200 mb-6" size={24} />
        <p className="font-['Playfair_Display'] text-xl italic text-slate-400 max-w-lg mx-auto leading-relaxed">
          "Excellence is the gradual result of always striving to do better."
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <div className="w-1.5 h-1.5 bg-indigo-100 rounded-full" />
          <div className="w-1.5 h-1.5 bg-indigo-300 rounded-full" />
          <div className="w-1.5 h-1.5 bg-indigo-100 rounded-full" />
        </div>
      </div>

      {/* --- Lightbox 彈窗 --- */}
      {selectedImg && (
        <div 
          className="fixed inset-0 bg-slate-950/90 z-[100] flex items-center justify-center p-6 backdrop-blur-md animate-in fade-in duration-300"
          onClick={() => setSelectedImg(null)}
        >
          <button className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors">
            <X size={32} />
          </button>
          <div 
            className="relative max-w-4xl max-h-[90vh] bg-white p-2 rounded-sm shadow-2xl animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={selectedImg} className="max-w-full max-h-[85vh] object-contain" alt="Award" />
          </div>
        </div>
      )}
    </div>
  );
}