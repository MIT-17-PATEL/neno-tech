import React, { useRef, useEffect, useState } from 'react';

interface FadeInViewProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** CSS translate-Y distance in px (default 24) */
  yOffset?: number;
  /** Intersection threshold 0-1 (default 0.1) */
  threshold?: number;
  /** Render as a different HTML element (default div) */
  as?: keyof JSX.IntrinsicElements;
  style?: React.CSSProperties;
}

/**
 * Lightweight scroll-triggered fade-in using native IntersectionObserver
 * and CSS transitions. Zero JavaScript animation — the browser compositor
 * thread handles everything, matching native Framer performance.
 */
const FadeInView: React.FC<FadeInViewProps> = ({
  children,
  className = '',
  delay = 0,
  yOffset = 24,
  threshold = 0.1,
  as: Tag = 'div',
  style,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => setVisible(true), delay * 1000);
          } else {
            setVisible(true);
          }
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, threshold]);

  const animStyle: React.CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : `translateY(${yOffset}px)`,
    transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)`,
    willChange: 'opacity, transform',
    ...style,
  };

  return React.createElement(
    Tag,
    { ref, className, style: animStyle },
    children
  );
};

export default FadeInView;
