"use client";

import Image from "next/image";
import {
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type FocusEvent as ReactFocusEvent,
  type MouseEvent as ReactMouseEvent,
  type ReactNode,
  type TouchEvent as ReactTouchEvent,
} from "react";

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
  { id: "membership", label: "Membership" },
  { id: "community", label: "Community" },
];

/*
  MEMBERSHIP
  Update these numbers when dues or the shirt price change. Every amount
  in the Membership section is worked out from them automatically.
*/
const MEMBERSHIP = {
  session: "2026/2027 session",
  duesPerSemester: 10000,
  shirtDeposit: 15000,
  shirtBalance: 5000,
};

function naira(amount: number) {
  return `₦${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
}

const shirtTotal = MEMBERSHIP.shirtDeposit + MEMBERSHIP.shirtBalance;

const membershipStages = [
  {
    title: "First semester",
    amount: MEMBERSHIP.duesPerSemester + MEMBERSHIP.shirtDeposit,
    detail: `${naira(MEMBERSHIP.duesPerSemester)} dues + ${naira(
      MEMBERSHIP.shirtDeposit
    )} shirt deposit`,
  },
  {
    title: "Second semester",
    amount: MEMBERSHIP.duesPerSemester + MEMBERSHIP.shirtBalance,
    detail: `${naira(MEMBERSHIP.duesPerSemester)} dues + ${naira(
      MEMBERSHIP.shirtBalance
    )} shirt balance`,
  },
  {
    title: "Every semester after",
    amount: MEMBERSHIP.duesPerSemester,
    detail: "Dues only. Your shirt is fully paid.",
  },
];

const duesSupport = [
  { icon: "calendar", label: "Events" },
  { icon: "heart", label: "Welfare" },
  { icon: "book", label: "Student programmes" },
  { icon: "users", label: "Association activities" },
];

const membershipFaqs: { question: string; answer: ReactNode }[] = [
  {
    question: "Who can join NACOS Nile?",
    answer:
      "Students in any of the six computing disciplines at Nile University of Nigeria.",
  },
  {
    question: "Do I pay for the shirt every semester?",
    answer: `No. The shirt is a one-time ${naira(
      shirtTotal
    )} payment for your whole time at Nile, split across your first two semesters. After that, you only pay dues.`,
  },
  {
    question: "Why does NACOS have an official shirt?",
    answer:
      "It builds a unified NACOS identity. Members wear it at major NACOS events and when representing the chapter.",
  },
  {
    question: "How do I pay?",
    answer: (
      <>
        Payment details will be shared through official NACOS channels.{" "}
        <a href="#community">Join the community</a> so you do not miss them.
      </>
    ),
  },
  {
    question: "When will I get my shirt?",
    answer:
      "Details on shirt collection will be announced through official NACOS channels.",
  },
];

/*
  COMMUNITY LINKS
  Replace each "#" with the real URL once the chapter shares it.
  - Social links left as "#" show a "Coming soon" label and do nothing.
  - While COMMUNITY_JOIN_URL is "#", the Join button goes to Membership.
  Real URLs open in a new tab automatically.
*/
const COMMUNITY_JOIN_URL = "#";

const SOCIAL_LINKS = [
  { type: "discord", label: "Discord", href: "#" },
  { type: "whatsapp", label: "WhatsApp", href: "#" },
  { type: "telegram", label: "Telegram", href: "#" },
  { type: "instagram", label: "Instagram", href: "#" },
  { type: "linkedin", label: "LinkedIn", href: "#" },
  { type: "x", label: "X", href: "#" },
];

const SLIDE_DURATION = 4500;

function prefersReducedMotion() {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function subscribeToReducedMotion(callback: () => void) {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

// True when the visitor has asked their device for less motion
function useReducedMotion() {
  return useSyncExternalStore(
    subscribeToReducedMotion,
    prefersReducedMotion,
    () => false
  );
}

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({
    behavior: prefersReducedMotion() ? "auto" : "smooth",
    block: "start",
  });

  window.history.replaceState(null, "", `#${id}`);
}

// Starts downloading an image in the background so it is ready when shown
function preloadImage(src: string) {
  const img = new window.Image();
  img.decoding = "async";
  img.src = src;
}

/*
  Runs a callback at most once per animation frame while the page scrolls
  or resizes. Returns a cleanup function for useEffect.
*/
function listenToScroll(callback: () => void) {
  let ticking = false;

  const run = () => {
    ticking = false;
    callback();
  };

  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(run);
  };

  callback();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);

  return () => {
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("resize", onScroll);
  };
}

const ICON_PATHS: Record<string, ReactNode> = {
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

  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <line x1="8" y1="3" x2="8" y2="7" />
      <line x1="16" y1="3" x2="16" y2="7" />
    </>
  ),

  heart: (
    <path d="M19.5 12.6 12 20l-7.5-7.4A4.8 4.8 0 0 1 12 6.3a4.8 4.8 0 0 1 7.5 6.3Z" />
  ),

  book: (
    <>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5v14Z" />
      <path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5" />
    </>
  ),

  users: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20c.8-3.4 3.3-5.5 6.5-5.5s5.7 2.1 6.5 5.5" />
      <path d="M16 4.8a3.3 3.3 0 0 1 0 6.4" />
      <path d="M18 14.8c1.9.6 3.1 2.4 3.5 5.2" />
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

function PauseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <rect x="6" y="4" width="4" height="16" rx="1" />
      <rect x="14" y="4" width="4" height="16" rx="1" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M7 4.5v15a1 1 0 0 0 1.5.86l12.5-7.5a1 1 0 0 0 0-1.72L8.5 3.64A1 1 0 0 0 7 4.5Z" />
    </svg>
  );
}

const SOCIAL_ICON_PATHS: Record<string, ReactNode> = {
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

function isPlaceholderLink(href: string) {
  return href.trim() === "" || href === "#";
}

function CommunityLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  if (isPlaceholderLink(href)) {
    return (
      <a
        href="#community"
        className={className}
        aria-disabled="true"
        onClick={(event) => event.preventDefault()}
      >
        {children}
      </a>
    );
  }

  // Links to a section on this page stay in the same tab
  if (href.startsWith("#")) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

function MembershipSection() {
  return (
    <section className="membership section scroll-reveal" id="membership">
      <div className="container">
        <div className="section-top">
          <div>
            <div className="eyebrow">
              <span />
              MEMBERSHIP
            </div>

            <h2>
              Become a
              <br />
              <em>NACOSite.</em>
            </h2>
          </div>

          <p>
            Your dues keep the chapter running, from events and welfare to
            student programmes. Here is what membership costs and how it
            works.
          </p>
        </div>

        <div className="membership-grid">
          <div className="membership-plan">
            <div className="membership-plan-head">
              <h3>What you pay</h3>
              <span className="membership-session">{MEMBERSHIP.session}</span>
            </div>

            <ol className="membership-stages">
              {membershipStages.map((stage, index) => (
                <li className="membership-stage" key={stage.title}>
                  <span className="membership-stage-marker" aria-hidden="true">
                    {index + 1}
                  </span>

                  <div>
                    <h4>{stage.title}</h4>
                    <p>{stage.detail}</p>
                  </div>

                  <strong>{naira(stage.amount)}</strong>
                </li>
              ))}
            </ol>

            <p className="membership-plan-note">
              Dues are {naira(MEMBERSHIP.duesPerSemester)} per semester. The
              first two semesters are higher because they include the one-time
              shirt payment.
            </p>
          </div>

          <div className="membership-side">
            <div className="membership-support">
              <h3>What your dues support</h3>

              <ul>
                {duesSupport.map((item) => (
                  <li key={item.label}>
                    <Icon type={item.icon} />
                    <span>{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="membership-shirt">
              <h3>The official NACOS shirt</h3>

              <div className="membership-shirt-price">
                <strong>{naira(shirtTotal)}</strong>
                <span>one time</span>
              </div>

              <p>
                Paid once for your whole time at Nile, split across your first
                two semesters. Members wear it at major NACOS events and when
                representing the chapter.
              </p>
            </div>
          </div>
        </div>

        <div className="membership-faq">
          <div className="membership-faq-intro">
            <h3>Questions about membership</h3>
            <p>
              The quick answers. For anything else, reach out through the
              official NACOS channels.
            </p>
          </div>

          <div className="faq-list">
            {membershipFaqs.map((faq) => (
              <details
                className="faq-item"
                name="membership-faq"
                key={faq.question}
              >
                <summary>
                  <span>{faq.question}</span>
                  <span className="faq-toggle" aria-hidden="true" />
                </summary>

                <div className="faq-answer">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
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
          sizes={
            size === "large"
              ? "(max-width: 650px) 310px, 390px"
              : "(max-width: 650px) 45vw, 190px"
          }
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
  // null means "no choice yet": follow the device's reduced motion setting
  const [pausedChoice, setPausedChoice] = useState<boolean | null>(null);
  const [hoverPaused, setHoverPaused] = useState(false);
  const [focusPaused, setFocusPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  const reducedMotion = useReducedMotion();
  const userPaused = pausedChoice ?? reducedMotion;

  const total = aboutSlides.length;
  const slide = aboutSlides[activeSlide];

  // Autoplay stops while the slideshow is off screen (saves battery and data)
  const isPaused = userPaused || hoverPaused || focusPaused || !inView;

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: "200px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Load the next slide's photo in advance so it never appears as an empty box
  useEffect(() => {
    if (!inView) return;

    const nextIndex = (activeSlide + 1) % total;

    // Slide 1 shows the logo, not a photo
    if (nextIndex === 0) return;

    preloadImage(aboutSlides[nextIndex].image);
  }, [activeSlide, inView, total]);

  // One timer per slide, so tapping a dot always gives that slide its full time
  useEffect(() => {
    if (isPaused) return;

    const timer = window.setTimeout(() => {
      setActiveSlide((current) => (current + 1) % total);
    }, SLIDE_DURATION);

    return () => window.clearTimeout(timer);
  }, [activeSlide, isPaused, total]);

  const goTo = (index: number) => {
    setActiveSlide((index + total) % total);
  };

  // Swipe left or right on phones
  const handleTouchStart = (event: ReactTouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0];
    touchStart.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = (event: ReactTouchEvent<HTMLDivElement>) => {
    const start = touchStart.current;
    touchStart.current = null;
    if (!start) return;

    const touch = event.changedTouches[0];
    const dx = touch.clientX - start.x;
    const dy = touch.clientY - start.y;

    // Ignore small movements and mostly vertical swipes (page scrolling)
    if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy)) return;

    goTo(activeSlide + (dx < 0 ? 1 : -1));
  };

  // Pause while a keyboard user is inside the slideshow
  const handleFocus = (event: ReactFocusEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    try {
      if (target.matches(":focus-visible")) setFocusPaused(true);
    } catch {
      setFocusPaused(true);
    }
  };

  const handleBlur = (event: ReactFocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      setFocusPaused(false);
    }
  };

  return (
    <div
      ref={rootRef}
      className={`about-slideshow ${isPaused ? "is-paused" : ""}`}
      role="region"
      aria-roledescription="carousel"
      aria-label="Why NACOS Nile matters"
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") setHoverPaused(true);
      }}
      onPointerLeave={(event) => {
        if (event.pointerType === "mouse") setHoverPaused(false);
      }}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      <div
        className="about-slide-viewport"
        aria-live={isPaused ? "polite" : "off"}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
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
              0{activeSlide + 1} / 0{total}
            </span>
          </div>

          <div className="about-slide-content">
            <span>WHY NACOS</span>
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
          </div>
        </div>
      </div>

      <div className="about-slide-controls">
        <button
          type="button"
          className="about-slide-toggle"
          onClick={() => setPausedChoice(!userPaused)}
          aria-label={userPaused ? "Play slideshow" : "Pause slideshow"}
        >
          {userPaused ? <PlayIcon /> : <PauseIcon />}
        </button>

        <div
          className="about-slide-dots"
          role="group"
          aria-label="Choose About slide"
        >
          {aboutSlides.map((item, index) => (
            <button
              type="button"
              key={item.title}
              aria-label={`Show slide ${index + 1}`}
              aria-current={index === activeSlide ? "true" : undefined}
              className={index === activeSlide ? "active" : ""}
              onClick={() => goTo(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function AnimatedStat({ value, label }: { value: string; label: string }) {
  const isNumeric = /^\d+$/.test(value);

  // Start with the real value so the number is correct even before JS runs
  const [display, setDisplay] = useState(value);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;

    if (
      !isNumeric ||
      !el ||
      prefersReducedMotion() ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }

    const target = parseInt(value, 10);
    let frame = 0;
    let delay = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        setDisplay("0".padStart(value.length, "0"));

        // Wait for the hero stats to fade in before counting
        delay = window.setTimeout(() => {
          const start = performance.now();

          const tick = (now: number) => {
            const progress = Math.min((now - start) / 900, 1);
            setDisplay(
              String(Math.round(progress * target)).padStart(value.length, "0")
            );
            if (progress < 1) frame = requestAnimationFrame(tick);
          };

          frame = requestAnimationFrame(tick);
        }, 700);
      },
      { threshold: 0.5 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      window.clearTimeout(delay);
      cancelAnimationFrame(frame);
    };
  }, [value, isNumeric]);

  return (
    <div ref={ref}>
      <strong>{display}</strong>
      <span>{label}</span>
    </div>
  );
}

/*
  The interactive parts below each keep their own state. When one of them
  changes (menu opens, a discipline is picked, a row is tapped), only that
  part re-renders instead of the whole page with all its photos.
*/

function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(
    () =>
      listenToScroll(() => {
        const docHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        const progress =
          docHeight > 0 ? Math.min(window.scrollY / docHeight, 1) : 0;

        if (barRef.current) {
          barRef.current.style.transform = `scaleX(${progress})`;
        }
      }),
    []
  );

  return <div className="scroll-progress" ref={barRef} aria-hidden="true" />;
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Section to scroll to once the mobile menu has closed and scrolling is unlocked
  const pendingScrollRef = useRef<string | null>(null);

  // Navbar background on scroll
  useEffect(
    () => listenToScroll(() => setScrolled(window.scrollY > 24)),
    []
  );

  // Mobile menu: Escape to close, lock page scroll, close if screen becomes desktop width
  useEffect(() => {
    if (!menuOpen) {
      const pending = pendingScrollRef.current;

      if (pending) {
        pendingScrollRef.current = null;
        scrollToSection(pending);
      }

      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    const desktopQuery = window.matchMedia("(min-width: 901px)");
    const handleViewportChange = () => {
      if (desktopQuery.matches) setMenuOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    desktopQuery.addEventListener("change", handleViewportChange);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      desktopQuery.removeEventListener("change", handleViewportChange);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

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

  /*
    Nav links. If the mobile menu is open, close it first; the effect above
    then unlocks scrolling and moves to the section.
  */
  const handleNavClick = (
    event: ReactMouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    if (!document.getElementById(id)) return;

    event.preventDefault();

    if (menuOpen) {
      pendingScrollRef.current = id;
      setMenuOpen(false);
    } else {
      scrollToSection(id);
    }
  };

  return (
    <>
      <header className={`navbar ${scrolled || menuOpen ? "scrolled" : ""}`}>
        <div className="nav-container">
          <a href="#" className="brand" onClick={() => setMenuOpen(false)}>
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
                onClick={(event) => handleNavClick(event, item.id)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#community"
            className="nav-cta"
            onClick={(event) => handleNavClick(event, "community")}
          >
            Join Community
          </a>

          <button
            ref={menuButtonRef}
            type="button"
            className={`menu-button ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Backdrop sits outside the header so it covers the full screen */}
      <div
        className={`nav-backdrop ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />
    </>
  );
}

function DisciplineExplorer() {
  const [activeDiscipline, setActiveDiscipline] = useState(0);

  const explorerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const active = disciplines[activeDiscipline];

  // Load all six images once the section is close, so switching is instant
  useEffect(() => {
    const el = explorerRef.current;
    if (!el) return;

    const preloadAll = () => {
      disciplines.forEach((discipline) => preloadImage(discipline.image));
    };

    if (!("IntersectionObserver" in window)) {
      preloadAll();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          preloadAll();
          observer.disconnect();
        }
      },
      { rootMargin: "600px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // On phones the discipline tabs scroll sideways; keep the active one in view
  useEffect(() => {
    const menu = menuRef.current;
    if (!menu || menu.scrollWidth <= menu.clientWidth) return;

    const button = menu.children[activeDiscipline] as HTMLElement | undefined;
    if (!button) return;

    const left =
      button.offsetLeft - (menu.clientWidth - button.offsetWidth) / 2;

    menu.scrollTo({
      left: Math.max(left, 0),
      behavior: prefersReducedMotion() ? "auto" : "smooth",
    });
  }, [activeDiscipline]);

  return (
    <div className="discipline-explorer" ref={explorerRef}>
      <div
        ref={menuRef}
        className="discipline-menu"
        role="tablist"
        aria-label="Computing disciplines"
      >
        {disciplines.map((discipline, index) => (
          <button
            type="button"
            key={discipline.name}
            id={`discipline-tab-${index}`}
            className={activeDiscipline === index ? "active" : ""}
            onPointerEnter={(event) => {
              // Hover preview only for a real mouse, not for touch scrolling
              if (event.pointerType === "mouse") {
                setActiveDiscipline(index);
              }
            }}
            onFocus={() => setActiveDiscipline(index)}
            onClick={() => setActiveDiscipline(index)}
            role="tab"
            aria-selected={activeDiscipline === index}
            aria-controls="discipline-panel"
          >
            <span>{discipline.number}</span>
            <strong>{discipline.name}</strong>
            <ArrowUpRightIcon />
          </button>
        ))}
      </div>

      <div
        className="discipline-feature"
        key={active.name}
        id="discipline-panel"
        role="tabpanel"
        aria-labelledby={`discipline-tab-${activeDiscipline}`}
      >
        <div className="discipline-feature-image">
          <Image
            src={active.image}
            alt={`${active.name} related visual`}
            fill
            sizes="(max-width: 650px) 100vw, (max-width: 900px) 50vw, 560px"
          />

          <div className="image-overlay" style={{ background: active.tint }} />

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
  );
}

function ProgramList() {
  const [activeProgram, setActiveProgram] = useState<number | null>(null);

  return (
    <div className="program-list">
      {programs.map((program, index) => (
        <article
          className={`program-row ${activeProgram === index ? "active" : ""}`}
          key={program.number}
          onClick={() =>
            setActiveProgram((current) => (current === index ? null : index))
          }
        >
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
  );
}

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(
    () =>
      listenToScroll(() =>
        setVisible(window.scrollY > window.innerHeight * 0.6)
      ),
    []
  );

  return (
    <button
      type="button"
      className={`back-to-top ${visible ? "visible" : ""}`}
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: prefersReducedMotion() ? "auto" : "smooth",
        })
      }
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
    >
      <ArrowUpIcon />
    </button>
  );
}

export default function Home() {
  // iPhones only show :active tap effects if the page listens for touches
  useEffect(() => {
    const noop = () => {};
    document.addEventListener("touchstart", noop, { passive: true });
    return () => document.removeEventListener("touchstart", noop);
  }, []);

  /*
    Scroll-reveal sections.
    Sections are only hidden once this code has actually run (the
    "reveal-ready" class). If JavaScript is slow or blocked, every section
    stays visible instead of disappearing.
  */
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(".scroll-reveal");

    const showAll = () => {
      sections.forEach((section) => section.classList.add("is-visible"));
    };

    if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
      showAll();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      // threshold 0 so very tall sections on phones still trigger
      { threshold: 0, rootMargin: "0px 0px -8% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    document.documentElement.classList.add("reveal-ready");

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <ScrollProgress />

      <Navbar />

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="hero-background" />
          <div className="hero-logo-bg" aria-hidden="true" />
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

            <DisciplineExplorer />
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

            <ProgramList />
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

        {/* MEMBERSHIP */}
        <MembershipSection />

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

              <CommunityLink
                href={
                  isPlaceholderLink(COMMUNITY_JOIN_URL)
                    ? "#membership"
                    : COMMUNITY_JOIN_URL
                }
                className="button button-light"
              >
                Join the Community
                <span>→</span>
              </CommunityLink>
            </div>

            <div className="community-links">
              {SOCIAL_LINKS.map((link) => (
                <CommunityLink key={link.type} href={link.href}>
                  <SocialIcon type={link.type} />
                  <span>{link.label}</span>
                  {isPlaceholderLink(link.href) ? (
                    <span className="community-link-soon">Coming soon</span>
                  ) : (
                    <ArrowUpRightIcon />
                  )}
                </CommunityLink>
              ))}
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
            {NAV_ITEMS.map((item) => (
              <a key={item.id} href={`#${item.id}`}>
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="container footer-bottom">
          <span>© 2026 NACOS Nile. All rights reserved.</span>
          <span>Abuja, FCT · Nigeria</span>
        </div>
      </footer>

      <BackToTop />
    </>
  );
}