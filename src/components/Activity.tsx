import { activity } from "@/lib/content";

export function Activity() {
  return (
    <section id="activity" className="activity section-pad">
      <div className="section-shell">
        <div className="section-heading split-heading activity-heading">
          <div>
            <p className="eyebrow light">05 / Recent activity</p>
            <h2>NOT JUST TALK.</h2>
          </div>
          <p>Recent chapter activity shows the kind of work NACOS Nile already brings to students outside normal lectures.</p>
        </div>
        <div className="activity-list">
          {activity.map(item => (
            <article key={item.title} className="activity-item">
              <div className="activity-meta">
                <span>{item.index}</span>
                <p>{item.type}</p>
              </div>
              <div className="activity-copy">
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
              <a href={item.sourceUrl} target="_blank" rel="noreferrer" aria-label={`Read source for ${item.title}`}>{item.sourceLabel} <span aria-hidden="true">↗</span></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
