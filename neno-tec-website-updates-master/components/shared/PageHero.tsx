import React from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from '../useIsMobile';

interface PageHeroProps {
  label: string;
  title: string;
  subtitle?: string;
  accentWord?: string;
}

const PageHero: React.FC<PageHeroProps> = ({ label, title, subtitle, accentWord }) => {
  const isMobile = useIsMobile();

  return (
    <section className="relative pt-24 pb-6 md:pt-36 md:pb-10 px-4 md:px-12 lg:px-24 overflow-hidden">
      <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="relative z-10 max-w-[1920px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8 md:mb-12"
        >
          <div className="w-10 h-6 bg-zinc-800 flex items-center justify-between px-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-[1px] h-full bg-white/50" />
            ))}
          </div>
          <span className="text-sm font-bold tracking-widest uppercase text-zinc-500">{label}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: isMobile ? 30 : 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl md:text-7xl lg:text-[110px] font-arapey italic leading-[1.05] pb-2 tracking-tight"
        >
          {accentWord ? (
            <>
              {title}{' '}
              <span className="font-urbanist font-bold not-italic text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-zinc-600">
                {accentWord}
              </span>
            </>
          ) : (
            title
          )}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-2xl mt-8"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
