import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Options = {
    xStart?: number;
    xEnd?: number;
    scrub?: number;
    end?: string;
};

const useLeftRightScroll = <T extends HTMLElement | null>(
    ref: React.RefObject<T>,
    options: Options = {}
) => {
    const {
        xStart = -30,
        xEnd = 0,
        scrub = 4,
        end = "bottom center",
    } = options;

    useEffect(() => {
        if (!ref.current) return;

        const el = ref.current;

        const ctx = gsap.context(() => {
            gsap.set(el, { xPercent: xStart });

            gsap.to(el, {
                xPercent: xEnd,
                ease: "none",
                scrollTrigger: {
                    trigger: el,
                    end,
                    scrub,
                },
            });
        }, el);

        return () => ctx.revert();
    }, [ref, xStart, xEnd, scrub, end]);
};

export default useLeftRightScroll;
