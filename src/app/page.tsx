import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Disciplines from "@/components/Disciplines";
import ExcoSection from "@/components/ExcoSection";
import Nacosite from "@/components/Nacosite";
import Events from "@/components/Events";
import Footer from "@/components/Footer";
import Community from "@/components/Community";

export default function Home() {
  return (
    <main id="main-content">
      <Navbar />
      <Hero />
      <About />
      <Disciplines />
      <Events />
      <Nacosite />
      <ExcoSection />
      <Community />
      <Footer />
    </main>
  );
}
