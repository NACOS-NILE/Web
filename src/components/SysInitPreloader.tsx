"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BOOT_LINES = [
  "NACOS_NILE.OS v2.0.26 — BOOT SEQUENCE INITIATED",
  "SYS: Authenticating member credentials...",
  "NET: Establishing peer-to-peer mesh...",
  "HUB: Loading community nodes [██████████] 100%",
  "SYS: ALL SYSTEMS NOMINAL — WELCOME TO THE NETWORK",
];

export default function SysInitPreloader({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate progress bar
    const progressInterval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return p + 2;
      });
    }, 30);

    // Phase through boot lines
    const phaseTimers = BOOT_LINES.map((_, i) =>
      setTimeout(() => setPhase(i + 1), 250 + i * 280)
    );

    // Complete after all lines shown
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 1800);

    return () => {
      clearInterval(progressInterval);
      phaseTimers.forEach(clearTimeout);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[999] bg-[#0a0a0f] flex flex-col items-center justify-center px-6"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.03 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Progress bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/5">
        <motion.div
          className="h-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: progress / 100 }}
          style={{ originX: 0 }}
          transition={{ ease: "linear" }}
        />
      </div>

      {/* Central content */}
      <div className="w-full max-w-md">
        {/* NACOS Logo */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8 font-mono text-[10px] tracking-[0.4em] text-blue-500 uppercase"
        >
          [ SYS.INIT ]
        </motion.div>

        {/* Boot lines */}
        <div className="space-y-2">
          {BOOT_LINES.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: i < phase ? 1 : 0.15, x: 0 }}
              transition={{ duration: 0.3, delay: 0.05 * i }}
              className={`font-mono text-[11px] leading-relaxed ${
                i === phase - 1 ? "text-white" : "text-white/30"
              }`}
            >
              {i < phase ? (
                <>
                  <span className="text-blue-400 mr-2">›</span>
                  {line}
                </>
              ) : (
                <span className="opacity-20">{line}</span>
              )}
            </motion.div>
          ))}
        </div>

        {/* Progress percentage */}
        <motion.div
          className="mt-8 font-mono text-[10px] text-white/30 tracking-widest"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {progress}% COMPLETE
        </motion.div>
      </div>
    </motion.div>
  );
}
