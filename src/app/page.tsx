import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Disciplines } from "@/components/sections/Disciplines";
import { Programs } from "@/components/sections/Programs";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <About />
      <Disciplines />
      <Programs />
    </main>
  );
}
