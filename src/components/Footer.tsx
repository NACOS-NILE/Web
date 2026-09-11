import Image from "next/image";
import { ArrowUpRightIcon } from "@/components/icons";
import { CREDITS, NAV_ITEMS, STUDENT_RESOURCES } from "@/data/content";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <Image
            src="/logo-web.svg"
            alt="NACOS Nile logo"
            width={52}
            height={52}
          />

          <div>
            <strong>NACOS Nile</strong>

            <p>
              Nigeria Association of Computing Students
              <br />
              Nile University of Nigeria, Abuja, FCT
            </p>
          </div>
        </div>

        <div className="footer-groups">
          <nav className="footer-group" aria-label="Footer">
            <h2 className="footer-heading">Explore</h2>

            <div className="footer-links">
              {NAV_ITEMS.map((item) => (
                <a key={item.id} href={`#${item.id}`}>
                  {item.label}
                </a>
              ))}
            </div>
          </nav>

          <div className="footer-group">
            <h2 className="footer-heading">Student resources</h2>

            <ul className="footer-resources">
              {STUDENT_RESOURCES.map((link) => (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.label}
                    <ArrowUpRightIcon />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} NACOS Nile. All rights reserved.</span>

        <span>
          Built by{" "}
          <a href={CREDITS.url} target="_blank" rel="noopener noreferrer">
            {CREDITS.name}
          </a>
        </span>
      </div>
    </footer>
  );
}
