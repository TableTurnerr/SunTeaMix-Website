import type { Metadata } from "next";
import Script from "next/script";
import "@/styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SchemaInjector from "@/components/shared/SchemaInjector";
import TabTitleHandler from "@/components/shared/TabTitleHandler";
import { organizationSchema, websiteSchema, localBusinessSchema } from "@/data/schema";
import { createMetadata } from "@/data/metadata";
import { BUSINESS } from "@/data/business";

// Same Google Analytics property the previous site used, so reporting continues.
const GA_ID = "G-5WRT4V9JKN";

export const metadata: Metadata = {
  ...createMetadata({
    title: BUSINESS.metaTitle,
    description: BUSINESS.metaDescription,
    path: "/",
    keywords: ["boba Honolulu", "bubble tea Kakaako", "souffle pancakes Honolulu", "fruit tea Honolulu", "dessert Honolulu", "milk tea Honolulu"],
  }),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#0E7F8E" />
        <meta name="format-detection" content="telephone=yes" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>
        <SchemaInjector schema={[organizationSchema(), websiteSchema(), localBusinessSchema()]} />
        <TabTitleHandler />
        <Header />
        <main>{children}</main>
        <Footer />
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="ga-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
        </Script>
      </body>
    </html>
  );
}
