"use client";

import { motion, MotionStyle } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeaderProps {
  titleLine1: ReactNode;
  titleLine2?: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center" | "right";
  className?: string;
  style?: MotionStyle;
}

export function SectionHeader({ 
  titleLine1, 
  titleLine2, 
  subtitle, 
  align = "center",
  className = "",
  style 
}: SectionHeaderProps) {
  const alignmentClass = align === "left" ? "text-left items-start" : align === "right" ? "text-right items-end" : "text-center items-center";

  return (
    <motion.div style={style} className={`flex flex-col ${alignmentClass} ${className}`}>
      <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] tracking-[-0.03em] uppercase">
        <span className="block text-white">{titleLine1}</span>
        {titleLine2 && <span className="block text-white/50">{titleLine2}</span>}
      </h2>

      {subtitle && (
        <p className="mt-3 font-mono text-[10px] md:text-xs tracking-[0.1em] text-white/40 max-w-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
