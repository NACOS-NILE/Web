"use client";

import { useState, useRef, useEffect } from "react";
import { CopyIcon, CheckIcon } from "./Icons";

export function CopyAccountNumber({
  accountNumber,
}: {
  accountNumber: string;
}) {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  async function copyAccountNumber() {
    try {
      await navigator.clipboard.writeText(accountNumber);
      setCopied(true);
      setError("");
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setCopied(false);
      }, 4000);
    } catch {
      setError(
        "Could not copy automatically. Select the account number above and copy manually.",
      );
      setCopied(false);
    }
  }

  return (
    <div className="dues-copy">
      <button
        type="button"
        onClick={copyAccountNumber}
        className={copied ? "is-copied" : undefined}
      >
        <span aria-hidden="true" style={{ display: "inline-flex", alignItems: "center" }}>
          {copied ? <CheckIcon /> : <CopyIcon />}
        </span>
        <span>{copied ? "Account Number Copied" : "Copy Account Number"}</span>
      </button>

      {/* Screen-reader announcement without visual duplication */}
      <span
        role="status"
        aria-live="polite"
        aria-atomic="true"
        style={{
          position: "absolute",
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          border: 0,
        }}
      >
        {copied ? "Account number copied to clipboard." : ""}
      </span>

      {/* Visible error message only when copy fails */}
      {error && (
        <p role="alert" className="dues-copy-error">
          {error}
        </p>
      )}
    </div>
  );
}
