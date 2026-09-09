import { About } from "@/components/About";
import { Community } from "@/components/Community";
import { CustomCursor } from "@/components/custom-cursor";
import { Excos } from "@/components/Excos";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Join } from "@/components/Join";
import { Navbar } from "@/components/Navbar";
import { Programs } from "@/components/Programs";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <ScrollReveal />
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Excos />
      <Community />
      <Join />
      <Footer />
    </main>
  );
}
