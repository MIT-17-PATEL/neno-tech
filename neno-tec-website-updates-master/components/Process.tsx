
import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { 
    id: "01", 
    title: "Discovery & Audit", 
    desc: "We perform a thorough analysis of your technical stack and data silos to identify the most lucrative automation paths.",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200" 
  },
  { 
    id: "02", 
    title: "Neural Blueprint", 
    desc: "Designing the custom agentic architecture and fine-tuning model parameters specific to your domain and brand voice.",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200" 
  },
  { 
    id: "03", 
    title: "Agile Development", 
    desc: "Rapid prototyping and deployment with continuous feedback loops, ensuring every AI response meets enterprise standards.",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200" 
  },
  { 
    id: "04", 
    title: "Global Deployment", 
    desc: "Full-scale rollout with real-time monitoring, auto-scaling infrastructure, and continuous model performance upgrades.",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200" 
  }
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-32 bg-black overflow-hidden">
       <div className="px-6 md:px-12 lg:px-24 mb-16">
        <div className="flex items-center gap-3">
             <div className="w-10 h-6 bg-zinc-800 flex items-center justify-between px-1">
               {[1,2,3,4,5].map(i => <div key={i} className="w-[1px] h-full bg-white/50" />)}
            </div>
            <span className="text-sm font-bold tracking-widest uppercase text-zinc-500">The Methodology</span>
          </div>
          <h2 className="text-4xl md:text-7xl font-urbanist font-medium mt-4 tracking-tighter">Strategic Deployment Cycle.</h2>
       </div>

       <div className="flex flex-col">
          {steps.map((step) => (
            <div key={step.id} className="group relative flex flex-col md:flex-row items-start md:items-center justify-between py-8 md:py-16 px-4 md:px-12 lg:px-24 border-t border-white/10 md:hover:bg-zinc-900/40 transition-all duration-700 cursor-pointer overflow-hidden">
              {/* Background image only on desktop hover */}
              <div className="absolute inset-0 z-0 opacity-0 md:group-hover:opacity-40 transition-opacity duration-1000 pointer-events-none hidden md:block">
                <img src={step.img} alt="" loading="lazy" className="w-full h-full object-cover grayscale" />
              </div>

              <div className="relative z-10 flex flex-col md:flex-row items-baseline gap-4 md:gap-24">
                <span className="text-zinc-800 text-3xl md:text-5xl font-black font-urbanist md:group-hover:text-white transition-colors duration-500">
                  {step.id}
                </span>
                <div className="space-y-3 md:space-y-6 max-w-2xl">
                  <h3 className="text-2xl md:text-6xl lg:text-[80px] font-urbanist font-medium tracking-tighter transition-all md:group-hover:pl-4">
                    {step.title}
                  </h3>
                  {/* Always visible on mobile, hover-reveal on desktop */}
                  <p className="text-zinc-500 text-sm md:text-xl opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-700 md:transform md:translate-y-6 md:group-hover:translate-y-0 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>

              <div className="relative z-10 hidden lg:block">
                <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all rotate-45 group-hover:rotate-0 duration-500">
                  <span className="text-3xl font-light">→</span>
                </div>
              </div>
            </div>
          ))}
          <div className="border-t border-white/10" />
       </div>
    </section>
  );
};

export default Process;
