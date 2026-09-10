"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const disciplines = [
  {
    number: "01",
    name: "Computer Science",
    description:
      "The foundation of computing, from algorithms and programming to artificial intelligence and systems.",
    image: "/images/disciplines/computer-science.jpg",
    icon: "code",
  },
  {
    number: "02",
    name: "Software Engineering",
    description:
      "Designing, building and maintaining software that solves real problems and serves real people.",
    image: "/images/disciplines/software-engineering.jpg",
    icon: "layers",
  },
  {
    number: "03",
    name: "Cyber Security",
    description:
      "Protecting systems, networks, data and digital infrastructure from evolving cyber threats.",
    image: "/images/disciplines/cyber-security.jpg",
    icon: "shield",
  },
  {
    number: "04",
    name: "Information Technology",
    description:
      "Building and managing the technology infrastructure that keeps organisations connected.",
    image: "/images/disciplines/information-technology.jpg",
    icon: "monitor",
  },
  {
    number: "05",
    name: "Information Systems",
    description:
      "Connecting technology, people and business processes to create smarter organisations.",
    image: "/images/disciplines/information-systems.jpg",
    icon: "network",
  },
  {
    number: "06",
    name: "Data Science",
    description:
      "Turning data into insights through statistics, analytics, machine learning and visualisation.",
    image: "/images/disciplines/data-science.jpg",
    icon: "chart",
  },
];

const programs = [
  {
    number: "01",
    title: "Coding Workshops",
    description:
      "Practical sessions designed to help students build confidence beyond the classroom.",
  },
  {
    number: "02",
    title: "Hackathons & Tech Week",
    description:
      "Spaces where students turn ideas into products, compete, collaborate and experiment.",
  },
  {
    number: "03",
    title: "Industry & Career Talks",
    description:
      "Conversations with professionals that connect classroom learning with the technology industry.",
  },
  {
    number: "04",
    title: "Tutorials & Study Groups",
    description:
      "Peer learning and academic support across the computing disciplines.",
  },
];

const aboutSlides = [
  {
    title: "The NACOS Nile chapter",
    description:
      "NACOS Nile is the student community for computing, technology and innovation at Nile University of Nigeria.",
    image: "/images/about/chapter.jpg",
  },
  {
    title: "A place to learn together",
    description:
      "Students across every computing discipline share knowledge, support one another and grow with their peers.",
    image: "/images/about/learning.jpg",
  },
  {
    title: "Beyond the classroom",
    description:
      "Through workshops, study groups and practical sessions, NACOS turns classroom ideas into useful skills.",
    image: "/images/about/workshop.jpg",
  },
  {
    title: "A community that connects",
    description:
      "Meet collaborators, mentors and friends who make the journey through computing less solitary.",
    image: "/images/about/community.jpg",
  },
  {
    title: "Room to become more",
    description:
      "NACOS creates opportunities to lead, experiment, build confidence and shape the future of technology.",
    image: "/images/about/future.jpg",
  },
];

const excos = {
  president: {
    name: "Zikora Fortune Nwafor",
    role: "President",
    image: "/excos-pics/president.jpg",
    description: "Passionate about building active student communities.",
  },
  vp: {
    name: "Abdullah Ali Ahmad",
    role: "Vice President",
    image: "/excos-pics/vp.jpg",
    description: "Advocating for student welfare and academic excellence.",
  },
  sg: {
    name: "Sheila Jato",
    role: "Secretary General",
    image: "/excos-pics/sg.jpg",
    description: "Keeping the engines running smoothly.",
  },
  fs: {
    name: "Amira Ibrahim",
    role: "Financial Secretary",
    image: "/excos-pics/fc.jpg",
    description: "Making the important financial decisions.",
  },
  pro: {
    name: "Elvis Francis",
    role: "PRO",
    image: "/excos-pics/pro.jpg",
    description: "Applying creativity to communication.",
  },
  dtd: {
    name: "Ivoke Kamsi",
    role: "Director of Technical Development",
    image: "/excos-pics/dtd.jpg",
    description: "Driving technical growth and leading coding workshops.",
  },
  provost: {
    name: "Zubaida Abdulazeez",
    role: "Provost",
    image: "/excos-pics/provost.jpg",
    description: "Managing the day-to-day operations of NACOS Nile.",
  },
  socials: {
    name: "Saidat Ahmed",
    role: "Director of Socials",
    image: "/excos-pics/socials.jpg",
    description: "Prioritizing social activities and events.",
  },
  welfare: {
    name: "Danielle Ekunwe",
    role: "Welfare",
    image: "/excos-pics/welfare.jpg",
    description: "Your well-being is my priority.",
  },
};

function Icon({ type }: { type: string }) {
  const paths: Record<string, React.ReactNode> = {
    code: (
      <>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </>
    ),
    layers: (
      <>
        <polygon points="12 2 22 8 12 14 2 8 12 2" />
        <polyline points="2 12 12 18 22 12" />
        <polyline points="2 16 12 22 22 16" />
      </>
    ),
    shield: (
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
    ),
    monitor: (
      <>
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <line x1="8" y1="22" x2="16" y2="22" />
        <line x1="12" y1="18" x2="12" y2="22" />
      </>
    ),
    network: (
      <>
        <rect x="9" y="2" width="6" height="6" rx="1" />
        <rect x="2" y="16" width="6" height="6" rx="1" />
        <rect x="16" y="16" width="6" height="6" rx="1" />
        <line x1="12" y1="8" x2="12" y2="13" />
        <line x1="5" y1="16" x2="19" y2="16" />
      </>
    ),
    chart: (
      <>
        <line x1="4" y1="19" x2="20" y2="19" />
        <polyline points="5 15 9 11 13 14 19 6" />
        <circle cx="5" cy="15" r="1" />
        <circle cx="9" cy="11" r="1" />
        <circle cx="13" cy="14" r="1" />
        <circle cx="19" cy="6" r="1" />
      </>
    ),
  };

  return (
    <svg
      className="icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[type]}
    </svg>
  );
}

function ArrowUpRightIcon() {
  return (
    <svg
      className="arrow-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

function SocialIcon({ type }: { type: string }) {
  const paths: Record<string, React.ReactNode> = {
    discord: <path d="M7.5 8.5c2.8-1.2 6.2-1.2 9 0M8 16c2.7 1.4 5.3 1.4 8 0M8.3 12h.01M15.7 12h.01M6.5 18.5 5 6.5c3.5-2.3 10.5-2.3 14 0l-1.5 12M7 16.5l-2 2.5M17 16.5l2 2.5" />,
    whatsapp: <path d="M12 3a8.5 8.5 0 0 0-7.4 12.7L3.5 20.5l4.9-1.1A8.5 8.5 0 1 0 12 3Zm-3 5.5c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.6 1.5c.1.3.1.5-.1.7l-.5.6c.6 1.1 1.5 1.9 2.7 2.4l.5-.6c.2-.2.4-.3.7-.2l1.5.7c.3.1.4.3.3.6-.2.8-.8 1.4-1.6 1.5-1.3.2-3.2-.8-4.5-2.1-1.3-1.3-2.2-3.2-1.8-5.1Z" />,
    telegram: <path d="m21 4-3.2 16-5.6-4.2-3 2.9.4-4.8L18.5 6 8 12.3 3 10.5 21 4Z" />,
    instagram: <><rect x="3.5" y="3.5" width="17" height="17" rx="4" /><circle cx="12" cy="12" r="4" /><circle cx="17.6" cy="6.5" r=".7" fill="currentColor" stroke="none" /></>,
    linkedin: <><path d="M5 8v11M5 5.2v.1M10 19v-6a3 3 0 0 1 6 0v6M10 11V8" /><path d="M3 3h18v18H3z" /></>,
    x: <path d="m5 4 14 16M19 4 5 20" />,
  };

  return (
    <svg
      className="social-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[type]}
    </svg>
  );
}

function ExcoCard({
  person,
  size = "normal",
}: {
  person: (typeof excos)[keyof typeof excos];
  size?: "large" | "normal";
}) {
  return (
    <article className={`exco-card ${size === "large" ? "exco-large" : ""}`}>
      <div className="exco-image">
        <Image
          src={person.image}
          alt={`${person.name} - ${person.role}`}
          fill
          sizes={size === "large" ? "280px" : "220px"}
        />
      </div>

      <div className="exco-info">
        <span>{person.role}</span>
        <h3>{person.name}</h3>
        <p>{person.description}</p>
      </div>
    </article>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(".scroll-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      {/* NAVIGATION */}
      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          <a href="#" className="brand">
            <Image
              src="/logo.svg"
              alt="NACOS Nile logo"
              width={48}
              height={48}
            />

            <div>
              <strong>NACOS</strong>
              <span>Nile University</span>
            </div>
          </a>

          <nav className={menuOpen ? "nav-links open" : "nav-links"}>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
            <a href="#disciplines" onClick={() => setMenuOpen(false)}>
              Disciplines
            </a>
            <a href="#programs" onClick={() => setMenuOpen(false)}>
              Programs
            </a>
            <a href="#excos" onClick={() => setMenuOpen(false)}>
              Excos
            </a>
            <a href="#community" onClick={() => setMenuOpen(false)}>
              Community
            </a>
          </nav>

          <a href="#community" className="nav-cta">
            Join Community
          </a>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-background"></div>
        <div className="hero-overlay"></div>

        <div className="hero-content container">
          <div className="hero-copy">
            <div className="eyebrow light">
              <span></span>
              NACOS NILE UNIVERSITY
            </div>

            <h1>
              Where computing
              <br />
              minds <em>come together.</em>
            </h1>

            <p>
              A community of students building skills, sharing ideas and
              shaping the future of technology at Nile University.
            </p>

            <div className="hero-actions">
              <a href="#community" className="button button-light">
                Join the Community
                <span>→</span>
              </a>

              <a href="#about" className="button button-outline">
                Discover NACOS
              </a>

            </div>
          </div>

          <div className="hero-bottom">
            <div>
              <strong>06</strong>
              <span>Computing Disciplines</span>
            </div>

            <div>
              <strong>01</strong>
              <span>Student Community</span>
            </div>

            <div>
              <strong>∞</strong>
              <span>Possibilities</span>
            </div>
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section className="about section scroll-reveal" id="about">
        <div className="container about-grid">
          <div className="section-heading">
            <div className="eyebrow">
              <span></span>
              WHO WE ARE
            </div>

            <h2>
              More than a society.
              <br />
              <em>A community.</em>
            </h2>
          </div>

          <div className="about-content">
            <AboutSlideshow />

            <a href="#ecosystem" className="text-link">
              See how we connect <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section className="ecosystem section scroll-reveal" id="ecosystem">
        <div className="container">
          <div className="ecosystem-heading">
            <div>
              <div className="eyebrow">
                <span></span>
                ONE COMPUTING COMMUNITY
              </div>

              <h2>
                Every discipline.
                <br />
                <em>Part of the ecosystem.</em>
              </h2>
            </div>

            <p>
              Six paths, one shared space. NACOS brings every side of
              computing together and gives each one room to grow.
            </p>
          </div>

          <div className="ecosystem-wheel-window">
            <div className="ecosystem-wheel">
              <div className="ecosystem-ring"></div>
              <div className="ecosystem-wheel-items">
                {disciplines.map((discipline, index) => (
                  <article
                    className="ecosystem-item"
                    key={discipline.name}
                    style={
                      {
                        "--wheel-angle": `${-180 + index * 60}deg`,
                        "--wheel-angle-reverse": `${180 - index * 60}deg`,
                      } as React.CSSProperties
                    }
                  >
                    <div className="ecosystem-item-content">
                      <span>{discipline.number}</span>
                      <h3>{discipline.name}</h3>
                      <p>{discipline.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <div className="ecosystem-center">
              <Image
                src="/logo.svg"
                alt="NACOS Nile logo"
                width={58}
                height={28}
              />
              <span>NACOS</span>
            </div>
          </div>
        </div>
      </section>

      {/* DISCIPLINES */}
      <section className="disciplines section scroll-reveal" id="disciplines">
        <div className="container">
          <div className="section-top">
            <div>
              <div className="eyebrow">
                <span></span>
                EXPLORE THE DISCIPLINES
              </div>

              <h2>
                Find your path.
                <br />
                <em>Build what comes next.</em>
              </h2>
            </div>

            <p>
              Start with the area that interests you, then discover the
              people, skills and opportunities connected to it.
            </p>
          </div>

          <div className="discipline-grid">
            {disciplines.map((discipline) => (
              <article className="discipline-card" key={discipline.name}>
                <div className="discipline-image">
                  <Image
                    src={discipline.image}
                    alt={`${discipline.name} related visual`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    onError={(event) => {
                      event.currentTarget.style.opacity = "0";
                    }}
                  />

                  <div className="image-overlay"></div>

                  <span className="discipline-number">
                    {discipline.number}
                  </span>

                  <div className="discipline-icon">
                    <Icon type={discipline.icon} />
                  </div>
                </div>

                <div className="discipline-info">
                  <h3>{discipline.name}</h3>
                  <p>{discipline.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="programs section scroll-reveal" id="programs">
        <div className="container">
          <div className="programs-heading">
            <div>
              <div className="eyebrow">
                <span></span>
                WHAT WE DO
              </div>

              <h2>
                Learn.
                <br />
                <em>Build. Connect.</em>
              </h2>
            </div>

            <p>
              From the first line of code to the next big opportunity, we
              create practical spaces to learn, experiment and grow together.
            </p>
          </div>

          <div className="program-list">
            {programs.map((program) => (
              <article className="program-row" key={program.number}>
                <span className="program-number">{program.number}</span>

                <h3>{program.title}</h3>

                <p>{program.description}</p>

                <span className="program-arrow" aria-hidden="true">
                  <ArrowUpRightIcon />
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EXCOS */}
      <section className="excos section scroll-reveal" id="excos">
        <div className="container">
          <div className="section-top excos-heading">
            <div>
              <div className="eyebrow">
                <span></span>
                LEADERSHIP
              </div>

              <h2>
                Meet the people
                <br />
                <em>behind NACOS Nile.</em>
              </h2>

              <div className="leadership-signature">
                <Image
                  src="/logo.svg"
                  alt="NACOS Nile logo"
                  width={72}
                  height={34}
                />
                <span>
                  NACOS Nile
                  <small>Executive council</small>
                </span>
              </div>
            </div>

            <p>
              A team working together to build a stronger computing community
              at Nile University.
            </p>
          </div>

          <div className="leadership-network">
            <div className="leadership-layout">
              <svg
                className="leadership-connectors"
                viewBox="0 0 1050 760"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d="M280 227 L397 75" />
                <path d="M280 227 L397 379" />
                <path d="M397 75 H1050" />
                <path d="M397 379 H1050" />
                <path d="M724 75 V680" />
                <path className="connector-current" d="M280 227 L397 75" />
                <path className="connector-current" d="M280 227 L397 379" />
                <path className="connector-current" d="M397 75 H1050" />
                <path className="connector-current" d="M397 379 H1050" />
                <path className="connector-current" d="M724 75 V680" />
                <circle className="connector-node" cx="140" cy="227" r="146" />
                <circle className="connector-node" cx="472" cy="75" r="82" />
                <circle className="connector-node" cx="640" cy="75" r="82" />
                <circle className="connector-node" cx="808" cy="75" r="82" />
                <circle className="connector-node" cx="976" cy="75" r="82" />
                <circle className="connector-node" cx="472" cy="379" r="82" />
                <circle className="connector-node" cx="640" cy="379" r="82" />
                <circle className="connector-node" cx="808" cy="379" r="82" />
                <circle className="connector-node" cx="976" cy="379" r="82" />
                <circle className="connector-node endpoint-node" cx="724" cy="680" r="70" />
              </svg>

              <div className="president-panel">
                <ExcoCard person={excos.president} size="large" />
              </div>

              <div className="exco-grid">
                <ExcoCard person={excos.vp} />
                <ExcoCard person={excos.sg} />
                <ExcoCard person={excos.fs} />
                <ExcoCard person={excos.pro} />
                <ExcoCard person={excos.dtd} />
                <ExcoCard person={excos.provost} />
                <ExcoCard person={excos.socials} />
                <ExcoCard person={excos.welfare} />

                <div className="leadership-endpoint">
                  <Image
                    src="/logo.svg"
                    alt="NACOS Nile logo"
                    width={82}
                    height={39}
                  />
                  <span>NACOS Nile</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY */}
      <section className="community scroll-reveal" id="community">
        <div className="container community-inner">
          <div className="community-copy">
            <div className="eyebrow light">
              <span></span>
              JOIN THE COMMUNITY
            </div>

            <h2>
              There is a place
              <br />
              <em>for you here.</em>
            </h2>

            <p>
              Whether you&apos;re writing your first line of code, building your
              next project or preparing for the industry, NACOS Nile is a
              community you can grow with.
            </p>

            <a href="#" className="button button-light">
              Join NACOS Nile
              <span>→</span>
            </a>
          </div>

          <div className="community-links">
            <a href="#">
              <SocialIcon type="discord" />
              <span>Discord</span>
              <ArrowUpRightIcon />
            </a>

            <a href="#">
              <SocialIcon type="whatsapp" />
              <span>WhatsApp</span>
              <ArrowUpRightIcon />
            </a>

            <a href="#">
              <SocialIcon type="telegram" />
              <span>Telegram</span>
              <ArrowUpRightIcon />
            </a>

            <a href="#">
              <SocialIcon type="instagram" />
              <span>Instagram</span>
              <ArrowUpRightIcon />
            </a>

            <a href="#">
              <SocialIcon type="linkedin" />
              <span>LinkedIn</span>
              <ArrowUpRightIcon />
            </a>

            <a href="#">
              <SocialIcon type="x" />
              <span>X</span>
              <ArrowUpRightIcon />
            </a>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer scroll-reveal">
        <div className="container footer-top">
          <div className="footer-brand">
            <Image
              src="/logo.svg"
              alt="NACOS Nile logo"
              width={52}
              height={52}
            />

            <div>
              <strong>NACOS Nile</strong>
              <p>
                Nigerian Association of Computing Students
                <br />
                Nile University of Nigeria
              </p>
            </div>
          </div>

          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#disciplines">Disciplines</a>
            <a href="#programs">Programs</a>
            <a href="#excos">Excos</a>
            <a href="#community">Community</a>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>© 2026 NACOS Nile. All rights reserved.</span>
          <span>Abuja, FCT · Nigeria</span>
        </div>
      </footer>
    </main>
  );
}

function AboutSlideshow() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % aboutSlides.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, []);

  const slide = aboutSlides[activeSlide];

  return (
    <div className="about-slideshow" aria-label="Why NACOS Nile matters">
      <div className="about-slide" key={slide.title}>
        <div className={`about-slide-image ${activeSlide === 0 ? "about-slide-image-logo" : ""}`}>
          {activeSlide === 0 ? (
            <Image
              src="/logo.svg"
              alt="NACOS Nile logo"
              width={150}
              height={72}
            />
          ) : (
            <Image src={slide.image} alt="" fill sizes="(max-width: 900px) 100vw, 420px" />
          )}
        </div>
        <div className="about-slide-content">
          <span>0{activeSlide + 1} / 0{aboutSlides.length}</span>
          <h3>{slide.title}</h3>
          <p>{slide.description}</p>
        </div>
      </div>

      <div className="about-slide-controls" aria-label="Choose About slide">
        {aboutSlides.map((item, index) => (
          <button
            type="button"
            key={item.title}
            className={index === activeSlide ? "active" : ""}
            onClick={() => setActiveSlide(index)}
            aria-label={`Show slide ${index + 1}: ${item.title}`}
            aria-pressed={index === activeSlide}
          />
        ))}
      </div>
    </div>
  );
}