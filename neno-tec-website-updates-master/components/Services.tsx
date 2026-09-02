import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { serviceCategories } from '../data/services';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-32 px-4 md:px-12 lg:px-24">
      <div className="max-w-[1920px] mx-auto flex flex-col gap-20">
        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
          <div className="flex items-center gap-3 w-48">
            <div className="w-10 h-6 bg-zinc-800 flex items-center justify-between px-1">
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className="w-[1px] h-full bg-white/50" />
              ))}
            </div>
            <span className="text-sm font-bold tracking-widest uppercase text-zinc-500">Expertise</span>
          </div>
          <div>
            <h2 className="text-4xl md:text-6xl max-w-4xl font-urbanist leading-tight">
              We build the neural architecture of modern business.
            </h2>
            <p className="text-zinc-500 text-base md:text-lg mt-4 max-w-2xl">
              Five core service groups. Each with specialized capabilities.
            </p>
          </div>
        </div>

        {/* Service Groups */}
        <div className="flex flex-col gap-2">
          {serviceCategories.map((category, idx) => (
            <div
              key={category.slug}
              className="border-t border-white/10 first:border-t-0"
            >
              {/* Main Service Row — clicking navigates directly to category page */}
              <Link
                to={category.href}
                className="group relative flex flex-col lg:flex-row items-start lg:items-center justify-between py-8 md:py-12 px-0 hover:bg-zinc-900/30 transition-all duration-500 cursor-pointer"
              >
                <div className="flex items-center gap-4 md:gap-6">
                  {/* Number */}
                  <span className="text-sm md:text-base font-mono text-zinc-600 group-hover:text-zinc-400 transition-colors">
                    {String(idx + 1).padStart(2, '0')}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl md:text-3xl lg:text-5xl font-bold tracking-tight transition-colors group-hover:text-zinc-300">
                    {category.title}
                  </h3>
                </div>

                {/* Short description */}
                <div className="mt-3 ml-10 md:ml-0 lg:mt-0 max-w-md">
                  <p className="text-zinc-500 text-xs md:text-sm leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* Child count badge */}
                <div className="mt-3 ml-10 md:ml-0 lg:mt-0">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-zinc-700 group-hover:text-zinc-500 transition-colors">
                    {category.children.length} service{category.children.length !== 1 ? 's' : ''}
                  </span>
                </div>

                {/* Arrow on desktop */}
                <div className="hidden lg:block absolute right-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight size={22} className="text-zinc-400" />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
