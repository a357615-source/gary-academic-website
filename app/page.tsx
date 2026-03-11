"use client";

import { BookOpen, BookText, Briefcase, GraduationCap, Mail, Github, MapPin, Search, ChevronRight, Cpu } from 'lucide-react';

export default function Home() {
  const researchTopics = [
    { title: "Trustworthy AI", tag: "Security & Ethics" },
    { title: "Reliable AI", tag: "Robustness" },
    { title: "Secure Code Generator", tag: "LLM Security" },
    { title: "AI Coding Agent", tag: "Automation" },
    { title: "LLM Security", tag: "Adversarial AI" },
    { title: "Malware Detection", tag: "Cyber Security" },
    { title: "Social Engineering", tag: "Human Factors" },
    { title: "Network Analysis", tag: "Graph Theory" }
  ];

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#111827] font-serif flex flex-col">
      
      {/* --- Header --- */}
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 px-8 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-xs uppercase tracking-[0.4em] font-bold flex items-center gap-2">
            <Cpu size={14} className="text-black" />
            YCCP SYSTEMS 2026
          </div>
          <div className="text-[10px] text-gray-400 uppercase tracking-widest hidden md:block">
            Gary Wang / Tokyo Research Lab
          </div>
        </div>
      </header>

      {/* --- Main Content --- */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 flex flex-col md:flex-row gap-16 md:gap-24 flex-1">
        
        {/* --- Side Bar --- */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="sticky top-28 space-y-12">
            <nav className="flex flex-col gap-8">
              {[
                { id: "about", label: "About Me", icon: <GraduationCap size={18} /> },
                { id: "research", label: "Research Topic", icon: <Search size={18} /> },
                { id: "publications", label: "Publications", icon: <BookOpen size={18} /> },
                { id: "careers", label: "My Careers", icon: <Briefcase size={18} /> }
              ].map((item) => (
                <a 
                  key={item.id}
                  href={`#${item.id}`} 
                  className="group flex items-center justify-between text-sm uppercase tracking-[0.2em] text-gray-400 hover:text-black transition-all"
                >
                  <span className="flex items-center gap-4">
                    {item.icon}
                    <span className="font-medium">{item.label}</span>
                  </span>
                  <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                </a>
              ))}
            </nav>
            
            <div className="hidden md:block pt-12 border-t border-gray-100">
              <p className="text-[10px] leading-relaxed text-gray-300 uppercase tracking-widest">
                System Framework: YCCP-v4<br />
                Node: Tokyo-Region-01
              </p>
            </div>
          </div>
        </aside>

        {/* --- Content Area --- */}
        <main className="flex-1 space-y-32">
          
          <header className="flex flex-col-reverse lg:flex-row justify-between items-center lg:items-end gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-7xl md:text-8xl font-bold tracking-tighter mb-4">王冠渝</h1>
              <h2 className="text-2xl font-light tracking-[0.4em] text-gray-500 uppercase">Gary Wang</h2>
              <h3 className="text-sm font-light text-gray-400 mt-2 uppercase tracking-[0.3em]">オウ カンユ</h3>
              
              <div className="flex items-center justify-center lg:justify-start gap-3 text-gray-400 mt-8">
                <MapPin size={16} />
                <span className="text-xs uppercase tracking-[0.2em]">Tokyo, Japan</span>
              </div>
              
              <div className="flex justify-center lg:justify-start gap-8 mt-10 text-gray-400">
                <a href="#" className="hover:text-black transition-colors"><Mail size={24} /></a>
                <a href="#" className="hover:text-black transition-colors"><Github size={24} /></a>
              </div>
            </div>

            <div className="w-64 h-64 md:w-80 md:h-80 flex-shrink-0 shadow-2xl overflow-hidden border-[12px] border-white">
               <img src="/me.jpg" alt="Gary Wang" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
            </div>
          </header>

          <section id="about" className="max-w-3xl">
            <h2 className="text-3xl italic mb-12 border-b-2 border-black pb-4 inline-block">About Me</h2>
            <div className="space-y-6 text-xl leading-relaxed text-gray-600 text-justify font-serif">
              <p>
                Hello, My name is <span className="text-black font-bold">Gary Wang</span>, a Taiwanese currently working as a researcher at <span className="underline decoration-gray-200 underline-offset-8">Tokyo Japan</span> since 2025.
              </p>
              <p>
                My expertise lies in securing AI ecosystems and identifying cyber threats. I am dedicated to bridging the gap between innovative AI technologies and safe, reliable implementation.
              </p>
            </div>
          </section>

          <section id="research">
            <h2 className="text-3xl italic mb-12 border-b-2 border-black pb-4 inline-block">Research Topics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {researchTopics.map((topic, i) => (
                <div key={i} className="group p-8 bg-white border border-gray-100 hover:border-black transition-all hover:shadow-xl">
                  <span className="text-[10px] text-gray-400 uppercase tracking-[0.3em] block mb-4">{topic.tag}</span>
                  <h3 className="text-xl font-bold tracking-tight text-gray-800">{topic.title}</h3>
                </div>
              ))}
            </div>
          </section>

          <div className="h-24"></div>
        </main>
      </div>

      {/* --- 精緻 Footer (標記 YCCP 製作) --- */}
      <footer className="w-full bg-white border-t border-gray-100 px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="text-[10px] uppercase tracking-[0.5em] text-gray-400">
                © 2026 GARY WANG. ALL RIGHTS RESERVED.
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] font-bold flex items-center gap-2">
                <span className="text-gray-300">/</span> 
                DESIGNED & DEVELOPED BY <span className="text-black border-b border-black">YCCP</span>
              </div>
            </div>
            
            <div className="flex gap-12 text-[10px] uppercase tracking-[0.3em] text-gray-400">
              <a href="#" className="hover:text-black transition-all hover:-translate-y-1">Twitter</a>
              <a href="#" className="hover:text-black transition-all hover:-translate-y-1">LinkedIn</a>
              <a href="#" className="hover:text-black transition-all hover:-translate-y-1">Scholar</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}