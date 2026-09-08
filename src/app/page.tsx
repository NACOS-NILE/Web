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
      {/* 1. Hero: Black (#111111) */}
      <Hero />

      {/* Major Transition 1: Hero → About */}
      <SectionTransition type="dark-to-light" />

      {/* 2. About: Off-White (#F7F7F5) */}
      <About />

      {/* Major Transition 2: About → Disciplines */}
      <SectionTransition type="light-to-dark" />

      {/* 3. Disciplines: Black (#111111) with stationary sticky image panel */}
      <Disciplines />

      {/* 4. Programs: Off-White (#F7F7F5) with scroll storytelling */}
      <Programs />

      {/* 5. Events: Black (#111111) with interactive calendar */}
      <Events />

      {/* 6. Excos: Off-White (#F7F7F5) with official executive portraits */}
      <Excos />

      {/* 7. Community: Black (#111111) */}
      <Community />

      {/* Major Transition 3: Community → Final CTA */}
      <SectionTransition type="kinetic-type" />

      {/* 8. Final CTA: Black (#111111) */}
      <FinalCTA />

      {/* 9. Footer: Black (#111111) */}
      <Footer />
    </main>
  );
}
