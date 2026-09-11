"use client";

import { useRef, useState, useEffect, MouseEvent, FormEvent } from "react";
import Link from "next/link";
import { WHATSAPP_URL, GITHUB_URL } from "@/data/links";
import { useSectionHeaderReveal } from "@/lib/useSectionHeaderReveal";
import { TechIconField, type TechIconSpec } from "./TechIconField";

// Custom (not the shared 3/3-full-height GEOMETRY) — this card is shorter
// and denser than a full section, so icons stay confined to the upper band
// above the headline/subtitle, clear of the button dock lower down.
const CTA_TECH_ICONS: TechIconSpec[] = [
  { id: "code", type: "code", side: "left", inset: 3, top: 12, size: 30, rotate: -8, driftPercent: 10, mouseFactor: 0.7 },
  { id: "terminal", type: "terminal", side: "left", inset: 6, top: 40, size: 26, rotate: 5, driftPercent: -8, mouseFactor: 1.1 },
  { id: "gitBranch", type: "gitBranch", side: "left", inset: 1, top: 66, size: 24, rotate: 4, driftPercent: 6, mouseFactor: 0.5 },
  { id: "cpu", type: "cpu", side: "right", inset: 2, top: 14, size: 28, rotate: 7, driftPercent: -9, mouseFactor: 0.9 },
  { id: "database", type: "database", side: "right", inset: 5.5, top: 42, size: 24, rotate: -5, driftPercent: 7, mouseFactor: 0.55 },
  { id: "cloud", type: "cloud", side: "right", inset: 0.5, top: 68, size: 30, rotate: -3, driftPercent: -6, mouseFactor: 1.0 },
];

const STUDENT_EMAIL_DOMAIN = "@nileuniversity.edu.ng";

export default function JoinCTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);

  // "Join WhatsApp Community" morphs into a student-ID capture form on click.
  // There's no backend on this static site, so this doesn't actually verify
  // enrollment — it personalizes the hand-off (and gently signals "Nile
  // students only") before opening the real WhatsApp link.
  const [joinMode, setJoinMode] = useState<"idle" | "form" | "success">("idle");
  const [studentId, setStudentId] = useState("");

  // Card itself no longer animates in — a scroll-tied entrance was tried
  // here a couple of times (both a scrub scale and a plain fade) and it
  // kept being unreliable, so the card now just renders normally. The
  // heading/subtitle inside it still get the shared reveal treatment via
  // useSectionHeaderReveal below.
  useSectionHeaderReveal(containerRef);

  useEffect(() => {
    if (joinMode !== "success") return;
    const timer = setTimeout(() => {
      setJoinMode("idle");
      setStudentId("");
    }, 2000);
    return () => clearTimeout(timer);
  }, [joinMode]);

  const handleJoinSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!studentId.trim()) return;
    window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
    setJoinMode("success");
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setMousePos(null);
  };

  return (
    <section id="join" className="w-full py-16 sm:py-24 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* MONUMENTAL DARK EDITORIAL PILL CONTAINER (Matching Hero bookend curvature) */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative rounded-3xl md:rounded-[2.8rem] text-white overflow-hidden p-8 sm:p-14 md:p-18 lg:p-22 flex flex-col items-center text-center isolate border border-white/10 select-none transition-all duration-300"
        style={{
          // Same palette as the exco cutout mat / testimonial pill — brand
          // blue glow, faded to near-black by the edges. Replaces the flat
          // bg-black; the ambient glow/grid layers below still sit on top
          // of this for extra texture, they're not redundant with it.
          background:
            "radial-gradient(ellipse 90% 70% at 50% 15%, #2f4da8 0%, #274193 25%, #14204a 50%, #05070f 78%, #000000 100%)",
        }}
      >
        {/* INTERACTIVE MOUSE SPOTLIGHT (Subtle luxury glow that follows cursor) */}
        {mousePos && (
          <div
            className="absolute pointer-events-none -inset-px transition-opacity duration-300 -z-10"
            style={{
              background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(39, 65, 147, 0.22), rgba(39, 65, 147, 0.05) 40%, transparent 70%)`,
            }}
          />
        )}

        {/* STATIC AMBIENT ATMOSPHERIC DEPTH (Nile Blue + Pure Darkness) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-64 bg-gradient-to-b from-[#274193]/25 via-[#274193]/08 to-transparent blur-3xl pointer-events-none -z-20" />
        <div className="absolute bottom-0 right-1/4 w-80 h-44 bg-white/[0.03] blur-3xl pointer-events-none -z-20" />

        {/* SUBTLE ARCHITECTURAL GRID BACKGROUND */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none -z-20"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: "28px 28px",
          }}
        />

        {/* TOP BEVEL INNER HIGHLIGHT */}
        <div className="absolute top-0 inset-x-12 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

        {/* AMBIENT TECH-ICON FIELD — confined to the upper band above the
            headline, clear of the button dock. White for this dark card. */}
        <TechIconField icons={CTA_TECH_ICONS} colorClassName="text-white" />

        {/* MONUMENTAL DISPLAY HEADLINE */}
        <h2 data-reveal="heading" className="relative z-10 font-deacon uppercase text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-[-0.035em] leading-[1.08] max-w-4xl drop-shadow-lg">
          Ready to build with <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/80">
            Nile&apos;s top engineers?
          </span>
        </h2>

        {/* EDITORIAL SUBTITLE */}
        <p data-reveal="subtitle" className="relative z-10 text-sm sm:text-base md:text-lg lg:text-xl text-white/75 font-normal leading-relaxed max-w-2xl mt-4 sm:mt-6 mb-8 sm:mb-11 drop-shadow-md">
          Whether you&apos;re writing your first function in 100 level or architecting cloud backends, NACOS Nile connects you with the collaborators, mentors, and hackathon teams to accelerate your growth.
        </p>

        {/* ACTION DOCK */}
        <div className="relative z-10 flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
          {/* Primary WhatsApp CTA — idle button morphs into a student-ID
              capture form, then a brief success state, before opening the
              real WhatsApp link. */}
          {joinMode === "idle" && (
            <button
              type="button"
              onClick={() => setJoinMode("form")}
              className="w-full sm:w-auto h-[52px] sm:h-[58px] inline-flex items-center justify-center gap-2.5 px-8 rounded-full bg-white text-gray-950 font-bold text-sm sm:text-base hover:bg-gray-100 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group cursor-pointer animate-in fade-in zoom-in-95 duration-200"
            >
              <span>Join WhatsApp Community</span>
              <svg
                className="w-4 h-4 text-gray-950 transition-transform duration-200 group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          )}

          {joinMode === "form" && (
            <form
              onSubmit={handleJoinSubmit}
              className="w-full sm:w-auto h-[52px] sm:h-[58px] flex items-center gap-1.5 rounded-full bg-white pl-5 pr-1.5 animate-in fade-in zoom-in-95 duration-200"
            >
              <label htmlFor="student-id" className="sr-only">
                Nile University Student ID
              </label>
              <div className="flex items-baseline gap-0.5 flex-1 min-w-0">
                <input
                  id="student-id"
                  type="text"
                  inputMode="numeric"
                  autoFocus
                  required
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value.replace(/[^a-zA-Z0-9]/g, ""))}
                  placeholder="Student ID"
                  className="min-w-0 w-20 sm:w-24 bg-transparent text-gray-950 font-bold text-sm sm:text-base placeholder:text-gray-400 placeholder:font-medium outline-none"
                />
                <span className="text-gray-500 font-medium text-[11px] sm:text-sm whitespace-nowrap select-none">
                  {STUDENT_EMAIL_DOMAIN}
                </span>
              </div>
              <button
                type="submit"
                disabled={!studentId.trim()}
                aria-label="Join with student ID"
                className="shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#274193] hover:bg-[#1e3478] disabled:bg-gray-200 disabled:cursor-not-allowed text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          )}

          {joinMode === "success" && (
            <div className="w-full sm:w-auto h-[52px] sm:h-[58px] inline-flex items-center justify-center gap-2.5 px-8 rounded-full bg-white text-gray-950 font-bold text-sm sm:text-base animate-in fade-in zoom-in-95 duration-200">
              <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              <span>Welcome! Opening WhatsApp…</span>
            </div>
          )}

          {/* Secondary GitHub Repository Link */}
          <Link
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto h-[52px] sm:h-[58px] inline-flex items-center justify-center gap-2.5 px-7 rounded-full bg-white/[0.07] hover:bg-white/[0.12] text-white font-semibold text-sm sm:text-base backdrop-blur-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group"
          >
            <svg className="w-4.5 h-4.5 text-white/80 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            <span>GitHub Repository</span>
            <span className="text-xs text-white/50 group-hover:text-white/80 transition-colors">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
