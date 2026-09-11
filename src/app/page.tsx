import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Disciplines from "@/components/Disciplines";
import LearnBuildGrow from "@/components/LearnBuildGrow";
import Programs from "@/components/Programs";
import Excos from "@/components/Excos";
import Community from "@/components/Community";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Disciplines />
        <LearnBuildGrow />
        <Programs />
        <Excos />
        <Community />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}