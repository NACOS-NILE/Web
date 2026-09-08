"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/data";
import { BrandMark } from "./BrandMark";
import { Button } from "./Button";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const pillTransition = shouldReduceMotion
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 380, damping: 32 };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const sections = NAV_LINKS.map((link) => document.getElementById(link.href.slice(1))).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-4 py-2.5 backdrop-blur-lg transition-colors duration-300 sm:px-5 ${
          scrolled
            ? "border-nacos-dark/10 bg-white/85 shadow-sm shadow-nacos-dark/5 dark:border-white/10 dark:bg-nacos-dark/85"
            : "border-white/10 bg-white/70 dark:border-white/10 dark:bg-nacos-dark/60"
        }`}
      >
        <Link
          href="#top"
          aria-label="NACOS Nile — home"
          className="flex items-center rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-nacos-accent"
          onClick={() => setOpen(false)}
        >
          <BrandMark size="md" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => {
            const isActive = activeId === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "true" : undefined}
                className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nacos-accent ${
                  isActive
                    ? "text-nacos-blue dark:text-nacos-accent-light"
                    : "text-nacos-dark/70 hover:text-nacos-dark dark:text-white/70 dark:hover:text-white"
                }`}
              >
                {isActive ? (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 rounded-full bg-nacos-blue/8 dark:bg-white/10"
                    transition={pillTransition}
                  />
                ) : null}
                <span className="relative">{link.label}</span>
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <ThemeToggle />

          <div className="hidden lg:block">
            <Button href="#community" className="px-5 py-2.5 text-xs">
              Join Community
            </Button>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full text-nacos-dark transition-colors hover:bg-nacos-blue/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nacos-accent lg:hidden dark:text-white dark:hover:bg-white/10"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl border border-nacos-dark/10 bg-white/95 p-3 shadow-lg shadow-nacos-dark/10 backdrop-blur-lg lg:hidden dark:border-white/10 dark:bg-nacos-dark/95"
          >
            <nav className="flex flex-col" aria-label="Mobile">
              {NAV_LINKS.map((link) => {
                const isActive = activeId === link.href.slice(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative rounded-xl px-4 py-3 text-base font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nacos-accent ${
                      isActive
                        ? "text-nacos-blue dark:text-nacos-accent-light"
                        : "text-nacos-dark/80 hover:bg-nacos-blue/5 hover:text-nacos-dark dark:text-white/80 dark:hover:bg-white/5 dark:hover:text-white"
                    }`}
                  >
                    {isActive ? (
                      <motion.span
                        layoutId="nav-active-pill-mobile"
                        className="absolute inset-0 rounded-xl bg-nacos-blue/8 dark:bg-white/10"
                        transition={pillTransition}
                      />
                    ) : null}
                    <span className="relative">{link.label}</span>
                  </a>
                );
              })}
            </nav>
            <div className="mt-2 border-t border-nacos-dark/10 p-2 pt-3 dark:border-white/10">
              <Button href="#community" onClick={() => setOpen(false)} className="w-full">
                Join Community
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
