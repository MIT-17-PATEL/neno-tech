import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface CTASectionProps {
  title: string;
  subtitle: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  title,
  subtitle,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}) => {
  return (
    <section className="py-20 md:py-32 px-4 md:px-12 lg:px-24 bg-black relative overflow-hidden">
      <div className="hidden md:block absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-[1920px] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12">
          <div className="max-w-3xl space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-6 bg-zinc-800 flex items-center justify-between px-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-[1px] h-full bg-white/50" />
                ))}
              </div>
              <span className="text-sm font-bold tracking-widest uppercase text-zinc-500">Next Step</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-arapey italic leading-[1.05] pb-2">
              {title}
            </h2>
            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-xl">
              {subtitle}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <motion.a
              href={primaryHref}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-10 py-5 rounded-full bg-white text-black overflow-hidden"
            >
              <div className="absolute inset-0 bg-zinc-900 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500" />
              <span className="relative z-10 font-bold uppercase tracking-widest text-sm flex items-center gap-2 group-hover:text-white transition-colors">
                {primaryLabel}
                <ArrowUpRight size={16} />
              </span>
            </motion.a>

            {secondaryLabel && secondaryHref && (
              <motion.a
                href={secondaryHref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-5 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all font-bold uppercase tracking-widest text-sm"
              >
                {secondaryLabel}
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
