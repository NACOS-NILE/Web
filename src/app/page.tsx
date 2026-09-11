import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About, Programs, Community, Footer } from "@/components/Sections";
import {
  DeferredDiscipline,
  DeferredLife,
  DeferredExecutives,
  DeferredDues,
} from "@/components/DeferredSections";

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
    </>
  );
}
