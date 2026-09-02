import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Options = {
  start?: string;
  end?: string;
  scrub?: number | boolean;
  yStart?: number;
  yEnd?: number;
  breakpoint?: number;
};

const useParallaxScroll = <T extends HTMLElement>(
  ref: React.RefObject<T | null>,
  options?: Options
) => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const element = ref.current;
    if (!element) return;

    const {
      start = "top bottom",
      end = "bottom center",
      scrub = 1,
      yStart = 80,
      yEnd = -80,
      breakpoint = 1023,
    } = options || {};

    // Only run on large screens
    if (window.innerWidth <= breakpoint) return;

    // Use GSAP context for safer cleanup (recommended)
    const ctx = gsap.context(() => {
      gsap.set(element, { yPercent: yStart });

      gsap.to(element, {
        yPercent: yEnd,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start,
          end,
          scrub,
        },
      });
    }, element);

    return () => {
      ctx.revert(); // kills everything safely
    };
  }, [ref, options]);
};

export default useParallaxScroll;