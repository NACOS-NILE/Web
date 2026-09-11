import Image from "next/image";
import { MapPin } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#events", label: "Events" },
  { href: "#excos", label: "Excos" },
  { href: "#community", label: "Community" },
];

const CREATOR_LINKEDIN_URL =
  "https://www.linkedin.com/in/favour-njoku-aa9a91298/";

export function ChapterFooter() {
  return (
    <footer className="chapter-footer">
      <div className="chapter-footer-inner">
        <div className="chapter-footer-main">
          <div className="chapter-footer-identity">
            <a
              href="#home"
              className="chapter-footer-brand"
              aria-label="NACOS Nile home"
            >
              <span className="chapter-footer-logo">
                <Image src="/logo.webp" alt="NACOS Nile logo" width={38} height={18} />
              </span>
              <span>
                <strong>NACOS Nile</strong>
                <span>University Chapter</span>
              </span>
            </a>
            <address>
              <MapPin size={17} aria-hidden="true" />
              <span>
                Nile University of Nigeria,
                <br />
                Abuja, FCT.
              </span>
            </address>
          </div>

          <nav className="chapter-footer-links" aria-label="Footer navigation">
            <h2>Quick links</h2>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="chapter-footer-note">
            <h2>Disclaimer</h2>
            <p>
              This student-run site is for chapter information. NACOS marks and
              third-party materials remain the property of their respective
              owners.
            </p>
          </div>
        </div>

        <div className="chapter-footer-bottom">
          <small>
            © 2026 NACOS Nile University Chapter. All rights reserved.
          </small>
          <p>
            Designed and developed by{" "}
            <a
              href={CREATOR_LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Favour Njoku on LinkedIn"
              className="font-medium text-white underline decoration-current underline-offset-4 hover:text-blue-200"
            >
              Favour Njoku
            </a>
            .
          </p>
          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
}
