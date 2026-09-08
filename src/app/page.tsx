import About from "@/components/About";
import Community from "@/components/Community";
import DisciplineMarquee from "@/components/DisciplineMarquee";
import Disciplines from "@/components/Disciplines";
import ExcoSection from "@/components/ExcoSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Programs from "@/components/Programs";
import TerminalInterlude from "@/components/TerminalInterlude";

export default function Home() {
  return <><Navbar /><main><Hero /><DisciplineMarquee /><About /><Disciplines /><Programs /><TerminalInterlude /><ExcoSection /><Community /><FinalCTA /></main><Footer /></>;
}
