import React, { useState, useEffect, lazy, Suspense, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from '../Navbar';
import Hero from '../Hero';

import { useIsMobile } from '../useIsMobile';
import Lenis from 'lenis';

const About = lazy(() => import('../About'));
const Stats = lazy(() => import('../Stats'));
const Services = lazy(() => import('../Services'));
const Projects = lazy(() => import('../Projects'));
const Process = lazy(() => import('../Process'));
const Team = lazy(() => import('../Team'));
const Pricing = lazy(() => import('../Pricing'));
const FAQ = lazy(() => import('../FAQ'));
const Contact = lazy(() => import('../Contact'));
const Footer = lazy(() => import('../Footer'));
const LazyTalentPage = lazy(() => import('../TalentPage'));
const LazyCareersPage = lazy(() => import('../CareersPage'));

import FilmGrain from '../shared/FilmGrain';
import SectionDivider from '../shared/SectionDivider';

const Blank: React.FC = () => <div className="min-h-0" />;

const PageLoader: React.FC = () => (
  <div className="fixed inset-0 bg-black flex items-center justify-center z-[200]">
    <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin" />
  </div>
);

const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-white z-[100] origin-left"
      style={{ scaleX }}
    />
  );
};

const HomePage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'talent' | 'careers'>('home');
  const isMobile = useIsMobile();
  const lenisRef = useRef<Lenis | null>(null);

  // Legacy hash-based page routing for Talent and Careers (preserved)

  // Lenis smooth scroll (desktop only)
  useEffect(() => {
    if (isMobile) return;

    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
      infinite: false,
    });

    lenis.scrollTo(0, { immediate: true });
    lenisRef.current = lenis;

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [isMobile]);

  // Hash-based page routing for Talent and Careers (preserved)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#/talent') setCurrentPage('talent');
      else if (hash === '#/careers') setCurrentPage('careers');
      else setCurrentPage('home');
    };
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (currentPage === 'talent' || currentPage === 'careers') {
    return (
      <div className="relative bg-black text-white min-h-screen selection:bg-white selection:text-black">
        <FilmGrain />
        {!isMobile && <ScrollProgress />}
        <Suspense fallback={<PageLoader />}>
          {currentPage === 'talent' ? (
            <LazyTalentPage />
          ) : (
            <LazyCareersPage />
          )}
        </Suspense>
      </div>
    );
  }

  return (
    <div className="relative bg-black text-white min-h-screen selection:bg-white selection:text-black">
      <FilmGrain />
      {!isMobile && <ScrollProgress />}

      {/* Critical above-fold — loaded immediately */}
      <Navbar />
      <Hero />

      {/* Below-fold — lazy loaded, won't block first paint */}
      <Suspense fallback={<Blank />}>
        <main>
          <About />
          <SectionDivider />
          <Stats />
          <SectionDivider />
          <Services />
          <SectionDivider />
          <Projects />
          <SectionDivider />
          <Process />
          <SectionDivider />
          <Team />
          <SectionDivider />
          <Pricing />
          <SectionDivider />
          <FAQ />
          <SectionDivider />
          <Contact />
        </main>
        <Footer />
      </Suspense>
    </div>
  );
};

export default HomePage;
