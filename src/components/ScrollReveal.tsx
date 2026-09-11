"use client";

import { useEffect, useRef } from "react";

export default function ScrollReveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const revealEls = el.querySelectorAll(".reveal");
    revealEls.forEach((revealEl) => observer.observe(revealEl));

    return () => observer.disconnect();
  }, []);

  return <div ref={ref}>{children}</div>;
}
