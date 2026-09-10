import About from "@/components/About";
import Disciplines from "@/components/Disciplines";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import InitiativesSection from "@/components/Initiatives";
import Media from "@/components/Media"
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Disciplines />
        <InitiativesSection />
        <Media />
      </main>
      <Footer />
    </>
  );
}
