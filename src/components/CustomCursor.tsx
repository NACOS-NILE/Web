"use client";

import React, { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotContainerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const isTouchDevice = useRef(false);

  const currentPos = useRef({ x: -100, y: -100 });
  const targetPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window) {
      isTouchDevice.current = true;
      return;
    }

    const easeInOutQuad = (t: number) => {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    };

    let animationFrameId: number;

    const animate = () => {
      const t = 0.35;
      currentPos.current.x += easeInOutQuad(t) * (targetPos.current.x - currentPos.current.x);
      currentPos.current.y += easeInOutQuad(t) * (targetPos.current.y - currentPos.current.y);

      // Rounding to fix sub-pixel jitters
      const rx = Math.ceil(currentPos.current.x * 100) / 100;
      const ry = Math.ceil(currentPos.current.y * 100) / 100;

      if (dotContainerRef.current) {
        dotContainerRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0px)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) {
        targetPos.current = { x: e.clientX, y: e.clientY };
        setIsHovered(false);
        return;
      }

      const computedCursor = window.getComputedStyle(target).cursor;
      const isClickable =
        computedCursor === "pointer" ||
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") !== null ||
        target.closest("button") !== null ||
        target.getAttribute("role") === "button";

      setIsHovered(isClickable);

      if (isClickable) {
        const interactiveEl = target.closest("a, button, [role='button']") || target;
        const rect = interactiveEl.getBoundingClientRect();
        const midX = rect.left + rect.width / 2;
        const midY = rect.top + rect.height / 2;

        // Subtle magnetic pull toward element center
        targetPos.current = {
          x: midX + (midX - e.clientX) * 0.15,
          y: midY + (midY - e.clientY) * 0.15,
        };
      } else {
        targetPos.current = {
          x: e.clientX,
          y: e.clientY,
        };
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  return (
    <div
      ref={dotContainerRef}
      className={`fixed top-0 left-0 z-[99999] pointer-events-none transition-opacity duration-300 hidden md:block ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        mixBlendMode: "exclusion",
        willChange: "transform",
      }}
      aria-hidden="true"
    >
      <div
        className={`relative -translate-x-1/2 -translate-y-1/2 rounded-full bg-white transition-all duration-300 ease-out ${
          isHovered ? "w-14 h-14" : "w-6 h-6"
        }`}
      />
    </div>
  );
}
