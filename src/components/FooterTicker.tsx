"use client";

import React, { useState, useEffect, useRef } from "react";

interface FooterTickerProps {
  className?: string;
  lightOnMobile?: boolean;
}

export default function FooterTicker({
  className = "",
  lightOnMobile = false,
}: FooterTickerProps) {
  const [showNacos, setShowNacos] = useState(true);
  const [widths, setWidths] = useState({ nacos: 175, gabriel: 125 });

  const rootRef = useRef<HTMLDivElement>(null);
  const nacosRef = useRef<HTMLSpanElement>(null);
  const gabrielRef = useRef<HTMLAnchorElement>(null);

  // Only ticks while actually on screen — this sits at the very bottom of
  // the page, so without this it's re-rendering on a timer for the entire
  // session the instant the Footer mounts, whether or not anyone ever
  // scrolls down to it. Same pattern as Hero's bg rotation / the other
  // cycling effects on the page.
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    let interval: ReturnType<typeof setInterval> | null = null;
    const startTimer = () => {
      if (interval) return;
      interval = setInterval(() => {
        setShowNacos((prev) => !prev);
      }, 3500);
    };
    const stopTimer = () => {
      if (interval) clearInterval(interval);
      interval = null;
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startTimer();
        } else {
          stopTimer();
        }
      },
      { rootMargin: "150px" }
    );
    observer.observe(root);

    return () => {
      stopTimer();
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    let rafId: number;
    const measure = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (nacosRef.current && gabrielRef.current) {
          const nw = Math.ceil(nacosRef.current.offsetWidth);
          const gw = Math.ceil(gabrielRef.current.offsetWidth);
          if (nw > 0 && gw > 0) {
            setWidths({ nacos: nw, gabriel: gw });
          }
        }
      });
    };

    measure();
    if (typeof document !== "undefined" && document.fonts) {
      document.fonts.ready.then(measure);
    }
    window.addEventListener("resize", measure, { passive: true });
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", measure);
    };
  }, []);

  const baseTextClasses = lightOnMobile
    ? "text-white/90 lg:text-gray-500 drop-shadow-sm lg:drop-shadow-none"
    : "text-gray-500";

  return (
    <div
      ref={rootRef}
      className={`flex items-center justify-center sm:justify-end gap-1.5 text-xs sm:text-sm font-medium ${baseTextClasses} ${className}`}
    >
      {/* Retained static: 'Crafted with 💙' */}
      <span className="shrink-0 flex items-center gap-1 whitespace-nowrap">
        Crafted with <span className="text-[#274193] animate-pulse inline-block">💙</span>
      </span>

      {/* Dynamic suffix: only the target text rolls up/down, container width dynamically matches content */}
      <div
        className="relative h-[20px] overflow-hidden text-left transition-[width] duration-700 ease-in-out"
        style={{ width: `${showNacos ? widths.nacos : widths.gabriel}px` }}
      >
        <span
          ref={nacosRef}
          className={`absolute top-0 left-0 h-full flex items-center whitespace-nowrap font-bold text-gray-700 transition-all duration-700 ease-in-out ${
            showNacos
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0 pointer-events-none"
          }`}
        >
          for NACOS Nile Chapter
        </span>
        <a
          ref={gabrielRef}
          href="https://github.com/gemmomoh/"
          target="_blank"
          rel="noopener noreferrer"
          className={`absolute top-0 left-0 h-full flex items-center whitespace-nowrap font-bold text-[#274193] hover:underline underline-offset-4 transition-all duration-700 ease-in-out ${
            showNacos
              ? "-translate-y-full opacity-0 pointer-events-none"
              : "translate-y-0 opacity-100"
          }`}
        >
          by Gabriel Momoh
        </a>
      </div>
    </div>
  );
}
