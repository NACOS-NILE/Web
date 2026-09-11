import Image from "next/image";
import {
  programs,
  socialLinks,
  chapterEmail,
  communityEmailHref,
} from "@/data/content";
import { Arrow } from "./Arrow";
import { DisciplineIcon } from "./DisciplineIcon";
import {
  LinkedInIcon,
  InstagramIcon,
  XTwitterIcon,
  MailIcon,
  WhatsAppIcon,
  IdCardIcon,
  UserIcon,
  MapPinIcon,
  TargetIcon,
  EyeIcon,
} from "./Icons";

export function About() {
  return (
    <section
      id="about"
      tabIndex={-1}
      className="about section-space"
      aria-labelledby="about-title"
    >
      <div className="wrap">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">
            <span className="eyebrow-dot" aria-hidden="true" />
            ABOUT THE CHAPTER
          </p>
          <div>
            <h2 id="about-title">
              A student body
              <br />
              for everyone who <span className="blue-text">builds with a computer.</span>
            </h2>
            <p className="lead about-lead">
              NACOS Nile is the Nile University of Nigeria chapter of the Nigeria Association of
              Computing Students. We represent and serve students across Computer Science,
              Software Engineering, Cyber Security, Information Technology, Information
              Systems, and Data Science.
            </p>
          </div>
        </div>

        <div className="about-cards-grid" data-reveal-stagger>
          <div className="about-card" data-reveal>
            <div className="about-card-icon" aria-hidden="true">
              <TargetIcon />
            </div>
            <h3>Our mission</h3>
            <p>
              To empower computing students through learning, collaboration, and real-world opportunities.
            </p>
          </div>

          <div className="about-card" data-reveal>
            <div className="about-card-icon" aria-hidden="true">
              <EyeIcon />
            </div>
            <h3>Our vision</h3>
            <p>
              To be a thriving community that shapes innovative, ethical, and globally competitive tech leaders from Nile.
            </p>
          </div>
        </div>

        <figure className="about-feature-photo" data-reveal>
          <div className="about-photo-wrapper">
            <picture>
              <source
                media="(max-width: 600px)"
                srcSet="/community/about-group-mobile.webp"
                type="image/webp"
              />
              <img
                src="/community/about-group.webp"
                alt="NACOS Nile computing students gathered together at a community event"
                width={1200}
                height={600}
                loading="lazy"
                decoding="async"
                className="about-feature-img"
              />
            </picture>
            <div className="about-photo-tagline" aria-hidden="true">
              <span>STUDENTS</span>
              <span>IDEAS</span>
              <span>COMMUNITY</span>
              <span>IMPACT</span>
            </div>
            <div className="about-photo-content">
              <div className="about-photo-bar" aria-hidden="true" />
              <h3>More than a chapter. A community that builds.</h3>
              <a href="#community" className="about-photo-arrow" aria-label="Join our community">
                <Arrow diagonal />
              </a>
            </div>
          </div>
        </figure>

        <div className="section-divider-banner" aria-hidden="true">
          <span className="divider-line" />
          <span className="divider-label">SAME STUDENTS. A BRIGHTER TOMORROW.</span>
          <span className="divider-line" />
        </div>
      </div>
    </section>
  );
}

export function Programs() {
  return (
    <section
      id="programs"
      tabIndex={-1}
      className="programs section-space"
      aria-labelledby="program-title"
    >
      <div className="wrap">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">
            <span className="eyebrow-dot" aria-hidden="true" />
            MORE THAN THE CLASSROOM
          </p>
          <div>
            <h2 id="program-title">
              <span className="program-study">Don’t just study it.</span>
              <span className="light-blue-text">Get into it.</span>
            </h2>
            <p>
              Small starts, shared ideas, hands-on experience.
              <br className="desktop-break" />{" "}
              Here’s what we come together to do.
            </p>
          </div>
        </div>

        <div className="programs-layout">
          <div className="program-rows" data-reveal-stagger>
            {programs.map((program, index) => (
              <details
                className="program-row"
                key={program.word}
                name="programs"
                open={index === 0}
                data-reveal
              >
                <summary>
                  <DisciplineIcon kind={["IT", "CS", "IS", "DS"][index]} className="program-icon" />
                  <h3>
                    {program.word}
                    <span>.</span>
                  </h3>
                  <span className="program-title">{program.title}</span>
                  <span className="program-toggle-icon" aria-hidden="true" />
                </summary>
                <div className="program-content">
                  <p className="program-desc">{program.description}</p>
                  <div className="program-tags">
                    {program.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="program-detail-divider" aria-hidden="true" />
                  <p className="program-detail">{program.detail}</p>
                </div>
              </details>
            ))}
          </div>

          <div id="events" tabIndex={-1} className="events-note" data-reveal>
            <div className="events-note-body">
              <p className="eyebrow">THE NEXT CHAPTER</p>
              <h3>Keep a little room in your calendar.</h3>
              <p>Event dates will be shared here when they’re confirmed.</p>
              <a className="text-link" href="#community">
                Get event updates <Arrow diagonal />
              </a>
            </div>
            <div className="dot-matrix-pattern" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Community() {
  return (
    <section
      id="community"
      tabIndex={-1}
      className="community section-space"
      aria-labelledby="community-title"
    >
      <div className="wrap">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">
            <span className="eyebrow-dot" aria-hidden="true" />
            JOIN THE COMMUNITY
          </p>
          <div>
            <h2 id="community-title">
              Come curious.
              <br />
              Leave <span className="blue-text">connected.</span>
            </h2>
            <p className="community-intro desktop-only">
              Join our WhatsApp community. We verify members to keep it a safe space for NACOS students.
            </p>
            <p className="community-intro mobile-only">
              Join our WhatsApp community or request access by email. Meet fellow NACOS students, get updates, ask questions, and be part of a supportive tech community.
            </p>
          </div>
        </div>

        <div className="community-routes" id="community-routes" data-reveal-stagger>
          <article className="community-route-card" data-reveal>
            <div className="route-header">
              <span className="route-icon" aria-hidden="true">
                <WhatsAppIcon width="24" height="24" />
              </span>

            </div>
            <p className="eyebrow">THROUGH YOUR COURSE REP</p>
            <h3 className="desktop-only">Start with someone you know.</h3>
            <h3 className="mobile-only">Start with the WhatsApp community.</h3>
            <p>Ask your course representative for the community invite link.</p>
            <p className="community-note">
              Please don’t share the invitation with non-NACOS members.
            </p>
          </article>

          <article className="community-route-card" data-reveal>
            <div className="route-header">
              <span className="route-icon" aria-hidden="true">
                <MailIcon width="24" height="24" />
              </span>

            </div>
            <p className="eyebrow">THROUGH YOUR STUDENT EMAIL</p>
            <h3>Request access by email.</h3>
            <p>
              Send from your Outlook student email to{" "}
              <a href={`mailto:${chapterEmail}`}>{chapterEmail}</a>. Include:
            </p>
            <ul className="community-checklist desktop-only">
              <li>
                <UserIcon className="checklist-icon" aria-hidden="true" />
                <span>Full Name</span>
              </li>
              <li>
                <IdCardIcon className="checklist-icon" aria-hidden="true" />
                <span>Student ID</span>
              </li>
              <li>
                <WhatsAppIcon className="checklist-icon" aria-hidden="true" />
                <span>WhatsApp Phone Number</span>
              </li>
            </ul>
            <p className="community-checklist-summary mobile-only">
              Include your full name, student ID and WhatsApp phone number.
            </p>
            <a className="button button-blue community-cta-btn" href={communityEmailHref}>
              <MailIcon aria-hidden="true" />
              <span>Request Access by Email</span>
            </a>
          </article>
        </div>

        <div className="community-public" data-reveal>
          <p className="community-public-title">Follow along, wherever you are.</p>

          {/* Desktop social row */}
          <div className="community-socials" data-reveal-stagger>
            {socialLinks.map((link) => {
              const Icon = link.label.includes("LinkedIn")
                ? LinkedInIcon
                : link.label.includes("Instagram")
                ? InstagramIcon
                : XTwitterIcon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`NACOS Nile on ${link.label}`}
                  className="social-pill-link"
                >
                  <Icon aria-hidden="true" />
                  <span>{link.label}</span>
                </a>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer id="contact" className="footer" aria-labelledby="footer-brand-heading">
      <div className="wrap">
        <div className="footer-top-brand" data-reveal>
          <div className="footer-brand-group">
            <a className="footer-brand-logos" href="#home">
              <Image
                src="/logo.svg"
                width={90}
                height={42}
                alt=""
                className="footer-brand-svg"
              />
              <span className="footer-brand-text">
                <span className="footer-brand-nacos">NACOS <b className="footer-brand-nile">Nile</b></span>
                <small className="footer-brand-tagline">LEARN • BUILD • GROW</small>
              </span>
            </a>
          </div>
          <p className="footer-summary" id="footer-brand-heading">
            The official computing community chapter at Nile University of Nigeria. Empowering students through technology, community and real-world learning.
          </p>
        </div>

        <div className="footer-columns-grid" data-reveal>
          <nav className="footer-nav-col" aria-label="Footer navigation">
            <p className="eyebrow">EXPLORE NACOS</p>
            <ul className="footer-link-list">
              {[["About", "about"], ["Disciplines", "disciplines"], ["Programs", "programs"], ["Life at NACOS", "life"], ["Executive Council", "team"], ["Dues", "dues"], ["Community", "community"]].map(([label, id]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}
            </ul>
          </nav>

          <div className="footer-nav-col footer-find-us">
            <p className="eyebrow">FIND US</p>
            <address className="footer-address">
              <MapPinIcon aria-hidden="true" className="footer-address-icon" />
              <div>
                <span>Nile University of Nigeria</span>
                <span>Abuja, FCT, Nigeria</span>
              </div>
            </address>
            <a href={`mailto:${chapterEmail}`} className="footer-email-link">
              <MailIcon aria-hidden="true" className="footer-email-icon" />
              <span>{chapterEmail}</span>
            </a>
            <div className="footer-social-buttons" aria-label="Official social profiles">
              <a
                href="https://www.linkedin.com/company/nacos-nile-university-of-nigeria-chapter/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="NACOS Nile on LinkedIn"
              >
                <LinkedInIcon width="16" height="16" aria-hidden="true" />
              </a>
              <a
                href="https://x.com/NacosNileUni"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="NACOS Nile on X / Twitter"
              >
                <XTwitterIcon width="16" height="16" aria-hidden="true" />
              </a>
              <a
                href="https://www.instagram.com/nacosnileuni/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="NACOS Nile on Instagram"
              >
                <InstagramIcon width="16" height="16" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-legal-bar">
          <p>© 2026 NACOS Nile. All rights reserved.</p>
          <p>
            Designed & built by{" "}
            <a
              href="https://github.com/JesseDev454"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-credit-link"
            >
              JesseDev454 <Arrow diagonal />
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}
