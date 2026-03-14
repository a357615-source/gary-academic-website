import { Trophy, ChevronRight } from "lucide-react";

export default function CV() {
  return (
    <section id="cv" className="space-y-24">
      {/* ... 原本的 Education 與 Experience ... */}

      {/* 新增的特殊經歷區塊 */}
      <div>
        <h2 className="text-3xl font-black italic border-b-4 border-black pb-4 inline-block mb-12 uppercase flex items-center gap-4">
          <Trophy size={24} /> Special Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="p-8 bg-gray-50 rounded-2xl border border-transparent hover:border-black transition-all">
              <p className="text-[10px] font-black uppercase text-gray-400 mb-4 tracking-widest">National Team Legacy</p>
              <ul className="space-y-2 text-sm font-bold">
                <li>• U15 Table Tennis Teenager Player</li>
                <li>• U18 Table Tennis Teenager Player</li>
              </ul>
           </div>
           <div className="p-8 bg-gray-50 rounded-2xl border border-transparent hover:border-black transition-all">
              <p className="text-[10px] font-black uppercase text-gray-400 mb-4 tracking-widest">Global Coaching</p>
              <ul className="space-y-2 text-sm font-bold">
                <li>• Coach at Lily Yip Table Tennis Center LLC, NJ, USA</li>
                <li>• Westchester Table Tennis Center, Open Second Place</li>
              </ul>
           </div>
        </div>
      </div>
    </section>
  );
}