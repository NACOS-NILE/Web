import { CopyButton } from "./CopyButton";

const schedule = [
  {
    label: "Semester 1",
    total: "₦25,000",
    breakdown: "₦10,000 dues + ₦15,000 shirt deposit",
  },
  {
    label: "Semester 2",
    total: "₦15,000",
    breakdown: "₦10,000 dues + ₦5,000 shirt balance",
  },
];

export function Dues() {
  return (
    <section id="dues" className="section-wrap dues">
      <p className="eyebrow">CLEARANCE</p>
      <h2>
        Dues &amp;<br />
        <span>the official shirt.</span>
      </h2>
      <p className="section-copy">
        As we begin a more active session, here&rsquo;s what you need to know
        about dues and the official NACOS shirt.
      </p>
      <div className="dues-grid">
        <div className="dues-card">
          <h3>Dues</h3>
          <p className="dues-amount">
            ₦10,000<span>/ semester</span>
          </p>
          <p>
            Funds association activities, events, welfare, and student
            programmes.
          </p>
        </div>
        <div className="dues-card">
          <h3>Official NACOS shirt</h3>
          <p className="dues-amount">
            ₦20,000<span>one time</span>
          </p>
          <p>
            Covers your shirt for your entire stay at Nile — not a recurring
            charge, it&rsquo;s part of building one shared NACOS identity.
          </p>
        </div>
      </div>
      <div className="dues-schedule">
        {schedule.map((s) => (
          <div key={s.label}>
            <span className="dues-schedule-label">{s.label}</span>
            <span className="dues-schedule-total">{s.total}</span>
            <span className="dues-schedule-breakdown">{s.breakdown}</span>
          </div>
        ))}
      </div>
      <p className="section-copy">
        Members without the official shirt may not be eligible to represent
        NACOS at major events, to keep identification and representation
        consistent. Dues and merchandise payment are also part of your NACOS
        clearance — level advisers require confirmation of payment before
        approving course registration, so complete payment within the
        stipulated timeline to avoid delays.
      </p>
      <details className="dues-payment">
        <summary>
          <span>Payment details</span>
          <span className="expand" aria-hidden="true">+</span>
        </summary>
        <div className="dues-payment-body">
          <p>
            <strong>Account number</strong>
            <br />
            <span className="dues-account-row">
              1310806058
              <CopyButton value="1310806058" />
            </span>
          </p>
          <p>
            <strong>Bank</strong>
            <br />
            Zenith Bank
          </p>
          <p>
            <strong>Account name</strong>
            <br />
            NACOS Chapter, Nile University of Nigeria
          </p>
        </div>
      </details>
      <a
        className="button"
        href="https://docs.google.com/forms/d/e/1FAIpQLSfYxaNuaUAkGmRkWtmRzfuAFR9ODrBvIjt_utUwg8dhzbGhJQ/viewform?usp=publish-editor"
        target="_blank"
        rel="noopener noreferrer"
      >
        Confirm your payment <span aria-hidden="true">↗</span>
      </a>
    </section>
  );
}
