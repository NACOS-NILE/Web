import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Initiatives } from "@/components/Initiatives";
import { BuildX } from "@/components/BuildX";
import { Excos } from "@/components/Excos";
import { Community } from "@/components/Community";
import { Dues } from "@/components/Dues";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Initiatives />
        <BuildX />
        <Excos />
        <Community />
        <Dues />
      </main>
      <Footer />
    </>
  );
}
