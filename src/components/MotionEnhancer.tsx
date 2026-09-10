"use client";

import { useEffect, useRef } from "react";

export function MotionEnhancer() {
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect reduced-motion preferences
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let cleanup: (() => void) | undefined;

    const setup = () => {
      // 1. Assign stagger indexes to children of [data-reveal-stagger]
      document.querySelectorAll<HTMLElement>("[data-reveal-stagger]").forEach((container) => {
        Array.from(container.children).forEach((child, index) => {
          (child as HTMLElement).style.setProperty("--stagger-i", String(index));
        });
      });

      // 2. IntersectionObserver for standard reveals and staggered groups
      const revealObserver = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add("has-arrived");
              revealObserver.unobserve(entry.target);
            }
          }
        },
        { threshold: 0.05, rootMargin: "0px 0px -20px 0px" },
      );

      // 3. IntersectionObserver for numeric counters
      const counterObserver = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              const el = entry.target as HTMLElement;
              const target = parseInt(el.getAttribute("data-counter-target") || "0", 10);
              const suffix = el.getAttribute("data-counter-suffix") || "";
              const prefix = el.getAttribute("data-counter-prefix") || "";
              const duration = 1100;
              const startTime = performance.now();

              const updateCounter = (currentTime: number) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const easeOut = 1 - Math.pow(1 - progress, 3);
                const currentVal = Math.round(easeOut * target);
                el.textContent = `${prefix}${currentVal.toLocaleString()}${suffix}`;

                if (progress < 1) {
                  requestAnimationFrame(updateCounter);
                }
              };

              requestAnimationFrame(updateCounter);
              counterObserver.unobserve(el);
            }
          }
        },
        { threshold: 0.2 },
      );

      const observeElements = (root: ParentNode = document) => {
        root.querySelectorAll<HTMLElement>("[data-reveal-stagger]").forEach((container) => {
          Array.from(container.children).forEach((child, index) => {
            (child as HTMLElement).style.setProperty("--stagger-i", String(index));
          });
        });

        root
          .querySelectorAll("[data-reveal], [data-reveal-stagger]")
          .forEach((element) => revealObserver.observe(element));

        root
          .querySelectorAll("[data-counter-target]")
          .forEach((el) => counterObserver.observe(el));
      };

      observeElements(document);

      const mutationObserver = new MutationObserver((mutations) => {
        for (const m of mutations) {
          for (const node of m.addedNodes) {
            if (node instanceof HTMLElement) {
              observeElements(node);
              if (node.matches("[data-reveal], [data-reveal-stagger]")) {
                revealObserver.observe(node);
              }
            }
          }
        }
      });
      mutationObserver.observe(document.body, { childList: true, subtree: true });

      // 4. Scroll progress bar & hero parallax via requestAnimationFrame
      let ticking = false;
      const onScroll = () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            const scrollY = window.scrollY;
            if (scrollY < 1000) {
              document.documentElement.style.setProperty("--hero-scroll-y", `${scrollY}px`);
            }
            if (progressBarRef.current) {
              const docHeight = document.documentElement.scrollHeight - window.innerHeight;
              const scrollPercent = docHeight > 0 ? Math.min(Math.max((scrollY / docHeight) * 100, 0), 100) : 0;
              progressBarRef.current.style.width = `${scrollPercent}%`;
            }
            ticking = false;
          });
          ticking = true;
        }
      };

      const activateMotion = () => {
        document.documentElement.classList.add("js-motion");
      };

      window.addEventListener("scroll", activateMotion, { passive: true, once: true });
      window.addEventListener("scroll", onScroll, { passive: true });

      cleanup = () => {
        window.removeEventListener("scroll", activateMotion);
        window.removeEventListener("scroll", onScroll);
        mutationObserver.disconnect();
        revealObserver.disconnect();
        counterObserver.disconnect();
        document.documentElement.classList.remove("js-motion");
      };
    };

    let initialized = false;
    const runSetup = () => {
      if (initialized) return;
      initialized = true;
      setup();
    };

    const events = ["scroll", "pointerdown", "touchstart"];
    const onUserAction = () => {
      events.forEach((ev) => window.removeEventListener(ev, onUserAction));
      clearTimeout(fallbackTimer);
      runSetup();
    };
    events.forEach((ev) =>
      window.addEventListener(ev, onUserAction, { passive: true, once: true })
    );

    const fallbackTimer = setTimeout(runSetup, 6000);

    return () => {
      events.forEach((ev) => window.removeEventListener(ev, onUserAction));
      clearTimeout(fallbackTimer);
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <div className="scroll-progress-container" aria-hidden="true">
      <div ref={progressBarRef} className="scroll-progress-bar" />
    </div>
  );
}
