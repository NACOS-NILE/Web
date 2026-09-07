import Image from "next/image";
import Link from "next/link";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Navbar } from "@/components/Navbar";

const disciplines = [
  ["01", "Computer Science", "Algorithms, systems and the ideas that shape computation."],
  ["02", "Software Engineering", "Turning complex problems into products people can trust."],
  ["03", "Cyber Security", "Protecting the systems, identities and data our world relies on."],
  ["04", "Information Technology", "Keeping modern organisations connected and moving."],
  ["05", "Information Systems", "Designing the bridge between people, process and technology."],
  ["06", "Data Science", "Finding signal, insight and better decisions inside the noise."],
];

const initiatives = [
  { tag: "LEARN", title: "Bootcamps & workshops", copy: "Hands-on sessions in web, mobile, AI, cloud and ethical hacking—built for every skill level.", code: "01 / 04" },
  { tag: "BUILD", title: "Hackathon & Tech Week", copy: "A high-energy week to form teams, test ambitious ideas and ship work that deserves to be seen.", code: "02 / 04" },
  { tag: "GROW", title: "Industry & career talks", copy: "Honest conversations with professionals about internships, portfolios, interviews and life after school.", code: "03 / 04" },
  { tag: "TOGETHER", title: "Tutorials & study groups", copy: "Peer-led support for difficult courses, shared resources and the confidence to ask better questions.", code: "04 / 04" },
];

const executives = [
  { name: "Zikora Fortune Nwafor", role: "President", image: "/excos-pics/president.jpg", quote: "Building active student communities." },
  { name: "Abdullah Ali Ahmad", role: "Vice President", image: "/excos-pics/vp.jpg", quote: "Advocating for welfare and academic excellence." },
  { name: "Sheila Jato", role: "Secretary General", image: "/excos-pics/sg.jpg", quote: "Keeping the engines running smoothly." },
  { name: "Amira Ibrahim", role: "Financial Secretary", image: "/excos-pics/fc.jpg", quote: "Making the important financial decisions." },
  { name: "Elvis Francis", role: "Public Relations Officer", image: "/excos-pics/pro.jpg", quote: "Applying creativity to communication." },
  { name: "Ivoke Kamsi", role: "Director, Training & Development", image: "/excos-pics/dtd.jpg", quote: "Driving technical growth through workshops." },
  { name: "Zubaida Abdulazeez", role: "Provost", image: "/excos-pics/provost.jpg", quote: "Managing our day-to-day operations." },
  { name: "Saidat Ahmed", role: "Director of Socials", image: "/excos-pics/socials.jpg", quote: "Making campus life more memorable." },
  { name: "Danielle Ekunwe", role: "Director of Welfare", image: "/excos-pics/welfare.jpg", quote: "Your well-being is my priority." },
];

const channels = [
  { label: "WhatsApp", note: "Announcements + community", href: "https://nacos-nile-website.vercel.app/community", mark: "WA" },
  { label: "LinkedIn", note: "Work + opportunities", href: "https://ng.linkedin.com/company/nacos-nile-university-of-nigeria-chapter", mark: "IN" },
  { label: "NACOS National", note: "The wider network", href: "https://nacos.org.ng", mark: "NG" },
];

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main>
        <section id="home" className="hero section-grid">
          <div className="hero-signal" aria-hidden="true"><span className="signal-dot" />NILE / ABUJA / 09°04′N</div>
          <div className="hero-copy">
            <p className="eyebrow">NIGERIA ASSOCIATION OF COMPUTING STUDENTS</p>
            <h1>We learn.<br />We build.<br /><span>We grow.</span></h1>
            <p className="hero-lede">The student-powered computing community at Nile University—where curiosity finds collaborators and ambitious ideas become real work.</p>
            <div className="hero-actions">
              <Link className="button button-primary" href="#community">Join the community <span>↗</span></Link>
              <Link className="text-link" href="#disciplines">Explore our disciplines <span>↓</span></Link>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" />
            <div className="core-mark"><Image src="/logo.svg" alt="" width={240} height={114} priority /></div>
            <div className="orbit-tag tag-one">IDEA</div><div className="orbit-tag tag-two">CODE</div><div className="orbit-tag tag-three">IMPACT</div>
          </div>
          <div className="hero-ticker" aria-label="Chapter highlights">
            <div><strong>2023</strong><span>CHAPTER FOUNDED</span></div><div><strong>06</strong><span>CORE DISCIPLINES</span></div><div><strong>∞</strong><span>POSSIBILITIES</span></div>
          </div>
        </section>

        <section id="about" className="about section-shell">
          <div className="section-label"><span>01</span> WHO WE ARE</div>
          <div className="about-statement"><p className="lead-in">More than a student association.</p><h2>We are the place between <em>“I want to learn”</em> and <em>“look what we built.”</em></h2></div>
          <div className="about-detail">
            <p>NACOS Nile connects computing students across departments, levels and interests. We create room to practise, lead, share knowledge and make the kind of mistakes that move you forward.</p>
            <p>Our mission is simple: close the gap between lectures and the industry, while building a campus community people are proud to belong to.</p>
            <div className="about-values" aria-label="Our values"><span>Curiosity</span><span>Craft</span><span>Community</span></div>
          </div>
        </section>

        <section id="disciplines" className="disciplines section-shell">
          <div className="section-heading">
            <div className="section-label light"><span>02</span> OUR DISCIPLINES</div>
            <h2>Different paths.<br />One computing community.</h2>
            <p>Six fields, countless intersections. Find your lane, then learn from the people building in the next one.</p>
          </div>
          <div className="discipline-list">
            {disciplines.map(([number, title, copy]) => <article key={number} className="discipline-row"><span>{number}</span><h3>{title}</h3><p>{copy}</p><b aria-hidden="true">↗</b></article>)}
          </div>
        </section>

        <section id="initiatives" className="initiatives section-shell">
          <div className="section-label"><span>03</span> WHAT WE DO</div>
          <div className="initiatives-heading"><h2>Built for the<br /><span>boldly curious.</span></h2><p>Practical experiences that turn knowledge into confidence, connections and momentum.</p></div>
          <div className="initiative-grid">
            {initiatives.map((item) => <article className="initiative-card" key={item.title}><div className="card-top"><span>{item.tag}</span><small>{item.code}</small></div><div className="initiative-icon" aria-hidden="true"><i /><i /><i /></div><h3>{item.title}</h3><p>{item.copy}</p></article>)}
          </div>
        </section>

        <section id="executives" className="executives">
          <div className="section-shell executive-intro"><div className="section-label light"><span>04</span> LEADERSHIP</div><div><h2>The people<br />moving us forward.</h2><p>Meet the 2025/2026 executive council serving the NACOS Nile community.</p></div></div>
          <div className="executive-track" role="list" aria-label="Executive council">
            {executives.map((person, index) => <article className={`executive-card executive-${index % 3}`} key={person.name} role="listitem"><div className="executive-photo"><Image src={person.image} alt={`${person.name}, ${person.role}`} fill sizes="(max-width: 600px) 78vw, 330px" /><span>{String(index + 1).padStart(2, "0")}</span></div><p>{person.role}</p><h3>{person.name}</h3><blockquote>“{person.quote}”</blockquote></article>)}
          </div>
          <p className="swipe-note">← DRAG TO MEET THE TEAM →</p>
        </section>

        <section id="community" className="community section-shell">
          <div className="community-copy">
            <div className="section-label"><span>05</span> COMMUNITY</div><h2>There’s a seat<br />for you here.</h2><p>Ask the question. Share the resource. Join the team. Your next collaborator is probably already in the room.</p>
            <Link className="button button-dark" href="https://nacos-nile-website.vercel.app/community" target="_blank">Enter the community <span>↗</span></Link>
          </div>
          <div className="channel-list">
            {channels.map((channel) => <Link key={channel.label} href={channel.href} target="_blank" rel="noreferrer" className="channel-row"><strong>{channel.mark}</strong><div><h3>{channel.label}</h3><p>{channel.note}</p></div><span>↗</span></Link>)}
          </div>
        </section>

        <section className="manifesto" aria-label="Chapter manifesto"><div className="manifesto-inner"><span>LEARN</span><i>●</i><span>BUILD</span><i>●</i><span>GROW</span><i>●</i></div></section>
      </main>

      <footer id="contact" className="footer section-shell">
        <div className="footer-brand"><Image src="/logo.svg" alt="NACOS Nile" width={160} height={76} /><p>Nigeria Association of Computing Students<br />Nile University of Nigeria Chapter</p></div>
        <div className="footer-address"><span>FIND US</span><p>Nile University of Nigeria<br />Plot 681, Cadastral Zone C-OO<br />Jabi, Abuja, FCT</p></div>
        <div className="footer-links"><span>EXPLORE</span><Link href="#about">About</Link><Link href="#disciplines">Disciplines</Link><Link href="#initiatives">Initiatives</Link><Link href="#executives">Leadership</Link></div>
        <div className="footer-bottom"><p>© 2026 NACOS Nile Chapter. All rights reserved.</p><p>Learn <b>•</b> Build <b>•</b> Grow</p></div>
      </footer>
    </>
  );
}
