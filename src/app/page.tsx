import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Disciplines from "@/components/Disciplines";
import Hero from "@/components/Hero";

import WhyNacosite from "@/components/WhyNacosite";
import About from "@/components/About";
import MeetExecutives from "@/components/MeetExecutives";
import Community from "@/components/Community";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Hero />
        <About />
        <Disciplines />
        <WhyNacosite />
        <MeetExecutives />
        <Community />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
