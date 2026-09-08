"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface SplitTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  delay?: number;
  stagger?: number;
  duration?: number;
  once?: boolean;
}

export function SplitText({
  text,
  className = "",
  as: Component = "h1",
  delay = 0,
  stagger = 0.035,
  duration = 0.85,
  once = true,
}: SplitTextProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <Component className={className}>{text}</Component>;
  }

  const words = text.split(" ");

  return (
    <Component className={className} aria-label={text}>
      <motion.span
        aria-hidden="true"
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin: "-10% 0px -10% 0px" }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: stagger,
              delayChildren: delay,
            },
          },
        }}
        className="inline"
      >
        {words.map((word, index) => (
          <span
            key={`${word}-${index}`}
            className="inline-block overflow-hidden align-top"
          >
            <motion.span
              variants={{
                hidden: { y: "115%", opacity: 0.1 },
                visible: {
                  y: "0%",
                  opacity: 1,
                  transition: {
                    duration,
                    ease: [0.16, 1, 0.3, 1], // Editorial luxury ease
                  },
                },
              }}
              className="inline-block"
            >
              {word}
            </motion.span>
            {/* Preserve natural spacing between words */}
            <span className="inline-block">&nbsp;</span>
          </span>
        ))}
      </motion.span>
    </Component>
  );
}
