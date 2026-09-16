"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Disciplines", href: "#disciplines" },
  { label: "Programs", href: "#programs" },
  { label: "Excos", href: "#excos" },
  { label: "Community", href: "#community" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border-hairline bg-surface/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#top" className="flex items-center gap-3">
          <Image src="/logo.svg" alt="NACOS Nile logo" width={96} height={46} priority className="h-10 w-auto" />
          <span className="h-8 w-px bg-border-hairline" aria-hidden="true" />
          <span className="text-lg font-bold tracking-tight text-nacos-navy">
            NACOS Nile
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-body transition-colors hover:text-nacos-blue"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#community"
          className="hidden rounded-md bg-nacos-blue px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-nacos-navy md:inline-block"
        >
          Join community
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex h-9 w-9 items-center justify-center rounded-md text-nacos-navy md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border-hairline bg-surface px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm text-text-body hover:text-nacos-blue"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#community"
                onClick={() => setOpen(false)}
                className="mt-2 inline-block rounded-md bg-nacos-blue px-4 py-2 text-sm font-medium text-white"
              >
                Join community
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
