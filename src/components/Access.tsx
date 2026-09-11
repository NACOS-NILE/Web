import { accessLinks } from "@/lib/content";

export function Access() {
  return (
    <section id="access" className="access section-pad">
      <div className="section-shell">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">08 / Student access</p>
            <h2>GET WHERE YOU NEED TO GO.</h2>
          </div>
          <p>The current NACOS Nile hub already gives students useful routes to community, chapter documents and resources. This keeps those routes easy to find.</p>
        </div>
        <div className="access-list">
          {accessLinks.map(link => (
            <a key={link.title} href={link.href} target="_blank" rel="noreferrer" className="access-row">
              <span className="access-number">{link.number}</span>
              <div><h3>{link.title}</h3><p>{link.copy}</p></div>
              <span className="access-tag">{link.tag}</span>
              <span className="access-arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
