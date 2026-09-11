import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Disciplines from "@/components/Disciplines";
import Footer from "@/components/Footer";

// Lazy load below-the-fold sections to cut Total Blocking Time (TBT)
const Events = dynamic(() => import("@/components/Events"));
const ExcoSection = dynamic(() => import("@/components/ExcoSection"));

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-white selection:bg-blue-600 selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Disciplines />
        <Events />
        <ExcoSection />
      </main>
      <Footer />
    </div>
  );
}