import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ArchitecturalGrid from "@/components/ArchitecturalGrid";
import ExcoArch from "@/components/ExcoArch";
import AboutBento from "@/components/AboutBento";

// Code-split below-the-fold sections to decrease initial bundle size and defer unused JS
const CoursesGraph = dynamic(() => import("@/components/CoursesGraph"));
const GallerySection = dynamic(() => import("@/components/GallerySection"));
const EventsSection = dynamic(() => import("@/components/EventsSection"));
const TestimonialsSection = dynamic(() => import("@/components/TestimonialsSection"));
const MarqueeBand = dynamic(() => import("@/components/MarqueeBand"));
const JoinCTA = dynamic(() => import("@/components/JoinCTA"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-start overflow-x-clip selection:bg-[#274193] selection:text-white relative">
      {/* EARLY LCP DISCOVERY: Preload initial hero image with high fetchPriority and responsive imageSrcSet */}
      <link
        rel="preload"
        as="image"
        href="https://ik.imagekit.io/nacosnile/gallery/DinnerNight/2026/img107.webp?tr=w-1200,q-75,f-auto"
        imageSrcSet="https://ik.imagekit.io/nacosnile/gallery/DinnerNight/2026/img107.webp?tr=w-360,q-75,f-auto 360w, https://ik.imagekit.io/nacosnile/gallery/DinnerNight/2026/img107.webp?tr=w-480,q-75,f-auto 480w, https://ik.imagekit.io/nacosnile/gallery/DinnerNight/2026/img107.webp?tr=w-640,q-75,f-auto 640w, https://ik.imagekit.io/nacosnile/gallery/DinnerNight/2026/img107.webp?tr=w-750,q-75,f-auto 750w, https://ik.imagekit.io/nacosnile/gallery/DinnerNight/2026/img107.webp?tr=w-828,q-75,f-auto 828w, https://ik.imagekit.io/nacosnile/gallery/DinnerNight/2026/img107.webp?tr=w-1080,q-75,f-auto 1080w, https://ik.imagekit.io/nacosnile/gallery/DinnerNight/2026/img107.webp?tr=w-1200,q-75,f-auto 1200w"
        imageSizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1200px"
        fetchPriority="high"
      />

      {/* AMBIENT BRAND WASH — soft primary-color gradient behind the Navbar/Hero,
          fading to white by the time you reach the executive arch. Same low-opacity
          blurred-blob technique ExcoArch already uses for its own background glow. */}
      <div
        aria-hidden="true"
        className="absolute top-0 inset-x-0 h-[480px] sm:h-[620px] bg-gradient-to-b from-[#274193]/[0.09] via-[#274193]/[0.03] to-transparent pointer-events-none z-0"
      />

      {/* ARCHITECTURAL BACKGROUND MARGIN GRID LINES */}
      <ArchitecturalGrid />

      {/* FLOATING FROSTED NAVBAR */}
      <Navbar />

      {/* EDITORIAL HERO SECTION */}
      <Hero />

      {/* 3D EXECUTIVE COUNCIL ARCH */}
      <section id="leadership" className="w-full relative z-30 -mt-12 xs:-mt-16 sm:-mt-48 md:-mt-64 lg:-mt-72 xl:-mt-80 pb-6 sm:pb-10 px-2 sm:px-4">
        <ExcoArch />
      </section>

      {/* ABOUT & MILESTONES
          Also (like JoinCTA below) NOT content-visibility-auto. These four
          sections' headers all now carry a scroll-scrubbed TechIconField —
          under content-visibility:auto, ScrollTrigger's first measurement
          of a still-skipped subtree can be wrong, and the *correction* once
          it un-skips is itself a visible jump: a one-time flash exactly
          where a header crosses the edge of the viewport, gone on every
          later pass because the size is cached correctly after that first
          real render. Removing content-visibility here trades a bit of
          off-screen render deferral for not having that one-time glitch —
          the components are still JS-code-split via dynamic() above either
          way. */}
      <div className="w-full">
        <AboutBento />
      </div>

      {/* COURSES & ACADEMIC ECOSYSTEM (CENTER NACOS LOGO WITH ORGANIC DOTTED CONNECTIONS) */}
      <div className="w-full">
        <CoursesGraph />
      </div>

      {/* CAMPUS & BUILDER GALLERY */}
      <div className="w-full">
        <GallerySection />
      </div>

      {/* UPCOMING EVENTS AGENDA */}
      <div className="w-full">
        <EventsSection />
      </div>

      {/* COMMUNITY VOICES & TESTIMONIALS */}
      <div className="w-full">
        <TestimonialsSection />
      </div>

      {/* JOIN THE GUILD COMMUNITY CTA (EDITORIAL BLACK BOOKEND) */}
      <div className="w-full">
        <JoinCTA />
      </div>

      {/* TILTED RIBBON SEAM — stands in for a straight line into the
          footer; negative-margined into both neighbors, so it needs to sit
          between them in DOM order, not wrapped with either. */}
      <MarqueeBand />

      {/* MODERN MINIMALIST CHAPTER FOOTER — NOT content-visibility-auto
          (unlike before): the wordmark now carries its own scroll-scrubbed
          ScrollTrigger, and content-visibility skipping this subtree while
          off-screen is exactly what caused that trigger's first measurement
          to land on a collapsed footer height — the stale-measurement
          "flash"/pause documented on the other sections above, the same
          reason they all dropped content-visibility too. */}
      <div className="w-full">
        <Footer />
      </div>
    </main>
  );
}
