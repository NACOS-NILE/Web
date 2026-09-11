"use client";

import { useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "@/lib/utils";

export default function AnimatedStat({ value, label }: { value: string; label: string }) {
  const isNumeric = /^\d+$/.test(value);

  // Start with the real value so the number is correct even before JS runs
  const [display, setDisplay] = useState(value);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;

    if (
      !isNumeric ||
      !el ||
      prefersReducedMotion() ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }

    const target = parseInt(value, 10);
    let frame = 0;
    let delay = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        setDisplay("0".padStart(value.length, "0"));

        // Wait for the hero stats to fade in before counting
        delay = window.setTimeout(() => {
          const start = performance.now();

          const tick = (now: number) => {
            const progress = Math.min((now - start) / 900, 1);
            setDisplay(
              String(Math.round(progress * target)).padStart(value.length, "0")
            );
            if (progress < 1) frame = requestAnimationFrame(tick);
          };

          frame = requestAnimationFrame(tick);
        }, 700);
      },
      { threshold: 0.5 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      window.clearTimeout(delay);
      cancelAnimationFrame(frame);
    };
  }, [value, isNumeric]);

  return (
    <div ref={ref}>
      <strong>{display}</strong>
      <span>{label}</span>
    </div>
  );
}
