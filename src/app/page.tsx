import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <section id="about" className="min-h-[40vh] bg-slate-50" aria-hidden="true" />
      </main>
    </>
  );
}
