import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Identity from "@/components/Identity";
import Pillars from "@/components/Pillars";
import Initiatives from "@/components/Initiatives";
import Leadership from "@/components/Leadership";
import EventsTimeline from "@/components/EventsTimeline";
import dynamic from "next/dynamic";

const GalaShowcase = dynamic(() => import("@/components/GalaShowcase"));
import FAQ from "@/components/FAQ";
import Community from "@/components/Community";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#060b19] text-slate-100 flex flex-col selection:bg-[#75b947] selection:text-[#060b19]">
      {/* 0. Top Viewport Scroll Progress Bar */}
      <ScrollProgress />

      {/* 1. Global Floating Navigation Bar & Command Palette */}
      <Navbar />

      {/* 2. Main Narrative Single-Page Journey */}
      <main className="flex-1 flex flex-col">
        {/* Hero: "LEARN. BUILD. GROW." + Interactive Terminal Matrix */}
        <Hero />

        {/* About NACOS Nile & 6 Academic Computing Disciplines */}
        <Identity />

        {/* The Signature Moment: LEARN • BUILD • GROW Triad */}
        <Pillars />

        {/* What We Do: Bootcamps, Hackathons, Mentorship, Tutorials */}
        <Initiatives />

        {/* Executive Council Leadership: 9 Verified Leaders */}
        <Leadership />

        {/* Flagship Chapter Events & Website Competition Timeline */}
        <EventsTimeline />

        {/* Annual Dinner & Awards Gala: A Colors Show Showcase */}
        <GalaShowcase />

        {/* Frequently Addressed Questions & Student Guide */}
        <FAQ />

        {/* Community Nexus: Discord, WhatsApp, Telegram, Social Channels */}
        <Community />

        {/* Crescendo Call to Action */}
        <FinalCTA />
      </main>

      {/* 3. Global Editorial Footer */}
      <Footer />
    </div>
  );
}
