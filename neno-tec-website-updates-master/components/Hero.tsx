
import React from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from './useIsMobile';

const Hero: React.FC = () => {
  const isMobile = useIsMobile();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  /* ── Mobile: completely static, zero JS animation overhead ── */
  if (isMobile) {
    return (
      <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
        {/* Static background glow — pure CSS */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
          <div className="absolute w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-3xl" />
          <div className="relative w-[220px] h-[220px]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-zinc-800 to-black border border-white/10" />
          </div>
        </div>

        <div className="relative z-10 w-full max-w-[1920px] h-full flex flex-col justify-between py-24">
          <div className="flex flex-col items-start gap-4">
            <p className="text-zinc-400 max-w-xl text-sm leading-relaxed font-medium opacity-0 animate-[fadeInUp_0.6s_0.1s_ease-out_forwards]">
              " At <span className="text-white">NENOTECHNOLOGY</span>, we bridge the gap between human imagination and artificial intelligence. We are architects of the future, engineering intelligent systems that redefine how businesses scale and innovate. "
            </p>
            <div className="flex flex-col mt-4 opacity-0 animate-[fadeInUp_0.6s_0.3s_ease-out_forwards]">
              <span className="text-white font-bold italic tracking-wide">Team Neno</span>
              <span className="text-zinc-500 text-sm uppercase tracking-widest">Innovation Labs</span>
            </div>
          </div>

          <div className="flex flex-col gap-6 mt-auto pt-12">
            <h2 className="text-5xl font-arapey italic text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-zinc-600 leading-[1.05] pb-1 opacity-0 animate-[fadeInUp_0.8s_0.2s_ease-out_forwards]">
              Intelligent
            </h2>
            <h2 className="text-5xl font-urbanist font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-zinc-600 leading-[1.05] pb-1 opacity-0 animate-[fadeInUp_0.8s_0.35s_ease-out_forwards]">
              Future Scaling
            </h2>
            <button
              onClick={scrollToContact}
              className="self-start mt-4 group relative px-8 py-4 rounded-full bg-zinc-900 border border-white/20 overflow-hidden opacity-0 animate-[fadeInUp_0.6s_0.5s_ease-out_forwards]"
            >
              <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500" />
              <span className="relative z-10 text-white group-hover:text-black font-bold uppercase tracking-widest text-xs flex items-center gap-2">
                Start Your Build
                <span className="text-lg rotate-45">→</span>
              </span>
            </button>
          </div>
        </div>
      </section>
    );
  }

  /* ── Desktop: full Framer Motion experience ── */
  return (
    <section id="hero" className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-6 md:px-12 bg-cyber-grid">
      {/* Radial vignette over grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,black_80%)] pointer-events-none" />

      {/* Background Neural Core Sphere */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px]" 
        />
        <div className="relative w-[600px] h-[600px]">
          <motion.div 
            animate={{ scale: [0.97, 1.03, 0.97] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-full bg-gradient-to-br from-zinc-800 to-black border border-white/10"
          />
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-10 border border-white/5 rounded-full"
          >
            <div className="absolute top-1/2 -left-1 w-2 h-2 bg-white rounded-full blur-[2px]" />
          </motion.div>
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-24 border border-white/5 rounded-full"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-20 bg-gradient-to-b from-white/20 to-transparent" />
          </motion.div>
          <motion.div 
            animate={{ opacity: [0.2, 0.6, 0.2], scale: [1, 1.1, 1] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute inset-0 bg-[url('https://framerusercontent.com/images/hrSL9JAnKcEJueEeEEwxSFMII.svg')] bg-contain bg-center bg-no-repeat opacity-20 mix-blend-screen"
          />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-[1920px] h-full flex flex-col justify-between py-24 lg:py-32">
        <div className="flex flex-col items-start gap-4">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 max-w-xl text-sm md:text-base lg:text-lg leading-relaxed font-medium"
          >
            " At <span className="text-white font-semibold">NENOTECHNOLOGY</span>, we bridge the gap between human imagination and artificial intelligence. We are architects of the future, engineering intelligent systems that redefine how businesses scale and innovate. "
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col mt-4"
          >
            <span className="text-white font-bold italic tracking-wide">Team Neno</span>
            <span className="text-zinc-500 text-sm uppercase tracking-widest">Innovation Labs</span>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="flex flex-col">
            <motion.h2 
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-8xl lg:text-[140px] font-arapey italic text-shimmer leading-[1.05] pb-2"
            >
              Intelligent
            </motion.h2>
            <motion.h2 
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-8xl lg:text-[140px] font-urbanist font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-100 to-zinc-500 leading-[1.05] pb-2"
            >
              Future Scaling
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="relative p-[1px] rounded-full overflow-hidden group shadow-[0_0_30px_rgba(255,255,255,0.08)]"
          >
            {/* Rotating glowing border beam */}
            <div className="absolute inset-[-100%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#ffffff_50%,#000000_100%)] opacity-70 group-hover:opacity-100 transition-opacity" />
            
            <button
              onClick={scrollToContact}
              className="relative px-10 py-5 rounded-full bg-zinc-950 border border-white/10 overflow-hidden flex items-center gap-3 transition-transform duration-300 group-hover:scale-[1.02]"
            >
              <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500" />
              <span className="relative z-10 text-white group-hover:text-black font-bold uppercase tracking-widest text-sm flex items-center gap-2">
                Start Your Build
                <span className="text-xl rotate-45 transition-transform group-hover:rotate-90 duration-300">→</span>
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
