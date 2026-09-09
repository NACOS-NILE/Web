import About from "@/components/About";
import Community from "@/components/Community";
import Disciplines from "@/components/Disciplines";
import Excos from "@/components/Excos";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Initiatives from "@/components/Initiatives";
import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-royal-950"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Disciplines />
        <Initiatives />
        <Excos />
        <Community />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}
