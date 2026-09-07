import { AboutSection } from "@/components/AboutSection";
import { CommunitySection } from "@/components/CommunitySection";
import { DisciplinesSection } from "@/components/DisciplinesSection";
import { EventsSection } from "@/components/EventsSection";
import { ExcoSection } from "@/components/ExcoSection";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { ProgramsSection } from "@/components/ProgramsSection";
import { ScrollProgress } from "@/components/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <AboutSection />
        <DisciplinesSection />
        <ProgramsSection />
        <EventsSection />
        <ExcoSection />
        <CommunitySection />
      </main>
      <Footer />
    </>
  );
}
