"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { LiquidGlass, paintGlassLenses } from "@/components/ui/liquid-glass";
import localFont from "next/font/local";
import { ArrowDown, MapPin } from "lucide-react";
import type { COBEOptions } from "cobe";
import { Globe } from "@/components/ui/globe";

const champBlack = localFont({
  src: "../../public/font/Champ-Black.woff2",
  weight: "900",
  style: "normal",
});

const events = [
  { id: "nile-tech-summit", day: "18", month: "Oct", title: "Nile Tech Summit", location: "Main auditorium", time: "10:00 AM" },
  { id: "frontend-study-circle", day: "24", month: "Oct", title: "Frontend Study Circle", location: "Innovation hub", time: "4:00 PM" },
  { id: "inter-school-hackathon", day: "02", month: "Nov", title: "Inter-school Hackathon", location: "Nile campus", time: "8:00 AM" },
];

const darkGlobeConfig: COBEOptions = {
  width: 800, height: 800, devicePixelRatio: 2,
  phi: 0.2, theta: 0.25, dark: 1, diffuse: 1.2,
  mapSamples: 20000, mapBrightness: 6,
  baseColor: [0.15, 0.3, 0.6],
  markerColor: [0.75, 0.86, 1],
  glowColor: [0.05, 0.09, 0.2],
  markers: [{ location: [9.0765, 7.3986], size: 0.09 }],
  onRender: () => {},
};

const lightGlobeConfig: COBEOptions = {
  width: 800, height: 800, devicePixelRatio: 2,
  phi: 0.2, theta: 0.25, dark: 0, diffuse: 1.1,
  mapSamples: 20000, mapBrightness: 4,
  baseColor: [0.52, 0.63, 0.88],
  markerColor: [0.15, 0.25, 0.58],
  glowColor: [1, 1, 1],
  markers: [{ location: [9.0765, 7.3986], size: 0.09 }],
  onRender: () => {},
};

/** Tracks the effective theme (light/dark), following stored, system, and live changes. */
function useIsDark() {
  const [isDark, setIsDark] = useState(() => typeof document !== "undefined" && document.documentElement.classList.contains("dark"));
  useEffect(() => {
    const root = document.documentElement;
    const sync = () => setIsDark(root.classList.contains("dark"));
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    media.addEventListener("change", sync);
    window.addEventListener("storage", sync);
    window.addEventListener("nacos-theme-change", sync);
    return () => {
      observer.disconnect();
      media.removeEventListener("change", sync);
      window.removeEventListener("storage", sync);
      window.removeEventListener("nacos-theme-change", sync);
    };
  }, []);
  return isDark;
}

export function ChapterEvents() {
  const scene = useRef<HTMLDivElement>(null);
  const isDark = useIsDark();
  const globeConfig = useMemo(() => (isDark ? darkGlobeConfig : lightGlobeConfig), [isDark]);
  const paintGlass = useCallback((canvas: HTMLCanvasElement) => {
    if (scene.current) paintGlassLenses(canvas, scene.current);
  }, []);
  return (
    <section id="events" className="chapter-events" aria-labelledby="events-title">
      <div className="chapter-events-inner">
        <header className="chapter-events-heading">
          <h2 id="events-title" className={champBlack.className}>NACOS Events</h2>
          <p>Meet your people. Share what you know. Build something together.</p>
        </header>
        <div ref={scene} className="chapter-events-scene">
          <div className="chapter-events-globe" aria-hidden="true">
            <Globe config={globeConfig} onFrame={paintGlass} />
          </div>
          <div className="chapter-events-callouts">
            {events.map((event, index) => (
              <a key={event.id} href={`#${event.id}`} className={`chapter-event-callout chapter-event-callout--${index + 1}`}>
                <LiquidGlass />
                <span className="chapter-event-pin"><MapPin size={17} aria-hidden="true" /></span>
                <span className="chapter-event-label"><strong>{event.title}</strong><span>{event.month} {event.day} · {event.location}</span></span>
                <ArrowDown size={16} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
        <div className="chapter-events-fade" aria-hidden="true" />
        <div className="chapter-events-schedule">
          <div className="chapter-events-schedule-heading">
            <div>
              <h3>Coming up on campus</h3>
              <p>Find your next NACOS meetup, workshop, or build session.</p>
            </div>
          </div>
          <div className="chapter-events-list">
            {events.map((event) => (
              <article id={event.id} key={event.id} className="chapter-event-row" tabIndex={-1}>
                <div className="chapter-event-details">
                  <span className="chapter-event-location">{event.location}</span>
                  <h4>{event.title}</h4>
                  <p><span>{event.month} {event.day}</span><span aria-hidden="true">·</span><span>{event.time}</span></p>
                </div>
                <span className="chapter-event-status">Coming soon</span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
