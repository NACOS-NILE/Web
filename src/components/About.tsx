"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const stats = [
  { start: 2000, value: 2023, label: "Year founded" },
  { start: 0, value: 6, label: "Disciplines represented" },
  { start: 100, value: 200, suffix: "+", label: "Active members" },
  { displayValue: "∞", label: "Workshops & counting" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const counterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) {
        stats.forEach((stat, index) => {
          if (stat.value !== undefined && counterRefs.current[index]) {
            counterRefs.current[index].textContent = `${stat.value}`;
          }
        });
        return;
      }

      const timeline = gsap.timeline({
        defaults: { ease: "power3.out" },
        paused: true,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          once: true,
        },
      });

      SplitText.create(headingRef.current, {
        type: "words",
        mask: "words",
        onSplit: (split) => {
          timeline.from(split.words, {
            yPercent: 110,
            opacity: 0,
            duration: 0.7,
            stagger: 0.08,
          });
        },
      });

      timeline
        .from(
          copyRef.current ? Array.from(copyRef.current.children) : [],
          { y: 22, opacity: 0, duration: 0.65, stagger: 0.12 },
          "-=0.3",
        );

      const statsTimeline = gsap.timeline({
        defaults: { ease: "power3.out" },
        paused: true,
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top bottom",
          once: true,
        },
      });

      statsTimeline.from(
        statsRef.current ? Array.from(statsRef.current.children) : [],
        { y: 24, opacity: 0, duration: 0.6, stagger: 0.1 },
      );

      stats.forEach((stat, index) => {
        const counter = counterRefs.current[index];
        if (stat.value === undefined || !counter) return;

        statsTimeline.to(
          counter,
          {
            textContent: stat.value,
            duration: 1.4,
            ease: "power1.out",
            snap: { textContent: 1 },
          },
          "<",
        );
      });

      // scrollTrigger.onEnter fires play() itself once the trigger condition
      // is met, so no manual play() call or setTimeout is needed here.
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="px-6 py-20 sm:px-10 sm:py-28 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 mt-4 sm:mb-14">
          <h2
            ref={headingRef}
            className="font-display text-center text-[clamp(26px,4vw,42px)] font-bold leading-tight text-[var(--color-ink)]"
          >
            About Us
          </h2>
        </div>

        {/* Two-column detail */}
        <div
          ref={copyRef}
          className="mt-12 mb-12 grid gap-8 pt-12 sm:grid-cols-2 dark:border-white/5"
        >
          <div>
            <h3 className="mb-3 font-display text-[clamp(16px,2vw,20px)] font-semibold text-[var(--color-primary)] dark:text-[var(--color-accent)]">
              NACOS national
            </h3>
            <p className="font-body text-[clamp(14px,1.5vw,16px)] leading-relaxed text-[var(--color-ink-muted)]">
              The Nigeria Association of Computing Students (NACOS) is the
              umbrella body for students studying Computer Science, Cyber
              Security, Software Engineering, Computer Engineering, Information
              Technology, and related disciplines in Nigeria. We foster digital
              literacy and professional development.
            </p>
          </div>

          <div>
            <div className="mb-3 flex items-center gap-2">
              <h3 className="font-display text-[clamp(16px,2vw,20px)] font-semibold text-[var(--color-primary)] dark:text-[var(--color-accent)]">
                Nile chapter
              </h3>
              <span className="rounded-full bg-[#e3f5ec] px-2.5 py-0.5 font-body text-xs font-semibold text-[#0f6e56] dark:bg-[#0f6e56]/20 dark:text-[#4ade80]">
                Est. 2023
              </span>
            </div>
            <p className="font-body text-[clamp(14px,1.5vw,16px)] leading-relaxed text-[var(--color-ink-muted)]">
              Formally established in 2023, the Nile University Chapter has
              grown steadily with the goal of improving the student body in the
              Faculty of computing at Nile University. We focus on bridging the
              gap between academic theory and industry reality through social
              and practical engagement.
            </p>
          </div>
        </div>

        {/* Stat cards */}
        <div
          ref={statsRef}
          className="grid place-items-center gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map(({ start, suffix, displayValue, label }, index) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center gap-2 rounded-2xl px-6 py-8 text-center"
            >
              <p className="mb-1 font-display text-[clamp(28px,3vw,40px)] font-bold text-[var(--color-primary)] dark:text-[var(--color-ink)]">
                {displayValue ?? (
                  <>
                    <span
                      ref={(element) => {
                        counterRefs.current[index] = element;
                      }}
                    >
                      {start}
                    </span>
                    {suffix}
                  </>
                )}
              </p>
              <p className="font-body text-sm text-[var(--color-ink-muted)]">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}