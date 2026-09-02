
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-32 pb-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1920px] mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-32">
          <div className="space-y-8">
            <h4 className="text-zinc-600 text-xs font-bold uppercase tracking-widest">Products</h4>
            <div className="flex flex-col gap-4">
              <a href="https://www.ayugpt.com" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors uppercase text-sm font-bold">AyuGPT</a>
              <a href="#" className="text-zinc-400 hover:text-white transition-colors uppercase text-sm font-bold">AI Calling Agents</a>
              <a href="#" className="text-zinc-400 hover:text-white transition-colors uppercase text-sm font-bold">Custom CRM</a>
              <a href="#" className="text-zinc-400 hover:text-white transition-colors uppercase text-sm font-bold">ERP Hub</a>
              <a href="#/talent" className="text-zinc-400 hover:text-white transition-colors uppercase text-sm font-bold">Hire Talent</a>
              <a href="#/careers" className="text-zinc-400 hover:text-white transition-colors uppercase text-sm font-bold">Careers</a>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-8 text-center md:text-left">
            <h4 className="text-zinc-600 text-xs font-bold uppercase tracking-widest">Connect With Sales</h4>
            <div className="flex flex-col gap-2">
              <a href="mailto:sales@nenotechnology.com" className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter hover:text-zinc-400 transition-colors underline decoration-1 underline-offset-8 break-all">sales@nenotechnology.com</a>
              <a href="tel:9106915561" className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter hover:text-zinc-400 transition-colors">9106915561</a>
            </div>
          </div>

          <div className="space-y-8 text-right">
            <h4 className="text-zinc-600 text-xs font-bold uppercase tracking-widest">Social Presence</h4>
            <div className="flex flex-col gap-4">
              <a href="https://www.linkedin.com/in/tirth-patel-nenotechnology/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors uppercase text-sm font-bold">LinkedIn</a>
              <a href="https://www.instagram.com/tirthpatel00/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors uppercase text-sm font-bold">Instagram</a>
              <a href="#" className="text-zinc-400 hover:text-white transition-colors uppercase text-sm font-bold">X / Twitter</a>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col items-center">
          <h1 className="text-[14vw] font-urbanist font-black tracking-tighter text-white/5 leading-none select-none uppercase">
            NENOTECHNOLOGY
          </h1>
          
          <div className="w-full mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-600 text-[10px] font-bold uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <span>© 2026 NENOTECHNOLOGY</span>
            </div>
            <div>
              AI & SOFTWARE INNOVATION LAB
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
