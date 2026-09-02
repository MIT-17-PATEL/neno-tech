"use client";

import {
  useSprings,
  animated,
  easings,
  EasingFunction,
} from "@react-spring/web";

import React, {
  useEffect,
  useRef,
  useState,
  ReactNode,
  ReactElement,
} from "react";

// Map easing values safely
const getEasingFunction = (
  easing: EasingFunction | keyof typeof easings
): EasingFunction => {
  if (typeof easing === "function") return easing;

  const easingMap: Partial<Record<keyof typeof easings, EasingFunction>> = {
    easeOutCubic: easings.easeOutCubic,
    easeInOutCubic: easings.easeInOutCubic,
    easeOutQuad: easings.easeOutQuad,
  };

  return easingMap[easing] || easings.linear;
};

interface SplitTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animationFrom?: React.CSSProperties;
  animationTo?: React.CSSProperties;
  easing?: EasingFunction | keyof typeof easings;
  threshold?: number;
  rootMargin?: string;
  textAlign?: React.CSSProperties["textAlign"];
}

const SplitTextV2 = ({
  children,
  className = "",
  delay = 100,
  animationFrom = {
    opacity: 0,
    transform: "translate3d(0,40px,0)",
  },
  animationTo = {
    opacity: 1,
    transform: "translate3d(0,0,0)",
  },
  easing = "easeOutCubic",
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign = "center",
}: SplitTextProps) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  // Count letters safely
  const countLetters = (node: ReactNode): number => {
    if (typeof node === "string" || typeof node === "number") {
      return node.toString().length;
    }

    if (Array.isArray(node)) {
      return node.reduce((sum, child) => sum + countLetters(child), 0);
    }

    if (React.isValidElement(node)) {
      const props = node.props as { children?: ReactNode };
      return countLetters(props.children);
    }

    return 0;
  };

  const totalLetters = countLetters(children);

  // Intersection Observer
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

  // Springs
  const springs = useSprings(
    totalLetters,
    Array.from({ length: totalLetters }).map((_, i) => ({
      from: animationFrom,
      to: inView ? animationTo : animationFrom,
      delay: i * delay,
      config: {
        easing: getEasingFunction(easing),
      },
    }))
  );

  // SAFE index tracker (no ref mutation during render)
  const renderWithSprings = (
    node: ReactNode,
    index: { current: number }
  ): ReactNode => {
    if (typeof node === "string" || typeof node === "number") {
      return node
        .toString()
        .split("")
        .map((char, i) => {
          const style = springs[index.current];
          index.current++;

          if (char === " ") {
            return (
              <span
                key={i}
                style={{
                  display: "inline-block",
                  width: "0.3em",
                }}
              >
                &nbsp;
              </span>
            );
          }

          return (
            <animated.span
              key={i}
              style={{
                ...style,
                display: "inline-block",
                willChange: "transform, opacity",
              }}
            >
              {char}
            </animated.span>
          );
        });
    }

    if (Array.isArray(node)) {
      return node.map((child, idx) => (
        <React.Fragment key={idx}>
          {renderWithSprings(child, index)}
        </React.Fragment>
      ));
    }

    if (React.isValidElement(node)) {
      if (node.type === "br") return node;

      const props = node.props as { children?: ReactNode };

      const newChildren = renderWithSprings(props.children, index);

      return React.cloneElement(
        node as ReactElement<{ children?: ReactNode }>,
        { children: newChildren }
      );
    }

    return null;
  };

  // FIX: no ref mutation during render
  const animatedContent = renderWithSprings(children, { current: 0 });

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
      {animatedContent}
    </span>
  );
};

export default SplitTextV2;