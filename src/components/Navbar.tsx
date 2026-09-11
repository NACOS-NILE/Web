"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import Image from 'next/image';

const navLinks = [
  { name: 'Home', targetId: 'home' },
  { name: 'Disciplines', targetId: 'disciplines' },
  { name: 'Programs', targetId: 'programs' },
  { name: 'Team', targetId: 'team' },
  { name: 'Support', targetId: 'support' },
  { name: 'Community', targetId: 'community' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch for the theme toggle
  useEffect(() => {
    setMounted(true);
  }, []);

  // Detect scroll for frosted glass effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler
  const scrollToSection = (targetId: string) => {
    setIsMobileMenuOpen(false); 
    
    if (targetId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    } else {
      console.error(`Could not find section with id: ${targetId}`);
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          isScrolled 
            ? 'bg-white/70 dark:bg-slate-950/70 backdrop-blur-md border-slate-200 dark:border-white/10 py-3 shadow-sm' 
            : 'bg-transparent border-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 max-w-7xl flex items-center justify-between">
          
          {/* Logo */}
          <div 
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <Image 
              src="/logo.svg" 
              alt="NACOS Logo" 
              width={40} 
              height={40} 
              className="w-10 h-10 group-hover:scale-105 transition-transform" 
            />
            <span className="font-extrabold text-lg tracking-wide text-slate-900 dark:text-white">
              NACOS <span className="text-blue-600 dark:text-blue-500">NILE</span>
            </span>
          </div>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.targetId)}
                className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {link.name}
              </button>
            ))}
            
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {mounted && (theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />)}
              {!mounted && <div className="w-[18px] h-[18px]" />}
            </button>
            
            {/* CTA Button */}
            <button 
              onClick={() => scrollToSection('community')}
              className="px-5 py-2 text-sm font-bold rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-blue-600 dark:hover:bg-blue-500 transition-all shadow-sm"
            >
              Join Us
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
            >
              {mounted && (theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />)}
            </button>

            <button 
              className="p-2 text-slate-600 dark:text-slate-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white dark:bg-slate-950 pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.targetId)}
                  className="text-2xl font-bold text-left text-slate-900 dark:text-white"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}