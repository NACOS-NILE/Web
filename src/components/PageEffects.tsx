"use client";

import { useEffect } from "react";
import { prefersReducedMotion } from "@/lib/utils";

/*
  Page-wide behaviour that has no visible output of its own:
  scroll-reveal animations and tap effects on iPhones.
*/
export default function PageEffects() {
  // iPhones only show :active tap effects if the page listens for touches
  useEffect(() => {
    const noop = () => {};
    document.addEventListener("touchstart", noop, { passive: true });
    return () => document.removeEventListener("touchstart", noop);
  }, []);

  /*
    Scroll-reveal sections.
    Sections are only hidden once this code has actually run (the
    "reveal-ready" class). If JavaScript is slow or blocked, every section
    stays visible instead of disappearing.
  */
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(".scroll-reveal");

    const showAll = () => {
      sections.forEach((section) => section.classList.add("is-visible"));
    };

    if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
      showAll();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      // threshold 0 so very tall sections on phones still trigger
      { threshold: 0, rootMargin: "0px 0px -8% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    document.documentElement.classList.add("reveal-ready");

    return () => observer.disconnect();
  }, []);

  return null;
}
