"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Disciplines", href: "#disciplines" },
  { label: "Initiatives", href: "#initiatives" },
  { label: "Events", href: "#events" },
] as const;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  
  const { scrollY, scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    return scrollY.on("change", (current) => {
      if (current < 0) return;
      
      const previous = scrollY.getPrevious() ?? 0;
      setScrolled(current > 50);

      // Hide navbar if scrolling down and past the threshold
      if (current > previous && current > 150) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    });
  }, [scrollY]);

  // A2 fix: Track active section via IntersectionObserver
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" } // trigger when section is in the middle
    );

    const sections = document.querySelectorAll("main > div[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      {/* ── Scroll Progress Bar ── */}
      <motion.div
        className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-highlight shadow-[0_0_8px_rgba(59,130,246,0.8)]"
        style={{ scaleX }}
      />

      <motion.header
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: "-150%", opacity: 0 }
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ type: "spring", stiffness: 300, damping: 30 }} // A9 fix: spring physics
        className="fixed inset-x-0 top-6 z-50 px-6 cursor-none"
      >
        <nav
          className={cn(
            "mx-auto flex max-w-4xl items-center justify-between rounded-full px-6 py-4 transition-all duration-300",
            scrolled || isOpen
              ? "border border-white/10 bg-black/60 backdrop-blur-xl shadow-2xl shadow-black/50"
              : "bg-transparent border border-transparent"
          )}
          aria-label="Main navigation"
        >
          {/* ── Logo ── */}
          <a href="#" className="relative z-10 flex items-center gap-3 group">
            <Image
              src="/logo.svg"
              alt="NACOS Nile logo"
              width={32}
              height={32}
              className="h-8 w-8 transition-transform duration-300 group-hover:scale-105"
              priority
            />
            <span className="font-display text-lg font-bold tracking-tight text-white transition-opacity duration-300 group-hover:opacity-80">
              NACOS
            </span>
          </a>

          {/* ── Desktop Links ── */}
          <ul className="hidden items-center gap-2 md:flex">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href;
              const isHovered = hoveredLink === link.href;
              const showIndicator = isActive || isHovered;

              return (
              <li key={link.href} className="relative">
                <a
                  href={link.href}
                  onMouseEnter={() => setHoveredLink(link.href)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] ${isActive ? "text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]" : "text-muted"}`}
                >
                  {link.label}
                  {/* A2 fix: Glowing dot active indicator */}
                  {showIndicator && (
                    <motion.div
                      layoutId="nav-indicator"
                      className={`absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full shadow-[0_0_8px_2px_rgba(59,130,246,0.8)] ${isActive ? "bg-white" : "bg-highlight"}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </a>
              </li>
              );
            })}
          </ul>

          {/* ── Desktop CTA ── */}
          <a
            href="#community"
            className="hidden items-center justify-center rounded-full bg-white px-6 py-2.5 text-sm font-bold text-black transition-all duration-300 hover:bg-gray-200 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] md:flex"
          >
            Join
          </a>

          {/* ── Mobile Toggle ── */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="relative z-10 rounded-full p-2 text-white transition-colors hover:bg-white/10 md:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* ── Mobile Menu ── */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute left-6 right-6 top-full mt-4 overflow-hidden rounded-3xl border border-white/10 bg-black/90 p-6 backdrop-blur-2xl md:hidden shadow-2xl"
            >
              <div className="flex flex-col gap-2">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="rounded-xl px-4 py-3 text-lg font-medium text-muted transition-colors hover:bg-white/5 hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="mt-4 border-t border-white/10 pt-4">
                  <a
                    href="#community"
                    onClick={() => setIsOpen(false)}
                    className="flex w-full items-center justify-center rounded-xl bg-white px-6 py-3.5 text-base font-bold text-black transition-all hover:bg-gray-200"
                  >
                    Join Community
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
