import discord from "thesvg/discord";
import whatsapp from "thesvg/whatsapp";
import telegram from "thesvg/telegram";
import x from "thesvg/x";
import instagram from "thesvg/instagram";
import linkedin from "thesvg/linkedin";
import { CommunityChannelTip } from "./community-channel-tip";

// Add verified chapter URLs here to enable each link.
const channels = [
  { name: "Discord", href: "", logo: discord },
  { name: "WhatsApp", href: "", logo: whatsapp },
  { name: "Telegram", href: "", logo: telegram },
  { name: "Twitter / X", href: "", logo: x },
  { name: "Instagram", href: "", logo: instagram },
  { name: "LinkedIn", href: "", logo: linkedin },
];

export function ChapterCommunity() {
  return (
    <section id="community" className="chapter-community" aria-labelledby="community-title">
      <div className="chapter-community-inner">
        <header className="chapter-community-heading">
          <h2 id="community-title">Your community is waiting.</h2>
          <p>Bring your ideas. Meet fellow NACOS members, ask questions, and build what comes next together.</p>
        </header>
        <ul className="chapter-community-logos" aria-label="Community channels">
          {channels.map(({ name, href, logo }) => (
            <li key={name}>
              <CommunityChannelTip
                name={name}
                href={href}
                logoHtml={logo.variants.mono ?? logo.svg}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
