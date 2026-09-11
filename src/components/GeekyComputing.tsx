"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const COMPUTING_LETTERS = "computing".split("");
const GLYPHS = "0101_#<>{}/\\$*!&%?[]~";

export default function GeekyComputing() {
  const wordRef = useRef<HTMLSpanElement>(null);

  const triggerScramble = () => {
    if (!wordRef.current) return;
    const chars = wordRef.current.querySelectorAll<HTMLSpanElement>(".geek-char");

    chars.forEach((charEl, i) => {
      const originalText = charEl.getAttribute("data-char") || charEl.innerText;
      const obj = { progress: 0 };

      gsap.to(obj, {
        progress: 1,
        duration: 0.35 + i * 0.035,
        ease: "none",
        onUpdate: () => {
          if (obj.progress < 0.78) {
            charEl.innerText = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          } else {
            charEl.innerText = originalText;
          }
        },
        onComplete: () => {
          charEl.innerText = originalText;
        },
      });
    });
  };

  // Viewport-activated periodic matrix ripple: only runs when in viewport
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let timer: NodeJS.Timeout | null = null;
    let observer: IntersectionObserver | null = null;

    if (wordRef.current) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            if (!timer) {
              timer = setInterval(() => {
                triggerScramble();
              }, 6500);
            }
          } else {
            if (timer) {
              clearInterval(timer);
              timer = null;
            }
          }
        },
        { rootMargin: "100px" }
      );
      observer.observe(wordRef.current);
    }

    return () => {
      if (timer) clearInterval(timer);
      observer?.disconnect();
    };
  }, []);

  return (
    <span
      ref={wordRef}
      onMouseEnter={triggerScramble}
      className="relative inline-flex items-baseline cursor-pointer text-[#274193] hover:text-[#1e3478] transition-colors group select-none px-1 font-terminal"
      title="Interactive computing terminal"
    >
      <span className="font-terminal text-[#274193]/40 text-[0.85em] font-medium mr-1 select-none transition-transform group-hover:-translate-x-0.5">
        &lt;
      </span>
      <span className="inline-flex tracking-[0.04em]">
        {COMPUTING_LETTERS.map((char, i) => (
          <span
            key={i}
            data-char={char}
            className="geek-char inline-block font-terminal font-bold transition-transform duration-150 group-hover:scale-105"
          >
            {char}
          </span>
        ))}
      </span>
      <span className="font-terminal text-[#274193]/40 text-[0.85em] font-medium ml-1 select-none transition-transform group-hover:translate-x-0.5">
        /&gt;
      </span>
      <span className="inline-block w-1.5 sm:w-2.5 h-[0.65em] bg-[#274193] ml-1.5 animate-pulse align-baseline self-center rounded-xs" />
    </span>
  );
}
