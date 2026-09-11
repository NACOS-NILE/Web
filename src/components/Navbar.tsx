"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, Menu } from "lucide-react";
import { navLinks } from "@/data/site";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = ["top", ...navLinks.map((l) => l.href.replace("#", ""))];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;
          if (window.scrollY <= 120) {
            setActiveSection("");
            return;
          }
          setActiveSection(id === "top" ? "" : id);
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
      );
      obs.observe(el);
      observers.push(obs);
    });

    function handleScroll() {
      if (window.scrollY <= 120) setActiveSection("");
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observers.forEach((o) => o.disconnect());
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock body scroll while menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[var(--color-surface)]/90 backdrop-blur dark:border-white/5">
        <nav
          aria-label="Primary"
          className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10 lg:px-12"
        >
          {/* Logo */}
          <Link
            href="#top"
            className="flex items-center gap-2"
            onClick={closeMenu}
          >
            <Image
              src="/logo.svg"
              alt="NACOS Nile logo"
              width={36}
              height={36}
            />
            <span className="font-display text-xl font-bold">
                <span className="text-[#00d98b]">NACOS</span>{" "}
                <span className="text-[var(--color-primary)]">Nile</span>
              </span>
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden items-center gap-6 lg:flex xl:gap-8">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative text-sm font-medium transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-left after:rounded-full after:bg-[var(--color-primary)] after:transition-transform after:duration-300 ${
                      isActive
                        ? "text-[var(--color-primary)] dark:text-[var(--color-accent)] after:scale-x-100"
                        : "text-[var(--color-ink)] dark:text-[var(--color-accent)] after:scale-x-0 hover:text-[var(--color-primary)] hover:after:scale-x-100 dark:text-[var(--color-ink)] dark:hover:text-[var(--color-accent)]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right side: community CTA, theme toggle + hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="#community"
              onClick={closeMenu}
              className="hidden rounded-[7px] bg-[var(--color-primary)] px-4 py-2.5 font-body text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary-dark)] lg:inline-flex"
            >
              Join Community
            </Link>
            <ThemeToggle />

            {/* Hamburger — mobile only */}
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-[var(--color-ink)] transition-colors hover:bg-black/5 dark:hover:bg-white/10 lg:hidden"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed inset-0 z-40 flex flex-col bg-[var(--color-surface)] transition-all duration-300 ease-in-out lg:hidden ${
          menuOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-4 opacity-0 pointer-events-none"
        }`}
        style={{ top: "65px" }}
      >
        <nav className="flex flex-1 flex-col px-6 pt-8">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link, i) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <li
                  key={link.href}
                  style={{ transitionDelay: menuOpen ? `${i * 40}ms` : "0ms" }}
                  className={`transition-all duration-300 ${
                    menuOpen
                      ? "translate-y-0 opacity-100"
                      : "translate-y-2 opacity-0"
                  }`}
                >
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className={`flex items-center justify-between rounded-xl px-4 py-4 font-display text-lg font-semibold transition-colors ${
                      isActive
                        ? "bg-[var(--color-primary)]/10 text-[var(--color-primary)] dark:text-[var(--color-accent)]"
                        : "text-[var(--color-ink)] hover:bg-[var(--color-primary)]/8 hover:text-[var(--color-primary)]"

                    }`}
                  >
                    {link.label}
                    {/* Active pill indicator */}
                    {isActive && (
                      <span className="h-2 w-2 rounded-full bg-[var(--color-primary)] dark:bg-[var(--color-accent)]" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link
            href="#community"
            onClick={closeMenu}
            className="mt-8 inline-flex items-center justify-center rounded-[7px] bg-[var(--color-primary)] px-5 py-4 font-body text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary-dark)]"
          >
            Join Community
          </Link>
        </nav>

        {/* Footer bar inside menu */}
        <div className="border-t border-black/5 px-6 py-6 dark:border-white/5">
          <p className="font-body text-xs text-[var(--color-ink-muted)]">
            NACOS Nile University Chapter
          </p>
        </div>
      </div>
    </>
  );
}
