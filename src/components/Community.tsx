"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import {
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { FaTiktok, FaXTwitter } from "react-icons/fa6";
import { SiNotion } from "react-icons/si";
import type { IconType } from "react-icons";
import { socials } from "@/data/site";

gsap.registerPlugin(ScrollTrigger, SplitText);

const iconMap: Record<string, IconType> = {
  "Twitter / X": FaXTwitter,
  Instagram: FaInstagram,
  LinkedIn: FaLinkedin,
  Notion: SiNotion,
  TikTok: FaTiktok,
};

const colorMap: Record<string, string> = {
  "Twitter / X": "#10162e",
  Instagram: "#c2185b",
  LinkedIn: "#0a66c2",
  Notion: "#101010",
  TikTok: "#111111",
};

export default function Community() {
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
    <section
      id="community"
      ref={sectionRef}
      className="px-6 py-20 sm:px-10 sm:py-28 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 place-items-center mt-4 sm:mb-14">
          <h2 ref={headingRef} className="mb-3 text-center font-display text-[clamp(26px,4vw,42px)] font-bold leading-tight text-[var(--color-ink)]">
            Join the Conversation
          </h2>
          <p ref={copyRef} className="max-w-lg text-center font-body text-[clamp(15px,1.8vw,18px)] leading-relaxed text-[var(--color-ink-muted)]">
            Get involved, ask questions, or share your innovative ideas to move
            NACOS Nile forward in the right direction.
          </p>
        </div>

        {/* Social cards grid */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {socials.map(({ label, href }) => {
            const Icon = iconMap[label];
            const color = colorMap[label];
            return (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${label} (opens in a new tab)`}
                className="group flex flex-col items-start gap-4 rounded-2xl border border-black/5 bg-[#E5ECFB] px-5 py-6 transition-all hover:-translate-y-1 hover:border-[var(--color-accent)]/30 hover:shadow-lg dark:border-white/5 dark:bg-[#1B293E]"
              >
                <div className="flex w-full items-center justify-between">
                  {Icon && (
                    <Icon
                      size={22}
                      color={color}
                      aria-hidden="true"
                      className="shrink-0"
                    />
                  )}
                  <ArrowUpRight
                    size={14}
                    className="text-[var(--color-ink-muted)] opacity-0 transition-opacity group-hover:opacity-100"
                    aria-hidden="true"
                  />
                </div>
                <span className="font-body text-sm font-semibold text-[var(--color-ink)]">
                  {label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
