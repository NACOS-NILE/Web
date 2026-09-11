"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

interface ImageRevealProps {
  src: string;
  alt: string;
  aspectRatio?: string; // e.g. "aspect-[4/5]", "aspect-[16/9]"
  className?: string;
  priority?: boolean;
  cursorLabel?: string;
  parallax?: boolean;
  delay?: number;
}

export function ImageReveal({
  src,
  alt,
  aspectRatio = "aspect-[3/4]",
  className = "",
  priority = false,
  cursorLabel = "VIEW",
  parallax = false,
  delay = 0,
}: ImageRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    parallax && !shouldReduceMotion ? ["-8%", "8%"] : ["0%", "0%"]
  );

  return (
    <div
      ref={containerRef}
      data-cursor={cursorLabel}
      className={`relative overflow-hidden bg-neutral-200/40 dark:bg-neutral-800/40 ${aspectRatio} ${className}`}
    >
      <motion.div
        initial={
          shouldReduceMotion
            ? { opacity: 1 }
            : { clipPath: "inset(100% 0 0 0)", scale: 1.1 }
        }
        whileInView={
          shouldReduceMotion
            ? { opacity: 1 }
            : { clipPath: "inset(0% 0 0 0)", scale: 1 }
        }
        viewport={{ once: true, margin: "-5% 0px -5% 0px" }}
        transition={{
          duration: 1.1,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="relative h-full w-full overflow-hidden"
      >
        <motion.div
          style={{ y: parallaxY }}
          className="relative h-full w-full will-change-transform scale-[1.08]"
        >
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
