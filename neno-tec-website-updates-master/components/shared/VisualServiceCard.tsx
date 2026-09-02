
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export interface SubItemType {
  title: string;
  href: string;
  slug?: string;
}

interface VisualServiceCardProps {
  title: string;
  description: string;
  href: string;
  image: string;
  index?: number;
  category?: string;
  subItems?: SubItemType[];
  onSelectSubItem?: (item: SubItemType) => void;
}

const VisualServiceCard: React.FC<VisualServiceCardProps> = ({
  title,
  description,
  href,
  image,
  index = 0,
  category,
  subItems,
  onSelectSubItem,
}) => {
  const [imgError, setImgError] = React.useState(false);

  return (
    <Link to={href} className="group block h-full">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ delay: index * 0.04, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        style={{ willChange: 'opacity, transform' }}
        className="group relative bg-zinc-950 rounded-3xl overflow-hidden border border-white/5 hover:border-white/15 transition-all duration-500 h-full flex flex-col justify-between"
      >
        <div>
          {/* Image Container */}
          <div className="relative w-full aspect-[16/10] overflow-hidden bg-zinc-900">
            {!imgError && image ? (
              <img
                src={image}
                alt=""
                loading="lazy"
                onError={() => setImgError(true)}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-zinc-900 via-zinc-950 to-black flex items-center justify-center relative overflow-hidden p-6">
                <div className="absolute inset-0 bg-cyber-grid opacity-30 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-purple-500/10 pointer-events-none" />
                <span className="text-2xl md:text-3xl font-black font-urbanist text-white/20 uppercase tracking-wider text-center group-hover:text-white/40 transition-colors">
                  {title}
                </span>
              </div>
            )}
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

            {/* Category tag */}
            {category && (
              <div className="absolute top-4 left-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full border border-white/5">
                  {category}
                </span>
              </div>
            )}

            {/* Arrow indicator on hover */}
            <motion.div
              className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
            >
              <ArrowUpRight size={18} className="text-black" />
            </motion.div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-3 p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold tracking-tight group-hover:text-zinc-300 transition-colors duration-300">
              {title}
            </h3>
            <p className="text-zinc-500 text-sm md:text-base leading-relaxed line-clamp-3">
              {description}
            </p>
          </div>
        </div>

        {/* Sub-items / Specializations pills if present */}
        {subItems && subItems.length > 0 && (
          <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0 flex flex-wrap gap-1.5 z-10">
            {subItems.map((item) =>
              onSelectSubItem ? (
                <button
                  key={item.href || item.title}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    onSelectSubItem(item);
                  }}
                  className="text-[10px] font-semibold text-zinc-300 hover:text-white bg-zinc-900/90 hover:bg-zinc-800 px-2.5 py-1 rounded-full border border-white/10 hover:border-white/30 transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                  {item.title}
                </button>
              ) : (
                <span
                  key={item.href || item.title}
                  className="text-[10px] font-semibold text-zinc-400 bg-zinc-900/90 px-2.5 py-1 rounded-full border border-white/10 flex items-center gap-1.5 select-none"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                  {item.title}
                </span>
              )
            )}
          </div>
        )}
      </motion.div>
    </Link>
  );
};

export default VisualServiceCard;
