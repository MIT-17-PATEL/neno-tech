
/*
import React from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from './useIsMobile';
import FadeInView from './FadeInView';

const team = [
  { 
    name: "Tirth Patel", 
    role: "Co-founder", 
    img: "/image.png", 
    bio: "Strategist and visionary leading the business development and strategic partnership growth at Nenotechnology." 
  }
];

const Team: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <section id="team" className="py-20 md:py-32 px-4 md:px-12 lg:px-24 bg-zinc-950/20">
      <div className="max-w-[1920px] mx-auto space-y-16 md:space-y-24">
        <div className="flex items-center gap-3">
             <div className="w-10 h-6 bg-zinc-800 flex items-center justify-between px-1">
               {[1,2,3,4,5].map(i => <div key={i} className="w-[1px] h-full bg-white/50" />)}
            </div>
            <span className="text-sm font-bold tracking-widest uppercase text-zinc-500">The Founders</span>
        </div>

        <div className="grid grid-cols-1 gap-8 md:gap-12 max-w-xl mx-auto">
          {team.map((member, idx) => {
            const inner = (
              <>
                <div className="aspect-[4/5] overflow-hidden rounded-2xl mb-4 md:mb-6">
                  <img
                    src={member.img}
                    alt={member.name}
                    loading="lazy"
                    className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="px-2 md:px-4 pb-4 md:pb-6 space-y-3 md:space-y-4">
                  <div className="text-center">
                    <h4 className="text-2xl md:text-3xl font-bold italic font-urbanist">{member.name}</h4>
                    <p className="text-zinc-500 text-xs md:text-sm font-medium tracking-widest uppercase mt-1">{member.role}</p>
                  </div>
                  <div className="w-full h-[1px] bg-zinc-800" />
                  <p className="text-zinc-400 text-center text-sm md:text-lg leading-relaxed">{member.bio}</p>
                </div>
              </>
            );

            if (isMobile) {
              return (
                <FadeInView
                  key={member.name}
                  delay={idx * 0.1}
                  className="group bg-zinc-900 rounded-3xl p-3 md:p-4 border border-white/5"
                >
                  {inner}
                </FadeInView>
              );
            }

            return (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-zinc-900 rounded-3xl p-4 border border-white/5"
              >
                {inner}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
*/

const Team: React.FC = () => {
  return null;
};

export default Team;
