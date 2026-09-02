import { useState, useEffect } from 'react';

let cachedIsMobile: boolean | null = null;

function checkIsMobile(): boolean {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768 || 
    ('ontouchstart' in window && window.innerWidth < 1024);
}

/**
 * Lightweight mobile detection hook.
 * Uses a cached value to avoid redundant checks across components.
 */
export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(() => {
    if (cachedIsMobile !== null) return cachedIsMobile;
    cachedIsMobile = checkIsMobile();
    return cachedIsMobile;
  });

  useEffect(() => {
    const onResize = () => {
      const val = checkIsMobile();
      cachedIsMobile = val;
      setIsMobile(val);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return isMobile;
}

/**
 * Non-hook version for use outside of components.
 */
export function getIsMobile(): boolean {
  if (cachedIsMobile !== null) return cachedIsMobile;
  cachedIsMobile = checkIsMobile();
  return cachedIsMobile;
}
