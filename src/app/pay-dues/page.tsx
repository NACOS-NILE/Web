import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// No payment gateway live yet — this stands in for the real Pay Dues flow
// (see PAY_DUES_URL in data/links.ts) until one exists. Deliberately just
// the one message, not a placeholder form or a fake "notify me" signup —
// nothing here to half-build and then have to rip out later.
export default function PayDuesPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col items-center overflow-x-clip">
      <Navbar />

      <section className="w-full flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 py-24 sm:py-32">
        <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-gray-500 font-bold mb-4 sm:mb-6">
          Pay Dues
        </p>
        <h1 className="font-deacon uppercase text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-gray-950 tracking-[-0.03em] leading-[1.02]">
          Coming <span className="text-[#274193]">Soon</span> 😉
        </h1>
        <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed mt-6 sm:mt-8 max-w-md">
          We&apos;re still wiring up the payment flow. Check back soon, or join the WhatsApp community to hear the moment it&apos;s live.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 mt-8 sm:mt-10 text-sm font-bold text-[#274193] hover:text-[#1e3478] transition-colors group"
        >
          <svg
            className="w-4 h-4 transition-transform group-hover:-translate-x-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to home
        </Link>
      </section>

      <Footer />
    </main>
  );
}
