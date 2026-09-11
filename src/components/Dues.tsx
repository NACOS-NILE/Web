"use client";

import { useState } from "react";
import { chapterEmail, payment } from "@/data/content";
import { CopyAccountNumber } from "./CopyAccountNumber";
import {
  BankIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
  MailIcon,
  ExternalLinkIcon,
} from "./Icons";

const naira = (amount: number) => (
  <span className="money">
    <span className="currency-symbol">₦</span>
    {amount.toLocaleString("en-NG")}
  </span>
);

type DuesPlan = "full" | "instalments";

export function Dues() {
  const [plan, setPlan] = useState<DuesPlan>("full");

  return (
    <section
      id="dues"
      tabIndex={-1}
      className="dues section-space"
      aria-labelledby="dues-title"
    >
      <div className="wrap">
        <div className="section-heading dues-heading">
          <p className="eyebrow">MEMBERSHIP & DUES</p>
          <div>
            <h2 id="dues-title">
              Your chapter.
              <br />
              <span className="light-blue-text">Your contribution.</span>
            </h2>
            <p>
              Official dues and merchandise breakdown for Nile computing students.
              Check your amount, make your bank transfer, and submit your receipt
              for course registration clearance.
            </p>
          </div>
        </div>

        {/* Base fee summary highlights */}
        <div className="dues-fee-summary" aria-label="Fee overview" data-reveal>
          <div className="fee-summary-item">
            <span className="fee-summary-label">Semester Dues</span>
            <strong className="fee-summary-amount">{naira(payment.semesterDues)}</strong>
            <span className="fee-summary-note">Per semester · Recurring departmental dues</span>
          </div>
          <div className="fee-summary-divider" aria-hidden="true" />
          <div className="fee-summary-item">
            <span className="fee-summary-label">Official NACOS Shirt</span>
            <strong className="fee-summary-amount">{naira(payment.shirtTotal)}</strong>
            <span className="fee-summary-note">One-time merchandise fee · Not recurring</span>
          </div>
          <div className="fee-summary-divider" aria-hidden="true" />
          <div className="fee-summary-item">
            <span className="fee-summary-label">Full Session Total</span>
            <strong className="fee-summary-amount">{naira(payment.fullSessionTotal)}</strong>
            <span className="fee-summary-note">Complete session dues + official shirt</span>
          </div>
        </div>

        <div className="dues-grid" data-reveal>
          <div className="dues-breakdown">
            <p className="eyebrow dues-kicker">SELECT YOUR PAYMENT OPTION</p>

            <div
              className="dues-plan-tabs"
              role="group"
              aria-label="Select dues payment option"
              data-reveal-stagger
            >
              <button
                type="button"
                aria-pressed={plan === "full"}
                className={`dues-plan-tab ${plan === "full" ? "is-active" : ""}`}
                onClick={() => setPlan("full")}
              >
                <div>
                  <span className="plan-tab-title">Option A — Full Session</span>
                  <span className="plan-tab-sub">Pay once for the full academic session</span>
                </div>
                <strong>{naira(payment.fullSessionTotal)}</strong>
              </button>

              <button
                type="button"
                aria-pressed={plan === "instalments"}
                className={`dues-plan-tab ${plan === "instalments" ? "is-active" : ""}`}
                onClick={() => setPlan("instalments")}
              >
                <div>
                  <span className="plan-tab-title">Option B — Installments</span>
                  <span className="plan-tab-sub">Approved ₦25,000 + ₦15,000 structure</span>
                </div>
                <strong>
                  {naira(payment.firstInstalment)} + {naira(payment.secondInstalment)}
                </strong>
              </button>
            </div>

            <div className="dues-plan-card" key={plan}>
              {plan === "full" && (
                <>
                  <div className="plan-card-badge mono">
                    FULL SESSION · ONE-TIME PAYMENT
                  </div>
                  <h3 className="plan-card-title">Full Session Payment</h3>
                  <p className="plan-card-desc">
                    One single transfer covers both semesters of departmental dues (₦20,000)
                    and your official NACOS department shirt (₦20,000) in full.
                  </p>
                  <dl className="dues-prices">
                    <div>
                      <dt>
                        Two semesters dues
                        <span>₦10,000 per semester across the full session</span>
                      </dt>
                      <dd>{naira(payment.sessionDuesTotal)}</dd>
                    </div>
                    <div>
                      <dt>
                        Official NACOS shirt
                        <span>One-time merchandise fee · Not recurring</span>
                      </dt>
                      <dd>{naira(payment.shirtTotal)}</dd>
                    </div>
                    <div className="plan-total-row">
                      <dt>
                        <strong>Total Bank Transfer</strong>
                        <span>One-time payment for the full session</span>
                      </dt>
                      <dd className="plan-total-val">
                        {naira(payment.fullSessionTotal)}
                      </dd>
                    </div>
                  </dl>
                </>
              )}

              {plan === "instalments" && (
                <>
                  <div className="plan-card-badge mono">
                    APPROVED TWO-PART INSTALLMENT STRUCTURE
                  </div>
                  <h3 className="plan-card-title">Approved Installment Plan</h3>
                  <p className="plan-card-desc">
                    Pay across two approved installments: the first clears initial semester dues and shirt deposit;
                    the second completes your session clearance.
                  </p>
                  <dl className="dues-prices dues-instalments">
                    <div>
                      <dt>
                        First payment
                        <span>First semester dues + shirt deposit</span>
                      </dt>
                      <dd>{naira(payment.firstInstalment)}</dd>
                    </div>
                    <div>
                      <dt>
                        Second payment
                        <span>Second semester dues + shirt balance</span>
                      </dt>
                      <dd>{naira(payment.secondInstalment)}</dd>
                    </div>
                    <div className="plan-total-row">
                      <dt>
                        <strong>Total Across Session</strong>
                        <span>Approved ₦25,000 + ₦15,000 installment total</span>
                      </dt>
                      <dd className="plan-total-val">
                        {naira(payment.fullSessionTotal)}
                      </dd>
                    </div>
                  </dl>
                </>
              )}
            </div>

            {/* Official Payment Clarification Warning Panel */}
            <div className="dues-clarification-panel">
              <div className="clarification-header">
                <ShieldCheckIcon className="clarification-icon" aria-hidden="true" />
                <h4>Payment Clarification</h4>
              </div>
              <p>
                Please pay either <strong>₦40,000 once</strong> for the full session, or use the approved <strong>₦25,000 + ₦15,000</strong> installment structure.
              </p>
              <div className="clarification-warning">
                <strong>Do NOT pay:</strong>
                <span>₦30k + ₦10k or ₦20k + ₦20k splits.</span>
              </div>
              <p className="clarification-subtext">
                Prior splits will still be accounted for, but should not be used for future payments.
              </p>
            </div>

            {/* Previous-session exception */}
            <details className="dues-prior">
              <summary className="prior-header">
                <AcademicCapIcon className="prior-icon" aria-hidden="true" />
                <span>Outstanding balance from a previous session?</span>
                <span className="prior-chevron" aria-hidden="true">↓</span>
              </summary>
              <div className="prior-content">
                <p>
                  You may pay the outstanding amount separately. Clearly state that it is a <strong>previous-session balance</strong> in your transaction description so it can be identified correctly.
                </p>
                <p className="prior-contact">
                  Confirm your recorded balance with the Financial Secretary before initiating another transfer:{" "}
                  <a href={`mailto:${chapterEmail}`}>
                    <MailIcon aria-hidden="true" style={{ verticalAlign: "-2px", marginRight: 4 }} />
                    Contact Financial Secretary
                  </a>
                </p>
              </div>
            </details>
          </div>

          <div className="dues-bank">
            <p className="eyebrow">
              <BankIcon aria-hidden="true" style={{ verticalAlign: "-2px", marginRight: 6, color: "#80c5ff" }} />
              BANK TRANSFER DETAILS
            </p>
            <h3>Pay to the chapter account.</h3>

            <dl className="dues-bank-details">
              <div>
                <dt>Account number</dt>
                <dd className="dues-account-number">{payment.accountNumber}</dd>
              </div>
              <div>
                <dt>Bank</dt>
                <dd>{payment.bank}</dd>
              </div>
              <div>
                <dt>Account name</dt>
                <dd>{payment.accountName}</dd>
              </div>
            </dl>

            <CopyAccountNumber accountNumber={payment.accountNumber} />

            <div className="dues-submit">
              <div className="dues-steps">
                <p className="steps-title">Follow these 3 steps:</p>
                <ol className="steps-list">
                  <li>Transfer the exact fee from your banking app.</li>
                  <li>Save your transfer confirmation screenshot or receipt.</li>
                  <li>Click below to submit your details and receipt.</li>
                </ol>
              </div>

              <a
                className="dues-submit-link"
                href={payment.formUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Submit Payment Details</span>
                <ExternalLinkIcon aria-hidden="true" />
              </a>

              <p className="dues-form-note">
                Opens Google Forms in a new tab (requires Nile/Google login).
                Need assistance?{" "}
                <a href={`mailto:${chapterEmail}`}>Email {chapterEmail}</a>.
              </p>
            </div>
          </div>
        </div>

        {/* Why it matters & Course clearance callout blocks */}
        <div className="dues-info-grid" data-reveal-stagger>
          <article className="dues-info-card">
            <div className="info-card-header">
              <AcademicCapIcon className="info-card-icon" aria-hidden="true" />
              <h3>Why Your Dues Matter</h3>
            </div>
            <p>
              Your contributions directly fund practical computing initiatives at Nile:
              student-led coding bootcamps, technical workshops, annual Tech Week,
              hackathons, industrial mentorship, and subsidized community events.
            </p>
          </article>

          <article className="dues-info-card clearance-card">
            <div className="info-card-header">
              <ShieldCheckIcon className="info-card-icon clearance-icon" aria-hidden="true" />
              <h3>Clearance & Chapter Guidelines</h3>
            </div>
            <p>
              <strong>Department Clearance:</strong> Submitting your payment receipt through
              the official form allows the chapter to verify your dues and issue confirmation for departmental records.
            </p>
            <p>
              <strong>Official Representation:</strong> The official NACOS shirt identifies you as an active
              computing student at chapter hackathons, workshops, and departmental events.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
