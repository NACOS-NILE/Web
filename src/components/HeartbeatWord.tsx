"use client";

import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

const LETTERS = "heartbeat".split("");

/**
 * "heartbeat" — a pulse ripples letter-by-letter through the word (left to
 * right, each letter briefly scaling up as the wave passes) rather than the
 * whole word throbbing together. Reads as energy passing through it. Loops
 * continuously, but only while in view.
 */
export default function HeartbeatWord() {
  const containerRef = useRef<HTMLSpanElement>(null);
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (prefersReducedMotion()) return;

    const chars = letterRefs.current.filter((el): el is HTMLSpanElement => Boolean(el));
    if (chars.length === 0) return;

    const tl = gsap.timeline({ repeat: -1, paused: true, repeatDelay: 1.1 });

    tl.to(chars, {
      scale: 1.22,
      color: "#274193",
      duration: 0.22,
      ease: "power2.out",
      stagger: 0.05,
    }).to(
      chars,
      {
        scale: 1,
        color: "inherit",
        duration: 0.32,
        ease: "power2.in",
        stagger: 0.05,
      },
      "-=0.12"
    );

    let observer: IntersectionObserver | null = null;
    if (containerRef.current) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) tl.play();
          else tl.pause();
        },
        { rootMargin: "100px" }
      );
      observer.observe(containerRef.current);
    }

    return () => {
      observer?.disconnect();
      tl.kill();
    };
  }, []);

  return (
    <span ref={containerRef} className="inline-block">
      {LETTERS.map((char, i) => (
        <span
          key={i}
          ref={(el) => {
            letterRefs.current[i] = el;
          }}
          className="inline-block will-change-transform"
          style={{ transformOrigin: "center" }}
        >
          {char}
        </span>
      ))}
    </span>
  );
}
