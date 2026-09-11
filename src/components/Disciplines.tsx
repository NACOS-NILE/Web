"use client";

import { useState, useCallback, useEffect, useRef } from "react";

const DISCIPLINE_DATA = [
  {
    dept: "Department of Computer Science",
    name: "Computer Science",
    tagline: "The theory that powers everything — where ideas become algorithms.",
    desc: "Computer Science is the beating heart of computing. NACOSites here go deep into algorithms, data structures, programming languages and the science behind the machines — learning not just to write code, but to think in the logic the whole industry is built on.",
    focus: ["Algorithms", "Programming Languages", "Machine Learning Theory", "Human-Computer Interaction"],
    careers: ["Software Developer", "Researcher", "Algorithm Engineer", "AI Specialist"],
    icon: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
  },
  {
    dept: "Department of Computer Science",
    name: "Software Engineering",
    tagline: "Where discipline meets craft — turning requirements into reliable, shipped software.",
    desc: "Software Engineering is how ideas become products. NACOSites here learn the full life of building software — architecture, version control, testing, deployment and delivery — practising the rigour real teams run on, long before graduation.",
    focus: ["System Architecture", "Clean Code", "DevOps", "Team & Product Workflow"],
    careers: ["Full-Stack Engineer", "Backend Engineer", "Mobile Engineer", "DevOps Engineer"],
    icon: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
  },
  {
    dept: "Department of Computer Science",
    name: "Cyber Security",
    tagline: "Defending the digital frontier — one vulnerability at a time.",
    desc: "Cyber Security is the discipline that keeps the digital world trustworthy. NACOSites here study threat modelling, network defence, ethical hacking and digital forensics, learning to think like attackers so they can protect like guardians.",
    focus: ["Network Defence", "Ethical Hacking", "Digital Forensics", "Security Ethics"],
    careers: ["Security Analyst", "Penetration Tester", "SOC Engineer", "Security Researcher"],
    icon: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  },
  {
    dept: "Department of Computer Science",
    name: "Information Technology",
    tagline: "The backbone of every organisation — infrastructure, networks and operations.",
    desc: "Information Technology is computing in service of people and organisations. NACOSites here master networks, servers, cloud platforms, databases and IT support — the systems that keep businesses, schools and governments running every single day.",
    focus: ["Networking", "Cloud Platforms", "Databases", "IT Operations"],
    careers: ["Network Engineer", "System Administrator", "Cloud Engineer", "IT Infrastructure Lead"],
    icon: '<rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>',
  },
  {
    dept: "Department of Computer Science",
    name: "Information Systems",
    tagline: "Where business strategy meets technology — turning data into decisions.",
    desc: "Information Systems sits at the intersection of business and computing. NACOSites here learn how organisations use data, software and people together — designing systems that solve real business problems and keep enterprises moving.",
    focus: ["Business Analysis", "ERP Systems", "Systems Design", "Data Management"],
    careers: ["Business Analyst", "Systems Analyst", "ERP Consultant", "IT Project Manager"],
    icon: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>',
  },
  {
    dept: "Department of Computer Science",
    name: "Data Science",
    tagline: "Turning raw data into insight — the language of the future.",
    desc: "Data Science is where statistics, programming and domain knowledge meet. NACOSites here learn to clean, analyse, model and visualise data that drives decisions — from predicting trends to building the intelligent systems of tomorrow.",
    focus: ["Analytics", "Statistical Modelling", "Machine Learning", "Data Visualisation"],
    careers: ["Data Scientist", "ML Engineer", "Data Analyst", "BI Specialist"],
    icon: '<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>',
  },
];

export default function Disciplines() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [switching, setSwitching] = useState(false);
  const mqRef = useRef<boolean>(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const prevBtnRef = useRef<HTMLButtonElement>(null);
  const nextBtnRef = useRef<HTMLButtonElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const STEP = 220;

  const refreshCarousel = useCallback(() => {
    if (!trackRef.current || !prevBtnRef.current || !nextBtnRef.current) return;
    trackRef.current.style.transform = "translateX(" + -activeIndex * STEP + "px)";
    prevBtnRef.current.disabled = activeIndex <= 0;
    nextBtnRef.current.disabled = activeIndex >= DISCIPLINE_DATA.length - 1;
  }, [activeIndex]);

  const switchDiscipline = useCallback(
    (index: number) => {
      if (index === activeIndex) return;
      setSwitching(true);
      setTimeout(() => {
        setActiveIndex(index);
        setSwitching(false);
      }, 260);
    },
    [activeIndex]
  );

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    mqRef.current = mq.matches;
    const handler = () => {
      mqRef.current = mq.matches;
      if (mq.matches) refreshCarousel();
      else if (trackRef.current) trackRef.current.style.transform = "";
    };
    mq.addEventListener("change", handler);
    if (mq.matches) refreshCarousel();
    return () => mq.removeEventListener("change", handler);
  }, [refreshCarousel]);

  useEffect(() => {
    if (mqRef.current) refreshCarousel();
  }, [activeIndex, refreshCarousel]);

  const handleTabClick = (index: number) => {
    switchDiscipline(index);
    setTimeout(() => {
      if (mqRef.current) refreshCarousel();
    }, 280);
  };

  const step = (dir: number) => {
    const target = Math.min(Math.max(activeIndex + dir, 0), DISCIPLINE_DATA.length - 1);
    if (target !== activeIndex) handleTabClick(target);
  };

  const d = DISCIPLINE_DATA[activeIndex];

  return (
    <section className="disciplines" id="disciplines">
      <div className="container">
        <div className="disciplines-header reveal">
          <div>
            <div className="section-label">Our Discipline Family</div>
            <h2 className="disciplines-title">Every Computing Mind Has a Home Here</h2>
          </div>
          <p className="disciplines-subtitle">
            Six disciplines. One brotherhood of NACOSites. Pick a path to explore it — whatever you build, you build it among family.
          </p>
        </div>

        <div className="discipline-explorer">
          <div className="discipline-carousel">
            <div className="discipline-tabs reveal" role="tablist" aria-label="Computing disciplines">
              <div className="discipline-tabs-track" ref={trackRef}>
                {DISCIPLINE_DATA.map((disc, i) => (
                  <button
                    key={disc.name}
                    ref={(el) => { tabRefs.current[i] = el; }}
                    className={`discipline-tab${i === activeIndex ? " active" : ""}`}
                    role="tab"
                    id={`tab-${i}`}
                    aria-selected={i === activeIndex}
                    aria-controls="discipline-panel"
                    tabIndex={i === activeIndex ? 0 : -1}
                    onClick={() => handleTabClick(i)}
                    onKeyDown={(e) => {
                      let target = -1;
                      if (e.key === "ArrowRight") target = (i + 1) % DISCIPLINE_DATA.length;
                      else if (e.key === "ArrowLeft") target = (i - 1 + DISCIPLINE_DATA.length) % DISCIPLINE_DATA.length;
                      else if (e.key === "Home") target = 0;
                      else if (e.key === "End") target = DISCIPLINE_DATA.length - 1;
                      if (target >= 0) {
                        e.preventDefault();
                        handleTabClick(target);
                        tabRefs.current[target]?.focus();
                      }
                    }}
                  >
                    <span className="tab-num">{String(i + 1).padStart(2, "0")}</span>
                    <span className="tab-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" dangerouslySetInnerHTML={{ __html: disc.icon }} />
                    </span>
                    <span className="tab-name">{disc.name}</span>
                    <span className="tab-arrow">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="disc-nav-group">
              <button className="disc-nav disc-prev" ref={prevBtnRef} aria-label="Previous discipline" disabled onClick={() => step(-1)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
              </button>
              <button className="disc-nav disc-next" ref={nextBtnRef} aria-label="Next discipline" onClick={() => step(1)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
              </button>
            </div>
          </div>

          <div className="discipline-panel reveal reveal-delay-1">
            <div className="discipline-panel-big" aria-hidden="true">{String(activeIndex + 1).padStart(2, "0")}</div>
            <div className={`discipline-panel-content${switching ? " switching" : ""}`} id="discipline-panel" role="tabpanel" aria-labelledby={`tab-${activeIndex}`} tabIndex={0}>
              <div className="discipline-panel-top">
                <div className="discipline-panel-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" dangerouslySetInnerHTML={{ __html: d.icon }} />
                </div>
                <div>
                  <div className="discipline-panel-eyebrow">{d.dept}</div>
                  <h3 className="discipline-panel-name">{d.name}</h3>
                </div>
              </div>
              <p className="discipline-panel-tagline">{d.tagline}</p>
              <p className="discipline-panel-desc">{d.desc}</p>
              <div className="discipline-panel-focus">
                {d.focus.map((f) => (
                  <span key={f} className="focus-chip">{f}</span>
                ))}
              </div>
              <div className="discipline-panel-careers">
                <span className="careers-label">Where NACOSites Go</span>
                <div className="careers-list">
                  {d.careers.map((c) => (
                    <span key={c} className="career-tag">{c}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
