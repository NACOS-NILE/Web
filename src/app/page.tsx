import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Disciplines } from "@/components/sections/Disciplines";
import { Programs } from "@/components/sections/Programs";
import { Events } from "@/components/sections/Events";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <About />
      <Disciplines />
      <Programs />
      <Events />
    </main>
  );
}
