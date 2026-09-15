import About from "@/components/About";
import Disciplines from "@/components/Disciplines";
import Excos from "@/components/Excos";
import Hero from "@/components/Hero";
import Initiatives from "@/components/Initiatives";
import Media from "@/components/Media";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Disciplines />
        <Initiatives />
        <Excos />
        <Media />
      </main>

      <Footer />
    </>
  );
}
