import React, { lazy, Suspense, useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from '../Navbar';
import Footer from '../Footer';

import { useIsMobile } from '../useIsMobile';
import Lenis from 'lenis';
import ScrollProgress from './ScrollProgress';
import PageTransition from './PageTransition';

import FilmGrain from './FilmGrain';

const PageLoader: React.FC = () => (
  <div className="fixed inset-0 bg-black flex items-center justify-center z-[200]">
    <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin" />
  </div>
);

const LayoutWrapper: React.FC = () => {
  const isMobile = useIsMobile();
  const location = useLocation();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (isMobile) return;

    // Reset window scroll to 0 BEFORE Lenis initializes so Lenis reads scrollY = 0
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
      infinite: false,
    });

    // Immediately force Lenis to 0
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

  // Scroll to top on every route change — works with and without Lenis
  useEffect(() => {
    const forceScrollTop = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      if (lenisRef.current) {
        lenisRef.current.scrollTo(0, { immediate: true });
      }
    };

    forceScrollTop();

    // Run again after short delays to catch async renders/animations
    const t1 = setTimeout(forceScrollTop, 20);
    const t2 = setTimeout(forceScrollTop, 100);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [location.pathname]);

  return (
    <div className="relative bg-black text-white min-h-screen selection:bg-white selection:text-black">
      <FilmGrain />
      {!isMobile && <ScrollProgress />}
      <Suspense fallback={<PageLoader />}>
        <Navbar />
        <main className="min-h-screen">
          <AnimatePresence mode="wait">
            <PageTransition key={location.pathname}>
              <Outlet />
            </PageTransition>
          </AnimatePresence>
        </main>
        <Footer />
      </Suspense>
    </div>
  );
};

export default LayoutWrapper;
