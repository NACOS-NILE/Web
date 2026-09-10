import About from "@/components/About";
import Disciplines from "@/components/Disciplines";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Disciplines />
      </main>
    </>
  );
}
