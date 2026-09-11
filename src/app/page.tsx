import Hero from "@/app/components/Hero";
import Navbar from "@/app/components/Navbar";
import About from "@/app/components/About";
import Disciplines from"@/app/components/Disciplines";
import Initiatives from "@/app/components/Initiatives";
import Excos from "@/app/components/Excos";
import Community from "@/app/components/Community";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1733]">
      <Navbar />
      <Hero />
      <About />
      <Disciplines/>
      <Initiatives />
      <Excos />
      <Community />
      <Footer/>
    </main>
  );
}