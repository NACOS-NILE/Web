"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Brand } from "@/components/Brand";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/site-data";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "border-b border-border bg-background/90 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1480px] items-center justify-between px-6 lg:px-10">
        <Brand />
        <nav aria-label="Primary navigation" className="hidden items-center gap-9 lg:flex">
          {navLinks.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="nav-link text-[12px] font-medium uppercase tracking-[0.2em] text-foreground/80"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button
            asChild
            size="sm"
            className="rounded-full px-6 font-sans text-[12px] font-semibold uppercase tracking-[0.14em]"
          >
            <a href="#join">Join Community</a>
          </Button>
        </div>
        <Button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      <nav
        aria-label="Mobile navigation"
        className={`mobile-nav border-t border-border bg-background px-6 lg:hidden ${open ? "is-open" : ""}`}
      >
        {navLinks.map(([label, href]) => (
          <a
            key={label}
            href={href}
            onClick={() => setOpen(false)}
            className="-mx-6 border-b border-border px-6 py-4 text-sm font-medium uppercase tracking-[0.16em] transition-colors active:bg-primary/10 active:text-primary"
          >
            {label}
          </a>
        ))}
        <a
          href="#join"
          onClick={() => setOpen(false)}
          className="-mx-6 px-6 py-4 text-sm font-medium uppercase tracking-[0.16em] text-primary transition-colors active:bg-primary/10 active:text-accent"
        >
          Join Community
        </a>
      </nav>
    </header>
  );
}
