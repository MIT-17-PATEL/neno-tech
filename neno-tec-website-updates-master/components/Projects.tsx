
import React, { useRef, useState, useEffect, useCallback } from 'react';
import { useIsMobile } from './useIsMobile';
import FadeInView from './FadeInView';

const projects = [
  {
    name: "AI-Powered CRM System",
    impact: "Intelligent CRM featuring automated proposal follow-ups, lead management, and a conversational AI agent for database queries.",
    industry: "Enterprise / Automation",
    status: "2024",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600"
  },
  {
    name: "Smart Email Outreach",
    impact: "Personalized outreach platform that generates customized content based on prospect research and intelligent timing optimization.",
    industry: "Sales Tech",
    status: "2024",
    img: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=1600"
  },
  {
    name: "AyuGPT - Ayurvedic AI",
    impact: "Bringing ancient Ayurvedic wisdom into the modern age with specialized conversational AI for personalized health guidance.",
    industry: "Healthcare / Wellness",
    status: "Active",
    img: "/Gemini_Generated_Image_wklwp8wklwp8wklw.png"
  },
  {
    name: "Enterprise Data Hub",
    impact: "Fortune 500 analytics solution integrating multiple data sources into a unified visualization platform with predictive forecasting.",
    industry: "Data Intelligence",
    status: "Deployed",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600"
  }
];

/* ─── Mobile Carousel ─────────────────────────────────────────── */
const MobileCarousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollLeft = el.scrollLeft;
    const cardWidth = el.scrollWidth / projects.length;
    const idx = Math.round(scrollLeft / cardWidth);
    setActive(Math.min(idx, projects.length - 1));
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollTo = (idx: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / projects.length;
    el.scrollTo({ left: cardWidth * idx, behavior: 'smooth' });
  };

  return (
    <FadeInView className="w-full">
      {/* Scrollable track */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 hide-scrollbar"
        style={{
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {projects.map((proj) => (
          <div
            key={proj.name}
            className="flex-shrink-0 w-[85vw] bg-zinc-950 rounded-2xl border border-white/5 overflow-hidden"
            style={{ scrollSnapAlign: 'center' }}
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden bg-zinc-900">
              <img
                src={proj.img}
                alt={proj.name}
                loading="lazy"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            </div>

            {/* Info */}
            <div className="p-5 space-y-4">
              <div>
                <span className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.15em]">Solution</span>
                <h3 className="text-white font-bold text-lg tracking-tight mt-1">{proj.name}</h3>
              </div>
              <p className="text-zinc-400 text-xs leading-relaxed font-medium line-clamp-3">{proj.impact}</p>
              <div className="flex items-center justify-between pt-2 border-t border-white/5">
                <div>
                  <span className="text-zinc-600 text-[9px] font-black uppercase tracking-[0.15em]">Industry</span>
                  <p className="text-white font-bold text-sm tracking-tight">{proj.industry}</p>
                </div>
                <div className="text-right">
                  <span className="text-zinc-600 text-[9px] font-black uppercase tracking-[0.15em]">Status</span>
                  <div className="flex items-center gap-1.5 justify-end">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-white font-bold text-sm tracking-tight">{proj.status}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dot indicators */}
      <div className="flex items-center justify-center gap-2 mt-5">
        {projects.map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollTo(idx)}
            aria-label={`Go to project ${idx + 1}`}
            className={`rounded-full transition-all duration-300 ${
              active === idx
                ? 'w-6 h-2 bg-white'
                : 'w-2 h-2 bg-zinc-700'
            }`}
          />
        ))}
      </div>
    </FadeInView>
  );
};

/* ─── Desktop Stacking Card ───────────────────────────────────── */
const STICKY_TOP_BASE = 80;
const STICKY_TOP_STEP = 30;

const DesktopCard: React.FC<{
  proj: typeof projects[0];
  idx: number;
  totalCards: number;
}> = ({ proj, idx, totalCards }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isLast = idx === totalCards - 1;
  const stickyTop = STICKY_TOP_BASE + idx * STICKY_TOP_STEP;
  const [progress, setProgress] = useState(0);
  const [hovered, setHovered] = useState(false);

  // Track how much the NEXT card is overlapping this one
  useEffect(() => {
    if (isLast) return;

    const handleScroll = () => {
      const el = cardRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      // When the card is stuck, rect.top === stickyTop
      // The next card will push this one: measure how far from stuck position to off-screen
      const cardBottom = rect.top + rect.height;
      const viewportH = window.innerHeight;
      // progress: 0 = next card hasn't reached this card yet, 1 = next card fully covers
      const nextCardStickyTop = stickyTop + STICKY_TOP_STEP;
      const travel = viewportH - nextCardStickyTop;
      const raw = 1 - (cardBottom - nextCardStickyTop) / travel;
      setProgress(Math.max(0, Math.min(1, raw)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLast, stickyTop]);

  // Derive visual effects from progress
  const scaleVal = isLast ? 1 : 1 - progress * 0.08;        // 1 → 0.92
  const brightnessVal = isLast ? 1 : 1 - progress * 0.45;   // 1 → 0.55

  return (
    <div
      ref={cardRef}
      className="flex flex-col overflow-hidden rounded-[50px] p-6 lg:p-10 border border-white/5 bg-zinc-950 origin-top will-change-transform"
      style={{
        position: "sticky",
        top: stickyTop,
        zIndex: idx + 1,
        height: "80vh",
        marginBottom: isLast ? 0 : "15vh",
        transform: `scale(${scaleVal})`,
        filter: `brightness(${brightnessVal})`,
        transition: "transform 0.1s linear, filter 0.1s linear",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative flex-grow overflow-hidden rounded-[36px] bg-zinc-900">
        <img
          src={proj.img}
          alt={proj.name}
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: hovered ? 1 : 0.28,
            filter: hovered ? 'grayscale(0%) brightness(1)' : 'grayscale(60%) brightness(0.5)',
            transform: hovered ? 'scale(1.08)' : 'scale(1)',
            transition: 'opacity 0.7s ease, filter 0.7s ease, transform 0.9s ease',
          }}
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600";
          }}
        />
        {/* Dark overlay — lighter on hover */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: hovered ? 'rgba(0,0,0,0.08)' : 'rgba(0,0,0,0.55)',
            transition: 'background 0.7s ease',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
      </div>

      {/* Data Grid */}
      <div className="grid grid-cols-4 gap-6 lg:gap-12 py-6 lg:py-10 px-2 lg:px-6 mt-4">
        <div className="flex flex-col gap-3">
          <span className="text-zinc-600 text-[11px] font-black uppercase tracking-[0.2em]">Solution</span>
          <span className="text-white font-bold text-xl lg:text-3xl tracking-tighter">{proj.name}</span>
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-zinc-600 text-[11px] font-black uppercase tracking-[0.2em]">Impact</span>
          <span className="text-zinc-400 text-sm lg:text-base leading-relaxed font-medium">{proj.impact}</span>
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-zinc-600 text-[11px] font-black uppercase tracking-[0.2em]">Industry</span>
          <span className="text-white font-bold text-base lg:text-lg tracking-tight">{proj.industry}</span>
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-zinc-600 text-[11px] font-black uppercase tracking-[0.2em]">Status</span>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-white font-bold text-base lg:text-lg tracking-tight">{proj.status}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─── Main Section ────────────────────────────────────────────── */
const Projects: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <section id="projects" className="py-20 md:py-32 px-4 md:px-12 lg:px-24 bg-black">
      <div className="max-w-[1920px] mx-auto flex flex-col items-center gap-10 md:gap-24">
        {/* Header */}
        <div className="text-center space-y-5 md:space-y-8">
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-6 bg-zinc-800 flex items-center justify-between px-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-[1px] h-full bg-white/50" />
              ))}
            </div>
            <span className="text-sm font-bold tracking-widest uppercase text-zinc-500">Case Studies</span>
          </div>
          <h2 className="text-4xl md:text-8xl lg:text-[100px] font-arapey italic leading-none">
            Our Proof of <span className="font-urbanist font-normal not-italic text-zinc-400">Concept</span>
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto text-sm md:text-lg font-medium leading-relaxed">
            High-impact AI deployments that transformed internal operations and external outreach for our partners.
          </p>
        </div>

        {/* Cards */}
        {isMobile ? (
          <MobileCarousel />
        ) : (
          <div className="w-full">
            {projects.map((proj, idx) => (
              <DesktopCard
                key={proj.name}
                proj={proj}
                idx={idx}
                totalCards={projects.length}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
