"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Disciplines", href: "#disciplines" },
    { name: "Events", href: "#events" },
    { name: "Excos", href: "#excos" },
    { name: "Community", href: "#community" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0d1733]/90 backdrop-blur-md border-b border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.svg"
            alt="NACOS Nile Logo"
            width={40}
            height={40}
            className="w-auto h-9"
            priority
          />
          <span className="font-bold text-lg tracking-tight hover:text-blue-400 transition-colors">
            NACOS <span className="text-blue-400">Nile</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="#community"
            className="bg-[#274193] hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all shadow-md shadow-blue-900/30"
          >
            Join Community
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-300 hover:text-white focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#0d1733] border-b border-white/10 px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-gray-300 hover:text-white text-base py-2"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="#community"
            onClick={() => setIsOpen(false)}
            className="block text-center bg-[#274193] hover:bg-blue-600 text-white px-4 py-2.5 rounded-lg font-semibold text-sm transition-all mt-2"
          >
            Join Community
          </a>
        </div>
      )}
    </header>
  );
}