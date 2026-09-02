
import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const isTouchDevice = () =>
  typeof window !== 'undefined' &&
  ('ontouchstart' in window || navigator.maxTouchPoints > 0);

const CustomCursor: React.FC = () => {
  const mouseX = useSpring(0, { stiffness: 500, damping: 50 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 50 });
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (isTouchDevice()) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 10);
      mouseY.set(e.clientY - 10);
      if (!isVisible) setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY, isVisible]);

  if (isTouch) return null;

  return (
    <motion.div
      className="custom-cursor hidden lg:block"
      style={{
        x: mouseX,
        y: mouseY,
        opacity: isVisible ? 1 : 0
      }}
    />
  );
};

export default CustomCursor;
