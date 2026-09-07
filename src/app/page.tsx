
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Initiatives from "@/components/Initiatives";
import ExcoGrid from "@/components/ExcoGrid";
import Community from "@/components/Community";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-nacos-dark text-white flex flex-col">
      <Navbar />
      <Hero />
      <About />
      <Initiatives />
      <ExcoGrid />
      <Community />
      <Footer />
    </div>
  );
}
