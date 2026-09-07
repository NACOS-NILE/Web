"use client";

import { motion, useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useState } from "react";

const CIRCLE_RADIUS = 18;

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.3,
  });
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    setVisible(value > 0.08);
  });

  return (
    <>
      {/* Top scroll-progress bar */}
      <motion.div
        aria-hidden="true"
        className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-linear-to-r from-nacos-blue via-nacos-accent to-nacos-accent-light"
        style={{ scaleX: progress }}
      />

      {/* Floating back-to-top with circular progress ring */}
      <a
        href="#top"
        aria-label="Back to top"
        className={`fixed right-5 bottom-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-nacos-dark text-white shadow-lg shadow-nacos-dark/20 transition-opacity duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nacos-accent sm:right-8 sm:bottom-8 ${
          visible ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <svg
          className="absolute inset-0 h-full w-full -rotate-90"
          viewBox="0 0 40 40"
          aria-hidden="true"
        >
          <circle
            cx="20"
            cy="20"
            r={CIRCLE_RADIUS}
            fill="none"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="2"
          />
          <motion.circle
            cx="20"
            cy="20"
            r={CIRCLE_RADIUS}
            fill="none"
            stroke="#60a5fa"
            strokeWidth="2"
            strokeLinecap="round"
            style={{
              pathLength: progress,
            }}
          />
        </svg>
        <ArrowUp className="h-4 w-4" strokeWidth={2.5} />
      </a>
    </>
  );
}
