import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Disciplines from "@/components/Disciplines";
import Programs from "@/components/Programs";
import Excos from "@/components/Excos";
import Community from "@/components/Community";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
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
