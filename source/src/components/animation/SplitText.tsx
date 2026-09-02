"use client";
import { useSprings, animated, EasingFunction } from "@react-spring/web";
import React, { useEffect, useRef, useState, ReactNode } from "react";

// Define only the easings you need. These are the actual react-spring curves.
const EASINGS = {
  linear: (t: number) => t,
  easeInQuad: (t: number) => t * t,
  easeOutQuad: (t: number) => t * (2 - t),
  easeInOutQuad: (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
  easeInCubic: (t: number) => t * t * t,
  easeOutCubic: (t: number) => --t * t * t + 1,
  easeInOutCubic: (t: number) =>
    t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
  easeInQuart: (t: number) => t * t * t * t,
  easeOutQuart: (t: number) => 1 - --t * t * t * t,
  easeInOutQuart: (t: number) =>
    t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t,
  easeInBack: (t: number) => t * t * (2.70158 * t - 1.70158),
  easeOutBack: (t: number) => 1 + --t * t * (2.70158 * t + 1.70158),
} as const;

type EasingName = keyof typeof EASINGS;

interface SplitTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animationFrom?: React.CSSProperties;
  animationTo?: React.CSSProperties;
  easing?: EasingName; // typed string keys, no any
  threshold?: number;
  rootMargin?: string;
  textAlign?: React.CSSProperties["textAlign"];
}

const SplitText = ({
  children,
  className = "",
  delay = 100,
  animationFrom = { opacity: 0, transform: "translate3d(0,40px,0)" },
  animationTo = { opacity: 1, transform: "translate3d(0,0,0)" },
  easing = "easeOutCubic",
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign = "center",
}: SplitTextProps) => {
  const nodes = Array.isArray(children) ? children : [children];

  const lines: (string | null)[] = [];
  nodes.forEach((node) => {
    if (typeof node === "string") {
      lines.push(node);
    } else if (React.isValidElement(node) && node.type === "br") {
      lines.push(null);
    }
  });

  const wordsByLine: (string[][] | null)[] = lines.map((line) =>
    typeof line === "string"
      ? line.split(" ").map((word) => word.split(""))
      : null
  );

  const letters: string[] = wordsByLine
    .filter((line): line is string[][] => line !== null)
    .flat()
    .flat();

  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  const resolvedEasing: EasingFunction = EASINGS[easing];

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const springs = useSprings(
    letters.length,
    letters.map((_, i) => ({
      from: animationFrom,
      to: inView ? animationTo : animationFrom,
      delay: i * delay,
      config: { easing: resolvedEasing },
    }))
  );

  let globalIndex = 0;

  return (
    <span
      ref={ref}
      className={`split-parent ${className}`}
      style={{
        textAlign,
        lineHeight: "1.1",
        overflow: "hidden",
        display: "inline",
        whiteSpace: "normal",
      }}
    >
      {wordsByLine.map((words, lineIndex) => {
        if (words === null) {
          return <br key={lineIndex} />;
        }

        return (
          <span key={lineIndex}>
            {words.map((word, wordIndex) => (
              <span
                key={wordIndex}
                style={{ display: "inline-block", whiteSpace: "nowrap" }}
              >
                {word.map((letter) => {
                  const style = springs[globalIndex];
                  globalIndex += 1;

                  return (
                    <animated.span
                      key={globalIndex}
                      style={{
                        ...style,
                        display: "inline-block",
                        willChange: "transform, opacity",
                      }}
                    >
                      {letter}
                    </animated.span>
                  );
                })}
                <span style={{ display: "inline-block", width: "0.3em" }}>
                  &nbsp;
                </span>
              </span>
            ))}
          </span>
        );
      })}
    </span>
  );
};

export default SplitText;