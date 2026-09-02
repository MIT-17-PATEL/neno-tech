import React from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from '../useIsMobile';

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  label,
  title,
  subtitle,
  align = 'left',
}) => {
  const isMobile = useIsMobile();
  const alignClasses = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col gap-4 ${alignClasses} mb-12 md:mb-20`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.5 }}
        className={`flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}
      >
        <div className="w-10 h-6 bg-zinc-800 flex items-center justify-between px-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="w-[1px] h-full bg-white/50" />
          ))}
        </div>
        <span className="text-sm font-bold tracking-widest uppercase text-zinc-500">{label}</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: isMobile ? 20 : 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-2xl md:text-6xl max-w-4xl font-urbanist leading-tight"
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-zinc-500 text-sm md:text-lg font-medium leading-relaxed max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeader;
