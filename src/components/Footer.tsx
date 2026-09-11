"use client";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="nav-logo">
              <div className="nav-logo-badge" style={{ width: 36, height: 36 }}>
                <img
                  src="/assets/logo.svg"
                  alt="NACOS Nile Logo"
                  onError={(e) => {
                    (e.target as HTMLImageElement).parentElement!.textContent = "N";
                  }}
                />
              </div>
              <div className="nav-logo-text">
                NACOS <span className="nacos-accent">Nile</span>
                <small>Nile University of Nigeria Chapter</small>
              </div>
            </div>
            <div className="footer-nacos-motto">Towards Advanced Computing</div>
            <p>
              We Develop · We Create · We Build Capacity. The Nile University chapter of the Nigeria Association of Computing Students.
            </p>
            <div className="footer-socials">
              <a href="https://x.com/NacosNileUni" aria-label="X (Twitter)" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
              <a href="https://www.instagram.com/nacosnileuni" aria-label="Instagram" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" /></svg>
              </a>
              <a href="https://www.linkedin.com/company/nacos-nile-university-of-nigeria-chapter/" aria-label="LinkedIn" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
              <a href="https://www.tiktok.com/@nacosnileuni" aria-label="TikTok" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" /></svg>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#pillars">What We Do</a></li>
              <li><a href="#disciplines">Disciplines</a></li>
              <li><a href="#excosection">Executives</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>NACOS National</h4>
            <ul>
              <li><a href="https://nacos.org.ng" target="_blank" rel="noopener">nacos.org.ng</a></li>
              <li><a href="https://nacos.org.ng/event" target="_blank" rel="noopener">National Events</a></li>
              <li><a href="https://nacos.org.ng/national" target="_blank" rel="noopener">National Excos</a></li>
              <li><a href="https://nacos.org.ng/association" target="_blank" rel="noopener">About NACOS</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="#">Nile University of Nigeria</a></li>
              <li><a href="#">Abuja, FCT, Nigeria</a></li>
              <li><a href="mailto:nacosnile@gmail.com">nacosnile@gmail.com</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; 2026 NACOS Nile. All rights reserved.</span>
          <span>Est. 1993 · <a href="https://nacos.org.ng" target="_blank" rel="noopener">Nigeria Association of Computing Students</a></span>
        </div>
      </div>
    </footer>
  );
}
