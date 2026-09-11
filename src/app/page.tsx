"use client";

import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/nav";
import LoadingScreen from "./components/loading-screen";
import Body from "./components/body";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex min-h-screen flex-col justify-between bg-slate-50">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <Body />
          {/* <LoadingScreen duration={3} /> */}
        </main>
        <Footer />
      </div>
    </div>
  );
}