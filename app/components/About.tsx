"use client";

import React from "react";
import { 
  ChevronRight, 
  Trophy, 
  Star, 
  Briefcase, 
  GraduationCap, 
  Lightbulb, // 修正：補上缺失的導入
  ArrowRight  // 修正：補上缺失的導入
} from "lucide-react";

import { resumeData } from "../data/resumeData";

export default function About() {
  // 統一的標題樣式 (提升學術質感)
  const titleStyle = "font-['Playfair_Display'] text-3xl font-bold mb-12 text-[#0F172A] border-b border-[#E2E8F0] pb-6 uppercase tracking-wider";
  
  // 通用卡片樣式
  const cardStyle = "bg-white border border-[#E2E8F0] rounded-[16px] p-8 transition-all duration-300 hover:border-[#2563EB] hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)] mb-6";

  return (
    <div className="animate-in fade-in duration-1000 max-w-4xl mx-auto pb-24">

      {/* ---------------- 0. Research Identity (Hero Section) ---------------- */}
      <section className="mb-24 text-center">
        <h1 className="font-['Playfair_Display'] text-5xl font-black tracking-tight text-[#0F172A] mb-4 italic">
          Academic Researcher
        </h1>
        <p className="text-[#64748B] text-xl font-medium tracking-wide">
          Bridging AI & Cybersecurity in Modern Cloud Environments
        </p>
      </section>

      {/* ---------------- 1. Academic Stats ---------------- */}
      <section className="mb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Publications", value: resumeData.publications.length },
            { label: "Experience", value: resumeData.work_experience.length + resumeData.teaching_experience.length },
            { label: "Certificates", value: resumeData.certificates.length },
            { label: "Honors", value: resumeData.honors_and_awards.length }
          ].map((item, i) => (
            <div key={i} className="p-6 bg-white border border-[#E2E8F0] rounded-2xl text-center shadow-sm hover:border-[#2563EB] transition-colors">
              <p className="text-3xl font-black text-[#0F172A]">{item.value}</p>
              <p className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-[0.2em] mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

{/* ---------------- 2. About Me (Drop Cap 修正版) ---------------- */}
      <section id="biography" className="mb-32">
        <h2 className={titleStyle}>About Me</h2>
        
        {/* 白底細邊框卡片 */}
        <div className="bg-white border border-slate-100 rounded-[16px] p-10 shadow-sm transition-all hover:border-slate-300">
          
          <div className="max-w-5xl mx-auto">
            <div className="text-[18px] leading-[2.2] text-[#334155] font-medium text-justify font-['Inter']">
              
              {/* 第一段：合併姓名與學歷，修正 H 的垂直對齊 */}
              <p className="mb-10">
                <span className="
                  float-left 
                  text-[72px] 
                  font-black 
                  mr-3 
                  mt-1 
                  text-[#0F172A] 
                  font-['Playfair_Display'] 
                  leading-[0.8]
                ">
                  H
                </span>
                ello everyone, my name is <span className="text-slate-900 font-bold">Wang Guan Yu (Gary Wang)</span>. 
                I graduated from the <span className="text-slate-900 font-semibold">National Central University</span> with a master's degree in Computer Science, majoring in Information Engineering, with expertise in information security, artificial intelligence, and cloud computing.
              </p>

              {/* 第二段：運動員經歷 */}
              <p className="mb-10">
                I have been a professional athlete since childhood and only started engaging with information technology after graduating from high school.
              </p>

              {/* 第三段：特質與團隊 */}
              <p className="mb-0">
                In the highly competitive sports industry, even a small mistake can lead to losing a match, which has made me very detail-oriented. I actively participate in various activities related to my studies to enhance my professional skills and develop my teamwork abilities.
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* ---------------- 3. Research Interests ---------------- */}
      <section className="mb-24">
        <h2 className={titleStyle}>Research Interests</h2>
        <div className={cardStyle}>
          <div className="flex items-center gap-6 mb-6">
             <Lightbulb className="text-[#2563EB]" />
             <span className="text-xs font-black text-gray-400 uppercase tracking-widest">Focus Areas</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              "AI Security", "Cloud Security", "Malware Detection", 
              "OSINT", "Cyber Threat Intelligence", "LLM Security"
            ].map((tag) => (
              <span key={tag} className="px-5 py-2 text-sm font-bold border border-[#E0E7FF] rounded-full bg-[#EEF2FF] text-[#1E40AF] hover:bg-[#2563EB] hover:text-white transition-all cursor-default">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- 4. Education Background ---------------- */}
      <section id="education" className="mb-24">
        <h2 className={titleStyle}>Education Background</h2>
        <div className="flex flex-col">
          {resumeData.education_background.slice().reverse().map((edu, index) => (
            <div key={index} className={cardStyle}>
              <div className="flex items-center gap-6">
                <div className={`p-4 rounded-xl ${index === 0 ? 'bg-black text-white shadow-lg' : 'bg-gray-100 text-gray-400'}`}>
                  <GraduationCap size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#0F172A]">{edu.split('(')[0]}</h3>
                  <p className="text-[#64748B] font-medium mt-1">
                    {edu.match(/\(([^)]+)\)/)?.[1] || edu}
                  </p>
                </div>
                {index === 0 && (
                  <span className="text-[10px] font-black bg-green-100 text-green-700 px-4 py-1.5 rounded-full uppercase tracking-widest">Latest</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- 5. Professional Experience ---------------- */}
      <section id="work" className="mb-24">
        <h2 className={titleStyle}>Professional Experience</h2>
        <div className="space-y-6">
          <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] px-2 mb-4">Engineering & Security</h4>
          {resumeData.work_experience.map((work, index) => (
            <div key={index} className={cardStyle}>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-6">
                  <div className="p-3 bg-gray-50 rounded-xl">
                    <Briefcase size={20} className="text-[#0F172A]" />
                  </div>
                  <span className="text-lg font-bold text-[#0F172A]">{work}</span>
                </div>
                <ArrowRight size={18} className="text-gray-200" />
              </div>
            </div>
          ))}
        </div>

        {/* Teaching Section */}
        <div className="space-y-6 mt-16">
          <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] px-2 mb-4">Teaching & Lectures</h4>
          {resumeData.teaching_experience.map((teach, index) => (
            <div key={index} className="bg-gray-50 border border-[#E2E8F0] rounded-[24px] p-10 mb-6 hover:border-[#2563EB] hover:bg-white transition-all group">
              <h4 className="text-xl font-black text-[#0F172A] flex items-center gap-4 mb-8">
                <div className="w-2.5 h-2.5 bg-[#2563EB] rotate-45 shrink-0" /> {teach.role}
              </h4>
              {teach.courses && (
                <ul className="grid grid-cols-1 gap-5 pl-6 border-l-2 border-gray-200">
                  {teach.courses.map((course, i) => (
                    <li key={i} className="text-[16px] text-[#475569] font-medium flex items-start gap-3 leading-relaxed">
                      <ChevronRight size={18} className="mt-1 shrink-0 text-[#2563EB] opacity-50 group-hover:opacity-100" />
                      {course}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- 6. Special Experience ---------------- */}
      <section id="special">
        <h2 className={titleStyle}>Special Experience</h2>
        <div className="flex flex-col gap-4">
          {resumeData.special_experience.map((exp, i) => (
            <div key={i} className={cardStyle}>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-[#0F172A] flex items-center justify-center rounded-full shrink-0 shadow-xl">
                  {i < 2 ? <Trophy size={22} className="text-white" /> : <Star size={22} className="text-white" />}
                </div>
                <span className="text-lg font-bold text-[#0F172A] leading-tight tracking-tight">{exp}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}