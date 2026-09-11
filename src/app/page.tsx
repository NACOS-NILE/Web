import { readdirSync, statSync } from "fs";
import { join } from "path";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Disciplines from "@/components/Disciplines";
import LearnBuildGrow from "@/components/LearnBuildGrow";
import Programs from "@/components/Programs";
import DinnerNight from "@/components/DinnerNight";
import Excos from "@/components/Excos";
import Community from "@/components/Community";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

function getDinnerNightImages(): string[] {
  try {
    const dir = join(process.cwd(), "public", "dinner-night");
    const files = readdirSync(dir);
    const imageExts = [".jpg", ".jpeg", ".png", ".webp", ".avif"];
    return files
      .filter((f) => {
        const ext = f.toLowerCase().slice(f.lastIndexOf("."));
        return imageExts.includes(ext) && statSync(join(dir, f)).isFile();
      })
      .map((f) => `/dinner-night/${f}`);
  } catch {
    return [];
  }
}

export default function Home() {
  const dinnerNightImages = getDinnerNightImages();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Disciplines />
        <LearnBuildGrow />
        <Programs />
        <DinnerNight images={dinnerNightImages} />
        <Excos />
        <Community />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}