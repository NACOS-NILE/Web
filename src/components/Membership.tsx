import { Icon } from "@/components/icons";
import {
  duesSupport,
  MEMBERSHIP,
  membershipFaqs,
  membershipStages,
  shirtTotal,
} from "@/data/content";
import { naira } from "@/lib/utils";

export default function Membership() {
  return (
    <section className="membership section scroll-reveal" id="membership">
      <div className="container">
        <div className="section-top">
          <div>
            <div className="eyebrow">
              <span />
              MEMBERSHIP
            </div>

            <h2>
              Become a
              <br />
              <em>NACOSite.</em>
            </h2>
          </div>

          <p>
            Your dues keep the chapter running, from events and welfare to
            student programmes. Here is what membership costs and how it
            works.
          </p>
        </div>

        <div className="membership-grid">
          <div className="membership-plan">
            <div className="membership-plan-head">
              <h3>What you pay</h3>
              <span className="membership-session">{MEMBERSHIP.session}</span>
            </div>

            <ol className="membership-stages">
              {membershipStages.map((stage, index) => (
                <li className="membership-stage" key={stage.title}>
                  <span className="membership-stage-marker" aria-hidden="true">
                    {index + 1}
                  </span>

                  <div>
                    <h4>{stage.title}</h4>
                    <p>{stage.detail}</p>
                  </div>

                  <strong>{naira(stage.amount)}</strong>
                </li>
              ))}
            </ol>

            <p className="membership-plan-note">
              Dues are {naira(MEMBERSHIP.duesPerSemester)} per semester. The
              first two semesters are higher because they include the one-time
              shirt payment.
            </p>
          </div>

          <div className="membership-side">
            <div className="membership-support">
              <h3>What your dues support</h3>

              <ul>
                {duesSupport.map((item) => (
                  <li key={item.label}>
                    <Icon type={item.icon} />
                    <span>{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="membership-shirt">
              <h3>The official NACOS shirt</h3>

              <div className="membership-shirt-price">
                <strong>{naira(shirtTotal)}</strong>
                <span>one time</span>
              </div>

              <p>
                Paid once for your whole time at Nile, split across your first
                two semesters. Members wear it at major NACOS events and when
                representing the chapter.
              </p>
            </div>
          </div>
        </div>

        <div className="membership-faq">
          <div className="membership-faq-intro">
            <h3>Questions about membership</h3>
            <p>
              The quick answers. For anything else, reach out through the
              official NACOS channels.
            </p>
          </div>

          <div className="faq-list">
            {membershipFaqs.map((faq) => (
              <details
                className="faq-item"
                name="membership-faq"
                key={faq.question}
              >
                <summary>
                  <span>{faq.question}</span>
                  <span className="faq-toggle" aria-hidden="true" />
                </summary>

                <div className="faq-answer">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
