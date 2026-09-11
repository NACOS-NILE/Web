import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutAndDisciplines from "@/components/AboutAndDisciplines";
import EventsAndInitiatives from "@/components/EventsAndInitiatives";
import ExcoSection from "@/components/ExcoSection";
import CommunitySection from "@/components/CommunitySection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#060b18] text-slate-100 selection:bg-[#274193] selection:text-white relative">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <AboutAndDisciplines />
        <EventsAndInitiatives />
        <ExcoSection />
        <CommunitySection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}

