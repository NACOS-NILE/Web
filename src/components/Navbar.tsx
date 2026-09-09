"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { NAV_LINKS } from "@/data/content";
import { Close, Menu } from "./Icons";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = useCallback(() => setOpen(false), []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-royal-950/92 backdrop-blur-sm" : ""
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4 sm:px-8"
      >
        {/* The real co-branded lockup: Nile University crest and the NACOS
            national seal, as supplied in the repository. */}
        <a href="#top" onClick={close} className="flex items-center gap-3">
          <Image
            src="/logo.svg"
            alt=""
            width={80}
            height={38}
            priority
            className="h-7 w-auto"
          />
          <span className="flex items-baseline gap-2">
            <span className="ui font-medium tracking-[0.12em] text-white">
              NACOS
            </span>
            <span className="label text-royal-300">Nile</span>
          </span>
          <span className="sr-only">NACOS Nile — home</span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="ui text-royal-100/70 transition-colors duration-200 hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#community"
            className="ui hidden bg-white px-5 py-2.5 font-medium text-royal-950 transition-colors duration-200 hover:bg-royal-100 sm:inline-block"
          >
            Join
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 items-center justify-center text-white lg:hidden"
          >
            {open ? <Close className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <div id="mobile-menu" hidden={!open} className="bg-royal-950 lg:hidden">
        <ul className="mx-auto max-w-6xl px-5 pb-4 sm:px-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href} className="border-t border-white/10">
              <a
                href={link.href}
                onClick={close}
                className="ui block py-4 text-royal-100"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="border-t border-white/10 pt-4">
            <a
              href="#community"
              onClick={close}
              className="ui block bg-white px-5 py-3.5 text-center font-medium text-royal-950"
            >
              Join the community
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
