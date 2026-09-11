"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import ExcoCard from "./ExcoCard";
import { presidencyMembers, directorateMembers } from "@/data/exco";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function MeetExecutives() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const copyRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const timeline = gsap.timeline({
        defaults: { ease: "power3.out" },
        paused: true,
        scrollTrigger: { trigger: section, start: "top 80%", once: true },
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

      timeline.from(
        copyRef.current ? [copyRef.current] : [],
        { y: 22, opacity: 0, duration: 0.65 },
        "-=0.3",
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="excos" className="px-6 py-20 sm:px-10 sm:py-28 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center sm:mb-16">
          <h2 ref={headingRef} className="mb-3 font-display text-[clamp(26px,4vw,42px)] font-bold text-[var(--color-ink)]">
            Meet the Executives
          </h2>
          <p ref={copyRef} className="font-body text-[clamp(15px,2vw,18px)] text-[var(--color-ink-muted)]">
            Leading the charge for the 2025/2026 Session.
          </p>
        </div>

        {/* The Presidency (3 members) */}
        <div className="mb-20">
          <div className="mb-8 border-b border-black/5 pb-3">
            <h3 className="font-display text-[clamp(22px,3vw,28px)] font-bold text-[var(--color-ink)]">
              The Presidency
            </h3>
          </div>

          <div className="grid mt-20 grid-cols-1 gap-14 pt-6 sm:grid-cols-3 sm:gap-8 lg:gap-10 xl:gap-12">
            {presidencyMembers.map((member) => (
              <ExcoCard key={member.name} member={member} />
            ))}
          </div>
        </div>

        {/* The Directorate (6 members) */}
        <div>
          <div className="mb-8 border-b border-black/5 pb-3">
            <h3 className="font-display text-[clamp(22px,3vw,28px)] font-bold text-[var(--color-ink)]">
              The Directorate
            </h3>
          </div>

          <div className="grid mt-20 grid-cols-1 gap-14 pt-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8 lg:gap-10 xl:gap-12">
            {directorateMembers.map((member) => (
              <ExcoCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
