import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useImageScaleAnimation = (
    ref: React.RefObject<HTMLElement | null>,
    selector: string = ".image-scale-animation-item"
) => {
    useEffect(() => {
        if (!ref.current) return;

        if (window.innerWidth <= 1023) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                selector,
                { scale: 0.1 },
                {
                    scale: 1,
                    transformOrigin: "center bottom",
                    duration: 2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ref.current,
                        scrub: 4,
                        start: "top 100%",
                        end: "bottom 70%",
                    },
                }
            );
        }, ref);

        return () => ctx.revert();
    }, [ref, selector]);
};

export default useImageScaleAnimation;