"use client";

import { useEffect, useRef } from "react";

export default function Loader() {
  const loaderRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const pctRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const loader = loaderRef.current;
    const bar = barRef.current;
    const pct = pctRef.current;

    document.body.classList.add("loading");
    document.body.style.overflow = "hidden";

    if (document.fonts && document.fonts.ready) {
      Promise.race([
        document.fonts.ready,
        new Promise((resolve) => setTimeout(resolve, 1500)),
      ]).then(() => document.body.classList.add("fonts-ready"));
    } else {
      document.body.classList.add("fonts-ready");
    }

    let loadResolved = false;
    let progress = 0;
    let tickId = 0;
    const started = performance.now();
    const MIN_DISPLAY = 1875;
    const MAX_DISPLAY = 2975;
    const FILL_DURATION = 650;

    function setProgress(value: number) {
      progress = value;
      if (bar) bar.style.width = value + "%";
      if (pct) pct.textContent = value + "%";
    }

    function tick(now: number) {
      if (loadResolved) return;
      const elapsed = now - started;
      const eased = Math.min(elapsed / 1500, 1);
      const ramp = eased * eased * (3 - 2 * eased) * 82;
      const stall = Math.max(0, elapsed - 1500);
      const creep = Math.min(stall / 4000, 1) * 8;
      setProgress(Math.min(90, Math.round(ramp + creep)));
      tickId = requestAnimationFrame(tick);
    }
    tickId = requestAnimationFrame(tick);

    function finish() {
      if (loadResolved) return;
      loadResolved = true;
      cancelAnimationFrame(tickId);
      const elapsed = performance.now() - started;
      const wait = Math.max(0, MIN_DISPLAY - elapsed);
      if (bar) bar.style.transition = "none";
      const from = Math.max(progress, 0);
      const fillStart = performance.now();
      function fillToEnd(now: number) {
        const t = Math.min((now - fillStart) / FILL_DURATION, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        setProgress(Math.min(100, Math.round(from + (100 - from) * eased)));
        if (t < 1) requestAnimationFrame(fillToEnd);
      }
      requestAnimationFrame(fillToEnd);
      setTimeout(() => {
        document.body.classList.remove("loading");
        document.body.classList.add("loaded");
        document.body.style.overflow = "";
        if (loader) {
          loader.classList.add("hidden");
          setTimeout(() => loader.remove(), 900);
        }
      }, wait + FILL_DURATION + 250);
    }

    const onLoad = () => setTimeout(finish, 250);
    if (document.readyState === "complete") {
      setTimeout(finish, 250);
    } else {
      window.addEventListener("load", onLoad);
    }
    const maxTimer = setTimeout(finish, MAX_DISPLAY);

    return () => {
      window.removeEventListener("load", onLoad);
      clearTimeout(maxTimer);
    };
  }, []);

  return (
    <div className="loader" ref={loaderRef}>
      <div className="loader-glow" />
      <div className="loader-center">
        <div className="loader-word" aria-hidden="true">
          <span className="loader-clip"><span className="loader-letter">N</span></span>
          <span className="loader-clip"><span className="loader-letter">A</span></span>
          <span className="loader-clip"><span className="loader-letter">C</span></span>
          <span className="loader-clip"><span className="loader-letter">O</span></span>
          <span className="loader-clip"><span className="loader-letter">S</span></span>
          <span className="loader-clip gap" />
          <span className="loader-clip alt"><span className="loader-letter">N</span></span>
          <span className="loader-clip alt"><span className="loader-letter">I</span></span>
          <span className="loader-clip alt"><span className="loader-letter">L</span></span>
          <span className="loader-clip alt"><span className="loader-letter">E</span></span>
        </div>
        <div className="loader-sub">
          <div className="loader-line">
            <div className="loader-line-fill" ref={barRef} />
          </div>
          <div className="loader-meta">
            <span className="loader-tag">Towards Advanced Computing</span>
            <span className="loader-pct" ref={pctRef}>0%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
