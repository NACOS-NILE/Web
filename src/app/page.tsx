import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Affiliations from "@/components/Affiliations";
import Legacy from "@/components/Legacy";
import About from "@/components/About";
import Pillars from "@/components/Pillars";
import Disciplines from "@/components/Disciplines";
import Initiatives from "@/components/Initiatives";
import PhotoGallery from "@/components/PhotoGallery";
import Excosection from "@/components/Excosection";
import Community from "@/components/Community";
import Footer from "@/components/Footer";
import QuickNav from "@/components/QuickNav";
import ScrollReveal from "@/components/ScrollReveal";
import RevealObserver from "@/components/RevealObserver";
import Parallax from "@/components/Parallax";

export default function Home() {
  return (
    <>
      <Loader />
      <RevealObserver />
      <div className="nigeria-stripe" id="nigeriaStripe">
        <span className="nigeria-stripe-fill" />
      </div>
      <Navbar />
      <Hero />
      <Ticker />
      <Affiliations />
      <Parallax speed={0.08}>
        <Legacy />
      </Parallax>
      <ScrollReveal>
        <About />
      </ScrollReveal>
      <Parallax speed={0.06}>
        <Pillars />
      </Parallax>
      <Disciplines />
      <ScrollReveal>
        <Initiatives />
      </ScrollReveal>
      <PhotoGallery />
      <Excosection />
      <ScrollReveal>
        <Community />
      </ScrollReveal>
      <Footer />
      <QuickNav />
    </>
  );
}
