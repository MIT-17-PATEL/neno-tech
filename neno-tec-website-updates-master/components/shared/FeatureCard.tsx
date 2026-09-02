import React from 'react';
import { motion } from 'framer-motion';
import SpotlightCard from './SpotlightCard';

interface FeatureCardProps {
  title: string;
  description: string;
  stat?: string;
  statLabel?: string;
  index?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  stat,
  statLabel,
  index = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="h-full"
    >
      <SpotlightCard className="group h-full bg-zinc-950/70 rounded-3xl p-8 md:p-10 border border-white/10 hover:border-white/20 transition-all duration-500 flex flex-col justify-between">
        <div>
          <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-3 md:mb-4 text-zinc-100 group-hover:text-white transition-colors">{title}</h3>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed">{description}</p>
        </div>
        {stat && (
          <div className="mt-6 md:mt-10 pt-6 md:pt-8 border-t border-white/10 flex items-baseline gap-3">
            <span className="text-4xl md:text-5xl font-urbanist font-bold tracking-tighter text-shimmer">{stat}</span>
            <span className="text-zinc-500 text-xs md:text-sm font-bold uppercase tracking-widest font-mono">
              {statLabel}
            </span>
          </div>
        )}
      </SpotlightCard>
    </motion.div>
  );
};

export default FeatureCard;
