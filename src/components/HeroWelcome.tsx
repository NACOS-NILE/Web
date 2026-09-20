"use client";

import { useCallback, useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRightIcon } from "@/components/Icons";

/** Chips in the burst. Enough to read as a celebration, few enough to stay tidy. */
const CHIPS = 20;

/** How long the card holds before it clears itself, in milliseconds. */
const HOLD = 5200;

const CHIP_COLOURS = [
  "var(--color-brand-500)",
  "var(--color-accent)",
  "var(--color-accent-soft)",
  "var(--color-leaf)",
  "#ffffff",
];

type Props = {
  /** Already trimmed and capitalised by the terminal. */
  name: string;
  /** Called once the exit animation has finished, so the parent can unmount. */
  onDone: () => void;
};

/**
 * The welcome that pops up when someone types their name into the hero
 * terminal. It covers the code — the terminal has said its piece by then, and
 * the greeting is the only thing worth reading.
 *
 * It is a status, not a dialog: focus stays in the input the visitor is already
 * using, so nothing is stolen and nothing has to be given back. It leaves on a
 * timer, on Escape, on the close button, or the moment they start typing again.
 */
export default function HeroWelcome({ name, onDone }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  /** Guards against the timer and a click both trying to close it. */
  const closingRef = useRef(false);

  const close = useCallback(() => {
    if (closingRef.current) return;
    closingRef.current = true;

    const root = rootRef.current;
    if (!root) {
      onDone();
      return;
    }

    gsap.to(root, {
      opacity: 0,
      scale: 0.97,
      duration: 0.28,
      ease: "power2.in",
      onComplete: onDone,
    });
  }, [onDone]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    // Scoped, so every selector below resolves inside this card only.
    const mm = gsap.matchMedia(root);

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline();

      tl.fromTo(root, { opacity: 0 }, { opacity: 1, duration: 0.22, ease: "power2.out" })
        // Overshoot on the way in: this is the one moment on the page that is
        // allowed to be pleased with itself.
        .fromTo(
          ".hw-card",
          { scale: 0.84, y: 22, opacity: 0 },
          { scale: 1, y: 0, opacity: 1, duration: 0.62, ease: "back.out(1.7)" },
          "-=0.08",
        )
        .fromTo(
          ".hw-line",
          { y: 16, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.42, stagger: 0.075, ease: "power3.out" },
          "-=0.34",
        )
        .fromTo(
          ".hw-sweep",
          { xPercent: -180, opacity: 0 },
          { xPercent: 180, opacity: 1, duration: 0.95, ease: "power2.inOut" },
          "-=0.5",
        );

      // Burst, then fall. Two tweens rather than one, because a single curve
      // either floats on the way out or drops like a stone on the way back.
      gsap.utils.toArray<HTMLElement>(".hw-chip").forEach((chip, i) => {
        const spread = -155 + (250 * i) / (CHIPS - 1);
        const angle = (spread * Math.PI) / 180;
        const distance = 76 + Math.random() * 92;
        const dx = Math.cos(angle) * distance;
        const dy = Math.sin(angle) * distance;

        tl.fromTo(
          chip,
          { x: 0, y: 0, scale: 0, opacity: 1, rotation: 0 },
          { x: dx, y: dy, scale: 1, duration: 0.5, ease: "power2.out" },
          0.18,
        ).to(
          chip,
          {
            y: dy + 150 + Math.random() * 60,
            rotation: Math.random() * 420 - 210,
            opacity: 0,
            duration: 0.85 + Math.random() * 0.45,
            ease: "power1.in",
          },
          0.6,
        );
      });

      return () => {
        tl.kill();
      };
    });

    mm.add("(prefers-reduced-motion: reduce)", () => {
      // Present, immediately, with nothing thrown across the screen.
      gsap.set(root, { opacity: 1 });
      gsap.set(".hw-card, .hw-line", { opacity: 1, scale: 1, x: 0, y: 0 });
      gsap.set(".hw-chip, .hw-sweep", { display: "none" });
    });

    const timer = window.setTimeout(close, HOLD);
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("keydown", onKey);
      mm.revert();
    };
  }, [close]);

  return (
    <div
      ref={rootRef}
      // `status` rather than `dialog`: it announces itself politely and never
      // takes the focus away from the input that triggered it.
      role="status"
      className="absolute inset-0 z-10 grid place-items-center overflow-hidden rounded-b-[1.15rem] bg-brand-950/85 p-4 opacity-0 backdrop-blur-sm"
    >
      <div className="hw-card relative w-full max-w-[18rem] overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-b from-white/[0.14] to-white/[0.04] px-5 pt-5 pb-5 text-center shadow-2xl shadow-brand-950/60">
        {/* Light travelling across the card, once, as it lands. */}
        <span
          aria-hidden="true"
          className="hw-sweep pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/25 to-transparent"
        />

        <button
          type="button"
          onClick={close}
          aria-label="Dismiss welcome"
          className="absolute top-2 right-2 grid size-7 place-items-center rounded-full text-brand-100/50 transition hover:bg-white/10 hover:text-white"
        >
          <svg viewBox="0 0 24 24" fill="none" className="size-4" aria-hidden="true">
            <path
              d="M6 6l12 12M18 6L6 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <span className="hw-line mx-auto grid size-10 place-items-center rounded-full bg-gradient-to-br from-leaf to-emerald-400 text-brand-950 shadow-lg shadow-leaf/25">
          <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden="true">
            <path
              d="M4 12.5l5 5L20 6.5"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>

        <p className="hw-line mt-3 text-[11px] font-semibold tracking-[0.22em] text-brand-200 uppercase">
          Welcome
        </p>

        <p className="hw-line mt-1.5 bg-gradient-to-r from-white via-brand-100 to-accent-soft bg-clip-text text-[1.4rem] font-extrabold tracking-tight text-balance text-transparent sm:text-2xl">
          {name}
        </p>

        <p className="hw-line mt-2 text-[13px] leading-relaxed text-pretty text-brand-100/70">
          Do you want to be part of something great?
        </p>

        <a
          href="#community"
          onClick={close}
          className="hw-line group mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-[13px] font-semibold text-brand-800 transition hover:bg-brand-50"
        >
          Join the community
          <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>

      {/* Thrown from the middle of the card, so the burst reads as coming from
          the name rather than from the edge of the panel. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 grid place-items-center">
        <div className="relative">
          {Array.from({ length: CHIPS }, (_, i) => (
            <span
              key={i}
              className="hw-chip absolute size-1.5 rounded-[1px]"
              style={{ background: CHIP_COLOURS[i % CHIP_COLOURS.length] }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
