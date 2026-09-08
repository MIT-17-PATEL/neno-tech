"use client";

import { ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type AnimationType =
    | "parallax"
    | "leftRight"
    | "scale"
    | "fadeLeft";

interface AppMotionProps {
    children: ReactNode;
    className?: string;
    animation: AnimationType;
}

const AppMotion = ({
    children,
    className = "",
    animation,
}: AppMotionProps) => {
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!ref.current) return;

        const el = ref.current;

        const ctx = gsap.context(() => {
            // ========================
            // PARALLAX
            // ========================
            if (animation === "parallax") {
                gsap.set(el, { yPercent: 80 });

                gsap.to(el, {
                    yPercent: -80,
                    ease: "none",
                    scrollTrigger: {
                        trigger: el,
                        start: "top bottom",
                        end: "bottom center",
                        scrub: 1,
                    },
                });
            }

            // ========================
            // LEFT RIGHT SCROLL
            // ========================
            if (animation === "leftRight") {
                gsap.set(el, { xPercent: -30 });

                gsap.to(el, {
                    xPercent: 0,
                    ease: "none",
                    scrollTrigger: {
                        trigger: el,
                        scrub: 4,
                        end: "bottom center",
                    },
                });
            }

            // ========================
            // SCALE
            // ========================
            if (animation === "scale") {
                gsap.fromTo(
                    el,
                    { scale: 0.1 },
                    {
                        scale: 1,
                        duration: 2,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: el,
                            scrub: 4,
                            start: "top 100%",
                            end: "bottom 70%",
                        },
                    }
                );
            }

            // ========================
            // FADE LEFT
            // ========================
            if (animation === "fadeLeft") {
                gsap.set(el, {
                    autoAlpha: 0,
                    xPercent: -20,
                });

                gsap.to(el, {
                    autoAlpha: 1,
                    xPercent: 0,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top bottom-=100",
                        toggleActions: "play none none reverse",
                    },
                });
            }
        }, ref);

        return () => ctx.revert();
    }, [animation]);

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    );
};

export default AppMotion;
