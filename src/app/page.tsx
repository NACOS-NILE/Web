import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Disciplines } from "@/components/sections/Disciplines";
import { Programs } from "@/components/sections/Programs";
import { Events } from "@/components/sections/Events";
import { Excos } from "@/components/sections/Excos";
import { Community } from "@/components/sections/Community";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/layout/Footer";
import { SectionTransition } from "@/components/animations/SectionTransition";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <SectionTransition type="dark-to-light" />
      <About />
      <SectionTransition type="light-to-dark" />
      <Disciplines />
      <Programs />
      <SectionTransition type="light-to-dark" />
      <Events />
      <Excos />
      <Community />
      <FinalCTA />
      <Footer />
    </main>
  );
}

