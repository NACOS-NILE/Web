import React from "react";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DisciplinesSection from "@/components/DisciplinesSection";
import OnTheGroundSection from "@/components/OnTheGroundSection";
import InitiativesSection from "@/components/InitiativesSection";
import ExcosSection from "@/components/ExcosSection";
import FAQSection from "@/components/FAQSection";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#070913] text-[#f4f2ee] selection:bg-[#c1b3ff] selection:text-[#070913]">
      {/* Preloader */}
      <Preloader />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Flow */}
      <main className="flex-1 flex flex-col">
        <Hero />
        <DisciplinesSection />
        <OnTheGroundSection />
        <InitiativesSection />
        <ExcosSection />
        <FAQSection />
        <CommunitySection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
