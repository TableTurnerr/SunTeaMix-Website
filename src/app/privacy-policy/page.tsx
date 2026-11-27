import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/data/metadata";
import { breadcrumbSchema, webPageSchema } from "@/data/schema";
import SchemaInjector from "@/components/shared/SchemaInjector";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import { BUSINESS } from "@/data/business";

const UPDATED = "November 27, 2026";
const TITLE = `Privacy Policy | ${BUSINESS.name}`;
const DESCRIPTION = `How ${BUSINESS.name} handles information when you visit this website, call us or order online.`;

export const metadata: Metadata = createMetadata({ title: TITLE, description: DESCRIPTION, path: "/privacy-policy/" });

export default function PrivacyPolicyPage() {
  const crumbs = [{ name: "Home", url: "/" }, { name: "Privacy Policy", url: "/privacy-policy/" }];
  return (
    <>
      <SchemaInjector schema={[breadcrumbSchema(crumbs), webPageSchema({ url: "/privacy-policy/", name: TITLE, description: DESCRIPTION })]} />
      <BreadcrumbNav items={crumbs} />
      <section className="container-pad py-12 md:py-20 max-w-3xl space-y-6 text-[var(--color-text-muted)] leading-relaxed">
        <div>
          <div className="eyebrow">{BUSINESS.name}</div>
          <h1 className="mb-3">Privacy policy</h1>
          <p className="text-sm">Last updated: {UPDATED}</p>
        </div>

        <p>
          This policy explains what information {BUSINESS.name} (&quot;we&quot;, &quot;us&quot;) collects through this website, how we
          use it, and the choices you have.
        </p>

        <h2 className="text-2xl text-[var(--color-text)]">Information we collect</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>When you contact us.</strong> If you call or email us, we receive the details you share, such as your name, phone number or email address.</li>
          <li><strong>Website visits.</strong> We use Google Analytics to understand how people use this website, such as which pages are visited. It may use cookies and record your IP address, browser type and pages viewed.</li>
          <li><strong>Embedded maps and links.</strong> Google Maps on our pages, and links to Instagram, Yelp and Google, are run by those companies under their own privacy policies.</li>
        </ul>

        <h2 className="text-2xl text-[var(--color-text)]">Online ordering</h2>
        <p>
          Online orders are placed through our ordering provider, not on this website. Payment and order details you enter
          there are handled under that provider’s own privacy policy.
        </p>

        <h2 className="text-2xl text-[var(--color-text)]">How we use information</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>To answer your questions and help with your order.</li>
          <li>To understand which pages are useful and improve this website.</li>
          <li>To keep this website secure and working.</li>
        </ul>
        <p>We do not sell your personal information.</p>

        <h2 className="text-2xl text-[var(--color-text)]">Your choices</h2>
        <p>
          You can block or delete cookies in your browser settings. You can also ask us to see, correct or delete personal
          information you have sent us by calling{" "}
          <a href={`tel:${BUSINESS.phoneRaw}`} className="text-[var(--color-primary)] font-semibold">{BUSINESS.phone}</a> or emailing{" "}
          <a href={`mailto:${BUSINESS.email}`} className="text-[var(--color-primary)] font-semibold">{BUSINESS.email}</a>.
        </p>

        <h2 className="text-2xl text-[var(--color-text)]">Children</h2>
        <p>This website is not meant for children under 13, and we do not knowingly collect their information.</p>

        <h2 className="text-2xl text-[var(--color-text)]">Changes and contact</h2>
        <p>
          We may update this policy from time to time and will change the date above when we do. Questions?{" "}
          <Link href="/contact/" className="text-[var(--color-primary)] font-semibold">Get in touch</Link>.
        </p>
      </section>
    </>
  );
}
