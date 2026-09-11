import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Disciplines } from "@/components/sections/disciplines";
import { About } from "@/components/sections/about";
import { Initiatives } from "@/components/sections/initiatives";
import { ExecutiveCouncil } from "@/components/sections/executive-council";
import { Community } from "@/components/sections/community";

export default function Home() {
  return (
    <>
      <div id="top" />
      <Navbar />
      <main id="main" className="flex-1">
        <Hero />
        <Disciplines />
        <About />
        <Initiatives />
        <ExecutiveCouncil />
        <Community />
      </main>
      <Footer />
    </>
  );
}
