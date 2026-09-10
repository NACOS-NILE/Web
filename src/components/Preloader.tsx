"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    // 2.2s cinematic preloader sequence
    const timer = setTimeout(() => {
      setComplete(true);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {!complete && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#070913] text-[#ded9d7] overflow-hidden select-none pointer-events-auto"
        >
          {/* Central Architectural Drawn NACOS Logo & Circuitry */}
          <div className="relative z-10 flex flex-col items-center justify-center">
            <div className="relative w-[110px] md:w-[130px] h-[110px] md:h-[130px] mb-8 flex items-center justify-center">
              {/* Animated Vector Circuitry & Rings */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Outer Circular Boundary */}
                <motion.circle
                  cx="100"
                  cy="100"
                  r="92"
                  stroke="#60a5fa"
                  strokeWidth="3"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.4, ease: "easeInOut" }}
                />

                {/* Inner Concentric Tech Track */}
                <motion.circle
                  cx="100"
                  cy="100"
                  r="82"
                  stroke="#60a5fa"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.7 }}
                  transition={{ duration: 1.2, delay: 0.2, ease: "easeInOut" }}
                />

                {/* Circuit Bus Radiating Traces */}
                <motion.path
                  d="M100 40 V15 M100 160 V185 M40 100 H15 M160 100 H185 M55 55 L35 35 M145 55 L165 35 M55 145 L35 165 M145 145 L165 165"
                  stroke="#60a5fa"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.9 }}
                  transition={{ duration: 1.2, delay: 0.4, ease: "easeInOut" }}
                />

                {/* Terminal Circuit Nodes */}
                <motion.circle
                  cx="100"
                  cy="15"
                  r="3.5"
                  fill="#60a5fa"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.9, duration: 0.3 }}
                />
                <motion.circle
                  cx="100"
                  cy="185"
                  r="3.5"
                  fill="#60a5fa"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.9, duration: 0.3 }}
                />
                <motion.circle
                  cx="15"
                  cy="100"
                  r="3.5"
                  fill="#60a5fa"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.9, duration: 0.3 }}
                />
                <motion.circle
                  cx="185"
                  cy="100"
                  r="3.5"
                  fill="#60a5fa"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.9, duration: 0.3 }}
                />
                <motion.circle
                  cx="35"
                  cy="35"
                  r="3"
                  fill="#10b981"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1, duration: 0.3 }}
                />
                <motion.circle
                  cx="165"
                  cy="35"
                  r="3"
                  fill="#10b981"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1, duration: 0.3 }}
                />
                <motion.circle
                  cx="35"
                  cy="165"
                  r="3"
                  fill="#10b981"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1, duration: 0.3 }}
                />
                <motion.circle
                  cx="165"
                  cy="165"
                  r="3"
                  fill="#10b981"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1, duration: 0.3 }}
                />

                {/* Microprocessor Die Border */}
                <motion.rect
                  x="64"
                  y="64"
                  width="72"
                  height="72"
                  rx="6"
                  stroke="#60a5fa"
                  strokeWidth="2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.8 }}
                  transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
                />
              </svg>

              {/* Official NACOS Circular Logo Glowing in Center */}
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-16 md:w-20 h-16 md:h-20 rounded-full overflow-hidden p-1 shadow-[0_0_30px_rgba(96, 165, 250,0.4)]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo.png"
                  alt="NACOS Emblem"
                  className="w-full h-full object-contain rounded-full"
                />
              </motion.div>
            </div>

            {/* Kinetic Split Typography Reveal */}
            <div className="overflow-hidden text-center">
              <motion.div
                initial={{ y: "120%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="font-rector text-[32px] md:text-[48px] font-normal tracking-[-0.03em] uppercase text-[#f4f2ee]"
              >
                NACOS NILE
              </motion.div>
            </div>

            <div className="overflow-hidden mt-1 text-center">
              <motion.p
                initial={{ y: "120%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="text-[11px] md:text-[13px] font-mono tracking-[0.3em] uppercase text-[#60a5fa]/80"
              >
                Learn • Build • Grow • Excellence
              </motion.p>
            </div>
          </div>

          {/* Bottom Progress Line */}
          <div className="absolute bottom-0 left-0 w-full h-[3px] bg-white/5">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.1, ease: "easeInOut" }}
              className="h-full bg-[#60a5fa]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
