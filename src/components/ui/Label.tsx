"use client";

import { motion, MotionStyle } from "framer-motion";
import { ReactNode } from "react";

interface LabelProps {
  children: ReactNode;
  showDot?: boolean;
  className?: string;
  style?: MotionStyle;
}

export function Label({ children, showDot = true, className = "", style }: LabelProps) {
  return (
    <motion.div
      style={style}
      className={`flex items-center gap-3 font-mono text-[10px] md:text-xs font-bold tracking-[0.2em] text-blue-400 uppercase ${className}`}
    >
      {showDot && (
        <motion.div
          animate={{ scale: [1, 1.25, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="h-2 w-2 rounded-full bg-highlight shadow-[0_0_8px_rgba(59,130,246,0.8)] shrink-0"
        />
      )}
      <span>[ {children} ]</span>
    </motion.div>
  );
}
