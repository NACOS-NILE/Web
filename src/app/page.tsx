import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Disciplines } from "@/components/sections/Disciplines";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <About />
      <Disciplines />
    </main>
  );
}
