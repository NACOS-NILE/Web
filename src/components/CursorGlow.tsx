"use client";

import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CursorGlow() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 125);
      cursorY.set(e.clientY - 125);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 w-[250px] h-[250px] bg-blue-500/20 dark:bg-nacos-accent/30 rounded-full blur-[80px] z-0 mix-blend-multiply dark:mix-blend-screen transition-colors duration-300"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
    />
  );
}