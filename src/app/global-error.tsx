"use client";

import { useEffect } from "react";
import Link from "next/link";
import QRHover from "@/components/shared/QRHover";
import CallButton from "@/components/shared/CallButton";
import { BUSINESS } from "@/data/business";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({ error, reset }: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          background: "#F6FBFE",
          color: "#0D2B30",
          fontFamily:
            "system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem 1.25rem",
          textAlign: "center",
          WebkitFontSmoothing: "antialiased",
        }}
      >
        <main style={{ maxWidth: "32rem" }}>
          <div
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#0877C9",
              marginBottom: "1.25rem",
            }}
          >
            A Loose Screw Somewhere
          </div>

          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 700,
              letterSpacing: "-0.035em",
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            This page needs a repair.
          </h1>

          <div
            aria-hidden="true"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.75rem",
              margin: "1.75rem 0",
              color: "#B86E00",
            }}
          >
            <span style={{ height: 1, width: 48, background: "#B86E00", opacity: 0.6 }} />
            <span style={{ fontSize: "0.75rem", fontStyle: "italic" }}>◆</span>
            <span style={{ height: 1, width: 48, background: "#B86E00", opacity: 0.6 }} />
          </div>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.6,
              color: "#4D676B",
              margin: "0 auto",
            }}
          >
            The site hit an unexpected error. Give it another try, or head back
            home and we&apos;ll get you sorted.
          </p>

          {error?.digest && (
            <p
              style={{
                marginTop: "1rem",
                fontSize: "0.75rem",
                color: "#4D676B",
                opacity: 0.7,
                fontFamily:
                  "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', monospace",
              }}
            >
              Reference: {error.digest}
            </p>
          )}

          <div
            style={{
              marginTop: "2rem",
              display: "flex",
              gap: "0.75rem",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <button
              onClick={reset}
              style={{
                padding: "0.85rem 1.6rem",
                borderRadius: 9999,
                background: "#0D2B30",
                color: "#FFFFFF",
                fontWeight: 500,
                fontSize: "0.9375rem",
                border: "1px solid transparent",
                cursor: "pointer",
              }}
            >
              Try Again
            </button>
            <Link
              href="/"
              style={{
                padding: "0.85rem 1.6rem",
                borderRadius: 9999,
                background: "transparent",
                color: "#0D2B30",
                fontWeight: 500,
                fontSize: "0.9375rem",
                border: "1px solid #0D2B30",
                textDecoration: "none",
              }}
            >
              Back to Home
            </Link>
          </div>

          <QRHover value={`tel:${BUSINESS.phoneRaw}`}>
            <CallButton className="mt-8" />
          </QRHover>
        </main>
      </body>
    </html>
  );
}
