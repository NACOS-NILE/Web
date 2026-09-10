"use client";

import { useSyncExternalStore } from "react";
import { MoonIcon, SunIcon } from "@/components/Icons";

/**
 * The `dark` class on <html> is the single source of truth for the theme: it is
 * set before first paint by the inline script in layout.tsx, and read here
 * through useSyncExternalStore so the button always mirrors the real state
 * without a hydration mismatch.
 */
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
}

const getSnapshot = () => document.documentElement.classList.contains("dark");
const getServerSnapshot = () => false;

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const isDark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  function toggle() {
    const next = !isDark;
    document.documentElement.classList.toggle("dark", next);
    try {
      window.localStorage.setItem("nacos-theme", next ? "dark" : "light");
    } catch {
      /* Storage is unavailable in some private modes — the toggle still works. */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={isDark}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={`inline-flex size-10 items-center justify-center rounded-full border border-brand-900/10 bg-white/70 text-brand-900 transition hover:bg-white dark:border-white/15 dark:bg-white/5 dark:text-brand-100 dark:hover:bg-white/10 ${className}`}
    >
      {/*
        Both glyphs are rendered and swapped by the `dark` class rather than by
        `isDark`, so the right one is showing from the very first paint. Keying
        them off state instead would flash a moon over a dark page for as long
        as hydration takes.
      */}
      <SunIcon className="hidden size-5 dark:block" />
      <MoonIcon className="size-5 dark:hidden" />
    </button>
  );
}
