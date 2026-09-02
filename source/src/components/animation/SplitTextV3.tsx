"use client";
import { useSprings, animated, EasingFunction } from "@react-spring/web";
import React, { useEffect, useRef, useState, ReactNode } from "react";

// Use react-spring's built-in easings without importing them in parent
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
    t < 0.5 ? 8 * t * t : 1 - 8 * --t * t * t * t,
} as const;

type EasingName = keyof typeof EASINGS;

interface SplitTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animationFrom?: React.CSSProperties;
  animationTo?: React.CSSProperties;
  easing?: EasingName; // <- no more any
  threshold?: number;
  rootMargin?: string;
  textAlign?: React.CSSProperties["textAlign"];
}

const SplitTextV3 = ({
  children,
  className = "",
  delay = 12,
  animationFrom = { opacity: 0, transform: "translate3d(0,50px,0)" },
  animationTo = { opacity: 1, transform: "translate3d(0,0,0)" },
  easing = "easeOutCubic",
  threshold = 0.2,
  rootMargin = "-50px",
  textAlign = "center",
}: SplitTextProps) => {
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

  // --- Normalize children to an array of plain strings and break markers ---
  const childrenArray = React.Children.toArray(children);
  const parts: (string | { type: "break" })[] = [];
  let currentText = "";

  childrenArray.forEach((child) => {
    if (typeof child === "string") {
      currentText += child;
    } else if (React.isValidElement(child) && child.type === "br") {
      if (currentText !== "") {
        parts.push(currentText);
        currentText = "";
      }
      parts.push({ type: "break" });
    }
  });
  if (currentText !== "") parts.push(currentText);

  // --- Convert each text part into a list of "letter objects" for animation ---
  const animatedLetters: { node: ReactNode; key: string }[] = [];

  parts.forEach((part, partIdx) => {
    if (typeof part === "string") {
      const words = part.split(" ");
      words.forEach((word, wIdx) => {
        const letters = word.split("");
        letters.forEach((letter, lIdx) => {
          animatedLetters.push({
            node: letter,
            key: `letter-${partIdx}-${wIdx}-${lIdx}`,
          });
        });
        if (wIdx !== words.length - 1) {
          animatedLetters.push({
            node: "\u00A0",
            key: `space-${partIdx}-${wIdx}`,
          });
        }
      });
    } else if (part.type === "break") {
      animatedLetters.push({
        node: null,
        key: `break-${partIdx}`,
      });
    }
  });

  const animatableItems = animatedLetters.filter((item) => item.node !== null);
  const springs = useSprings(
    animatableItems.length,
    animatableItems.map((_, i) => ({
      from: animationFrom,
      to: inView ? animationTo : animationFrom,
      delay: i * delay,
      config: { easing: resolvedEasing },
    }))
  );

  // Rebuild JSX - removed unused idx parameter
  let springIndex = 0;
  const renderedElements = animatedLetters.map((item) => {
    if (item.node === null) {
      return <br key={item.key} />;
    }
    const style = springs[springIndex++];
    return (
      <animated.span
        key={item.key}
        style={{
          ...style,
          display: "inline-block",
          willChange: "transform, opacity",
        }}
      >
        {item.node}
      </animated.span>
    );
  });

  return (
    <span
      ref={ref}
      className={`split-parent ${className}`}
      style={{
        textAlign,
        lineHeight: 1.1,
        overflow: "hidden",
        display: "inline",
        whiteSpace: "normal",
      }}
    >
      {renderedElements}
    </span>
  );
};

export default SplitTextV3;