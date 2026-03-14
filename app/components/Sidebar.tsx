"use client";
import { Mail, Github, Linkedin, Globe, MapPin, Microscope, Database, Shield } from "lucide-react";
import { resumeData } from "../data/resumeData";

export default function Sidebar() {
  const info = resumeData.personal_information;

  return (
    <aside className="md:fixed md:left-[calc(50%-640px)] top-0 h-full w-80 pt-32 px-6 hidden md:flex flex-col overflow-y-auto">
      {/* Profile Card 主體 */}
      <div className="bg-white border border-[#E2E8F0] rounded-2xl p-8 shadow-sm">
        {/* 照片 */}
        <div className="w-full aspect-square rounded-xl bg-gray-100 overflow-hidden mb-6">
          <img src="/me.jpg" alt="Gary Wang" className="w-full h-full object-cover grayscale" />
        </div>

        {/* 名字與標題 */}
        <h1 className="font-['Playfair_Display'] text-3xl font-bold text-[#0F172A] mb-2">{info.name}</h1>
        <p className="text-[#64748B] text-xs font-bold uppercase tracking-wider mb-6 leading-relaxed">
          Cybersecurity Researcher<br/>AI Security | Cloud Security
        </p>

        {/* 基本資訊 */}
        <div className="space-y-3 text-sm text-[#475569] mb-8 pb-8 border-b border-[#F1F5F9]">
          <div className="flex items-center gap-3"><MapPin size={14} className="text-[#64748B]" /> Taipei / Tokyo</div>
          <div className="flex items-center gap-3"><Mail size={14} className="text-[#64748B]" /> {info.contact.Mail}</div>
        </div>

        {/* Links (區塊三建議) */}
        <div className="mb-8">
          <h4 className="text-[10px] font-black uppercase text-[#94A3B8] tracking-[0.2em] mb-4">Links</h4>
          <div className="grid grid-cols-4 gap-4">
             <a href={info.contact.GitHub} className="text-[#64748B] hover:text-[#2563EB]"><Github size={20} /></a>
             <a href={info.contact.Linkedin} className="text-[#64748B] hover:text-[#2563EB]"><Linkedin size={20} /></a>
             <a href={info.contact["ResearchGate"]} className="text-[#64748B] hover:text-[#2563EB]"><Microscope size={20} /></a>
             <a href={info.contact["Orcid"]} className="text-[#64748B] hover:text-[#2563EB]"><Database size={20} /></a>
          </div>
        </div>

        {/* Research Areas (區塊三建議) */}
        <div>
          <h4 className="text-[10px] font-black uppercase text-[#94A3B8] tracking-[0.2em] mb-4">Research Areas</h4>
          <ul className="space-y-2 text-xs font-bold text-[#475569]">
            <li className="flex items-center gap-2"> <div className="w-1 h-1 bg-[#2563EB] rounded-full"/> AI Security</li>
            <li className="flex items-center gap-2"> <div className="w-1 h-1 bg-[#2563EB] rounded-full"/> Cloud Security</li>
            <li className="flex items-center gap-2"> <div className="w-1 h-1 bg-[#2563EB] rounded-full"/> Malware Analysis</li>
            <li className="flex items-center gap-2"> <div className="w-1 h-1 bg-[#2563EB] rounded-full"/> OSINT</li>
          </ul>
        </div>
      </div>
    </aside>
  );
}