import { ArrowUpRight } from "lucide-react";
import { Brand } from "@/components/Brand";
import { communityChannels } from "@/lib/site-data";

export function Footer() {
  return (
    <footer
      id="contact"
      data-reveal
      className="reveal-section relative overflow-hidden px-6 pb-10 pt-20 lg:px-10"
    >
      <div aria-hidden className="footer-glow pointer-events-none absolute inset-0 -z-10" />
      <div className="mx-auto max-w-[1360px]">
        <div className="grid gap-12 border-b border-border pb-16 md:grid-cols-[1fr_auto_auto]">
          <div>
            <Brand />
            <p className="mt-6 max-w-sm text-sm leading-6 text-muted-foreground">
              The Nigeria Association of Computing Students, Nile University Chapter.
            </p>
            <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">
              Nile University of Nigeria, Abuja, FCT.
            </p>
          </div>
          <div>
            <p className="mb-5 font-mono text-[10px] text-muted-foreground">EXPLORE</p>
            <div className="grid gap-3 text-sm">
              <a href="#about" className="footer-link">
                About
              </a>
              <a href="#programs" className="footer-link">
                Programs
              </a>
              <a href="#excos" className="footer-link">
                Excos
              </a>
              <a href="#join" className="footer-link">
                Membership
              </a>
            </div>
          </div>
          <div>
            <p className="mb-5 font-mono text-[10px] text-muted-foreground">CONNECT</p>
            <div className="grid gap-3 text-sm">
              {communityChannels.map(({ label, href }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="footer-link">
                  {label}
                </a>
              ))}
              <a href="https://nacos.org.ng/" target="_blank" rel="noreferrer" className="footer-link">
                NACOS National
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-2 pt-8 font-mono text-[10px] text-muted-foreground md:flex-row md:items-center md:gap-6">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-6">
            <span>© 2026 NACOS NILE CHAPTER</span>
            <span className="hidden text-border-strong md:inline">/</span>
            <span>Design &amp; Development — Daniel Ozo-Onyali</span>
          </div>
          <a href="#home" className="footer-link flex items-center gap-2">
            BACK TO TOP <ArrowUpRight className="h-3 w-3" />
          </a>
        </div>
        <div className="pointer-events-none mt-10 overflow-hidden text-center text-[clamp(2.5rem,15vw,14rem)] font-extrabold leading-[.9] tracking-[-0.06em] text-foreground/[.035] md:leading-[.7] md:tracking-[-0.07em]">
          NACOS NILE
        </div>
      </div>
    </footer>
  );
}
