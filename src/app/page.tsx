"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Disciplines from "@/components/Disciplines";
import Programs from "@/components/Programs";
import Excos from "@/components/Excos";
import Community from "@/components/Community";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f6f8fc]">
      <Header />
      <main>
        <Hero />
        <About />
        <Disciplines />
        <Programs />
        <Excos />
        <Community />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}