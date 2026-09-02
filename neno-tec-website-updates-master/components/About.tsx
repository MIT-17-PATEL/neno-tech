
import React from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from './useIsMobile';
import FadeInView from './FadeInView';

const About: React.FC = () => {
  const text = "NENOTECHNOLOGY is your partner in building the future of business through intelligent automation. We specialize in custom AI solution building, proprietary AI products, and autonomous calling agents. Our mission is to bridge the gap between traditional enterprise systems and the next era of artificial intelligence, delivering scalable ERP and CRM solutions that think for you...";
  
  const words = text.split(" ");
  const isMobile = useIsMobile();

  return (
    <section id="about" className="py-20 md:py-32 px-4 md:px-12 lg:px-24 bg-zinc-950/30">
      <div className="max-w-[1920px] mx-auto grid lg:grid-cols-4 gap-8 md:gap-12 items-start">
        <div className="flex items-center gap-3">
          <div className="w-10 h-6 bg-zinc-800 flex items-center justify-between px-1">
             {[1,2,3,4,5].map(i => <div key={i} className="w-[1px] h-full bg-white/50" />)}
          </div>
          <span className="text-sm font-bold tracking-widest uppercase text-zinc-500">The Mission</span>
        </div>
        
        <div className="lg:col-span-3">
          {isMobile ? (
            /* Mobile: single CSS fade-in, zero Framer Motion */
            <FadeInView yOffset={30}>
              <h3 style={{ fontFamily: "'Playfair Display', serif" }} className="text-2xl font-normal italic leading-relaxed tracking-normal">
                {text}
              </h3>
            </FadeInView>
          ) : (
            /* Desktop: word-by-word reveal (runs once) */
            <h3 style={{ fontFamily: "'Playfair Display', serif" }} className="text-xl md:text-2xl lg:text-4xl font-normal italic leading-relaxed tracking-normal">
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0.1 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 0.5, delay: i * 0.03 }}
                  className="inline-block mr-[0.2em]"
                >
                  {word}
                </motion.span>
              ))}
            </h3>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
