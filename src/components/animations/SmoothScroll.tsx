"use client";

import React, {
  useEffect,
  useRef,
  useCallback,
  createContext,
  useContext,
} from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// ─── Lenis Context ────────────────────────────────────────────────────────────
// Expose the Lenis instance so any component can call lenis.scrollTo(target)
interface LenisContextValue {
  scrollTo: (target: string | HTMLElement | number, options?: object) => void;
}

const LenisContext = createContext<LenisContextValue>({
  scrollTo: () => {},
});

export function useLenisScroll() {
  return useContext(LenisContext);
}

// ─── SmoothScroll Provider ────────────────────────────────────────────────────
interface SmoothScrollProps {
  children: React.ReactNode;
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  const lenisRef = useRef<Lenis | null>(null);

  // Stable scrollTo function that delegates to Lenis
  const scrollTo = useCallback(
    (target: string | HTMLElement | number, options: object = {}) => {
      lenisRef.current?.scrollTo(target as string, {
        offset: -80, // account for fixed navbar (~5rem)
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        ...options,
      });
    },
    []
  );

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
      infinite: false,
    });

    lenisRef.current = lenis;

    // Keep GSAP ScrollTrigger in sync
    lenis.on("scroll", ScrollTrigger.update);

    const handleTick = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(handleTick);
    gsap.ticker.lagSmoothing(0);

    // ── Global anchor-link interception ──────────────────────────────────────
    // Intercept ALL clicks on anchor elements linking to in-page hashes (#... or /#...)
    // so that Lenis handles the scroll instead of the browser's instant jump.
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Walk up the DOM to find the nearest anchor
      const anchor = target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      // Check if it's an in-page hash link (#section or /#section)
      const hashMatch = href.match(/^(\/?#)(.+)$/);
      if (!hashMatch) return;

      const sectionId = hashMatch[2];
      if (!sectionId) return;

      if (sectionId === "top" || sectionId === "hero") {
        e.preventDefault();
        lenis.scrollTo(0, {
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
        window.history.pushState(null, "", `#${sectionId}`);
        return;
      }

      const section = document.getElementById(sectionId);
      if (!section) return;

      e.preventDefault();

      lenis.scrollTo(section, {
        offset: -80, // clear the fixed navbar
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });

      window.history.pushState(null, "", `#${sectionId}`);
    };

    // Use capture phase so we intercept before Next.js Router or default browser actions
    document.addEventListener("click", handleAnchorClick, true);

    return () => {
      document.removeEventListener("click", handleAnchorClick, true);
      gsap.ticker.remove(handleTick);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <LenisContext.Provider value={{ scrollTo }}>
      <div className="smooth-scroll-wrapper">{children}</div>
    </LenisContext.Provider>
  );
}
