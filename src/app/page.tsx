import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Disciplines from "@/components/Disciplines";
import Initiatives from "@/components/Initiatives";
import Exco from "@/components/Exco";
import Community from "@/components/Community";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Disciplines />
        <Initiatives />
        <Exco />
        <Community />
      </main>

      <Footer />
    </>
  );
}
