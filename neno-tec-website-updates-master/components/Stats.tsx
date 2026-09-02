
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useIsMobile } from './useIsMobile';
import FadeInView from './FadeInView';
import SpotlightCard from './shared/SpotlightCard';

const Stats: React.FC = () => {
  const isMobile = useIsMobile();

  const stats = [
    { id: 'I', label: 'Projects Delivered', value: '50+', image: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&q=80&w=800' },
    { id: 'II', label: 'AI Solutions Built', value: '35+', image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800' },
    { id: 'III', label: 'Client Retention', value: '95%', image: 'https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800' },
    { id: 'IV', label: 'Industries Served', value: '8+', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800' }
  ];

  return (
    <section className="py-20 px-4 md:px-12 lg:px-24 relative">
      <div className="max-w-[1920px] mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat, idx) => {
          const inner = (
            <div className="w-full h-full p-6 md:p-8 flex flex-col justify-between aspect-square">
              <div className="absolute inset-0 opacity-20 group-hover:opacity-60 transition-all duration-500 pointer-events-none">
                <img src={stat.image} alt="" loading="lazy" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" />
              </div>
              <div className="relative z-10 flex justify-between items-start">
                <span className="text-zinc-500 font-bold text-xs md:text-base font-mono">{stat.id}.</span>
                <span className="text-white/60 text-[10px] md:text-xs font-semibold tracking-wider uppercase">{stat.label}</span>
              </div>
              <div className="relative z-10 flex justify-between items-end">
                <h4 className="text-3xl md:text-6xl font-urbanist font-medium tracking-tighter text-shimmer">{stat.value}</h4>
                <ArrowUpRight className="text-zinc-600 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" size={isMobile ? 20 : 32} />
              </div>
            </div>
          );

          if (isMobile) {
            return (
              <FadeInView
                key={stat.id}
                delay={idx * 0.08}
                className="group relative overflow-hidden rounded-2xl bg-zinc-950 border border-white/5"
              >
                {inner}
              </FadeInView>
            );
          }

          return (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="h-full"
            >
              <SpotlightCard className="group h-full bg-zinc-950/80 border border-white/10 hover:border-white/20 shadow-lg hover:shadow-[0_0_40px_rgba(255,255,255,0.04)]">
                {inner}
              </SpotlightCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Stats;
