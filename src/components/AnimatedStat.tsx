"use client";

import { useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "@/lib/utils";

/*
  Splits a stat like "06", "2500+" or "∞" into its number and any text
  after it. Values without a leading number are shown as they are.
*/
function parseStat(value: string) {
  const match = /^(\d+)(\D*)$/.exec(value);
  if (!match) return null;

  return {
    target: parseInt(match[1], 10),
    digits: match[1].length,
    suffix: match[2],
  };
}

/*
  Small stats keep their leading zero ("06"). Large stats get commas and
  no padding, including while counting up ("968+", then "2,500+").
*/
function formatStat(
  amount: number,
  stat: { target: number; digits: number; suffix: string }
) {
  const text =
    stat.target >= 1000
      ? amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      : amount.toString().padStart(stat.digits, "0");

  return text + stat.suffix;
}

export default function AnimatedStat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  const initial = parseStat(value);

  // Start with the real value so the number is correct even before JS runs
  const [display, setDisplay] = useState(
    initial ? formatStat(initial.target, initial) : value
  );
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const stat = parseStat(value);

    if (
      !stat ||
      !el ||
      prefersReducedMotion() ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }

    let frame = 0;
    let delay = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        setDisplay(formatStat(0, stat));

        // Wait for the hero stats to fade in before counting
        delay = window.setTimeout(() => {
          const start = performance.now();

          const tick = (now: number) => {
            const progress = Math.min((now - start) / 900, 1);
            // Ease out so large numbers slow down near the end
            const eased = 1 - Math.pow(1 - progress, 3);

            setDisplay(formatStat(Math.round(eased * stat.target), stat));

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
  }, [value]);

  return (
    <div ref={ref}>
      <strong>{display}</strong>
      <span>{label}</span>
    </div>
  );
}
