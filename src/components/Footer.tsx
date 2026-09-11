import Image from "next/image";
import { CREDITS, NAV_ITEMS } from "@/data/content";

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

        <nav className="footer-links" aria-label="Footer">
          {NAV_ITEMS.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </nav>
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
