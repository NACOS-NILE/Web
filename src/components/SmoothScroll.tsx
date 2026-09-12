"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

// How far below the sticky Navbar a scrolled-to section should land, so its
// heading isn't hidden under the floating pill.
const ANCHOR_SCROLL_OFFSET = 90;

export default function SmoothScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    // Native mobile/touch browsers have hardware-accelerated compositor scrolling.
    // Disabling Lenis on touch screens frees up the main thread completely.
    const isTouch =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.innerWidth < 768;

    let lenis: Lenis | null = null;
    let tickerCallback: ((time: number) => void) | null = null;

    if (!isTouch) {
      lenis = new Lenis({
        duration: 1.1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 0.95,
      });

      // Keep any ScrollTrigger-driven animation (scrub, pin, reveal triggers)
      // perfectly in sync with Lenis's smoothed position, and drive Lenis off
      // GSAP's own ticker instead of a separate rAF loop so both systems tick
      // on the exact same frame.
      lenis.on("scroll", ScrollTrigger.update);

      tickerCallback = (time: number) => {
        lenis!.raf(time * 1000);
      };
      gsap.ticker.add(tickerCallback);
      gsap.ticker.lagSmoothing(0);
    }

    // Smoothly scroll to same-page hash targets (Navbar/Footer links like
    // "/#about", "/#leadership") instead of the instant jump Next's <Link>
    // does by default. Capture phase + preventDefault so this runs BEFORE
    // Link's own click handler gets a chance to do that instant jump itself
    // (Link checks event.defaultPrevented and bails if it's already set).
    // Routed through Lenis on desktop so it doesn't fight Lenis's own scroll
    // ownership; falls back to native smooth scrollTo on touch, where Lenis
    // is disabled entirely.
    const handleAnchorClick = (e: MouseEvent) => {
      if (prefersReducedMotion()) return; // let the instant native jump happen

      const target = e.target as HTMLElement | null;
      const anchor = target?.closest('a[href*="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;

      let url: URL;
      try {
        url = new URL(anchor.href, window.location.href);
      } catch {
        return;
      }
      if (url.pathname !== window.location.pathname || !url.hash) return;

      let hashTarget: Element | null;
      try {
        hashTarget = document.querySelector(url.hash);
      } catch {
        return;
      }
      if (!hashTarget) return;

      // preventDefault alone only stops the browser's native navigation —
      // it does NOT stop Next's <Link> onClick (which runs its own
      // router.push regardless of defaultPrevented) from firing right after
      // this and fighting the Lenis animation. stopPropagation keeps that
      // handler from running at all.
      e.preventDefault();
      e.stopPropagation();

      // Compute the numeric target ourselves rather than handing Lenis the
      // Element directly — without an explicit wrapper/content config,
      // Element-target resolution wasn't producing any visible scroll at all.
      const top = Math.max(
        0,
        hashTarget.getBoundingClientRect().top + window.scrollY - ANCHOR_SCROLL_OFFSET
      );

      if (lenis) {
        lenis.scrollTo(top, { duration: 1.2 });
      } else {
        window.scrollTo({ top, behavior: "smooth" });
      }

      history.pushState(null, "", url.hash);
    };

    document.addEventListener("click", handleAnchorClick, true);

    return () => {
      document.removeEventListener("click", handleAnchorClick, true);
      if (tickerCallback) gsap.ticker.remove(tickerCallback);
      lenis?.destroy();
    };
  }, []);

  return null;
}
