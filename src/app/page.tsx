import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About, Programs, Community, Footer } from "@/components/Sections";
import {
  DeferredDiscipline,
  DeferredLife,
  DeferredExecutives,
  DeferredDues,
} from "@/components/DeferredSections";

const MotionEnhancer = dynamic(() =>
  import("@/components/MotionEnhancer").then((m) => m.MotionEnhancer)
);

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <DeferredDiscipline />
        <Programs />
        <DeferredLife />
        <DeferredExecutives />
        <DeferredDues />
        <Community />
      </main>
      <Footer />
      <MotionEnhancer />
    </>
  );
}
