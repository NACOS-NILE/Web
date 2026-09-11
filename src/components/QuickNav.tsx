"use client";

import { useEffect, useRef, useCallback } from "react";
import { smoothScrollTo } from "@/lib/scroll";

export default function QuickNav() {
  const topRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const update = useCallback(() => {
    const y = window.pageYOffset;
    const topBtn = topRef.current;
    const nextBtn = nextRef.current;
    if (!topBtn || !nextBtn) return;

    topBtn.classList.toggle("show", y > 350);

    const blocks = Array.from(document.querySelectorAll<HTMLElement>("section[id]"));
    const vpBottom = y + window.innerHeight;
    let hasNext = false;
    for (const b of blocks) {
      if (b.getBoundingClientRect().top + y > vpBottom - 60) {
        hasNext = true;
        break;
      }
    }
    nextBtn.classList.toggle("show", hasNext);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    const id = setInterval(() => {
      if (document.body.classList.contains("loaded") || window.pageYOffset > 0) {
        clearInterval(id);
        update();
      }
    }, 100);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      clearInterval(id);
    };
  }, [update]);

  const scrollToNext = () => {
    const y = window.pageYOffset;
    const vpBottom = y + window.innerHeight;
    const blocks = Array.from(document.querySelectorAll<HTMLElement>("section[id]"));
    const navbar = document.querySelector<HTMLElement>(".navbar");
    const off = (navbar ? navbar.offsetHeight : 80) + 20;
    for (const b of blocks) {
      const top = b.getBoundingClientRect().top + y;
      if (top > vpBottom - 60) {
        smoothScrollTo(Math.max(top - off, 0), 1000);
        return;
      }
    }
  };

  return (
    <div className="quick-nav" aria-label="Quick navigation">
      <button
        ref={topRef}
        className="quick-nav-btn quick-nav-top"
        aria-label="Back to top"
        onClick={() => smoothScrollTo(0, 1100)}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 15l-6-6-6 6" /></svg>
      </button>
      <button
        ref={nextRef}
        className="quick-nav-btn quick-nav-next"
        aria-label="Scroll to next section"
        onClick={scrollToNext}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
      </button>
    </div>
  );
}
