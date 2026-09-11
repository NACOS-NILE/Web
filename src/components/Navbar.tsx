"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { navLinks } from "@/lib/data";
import { MenuIcon, CloseIcon } from "@/components/icons";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-white/85 backdrop-blur-md dark:border-white/10 dark:bg-ink-dark/85"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex h-18 max-w-6xl items-center justify-between px-5 sm:px-8"
        aria-label="Primary"
      >
        <a
          href="#top"
          className="flex items-center gap-2.5"
          aria-label="NACOS Nile — home"
        >
          <Image
            src="/logo.svg"
            alt="NACOS Nile logo"
            width={40}
            height={19}
            className="h-8 w-auto"
            priority
          />
          <span className="flex flex-col leading-none">
            <span className="text-[15px] font-semibold tracking-tight text-navy dark:text-white">
              NACOS Nile
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-slate dark:text-white/50">
              Nile University
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-slate transition-colors hover:text-brand dark:text-white/70 dark:hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <a
            href="#community"
            className="inline-flex h-10 items-center rounded-full bg-brand px-5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-600"
          >
            Join Community
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-navy dark:text-white"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? (
              <CloseIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile sheet */}
      <div
        className={`md:hidden ${open ? "block" : "hidden"} border-t border-line bg-white dark:border-white/10 dark:bg-ink-dark`}
      >
        <ul className="mx-auto flex max-w-6xl flex-col px-5 py-3">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-base font-medium text-navy dark:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2 pb-3">
            <a
              href="#community"
              onClick={() => setOpen(false)}
              className="inline-flex h-11 w-full items-center justify-center rounded-full bg-brand px-5 text-sm font-semibold text-white"
            >
              Join Community
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
