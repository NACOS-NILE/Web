"use client";

import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/nav";
import LoadingScreen from "./components/loading-screen";
import { useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="flex min-h-screen flex-col">
      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} duration={3000} />
      ) : (
        <div className="flex min-h-screen flex-col justify-between bg-slate-50">
          <Navbar />
          <main className="flex-1">
            <Hero />
          </main>
          <Footer />
        </div>
      )}
    </div>
  );
}