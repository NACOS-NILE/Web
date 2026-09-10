"use client";

import Image from "next/image";

const disciplines = [
  {
    number: "01",
    name: "Computer Science",
    short: "CS",
  },
  {
    number: "02",
    name: "Software Engineering",
    short: "SE",
  },
  {
    number: "03",
    name: "Cyber Security",
    short: "CYBER",
  },
  {
    number: "04",
    name: "Information Technology",
    short: "IT",
  },
  {
    number: "05",
    name: "Information Systems",
    short: "IS",
  },
  {
    number: "06",
    name: "Data Science",
    short: "DATA",
  },
];

export default function Home() {
  return (
    <main className="site">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-container">

          <a href="#" className="brand">
            <Image
              src="/logo.svg"
              alt="NACOS Nile logo"
              width={48}
              height={48}
              priority
            />

            <div className="brand-text">
              <span>NACOS</span>
              <small>Nile Chapter</small>
            </div>
          </a>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#disciplines">Disciplines</a>
            <a href="#programs">Programs</a>
            <a href="#excos">Excos</a>
            <a href="#community">Community</a>
          </div>

          <a href="#community" className="nav-button">
            Join Community
            <span>↗</span>
          </a>

          <button className="menu-button" aria-label="Open menu">
            <span></span>
            <span></span>
          </button>

        </div>
      </nav>


      {/* HERO */}
      <section className="hero">

        <div className="hero-grid"></div>

        <div className="hero-content">

          <div className="hero-copy">
            <div className="eyebrow hero-reveal">
              NILE UNIVERSITY'S COMPUTING COMMUNITY
            </div>

            <h1 className="hero-title hero-reveal delay-1">
              Where Nile&apos;s
              <br />
              computing minds
              <br />
              <span>build what&apos;s next.</span>
            </h1>

            <p className="hero-description hero-reveal delay-2">
              A community of creators, problem-solvers and future technology
              leaders learning, building and growing together at Nile
              University.
            </p>

            <div className="hero-actions hero-reveal delay-3">
              <a href="#community" className="primary-button">
                Join the Community
                <span>→</span>
              </a>

              <a href="#about" className="secondary-button">
                Explore NACOS
                <span>↓</span>
              </a>
            </div>

            <div className="hero-stats hero-reveal delay-4">
              <div>
                <strong>06</strong>
                <span>Disciplines</span>
              </div>

              <div>
                <strong>01</strong>
                <span>Community</span>
              </div>

              <div>
                <strong>∞</strong>
                <span>Possibilities</span>
              </div>
            </div>
          </div>


          {/* FLOWING DISCIPLINES */}
          <div className="hero-visual">

            <div className="visual-orbit orbit-one"></div>
            <div className="visual-orbit orbit-two"></div>

            <div className="nacos-core">
              <span>NACOS</span>
              <small>NILE</small>
            </div>

            <div className="discipline-flow">

              {disciplines.map((discipline, index) => (
                <div
                  className={`discipline-pill discipline-${index + 1}`}
                  key={discipline.number}
                >
                  <span className="discipline-number">
                    {discipline.number}
                  </span>

                  <div>
                    <strong>{discipline.name}</strong>
                    <small>{discipline.short}</small>
                  </div>
                </div>
              ))}

            </div>

          </div>

        </div>

        <div className="hero-bottom">
          <span>LEARN</span>
          <i></i>
          <span>BUILD</span>
          <i></i>
          <span>CONNECT</span>
          <i></i>
          <span>GROW</span>
        </div>

      </section>


      {/* ABOUT */}
      <section className="about section" id="about">

        <div className="section-container">

          <div className="section-label">
            <span>01</span>
            WHO WE ARE
          </div>

          <div className="about-layout">

            <div>
              <h2>
                More than a student
                <br />
                association.
                <br />
                <span>A community of builders.</span>
              </h2>
            </div>

            <div className="about-text">
              <p>
                NACOS Nile is the official chapter of the National Association
                of Computing Students at Nile University of Nigeria.
              </p>

              <p>
                We bring together students across computing disciplines to
                learn, collaborate, create opportunities and build the skills
                needed for the technology world.
              </p>
            </div>

          </div>

          <div className="principles">

            <div className="principle">
              <span>01</span>
              <h3>Learn</h3>
              <p>Develop practical and academic skills.</p>
            </div>

            <div className="principle">
              <span>02</span>
              <h3>Build</h3>
              <p>Turn knowledge into real projects.</p>
            </div>

            <div className="principle">
              <span>03</span>
              <h3>Connect</h3>
              <p>Meet peers, mentors and industry professionals.</p>
            </div>

          </div>

        </div>

      </section>


      {/* DISCIPLINES */}
      <section className="disciplines section" id="disciplines">

        <div className="section-container">

          <div className="section-heading">
            <div>
              <div className="section-label">
                <span>02</span>
                OUR DISCIPLINES
              </div>

              <h2>
                Six paths.
                <br />
                <span>One community.</span>
              </h2>
            </div>

            <p>
              Different fields. Different strengths.
              <br />
              One computing community.
            </p>
          </div>


          <div className="discipline-grid">

            {disciplines.map((discipline) => (
              <a
                href="#"
                className="discipline-card"
                key={discipline.number}
              >
                <span className="card-number">
                  {discipline.number}
                </span>

                <div className="card-arrow">↗</div>

                <div className="card-content">
                  <span>{discipline.short}</span>
                  <h3>{discipline.name}</h3>
                  <p>
                    Explore opportunities, projects and community within
                    {` ${discipline.name}.`}
                  </p>
                </div>
              </a>
            ))}

          </div>

        </div>

      </section>


      {/* PROGRAMS */}
      <section className="programs section" id="programs">

        <div className="section-container">

          <div className="section-label">
            <span>03</span>
            WHAT WE DO
          </div>

          <div className="programs-heading">
            <h2>
              Learn beyond
              <br />
              <span>the classroom.</span>
            </h2>

            <p>
              From technical workshops to hackathons and mentorship,
              NACOS creates spaces where students can turn knowledge
              into experience.
            </p>
          </div>

          <div className="program-list">

            <div className="program-item">
              <span>01</span>
              <div>
                <h3>Workshops</h3>
                <p>Coding workshops and technical bootcamps.</p>
              </div>
              <b>↗</b>
            </div>

            <div className="program-item">
              <span>02</span>
              <div>
                <h3>Hackathons</h3>
                <p>Build under pressure. Solve real problems.</p>
              </div>
              <b>↗</b>
            </div>

            <div className="program-item">
              <span>03</span>
              <div>
                <h3>Mentorship</h3>
                <p>Connect with experienced professionals.</p>
              </div>
              <b>↗</b>
            </div>

            <div className="program-item">
              <span>04</span>
              <div>
                <h3>Study Groups</h3>
                <p>Learn together. Grow together.</p>
              </div>
              <b>↗</b>
            </div>

          </div>

        </div>

      </section>


      {/* COMMUNITY */}
      <section className="community section" id="community">

        <div className="section-container community-inner">

          <div className="section-label">
            <span>04</span>
            THE COMMUNITY
          </div>

          <h2>
            Your next project
            <br />
            could start with
            <span> a conversation.</span>
          </h2>

          <p>
            Join the NACOS Nile community and connect with students
            who are learning, building and creating alongside you.
          </p>

          <a href="#" className="primary-button">
            Join NACOS Nile
            <span>→</span>
          </a>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="footer">

        <div className="section-container footer-content">

          <div className="footer-brand">
            <Image
              src="/logo.svg"
              alt="NACOS Nile"
              width={48}
              height={48}
            />

            <div>
              <strong>NACOS Nile</strong>
              <small>Nile University Chapter</small>
            </div>
          </div>

          <div className="footer-location">
            Nile University of Nigeria
            <br />
            Abuja, FCT
          </div>

          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#disciplines">Disciplines</a>
            <a href="#programs">Programs</a>
            <a href="#community">Community</a>
          </div>

          <div className="footer-copy">
            © 2026 NACOS Nile.
            <br />
            Built for the computing community.
          </div>

        </div>

      </footer>

    </main>
  );
}