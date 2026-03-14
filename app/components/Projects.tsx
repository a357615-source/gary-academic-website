"use client";

import React, { useState, useRef, useEffect } from "react";
import { resumeData } from "../data/resumeData";

const ProjectCard = ({ name, description, tags }: { name: string, description: string, tags?: string[] }) => {
  const [expanded, setExpanded] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  // 偵測文字是否超出了顯示範圍
  useEffect(() => {
    const checkTruncation = () => {
      if (textRef.current) {
        // 比較捲軸高度與實際顯示高度，若捲軸較高，代表文字被截斷了
        const hasOverflow = textRef.current.scrollHeight > textRef.current.clientHeight;
        setIsTruncated(hasOverflow);
      }
    };

    checkTruncation();
    // 監聽視窗縮放，確保在不同螢幕尺寸下都能正確判斷
    window.addEventListener('resize', checkTruncation);
    return () => window.removeEventListener('resize', checkTruncation);
  }, [description]);

  return (
    <div className="bg-white border border-[#E2E8F0] rounded-[14px] p-8 transition-all duration-300 hover:border-[#2563EB] hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)] mb-8">
      {/* Tag 區塊 */}
      <div className="flex gap-2 mb-6">
        {tags?.map(tag => (
          <span key={tag} className="text-[10px] px-3 py-1 bg-[#EEF2FF] text-[#1E40AF] rounded-full font-black uppercase tracking-widest">
            {tag}
          </span>
        ))}
      </div>

      <h3 className="font-['Playfair_Display'] text-2xl font-bold mb-4 text-[#0F172A] leading-tight">
        {name}
      </h3>
      
      {/* 敘述文字區域 */}
      <p 
        ref={textRef}
        className={`text-[#64748B] leading-relaxed transition-all duration-500 overflow-hidden ${
          expanded ? "max-h-[1000px] mb-6" : "max-h-[4.5rem] line-clamp-2 mb-0"
        }`}
      >
        {description}
      </p>

      {/* 只有在文字被截斷 (isTruncated) 或是已經展開的情況下，才顯示按鈕 */}
      {(isTruncated || expanded) && (
        <button 
          onClick={() => setExpanded(!expanded)}
          className={`flex items-center text-[#2563EB] font-bold text-xs uppercase tracking-widest transition-all ${expanded ? "mt-6" : "mt-4"}`}
        >
          {expanded ? "Collapse ←" : "Read More →"}
        </button>
      )}
    </div>
  );
};

export default function Projects() {
  return (
    <div className="animate-in fade-in duration-700">
      <h2 className="font-['Playfair_Display'] text-3xl font-bold mb-12 text-[#0F172A] border-b border-[#E2E8F0] pb-6">
        Security & Research Projects
      </h2>
      
      <div className="flex flex-col">
        {/* 資安專案 */}
        {resumeData.projects.security_related.map((p, i) => (
          <ProjectCard 
            key={i} 
            name={p.name} 
            description={p.description} 
            tags={["Security", "Research"]} 
          />
        ))}
        
        <h2 className="font-['Playfair_Display'] text-3xl font-bold mt-20 mb-12 text-[#0F172A] border-b border-[#E2E8F0] pb-6">
          Technical Development
        </h2>
        
        {/* 其他開發專案 */}
        {resumeData.projects.others.map((p, i) => (
          <ProjectCard 
            key={i} 
            name={p.name} 
            description={p.description} 
            tags={["Development", "System"]} 
          />
        ))}
      </div>
    </div>
  );
}