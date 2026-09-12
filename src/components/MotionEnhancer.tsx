"use client";
import { useEffect } from "react";
export function MotionEnhancer() {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!("IntersectionObserver" in window)) return;
    const animations = new Set<Animation>();
    const seen = new WeakSet<Element>();
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        observer.unobserve(entry.target);
        if (preference.matches || seen.has(entry.target)) continue;
        seen.add(entry.target);
        // Animate only after intersection: content never waits hidden for JS.
        const animation = entry.target.animate([
          { opacity: 0.25, transform: "translateY(14px)" },
          { opacity: 1, transform: "none" },
        ], { duration: 500, delay: Math.min(Number((entry.target as HTMLElement).dataset.motionIndex || 0) * 50, 400), easing: "cubic-bezier(0.22, 1, 0.36, 1)" });
        animations.add(animation);
        animation.onfinish = () => animations.delete(animation);
      }
    }, { threshold: 0, rootMargin: "0px 0px 30px 0px" });
    const observe = () => {
      document.querySelectorAll<HTMLElement>("[data-reveal-stagger]").forEach(group => {
        Array.from(group.children).forEach((child, index) => {
          (child as HTMLElement).dataset.motionIndex = String(index);
          if (!seen.has(child)) observer.observe(child);
        });
      });
      document.querySelectorAll("[data-reveal]").forEach(element => {
        if (!seen.has(element)) observer.observe(element);
      });
    };
    const start = () => { observe(); mutations.observe(document.body, { childList: true, subtree: true }); };
    const mutations = new MutationObserver(observe);
    window.addEventListener("scroll", start, { once: true, passive: true });
    const cancel = () => { if (preference.matches) animations.forEach(animation => animation.cancel()); };
    preference.addEventListener("change", cancel);
    return () => { window.removeEventListener("scroll", start); observer.disconnect(); mutations.disconnect(); animations.forEach(animation => animation.cancel()); preference.removeEventListener("change", cancel); };
  }, []);
  return null;
}
