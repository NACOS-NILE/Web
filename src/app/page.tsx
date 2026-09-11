"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const disciplines = [
  {
    number: "01",
    name: "Computer Science",
    short: "Algorithms, programming and the foundations of computing.",
    description:
      "The foundation of computing, from algorithms and programming to artificial intelligence and systems.",
    image: "/images/disciplines/computer-science.jpg",
    icon: "code",
    tint: "linear-gradient(160deg, rgba(39,65,147,0.55), rgba(13,23,51,0.15))",
  },
  {
    number: "02",
    name: "Software Engineering",
    short: "Designing and building software that solves real problems.",
    description:
      "Designing, building and maintaining software that solves real problems and serves real people.",
    image: "/images/disciplines/software-engineering.jpg",
    icon: "layers",
    tint: "linear-gradient(160deg, rgba(59,130,246,0.5), rgba(13,23,51,0.15))",
  },
  {
    number: "03",
    name: "Cyber Security",
    short: "Protecting systems, networks, data and digital infrastructure.",
    description:
      "Protecting systems, networks, data and digital infrastructure from evolving cyber threats.",
    image: "/images/disciplines/cyber-security.jpg",
    icon: "shield",
    tint: "linear-gradient(160deg, rgba(96,165,250,0.55), rgba(13,23,51,0.15))",
  },
  {
    number: "04",
    name: "Information Technology",
    short: "Keeping organisations connected through technology infrastructure.",
    description:
      "Building and managing the technology infrastructure that keeps organisations connected.",
    image: "/images/disciplines/information-technology.jpg",
    icon: "monitor",
    tint: "linear-gradient(160deg, rgba(13,23,51,0.6), rgba(39,65,147,0.15))",
  },
  {
    number: "05",
    name: "Information Systems",
    short: "Connecting technology, people and business processes.",
    description:
      "Connecting technology, people and business processes to create smarter organisations.",
    image: "/images/disciplines/information-systems.jpg",
    icon: "network",
    tint: "linear-gradient(160deg, rgba(39,65,147,0.45), rgba(96,165,250,0.15))",
  },
  {
    number: "06",
    name: "Data Science",
    short: "Turning data into useful insights through analytics and ML.",
    description:
      "Turning data into insights through statistics, analytics, machine learning and visualisation.",
    image: "/images/disciplines/data-science.jpg",
    icon: "chart",
    tint: "linear-gradient(160deg, rgba(59,130,246,0.55), rgba(13,23,51,0.2))",
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

type Exco = (typeof excos)[keyof typeof excos];

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "disciplines", label: "Disciplines" },
  { id: "programs", label: "Programs" },
  { id: "excos", label: "Excos" },
  { id: "community", label: "Community" },
];

const ICON_PATHS: Record<string, React.ReactNode> = {
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

  shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />,

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

function Icon({ type }: { type: string }) {
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
      {ICON_PATHS[type]}
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

function ArrowUpIcon() {
  return (
    <svg
      className="back-to-top-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 19V5" />
      <path d="m5 12 7-7 7 7" />
    </svg>
  );
}

const SOCIAL_ICON_PATHS: Record<string, React.ReactNode> = {
  discord: (
    <path d="M7.5 8.5c2.8-1.2 6.2-1.2 9 0M8 16c2.7 1.4 5.3 1.4 8 0M8.3 12h.01M15.7 12h.01M6.5 18.5 5 6.5c3.5-2.3 10.5-2.3 14 0l-1.5 12M7 16.5l-2 2.5M17 16.5l2 2.5" />
  ),

  whatsapp: (
    <path d="M12 3a8.5 8.5 0 0 0-7.4 12.7L3.5 20.5l4.9-1.1A8.5 8.5 0 1 0 12 3Zm-3 5.5c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.6 1.5c.1.3.1.5-.1.7l-.5.6c.6 1.1 1.5 1.9 2.7 2.4l.5-.6c.2-.2.4-.3.7-.2l1.5.7c.3.1.4.3.3.6-.2.8-.8 1.4-1.6 1.5-1.3.2-3.2-.8-4.5-2.1-1.3-1.3-2.2-3.2-1.8-5.1Z" />
  ),

  telegram: (
    <path d="m21 4-3.2 16-5.6-4.2-3 2.9.4-4.8L18.5 6 8 12.3 3 10.5 21 4Z" />
  ),

  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.6" cy="6.5" r=".7" fill="currentColor" stroke="none" />
    </>
  ),

  linkedin: (
    <>
      <path d="M5 8v11M5 5.2v.1M10 19v-6a3 3 0 0 1 6 0v6M10 11V8" />
      <path d="M3 3h18v18H3z" />
    </>
  ),

  x: <path d="m5 4 14 16M19 4 5 20" />,
};

function SocialIcon({ type }: { type: string }) {
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
      {SOCIAL_ICON_PATHS[type]}
    </svg>
  );
}

function ExcoCard({
  person,
  size = "normal",
}: {
  person: Exco;
  size?: "large" | "normal";
}) {
  return (
    <article className={`exco-card ${size === "large" ? "exco-large" : ""}`}>
      <div className="exco-image">
        <Image
          src={person.image}
          alt={`${person.name} - ${person.role}`}
          fill
          sizes={size === "large" ? "390px" : "190px"}
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

function AboutSlideshow() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slide = aboutSlides[activeSlide];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % aboutSlides.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="about-slideshow" aria-label="Why NACOS Nile matters">
      <div className="about-slide" key={slide.title}>
        <div className="about-slide-image">
          {activeSlide === 0 ? (
            <Image
              src="/logo.svg"
              alt="NACOS Nile logo"
              width={170}
              height={80}
              className="about-logo"
            />
          ) : (
            <Image
              src={slide.image}
              alt=""
              fill
              sizes="(max-width: 900px) 100vw, 600px"
            />
          )}

          <span className="about-slide-count">
            0{activeSlide + 1} / 0{aboutSlides.length}
          </span>
        </div>

        <div className="about-slide-content">
          <span>WHY NACOS</span>
          <h3>{slide.title}</h3>
          <p>{slide.description}</p>
        </div>
      </div>

      <div className="about-slide-controls" aria-label="Choose About slide">
        {aboutSlides.map((item, index) => (
          <button
            type="button"
            key={item.title}
            aria-label={`Show slide ${index + 1}`}
            className={index === activeSlide ? "active" : ""}
            onClick={() => setActiveSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}

function AnimatedStat({ value, label }: { value: string; label: string }) {
  const isNumeric = /^\d+$/.test(value);
  const [display, setDisplay] = useState(isNumeric ? "0" : value);
  const ref = useRef<HTMLDivElement>(null);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!isNumeric) return;

    const numeric = parseInt(value, 10);
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasRun.current) return;
        hasRun.current = true;
        observer.disconnect();

        const duration = 900;
        const start = performance.now();

        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const current = Math.round(progress * numeric);
          setDisplay(String(current).padStart(value.length, "0"));
          if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, isNumeric]);

  return (
    <div ref={ref}>
      <strong>{display}</strong>
      <span>{label}</span>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeDiscipline, setActiveDiscipline] = useState(0);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const navRef = useRef<HTMLElement>(null);

  const active = disciplines[activeDiscipline];

  // Navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll progress bar + back-to-top visibility
  useEffect(() => {
    const handleProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
      setShowBackToTop(scrollTop > window.innerHeight * 0.6);
    };

    handleProgress();
    window.addEventListener("scroll", handleProgress, { passive: true });
    window.addEventListener("resize", handleProgress);

    return () => {
      window.removeEventListener("scroll", handleProgress);
      window.removeEventListener("resize", handleProgress);
    };
  }, []);

  // Close mobile menu on outside click
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        menuOpen &&
        navRef.current &&
        !navRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [menuOpen]);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && menuOpen) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Scroll-reveal sections
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
      { threshold: 0.12 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Scroll-spy: highlight the current section's nav link
  useEffect(() => {
    const sections = NAV_ITEMS.map((item) =>
      document.getElementById(item.id)
    ).filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* SCROLL PROGRESS */}
      <div
        className="scroll-progress"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />

      {/* NAVIGATION */}
      <header
        ref={navRef}
        className={`navbar ${scrolled ? "scrolled" : ""}`}
      >
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

          <nav
            id="primary-navigation"
            className={`nav-links ${menuOpen ? "open" : ""}`}
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={activeSection === item.id ? "active" : ""}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a href="#community" className="nav-cta">
            Join Community
          </a>

          <button
            className={`menu-button ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <div
          className={`nav-backdrop ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      </header>

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="hero-background" />
          <div className="hero-overlay" />

          <div className="hero-content container">
            <div className="hero-copy">
              <div className="eyebrow light">
                <span />
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
              <AnimatedStat value="06" label="Computing Disciplines" />
              <AnimatedStat value="01" label="Student Community" />
              <AnimatedStat value="∞" label="Possibilities" />
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="about section scroll-reveal" id="about">
          <div className="container about-grid">
            <div className="section-heading">
              <div className="eyebrow">
                <span />
                WHO WE ARE
              </div>

              <h2>
                More than a society.
                <br />
                <em>A community.</em>
              </h2>

              <p className="about-intro">
                A student community for people exploring computing,
                technology and the possibilities that come with learning
                together.
              </p>

              <a href="#disciplines" className="text-link">
                Explore the disciplines
                <span>→</span>
              </a>
            </div>

            <AboutSlideshow />
          </div>
        </section>

        {/* DISCIPLINES */}
        <section
          className="disciplines section scroll-reveal"
          id="disciplines"
        >
          <div className="container">
            <div className="section-top">
              <div>
                <div className="eyebrow">
                  <span />
                  THE COMPUTING COMMUNITY
                </div>

                <h2>
                  Six disciplines.
                  <br />
                  <em>One shared space.</em>
                </h2>
              </div>

              <p>
                Different paths through computing, connected by one student
                community. Explore what each discipline is about.
              </p>
            </div>

            <div className="discipline-explorer">
              <div
                className="discipline-menu"
                role="tablist"
                aria-label="Computing disciplines"
              >
                {disciplines.map((discipline, index) => (
                  <button
                    type="button"
                    key={discipline.name}
                    className={activeDiscipline === index ? "active" : ""}
                    onMouseEnter={() => setActiveDiscipline(index)}
                    onFocus={() => setActiveDiscipline(index)}
                    onClick={() => setActiveDiscipline(index)}
                    role="tab"
                    aria-selected={activeDiscipline === index}
                  >
                    <span>{discipline.number}</span>
                    <strong>{discipline.name}</strong>
                    <ArrowUpRightIcon />
                  </button>
                ))}
              </div>

              <div className="discipline-feature" key={active.name}>
                <div className="discipline-feature-image">
                  <Image
                    src={active.image}
                    alt={`${active.name} related visual`}
                    fill
                    sizes="(max-width: 900px) 100vw, 560px"
                  />

                  <div
                    className="image-overlay"
                    style={{ background: active.tint }}
                  />

                  <span>{active.number}</span>

                  <div className="discipline-feature-icon">
                    <Icon type={active.icon} />
                  </div>
                </div>

                <div className="discipline-feature-copy">
                  <span>DISCIPLINE {active.number}</span>

                  <h3>{active.name}</h3>

                  <p>{active.description}</p>

                  <div className="discipline-feature-note">
                    <Icon type={active.icon} />
                    <span>{active.short}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROGRAMS */}
        <section className="programs section scroll-reveal" id="programs">
          <div className="container">
            <div className="programs-heading">
              <div>
                <div className="eyebrow">
                  <span />
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
                create practical spaces to learn, experiment and grow
                together.
              </p>
            </div>

            <div className="program-list">
              {programs.map((program) => (
                <article className="program-row" key={program.number}>
                  <span className="program-number">{program.number}</span>

                  <div>
                    <h3>{program.title}</h3>
                    <p>{program.description}</p>
                  </div>

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
                  <span />
                  LEADERSHIP
                </div>

                <h2>
                  Meet the people
                  <br />
                  <em>behind NACOS Nile.</em>
                </h2>
              </div>

              <p>
                The executive council helping to build a stronger computing
                community at Nile University.
              </p>
            </div>

            <div className="leadership-editorial">
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
              </div>
            </div>
          </div>
        </section>

        {/* COMMUNITY */}
        <section className="community scroll-reveal" id="community">
          <div className="container community-inner">
            <div className="community-copy">
              <div className="eyebrow light">
                <span />
                JOIN THE COMMUNITY
              </div>

              <h2>
                Build. Learn.
                <br />
                <em>Connect.</em>
              </h2>

              <p>
                Your place in the NACOS community starts here. Follow the
                chapter, find your people and stay close to what is
                happening.
              </p>

              <a href="#" className="button button-light">
                Join the Community
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
      </main>

      {/* FOOTER */}
      <footer className="footer">
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

      {/* BACK TO TOP */}
      <button
        type="button"
        className={`back-to-top ${showBackToTop ? "visible" : ""}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <ArrowUpIcon />
      </button>
    </>
  );
}