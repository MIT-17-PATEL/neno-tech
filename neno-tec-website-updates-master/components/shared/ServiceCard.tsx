import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
  index?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  href,
  icon,
  index = 0,
}) => {
  return (
    <Link to={href} className="block h-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.08, duration: 0.5 }}
        className="h-full"
      >
        <SpotlightCard className="group h-full bg-zinc-950/80 rounded-3xl p-8 md:p-10 border border-white/10 hover:border-white/20 transition-all duration-500 flex flex-col justify-between">
          <div className="flex flex-col gap-6 h-full">
            {icon && (
              <div className="w-12 h-12 rounded-2xl bg-zinc-900/90 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-500">
                {icon}
              </div>
            )}
            <div>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-3 text-zinc-100 group-hover:text-white transition-colors">
                {title}
              </h3>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed">{description}</p>
            </div>
            <div className="mt-auto pt-4 flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-zinc-500 font-bold group-hover:text-white transition-colors">Explore Solution</span>
              <ArrowUpRight size={20} className="text-zinc-600 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
            </div>
          </div>
        </SpotlightCard>
      </motion.div>
    </Link>
  );
};

export default ServiceCard;
