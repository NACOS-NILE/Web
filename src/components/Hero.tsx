"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const PROMPT = "student@nile ~ %";
const COMMAND = "join nacos-nile --discipline=all";
const OUTPUT_LINES = [
  "Connecting to NACOS Nile...",
  "✓ Membership confirmed",
  "✓ Added to #general",
  "Welcome! See you at the next workshop.",
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const cmdRef = useRef<HTMLSpanElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);

  function handleCtaMove(
    event: React.PointerEvent<HTMLAnchorElement>,
  ) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const offsetX = (event.clientX - (bounds.left + bounds.width / 2)) * 0.12;
    const offsetY = (event.clientY - (bounds.top + bounds.height / 2)) * 0.12;

    gsap.to(event.currentTarget, {
      x: offsetX,
      y: offsetY,
      duration: 0.35,
      ease: "power3.out",
      overwrite: true,
    });
  }

  function handleCtaLeave(event: React.PointerEvent<HTMLAnchorElement>) {
    gsap.to(event.currentTarget, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.5)",
      overwrite: true,
    });
  }

  // Entrance animation: headline lines mask-reveal, then subheadline/CTAs/terminal cascade in.
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // Splits into words (so line-wrapping stays natural) then chars, each
      // auto-wrapped in an overflow-hidden mask, and flips up into place —
      // punchier and less prone to layout jank than animating whole lines.
      SplitText.create(headlineRef.current, {
        type: "words, chars",
        mask: "words",
        autoSplit: true,
        onSplit(self) {
          tl.from(self.words, {
            yPercent: 130,
            rotate: 6,
            opacity: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "back.out(1.6)",
          });
        },
      });

      tl.from(subRef.current, { y: 16, opacity: 0, duration: 0.5 }, "-=0.25")
        .from(
          ctaRef.current ? Array.from(ctaRef.current.children) : [],
          { y: 14, opacity: 0, duration: 0.5, stagger: 0.08 },
          "-=0.3",
        )
        .from(
          terminalRef.current,
          { y: 20, opacity: 0, duration: 0.6 },
          "-=0.25",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Terminal typing loop (unchanged behavior, just scoped the same as before).
  useEffect(() => {
    const cmdEl = cmdRef.current;
    const outEl = outputRef.current;
    const cursorEl = cursorRef.current;
    if (!cmdEl || !outEl || !cursorEl) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) {
      cmdEl.textContent = COMMAND;
      outEl.innerHTML = OUTPUT_LINES.map((line) => `<div>${line}</div>`).join(
        "",
      );
      return;
    }

    const timeouts: ReturnType<typeof setTimeout>[] = [];
    const intervals: ReturnType<typeof setInterval>[] = [];
    let cancelled = false;

    const blink = setInterval(() => {
      if (!cursorEl) return;
      cursorEl.style.opacity = cursorEl.style.opacity === "0" ? "1" : "0";
    }, 500);
    intervals.push(blink);

    function typeLine(text: string, el: HTMLElement, speed: number) {
      return new Promise<void>((resolve) => {
        let i = 0;
        el.textContent = "";
        const t = setInterval(() => {
          if (cancelled) {
            clearInterval(t);
            return resolve();
          }
          i++;
          el.textContent = text.slice(0, i);
          if (i >= text.length) {
            clearInterval(t);
            resolve();
          }
        }, speed);
        intervals.push(t);
      });
    }

    function wait(ms: number) {
      return new Promise<void>((resolve) => {
        const t = setTimeout(resolve, ms);
        timeouts.push(t);
      });
    }

    async function runTerminal() {
      while (!cancelled) {
        cmdEl!.textContent = "";
        outEl!.innerHTML = "";
        await typeLine(COMMAND, cmdEl!, 45);
        if (cancelled) return;
        await wait(400);
        for (const line of OUTPUT_LINES) {
          if (cancelled) return;
          const lineEl = document.createElement("div");
          outEl!.appendChild(lineEl);
          await typeLine(line, lineEl, 18);
          await wait(150);
        }
        await wait(3200);
      }
    }
    runTerminal();

    return () => {
      cancelled = true;
      timeouts.forEach(clearTimeout);
      intervals.forEach(clearInterval);
    };
  }, []);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="px-6 pb-28 pt-32 text-center sm:pb-36 sm:pt-40 lg:pb-40 lg:pt-44"
    >
      <h1
        ref={headlineRef}
        className="mx-auto mb-6 max-w-4xl font-display text-[clamp(36px,7vw,68px)] font-bold leading-[1.17] text-[var(--color-ink)]"
      >
        Your computing journey
        <br />
        starts <span className="text-[var(--color-primary)]">here.</span>
      </h1>

      <p
        ref={subRef}
        className="mx-auto mb-10 max-w-2xl font-body text-[clamp(16px,2vw,21px)] leading-relaxed text-[var(--color-ink-muted)]"
      >
        One community for every computing discipline at Nile University — real
        workshops, real mentorship, and a network that lasts past graduation.
      </p>

      <div ref={ctaRef} className="mb-24 flex flex-wrap justify-center gap-4">
        <Link
          href="#community"
          onPointerMove={handleCtaMove}
          onPointerLeave={handleCtaLeave}
          className="w-52 rounded-[7px] bg-[var(--color-primary)] px-6 py-4 font-body text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary-dark)] sm:px-8 sm:py-4 sm:text-base"
        >
          Join Community
        </Link>
        <Link
          href="#disciplines"
          className="w-52 rounded-[7px] border-[2px] border-[var(--color-ink)] px-6 py-4 font-body text-sm font-semibold text-[var(--color-ink)] transition-colors hover:bg-[var(--color-ink)/10] sm:px-8 sm:py-4 sm:text-base"
        >
          Explore Programs
        </Link>
      </div>

      {/* Terminal window — styled after macOS Terminal.app */}
      <div
        ref={terminalRef}
        className="mx-auto min-h-[260px] max-w-2xl overflow-hidden rounded-2xl border border-[#2a3a6e] bg-[#1e1e2e] text-left shadow-[0_25px_60px_rgba(15,23,60,0.25)] sm:aspect-[16/9] sm:max-w-2xl lg:max-w-3xl"
      >
        <div className="relative flex items-center border-b border-[#33344d] bg-[#2a2b3d] px-4 py-2.5">
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full border border-[#e0443e]/40 bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full border border-[#dea123]/40 bg-[#ffbd2e]" />
            <span className="h-3 w-3 rounded-full border border-[#1aab29]/40 bg-[#27c93f]" />
          </div>
          <span className="absolute left-1/2 -translate-x-1/2 font-mono text-xs text-[#9aa0c3]">
            nacos-nile — zsh
          </span>
        </div>

        <div className="flex min-h-[218px] flex-col p-5 font-mono text-[13px] leading-relaxed text-[#d4d7e8] sm:h-[calc(100%-42px)] sm:min-h-0 sm:p-7 sm:text-sm">
          <div>
            <span className="text-[#8fd67f]">{PROMPT}</span>{" "}
            <span ref={cmdRef} />
            <span
              ref={cursorRef}
              className="ml-0.5 inline-block h-[14px] w-[7px] translate-y-[2px] bg-[#d4d7e8]"
            />
          </div>
          <div ref={outputRef} className="mt-2 text-[#7f88b0]" />
        </div>
      </div>
    </section>
  );
}
