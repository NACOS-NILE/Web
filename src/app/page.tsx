import About from "@/components/About";
import BackToTop from "@/components/BackToTop";
import Community from "@/components/Community";
import Disciplines from "@/components/Disciplines";
import Excos from "@/components/Excos";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Membership from "@/components/Membership";
import Navbar from "@/components/Navbar";
import PageEffects from "@/components/PageEffects";
import Programs from "@/components/Programs";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <>
      <PageEffects />
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Disciplines />
        <Programs />
        <Gallery />
        <Excos />
        <Membership />
        <Community />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
