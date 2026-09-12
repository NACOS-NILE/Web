"use client";

import { useState } from "react";
import { chapterEmail, payment } from "@/data/content";
import {
  BankIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
  FileTextIcon,
  BarChartIcon,
  InfoIcon,
  XCircleIcon,
  CopyIcon,
  CheckIcon,
  ExternalLinkIcon,
} from "./Icons";

export function Dues() {
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);

  async function handleCopyDetails() {
    const details = `Bank: ${payment.bank}\nAccount Number: ${payment.accountNumber}\nAccount Name: ${payment.accountName}`;
    setCopyError(false);
    try {
      await navigator.clipboard.writeText(details);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      setCopyError(true);
    }
  }

  return (
    <section
      id="dues"
      tabIndex={-1}
      className="dues section-space"
      aria-labelledby="dues-title"
    >
      <div className="wrap">
        <div className="section-heading dues-heading" data-reveal>
          <p className="eyebrow">
            <span className="eyebrow-dot" aria-hidden="true" />
            MEMBERSHIP & DUES
          </p>
          <div>
            <h2 id="dues-title">
              Your chapter.
              <br />
              <span className="blue-text">Your contribution.</span>
            </h2>
            <p>
              Official dues for Nile computing students. Make your payment,
              submit your receipt, and stay active in our community.
            </p>
          </div>
        </div>

        {/* 3 Overview Fee Cards */}
        <div className="dues-fee-cards-grid" data-reveal-stagger>
          <div className="fee-card" data-reveal>
            <div className="fee-card-icon" aria-hidden="true">
              <AcademicCapIcon />
            </div>
            <span className="fee-card-label">FIRST PAYMENT</span>
            <strong className="fee-card-amount">
              <span className="currency-symbol">₦</span>
              <span className="amount-number">25,000</span>
            </strong>
            <p className="fee-card-desc">Approved amount for the first payment.</p>
          </div>

          <div className="fee-card" data-reveal>
            <div className="fee-card-icon" aria-hidden="true">
              <FileTextIcon />
            </div>
            <span className="fee-card-label">SECOND PAYMENT</span>
            <strong className="fee-card-amount">
              <span className="currency-symbol">₦</span>
              <span className="amount-number">15,000</span>
            </strong>
            <p className="fee-card-desc">Approved amount for the second payment.</p>
          </div>

          <div className="fee-card" data-reveal>
            <div className="fee-card-icon" aria-hidden="true">
              <BarChartIcon />
            </div>
            <span className="fee-card-label">FULL SESSION TOTAL</span>
            <strong className="fee-card-amount">
              <span className="currency-symbol">₦</span>
              <span className="amount-number">40,000</span>
            </strong>
            <p className="fee-card-desc">Complete session dues (<span className="currency-symbol">₦</span>25,000 + <span className="currency-symbol">₦</span>15,000).</p>
          </div>
        </div>

        {/* Important Payment Clarification Box (Amber) */}
        <div className="dues-alert-card" data-reveal>
          <div className="dues-alert-header">
            <ShieldCheckIcon className="dues-alert-icon" aria-hidden="true" />
            <div>
              <h3 className="dues-alert-title">Important Payment Clarification</h3>
              <p className="dues-alert-lead">
                The correct payment structure is <strong><span className="currency-symbol">₦</span>25,000 + <span className="currency-symbol">₦</span>15,000</strong> or <strong><span className="currency-symbol">₦</span>40,000</strong> at once.
              </p>
            </div>
          </div>

          <div className="dues-warning-box">
            <XCircleIcon className="dues-warning-icon" aria-hidden="true" />
            <p>Do NOT pay <span className="currency-symbol">₦</span>30,000 + <span className="currency-symbol">₦</span>10,000 or <span className="currency-symbol">₦</span>20,000 + <span className="currency-symbol">₦</span>20,000.</p>
          </div>

          <p className="dues-alert-footnote">
            Pay <span className="currency-symbol">₦</span>40,000 once, or use only the approved installments above.
          </p>
        </div>

        {/* Outstanding Balance Notice (Blue) */}
        <div className="dues-info-card" data-reveal>
          <InfoIcon className="dues-info-icon" aria-hidden="true" />
          <div className="dues-info-text">
            <h3>Paying an outstanding balance?</h3>
            <p>
              If you are paying an outstanding amount from a previous session, please clearly state this in your transaction description so it can be identified correctly.
            </p>
          </div>
        </div>

        {/* Bank Transfer Details Card */}
        <div className="dues-bank-card" data-reveal>
          <div className="dues-bank-header">
            <div className="dues-bank-title-group">
              <BankIcon className="dues-bank-icon" aria-hidden="true" />
              <span className="dues-bank-title">BANK TRANSFER DETAILS</span>
            </div>
            <button
              type="button"
              onClick={handleCopyDetails}
              className={`dues-copy-btn ${copied ? "is-copied" : ""}`}
            >
              {copied ? <CheckIcon aria-hidden="true" /> : <CopyIcon aria-hidden="true" />}
              <span>{copied ? "Details Copied" : "Copy Details"}</span>
            </button>
          </div>

          <p role="status" className="copy-status">{copyError ? "Copy unavailable. Select and copy the bank details below." : copied ? "Bank details copied." : ""}</p>
          <div className="dues-bank-columns">
            <div className="bank-col">
              <span className="bank-label">Account number</span>
              <strong className="bank-value mono">{payment.accountNumber}</strong>
            </div>
            <div className="bank-col-divider" aria-hidden="true" />
            <div className="bank-col">
              <span className="bank-label">Bank</span>
              <strong className="bank-value">{payment.bank}</strong>
            </div>
            <div className="bank-col-divider" aria-hidden="true" />
            <div className="bank-col">
              <span className="bank-label">Account name</span>
              <strong className="bank-value">{payment.accountName}</strong>
            </div>
          </div>
        </div>

        {/* Submit Payment Details CTA */}
        <div className="dues-action-row" data-reveal>
          <a
            href={payment.formUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button button-blue dues-submit-btn"
          >
            <span>Submit Payment Details</span>
            <ExternalLinkIcon aria-hidden="true" />
          </a>
          <p className="dues-footnote">
            Opens Google Forms in a new tab (requires Nile/Google login).
            <br />
            Need assistance? Email{" "}
            <a href={`mailto:${chapterEmail}`} className="dues-email-link">
              {chapterEmail}
            </a>
            .
          </p>
        </div>

      </div>
    </section>
  );
}
