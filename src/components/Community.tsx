const channels = [
  {
    name: "WhatsApp",
    status: "Join the main group",
    href: "https://chat.whatsapp.com/EXBkX1Gq1k80apkd9Pp1y1?s=cl&p=a&mlu=4&ilr=4",
  },
  { name: "Discord", status: "Setup in progress" },
  { name: "Telegram", status: "Setup in progress" },
  { name: "X / Twitter", status: "@NACOSNile — follow for updates", href: "https://twitter.com/NACOSNile" },
  { name: "Instagram", status: "Coming soon" },
  { name: "LinkedIn", status: "Coming soon" },
];

export function Community() {
  return (
    <section id="community" className="community">
      <div className="section-wrap">
        <p className="eyebrow">THERE&rsquo;S A PLACE FOR YOU HERE</p>
        <h2>
          You don&rsquo;t have to<br />
          figure it out alone.
        </h2>
        <p>
          First line of code or your next big idea.<br />
          Come as you are. We&rsquo;ll build from there.
        </p>
        <div className="channel-list" aria-label="Community channels">
          {channels.map((ch) =>
            ch.href ? (
              <a
                className="channel"
                key={ch.name}
                href={ch.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{ch.name}</span>
                <span className="channel-status">{ch.status}</span>
              </a>
            ) : (
              <div className="channel" key={ch.name}>
                <span>{ch.name}</span>
                <span className="channel-status">{ch.status}</span>
              </div>
            )
          )}
        </div>
        <p className="join-note">
          Most of the action happens on WhatsApp — tap in above to join the
          group. Have questions? Any member of the{" "}
          <a href="#excos">executive council</a> can help you get oriented.
        </p>
      </div>
    </section>
  );
}
