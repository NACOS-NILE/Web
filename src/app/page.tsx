import { ChapterAbout } from "@/components/chapter-about";
import { ChapterCommunity } from "@/components/chapter-community";
import { ChapterEvents } from "@/components/chapter-events";
import { ChapterExcos } from "@/components/chapter-excos";
import { ChapterFooter } from "@/components/chapter-footer";
import { ChapterHero } from "@/components/chapter-hero";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <div className="site-pillars" aria-hidden="true">
        <span />
        <span />
      </div>

      <ChapterHero />

      <div className="section-divider" aria-hidden="true" />
      <ChapterAbout />

      <div className="section-divider" aria-hidden="true" />
      <ChapterEvents />

      <div className="section-divider" aria-hidden="true" />
      <ChapterExcos />

      <div className="section-divider" aria-hidden="true" />
      <ChapterCommunity />

      <div className="section-divider" aria-hidden="true" />
      <ChapterFooter />
    </main>
  );
}
