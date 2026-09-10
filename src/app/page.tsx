"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VisionSection from "@/components/VisionSection";
import DisciplinesSection from "@/components/DisciplinesSection";
import InitiativesSection from "@/components/InitiativesSection";
import EventsSection from "@/components/EventsSection";
import CommunitySection from "@/components/CommunitySection";
import SysInitPreloader from "@/components/SysInitPreloader";
import Footer from "@/components/Footer";

export default function Home() {
  const [preloaderDone, setPreloaderDone] = useState(false);

  return (
    <>
      {/* A10 fix: Cinematic SYS.INIT preloader */}
      <AnimatePresence>
        {!preloaderDone && (
          <SysInitPreloader onComplete={() => setPreloaderDone(true)} />
        )}
      </AnimatePresence>

      <Navbar />
      <main className="flex min-h-screen flex-col relative z-10 bg-spatial">
        <Hero />
        <div id="about"><VisionSection /></div>
        <div id="disciplines"><DisciplinesSection /></div>
        <div id="initiatives"><InitiativesSection /></div>
        <div id="events"><EventsSection /></div>
        {/* L10 fix: max-w-7xl centering for ultrawide displays */}
        <div id="community" className="w-full">
          <CommunitySection />
        </div>
      </main>
      <Footer />
    </>
  );
}
