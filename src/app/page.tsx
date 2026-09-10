import About from "@/components/About";
import Community from "@/components/Community";
import Disciplines from "@/components/Disciplines";
import Excos from "@/components/Excos";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Navbar from "@/components/Navbar";
import Programs from "@/components/Programs";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main" className="flex-1">
        <Hero />
        <Marquee />
        <About />
        <Disciplines />
        <Programs />
        <Excos />
        <Community />
      </main>

      <Footer />
    </>
  );
}
