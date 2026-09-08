import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Pillars from "@/components/Pillars";
import QuoteBanner from "@/components/QuoteBanner";
import Opportunities from "@/components/Opportunities";
import Initiatives from "@/components/Initiatives";
import ExcoGrid from "@/components/ExcoGrid";
import MembershipCTA from "@/components/MembershipCTA";
import Community from "@/components/Community";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-nacos-dark text-white flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Pillars />
        <QuoteBanner />
        <Opportunities />
        <Initiatives />
        <ExcoGrid />
        <MembershipCTA />
        <Community />
      </main>
      <Footer />
    </div>
  );
}
