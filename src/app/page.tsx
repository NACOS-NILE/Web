import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Disciplines } from "@/components/sections/Disciplines";
import { Programs } from "@/components/sections/Programs";
import { Events } from "@/components/sections/Events";
import { Excos } from "@/components/sections/Excos";
import { Community } from "@/components/sections/Community";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <About />
      <Disciplines />
      <Programs />
      <Events />
      <Excos />
      <Community />
      <FinalCTA />
      <Footer />
    </main>
  );
}
