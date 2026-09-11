import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Initiatives from '@/components/Initiatives';
import ExcosSection from '@/components/ExcosSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Initiatives />
        <ExcosSection />
      </main>
      <Footer />
    </div>
  );
}
