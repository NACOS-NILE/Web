'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useSpring } from 'motion/react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <motion.div 
        style={{ scaleX, transformOrigin: "0%" }}
        className="fixed top-0 left-0 right-0 h-1 bg-black dark:bg-white z-[60]"
      />
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 w-full z-50 px-4 sm:px-6 pt-6 pointer-events-none transition-all"
      >
      <header className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between rounded-[2rem] bg-white dark:bg-black/90 shadow-[0_4px_24px_rgba(0,0,0,0.06)] px-6 pointer-events-auto border border-gray-100 dark:border-gray-800">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.svg"
              alt="NACOS Nile Logo"
              width={32}
              height={32}
              className="h-8 w-auto"
            />
            <span className="font-serif font-bold tracking-tight text-nacos-primary dark:text-nacos-accent-light ml-2 hidden sm:block">
              NACOS Nile
            </span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-[13px] font-semibold text-black dark:text-gray-200">
          <Link href="#about" className="hover:text-gray-600 dark:hover:text-white transition-colors">About</Link>
          <Link href="#initiatives" className="hover:text-gray-600 dark:hover:text-white transition-colors">Initiatives</Link>
          <Link href="#excos" className="hover:text-gray-600 dark:hover:text-white transition-colors">Excos</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="#community"
            className="hidden sm:inline-flex items-center justify-center rounded-full bg-nacos-primary px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-nacos-dark dark:hover:bg-nacos-accent"
          >
            Join Community
          </Link>
          
          <button 
            className="md:hidden text-black dark:text-white p-2 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mx-auto mt-2 w-full max-w-5xl rounded-[1.5rem] bg-white dark:bg-black p-4 shadow-[0_8px_30px_rgba(0,0,0,0.12)] pointer-events-auto border border-gray-100 dark:border-gray-800">
          <div className="flex flex-col gap-2">
            <Link 
              href="#about" 
              className="text-black dark:text-white font-semibold py-3 px-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-900"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="#initiatives" 
              className="text-black dark:text-white font-semibold py-3 px-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-900"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Initiatives
            </Link>
            <Link 
              href="#excos" 
              className="text-black dark:text-white font-semibold py-3 px-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-900"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Excos
            </Link>
            <Link 
              href="#community" 
              className="text-nacos-primary dark:text-nacos-accent font-semibold py-3 px-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-900"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Join Community
            </Link>
          </div>
        </div>
      )}
    </motion.div>
    </>
  );
}
