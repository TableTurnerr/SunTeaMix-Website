import type { Metadata } from "next";
import { FAQS } from "@/data/site";

export const metadata: Metadata = { title: "FAQ | Sun Tea Mix Honolulu", description: "Answers about Sun Tea Mix in Kakaʻako: boba, soufflé pancakes, parking, ordering, hours, and location.", alternates: { canonical: "/faq/" } };

export default function FAQ() {
  const schema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <section className="sun-hero sun-hero--berry">
      <div className="wrap py-16 md:py-20">
        <p className="eyebrow">Frequently asked questions</p>
        <h1 className="mt-3 max-w-3xl">Plan your Sun Tea Mix stop.</h1>
        <p className="mt-5 max-w-2xl text-lg text-teal-950/75">The details that make your tea-and-dessert break easy, from parking and pickup to pancake timing.</p>
      </div>
    </section>
    <section className="wrap py-16"><div className="faq max-w-3xl divide-y divide-teal-950/15">{FAQS.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></section>
  </>;
}
