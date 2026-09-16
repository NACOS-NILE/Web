import Navbar from "@/components/Navbar";
import SplashScreen from "@/components/SplashScreen";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Excos from "@/components/Excos";
import Community from "@/components/Community";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <SplashScreen />
      <Navbar />
      <main id="main-content" className="flex-1">
        <Hero />
        <StatsBar />
        <About />
        <Programs />
        <Excos />
        <Community />
      </main>
      <Footer />
    </>
  );
}
