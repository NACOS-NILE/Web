"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "./Container";
import { MagneticElement } from "../animations/MagneticElement";
import { useLenisScroll } from "../animations/SmoothScroll";

interface NavLinkItem {
  label: string;
  href: string;
}

const NAV_LINKS: NavLinkItem[] = [
  { label: "About", href: "#about" },
  { label: "Disciplines", href: "#disciplines" },
  { label: "Programs", href: "#programs" },
  { label: "Events", href: "#events" },
  { label: "Excos", href: "#excos" },
  { label: "Community", href: "#community" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollTo } = useLenisScroll();

  // Handle scroll detection with passive listener
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 24);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Handle Escape key to close mobile menu
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    },
    [mobileMenuOpen]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const closeMenu = () => setMobileMenuOpen(false);

  // Smooth scroll to top when logo is clicked on homepage
  const handleLogoClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      closeMenu();
      if (typeof window !== "undefined" && window.location.pathname === "/") {
        e.preventDefault();
        scrollTo(0, { duration: 1.2 });
        window.history.pushState(null, "", "/");
      }
    },
    [scrollTo]
  );

  // Smooth scroll to a hash section — used for both desktop and mobile links
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const sectionId = href.replace("#", "");
      const section = document.getElementById(sectionId);
      if (!section) return;

      // Close mobile menu first, then scroll after layout settles
      closeMenu();
      setTimeout(() => {
        scrollTo(section, { offset: -80, duration: 1.2 });
      }, mobileMenuOpen ? 350 : 0);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [mobileMenuOpen, scrollTo]
  );

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled
            ? "bg-[#111111]/95 py-3.5 border-b border-white/10 shadow-lg"
            : "bg-transparent py-6 md:py-8 border-b border-transparent"
        }`}
      >
        <Container size="default">
          <nav
            aria-label="Main Navigation"
            className="flex items-center justify-between"
          >
            {/* LEFT: Official NACOS Nile Logo */}
            <Link
              href="/"
              onClick={handleLogoClick}
              data-cursor="pointer"
              aria-label="NACOS Nile Homepage"
              className="group relative flex items-center gap-3 select-none"
            >
              <Image
                src="/logo.svg"
                alt="NACOS Nile Logo"
                width={78}
                height={37}
                priority
                className="h-7 md:h-8 w-auto object-contain transition-opacity duration-300 group-hover:opacity-80"
              />
            </Link>

            {/* CENTER: Desktop Nav Links */}
            <ul className="hidden lg:flex items-center gap-7 xl:gap-9">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    data-cursor="pointer"
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="group relative inline-block py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-300 transition-colors duration-300 hover:text-white"
                  >
                    <span className="relative z-10 inline-block transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-0.5">
                      {link.label}
                    </span>
                    <span
                      aria-hidden="true"
                      className="absolute bottom-0 left-0 h-[1.5px] w-full origin-left scale-x-0 bg-[#3b82f6] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
                    />
                  </a>
                </li>
              ))}
            </ul>

            {/* RIGHT: Desktop CTA & Mobile Toggle */}
            <div className="flex items-center gap-4">
              {/* Desktop CTA */}
              <div className="hidden sm:block">
                <MagneticElement strength={0.22}>
                  <a
                    href="#community"
                    data-cursor="OPEN"
                    onClick={(e) => handleNavClick(e, "#community")}
                    className="group inline-flex items-center gap-2 rounded-[2px] bg-[#274193] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-[#3453b3] shadow-md shadow-[#274193]/20"
                  >
                    <span>Join NACOS</span>
                    <span
                      aria-hidden="true"
                      className="inline-block text-[0.85em] text-[#93c5fd] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    >
                      ↗
                    </span>
                  </a>
                </MagneticElement>
              </div>

              {/* Mobile Menu Trigger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileMenuOpen}
                className="lg:hidden flex items-center justify-center p-2 text-white hover:text-[#60a5fa] cursor-pointer transition-colors focus-visible:outline-white"
              >
                <div className="w-5 flex flex-col items-center justify-center gap-1.5">
                  <span
                    className={`block h-[1.5px] bg-white transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      mobileMenuOpen
                        ? "w-4 translate-y-[2.75px] rotate-45"
                        : "w-4"
                    }`}
                  />
                  <span
                    className={`block h-[1.5px] bg-white transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      mobileMenuOpen
                        ? "w-4 -translate-y-[2.75px] -rotate-45"
                        : "w-2.5 self-end"
                    }`}
                  />
                </div>
              </button>
            </div>
          </nav>
        </Container>
      </header>

      {/* Mobile Full-Screen Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation-overlay"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-[#111111] text-[#F7F7F5] px-6 sm:px-10 pt-28 pb-10 lg:hidden overflow-y-auto"
          >
            {/* Menu Links with Stagger */}
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.045,
                    delayChildren: 0.1,
                  },
                },
              }}
              className="flex flex-col gap-5 sm:gap-6 my-auto"
            >
              {NAV_LINKS.map((link) => (
                <motion.div
                  key={link.href}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.5,
                        ease: [0.16, 1, 0.3, 1],
                      },
                    },
                  }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="group flex items-center text-4xl sm:text-5xl font-heading uppercase tracking-tight text-white transition-colors duration-300 hover:text-[#60a5fa]"
                  >
                    <span>{link.label}</span>
                  </a>
                </motion.div>
              ))}
            </motion.div>

            {/* Bottom Meta & Mobile Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
            >
              <a
                href="#community"
                onClick={(e) => handleNavClick(e, "#community")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-[2px] bg-[#274193] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-all hover:bg-[#3453b3]"
              >
                <span>Join NACOS</span>
                <span>↗</span>
              </a>

              <div className="flex flex-col sm:text-right text-[11px] uppercase tracking-[0.2em] text-neutral-400 font-mono">
                <span>NACOS Nile Chapter</span>
                <span className="text-neutral-500">Nile University of Nigeria</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
