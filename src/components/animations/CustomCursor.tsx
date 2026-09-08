"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState<"default" | "hover" | "text">("default");

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 320, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setMounted(true);

    // Detect touch / coarse pointer devices
    const isTouchDevice =
      window.matchMedia("(pointer: coarse)").matches ||
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0;

    if (isTouchDevice) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Check target element for custom cursor attributes
      const target = e.target as HTMLElement | null;
      const interactiveEl = target?.closest(
        "[data-cursor], [data-cursor-text], a, button, input, textarea"
      ) as HTMLElement | null;

      if (interactiveEl) {
        const customText =
          interactiveEl.getAttribute("data-cursor-text") ||
          interactiveEl.getAttribute("data-cursor");

        if (customText && !["pointer", "true"].includes(customText)) {
          setCursorText(customText.toUpperCase());
          setCursorVariant("text");
        } else {
          setCursorText("");
          setCursorVariant("hover");
        }
      } else {
        setCursorText("");
        setCursorVariant("default");
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!mounted || isTouch) {
    return null;
  }

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[9999] flex items-center justify-center mix-blend-difference"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
        opacity: isVisible ? 1 : 0,
      }}
    >
      <motion.div
        animate={{
          scale: cursorVariant === "text" ? 1 : cursorVariant === "hover" ? 1.6 : 1,
          width: cursorVariant === "text" ? 64 : cursorVariant === "hover" ? 28 : 7,
          height: cursorVariant === "text" ? 64 : cursorVariant === "hover" ? 28 : 7,
          borderRadius: "50%",
          backgroundColor:
            cursorVariant === "text"
              ? "rgba(255, 255, 255, 0.95)"
              : cursorVariant === "hover"
              ? "rgba(255, 255, 255, 0.2)"
              : "rgba(255, 255, 255, 0.95)",
          border:
            cursorVariant === "hover"
              ? "1px solid rgba(255, 255, 255, 0.85)"
              : "none",
        }}
        transition={{ type: "spring", damping: 25, stiffness: 350 }}
        className="flex items-center justify-center overflow-hidden"
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="text-[9px] font-medium tracking-[0.18em] text-black"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </motion.div>
  );
}
