import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Disciplines } from "@/components/Disciplines";
import { Ecosystem } from "@/components/Ecosystem";
import { Activity } from "@/components/Activity";
import { Leadership } from "@/components/Leadership";
import { ChapterMedia } from "@/components/ChapterMedia";
import { Access } from "@/components/Access";
import { Footer } from "@/components/Footer";
import { SocialDock } from "@/components/SocialDock";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Nav />
      <main id="main-content">
        <Hero />
        <section id="about" className="manifesto section-pad">
          <div className="section-shell manifesto-grid">
            <div>
              <p className="eyebrow">01 / About the chapter</p>
              <p className="manifesto-small">NACOS Nile University Chapter</p>
            </div>
            <div className="manifesto-statement">
              <h2>CLASS GIVES YOU THE FOUNDATION. COMMUNITY GIVES YOU ROOM TO USE IT.</h2>
              <p>NACOS Nile was formally established in 2023. The chapter brings computing students together for technical workshops, collaboration, leadership, social activity and a clearer bridge between academic work and industry.</p>
              <a href="https://nacos-nile-website.vercel.app/" target="_blank" rel="noreferrer">Visit the official chapter hub <span>↗</span></a>
            </div>
            <div className="manifesto-rail" aria-label="Chapter principles">
              <div><span>01</span><strong>LEARN</strong><p>Go beyond the timetable.</p></div>
              <div><span>02</span><strong>BUILD</strong><p>Turn knowledge into work.</p></div>
              <div><span>03</span><strong>GROW</strong><p>Meet people who move you forward.</p></div>
            </div>
          </div>
        </section>
        <Ecosystem />
        <Disciplines />
        <section className="lbg section-pad" aria-labelledby="lbg-title">
          <div className="section-shell">
            <p className="eyebrow light">04 / Learn. Build. Grow.</p>
            <h2 id="lbg-title" className="lbg-title"><span>LEARN.</span><span>BUILD.</span><span>GROW.</span></h2>
            <div className="lbg-grid">
              <article><span>01</span><h3>Learn beyond class.</h3><p>Technical workshops, academic tutorials, study groups and practical sessions create space to test what lectures introduce.</p></article>
              <article><span>02</span><h3>Build with other students.</h3><p>Hackathons, Tech Week, challenges and collaborative work give ideas somewhere to go.</p></article>
              <article><span>03</span><h3>Grow into the industry.</h3><p>Industry mentorship, leadership and career conversations help students see what comes next.</p></article>
            </div>
          </div>
        </section>
        <Activity />
        <ChapterMedia />
        <Leadership />
        <Access />
      </main>
      <Footer />
      <SocialDock />
    </>
  );
}
