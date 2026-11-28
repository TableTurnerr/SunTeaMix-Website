import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { createMetadata } from "@/data/metadata";
import {
  breadcrumbSchema,
  faqSchema,
  itemListSchema,
  webPageSchema,
} from "@/data/schema";
import { SPECIALTIES, SPECIALTY_SLUGS } from "@/data/specialties";
import { SERVICE_CATEGORIES, type ServiceItem } from "@/data/services";
import { BUSINESS } from "@/data/business";
import SchemaInjector from "@/components/shared/SchemaInjector";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import OrderButton from "@/components/shared/OrderButton";
import CallButton from "@/components/shared/CallButton";
import SmartImage from "@/components/shared/SmartImage";
import FAQSection from "@/components/home/FAQSection";
import QuoteCTA from "@/components/shared/QuoteCTA";
import ServiceCard from "@/components/services/ServiceCard";

// Flattened list of every individual service across all categories.
const ALL_SERVICE_ITEMS = SERVICE_CATEGORIES.flatMap((c) => c.items);

function resolveRelatedServices(names: string[] | undefined): ServiceItem[] {
  if (!names || names.length === 0) return [];
  const lookup = new Map<string, ServiceItem>();
  for (const item of ALL_SERVICE_ITEMS) {
    lookup.set(item.name, item);
  }
  return names
    .map((name) => lookup.get(name))
    .filter((item): item is ServiceItem => Boolean(item));
}

function absoluteUrl(path: string) {
  return path.startsWith("http") ? path : `${BUSINESS.url}${path}`;
}

export function generateStaticParams() {
  return SPECIALTY_SLUGS.map((topic) => ({ topic }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ topic: string }>;
}): Promise<Metadata> {
  const { topic } = await params;
  const specialty = SPECIALTIES.find((s) => s.slug === topic);
  if (!specialty) return {};
  return createMetadata({
    title: specialty.metaTitle,
    description: specialty.metaDescription,
    path: `/specialties/${topic}/`,
    keywords: specialty.keywords,
    ogImage: specialty.image ? absoluteUrl(specialty.image) : undefined,
  });
}

export default async function SpecialtyPage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic } = await params;
  const specialty = SPECIALTIES.find((s) => s.slug === topic);
  if (!specialty) notFound();

  const related = resolveRelatedServices(specialty.relatedServiceNames);
  const url = `/specialties/${topic}/`;
  const image = specialty.image ?? "/Images/hero.webp";
  // The quick answer is shown on the page, so it can lead the FAQ structured data too.
  const allFaqs = [...(specialty.quickAnswer ? [specialty.quickAnswer] : []), ...(specialty.faqs ?? [])];

  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Favorites", url: "/specialties/" },
      { name: specialty.name, url },
    ]),
    webPageSchema({
      url,
      name: specialty.metaTitle,
      description: specialty.metaDescription,
      primaryImage: image,
      speakable: specialty.quickAnswer ? [".quick-answer"] : undefined,
    }),
    ...(related.length ? [itemListSchema({ name: `${specialty.name} at Sun Tea Mix`, url, items: related })] : []),
    ...(allFaqs.length > 0 ? [faqSchema(allFaqs)] : []),
  ];

  return (
    <>
      <SchemaInjector schema={schemas} />
      <BreadcrumbNav
        items={[
          { name: "Home", url: "/" },
          { name: "Favorites", url: "/specialties/" },
          { name: specialty.name, url },
        ]}
      />

      <section className="container-pad pt-4 pb-12 md:pt-6 md:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            {specialty.heroEyebrow && (
              <div className="eyebrow">{specialty.heroEyebrow}</div>
            )}
            <h1 className="mb-6">{specialty.heroHeadline}</h1>
            {specialty.heroSubheadline && (
              <p className="text-lg text-[var(--color-text-muted)] mb-6">
                {specialty.heroSubheadline}
              </p>
            )}
            <div className="flex flex-wrap gap-3">
              <OrderButton />
              <CallButton />
            </div>
          </div>

          {specialty.image && (
            <SmartImage
              src={specialty.image}
              alt={`${specialty.name} at ${BUSINESS.name} in Kakaʻako, Honolulu`}
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="aspect-[4/5] rounded-[var(--radius-section)] shadow-[0_30px_80px_-30px_rgba(26,20,16,0.35)]"
            />
          )}
        </div>
      </section>

      {specialty.quickAnswer && (
        <section className="container-pad pb-12 md:pb-16" aria-labelledby="quick-answer-q">
          <div className="quick-answer max-w-3xl rounded-2xl border border-[var(--color-border)] border-l-4 border-l-[var(--color-primary)] bg-white p-6 md:p-8">
            <div className="eyebrow">Quick answer</div>
            <h2 id="quick-answer-q" className="text-2xl md:text-3xl mb-3">{specialty.quickAnswer.question}</h2>
            <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">{specialty.quickAnswer.answer}</p>
          </div>
        </section>
      )}

      <section className="bg-[var(--color-warm-white)] section-pad">
        <div className="container-pad max-w-3xl">
          <h2 className="mb-6">{specialty.primaryBlock.heading}</h2>
          <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
            {specialty.primaryBlock.body}
          </p>
        </div>
      </section>

      {related.length > 0 && (
        <section className="container-pad section-pad">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
              <h2>On the menu</h2>
              <Link
                href="/menu/"
                className="link-underline text-[var(--color-text)] font-medium text-sm"
              >
                See the full menu
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((item) => <ServiceCard key={item.name} item={item} />)}
            </div>
          </div>
        </section>
      )}

      {specialty.faqs && specialty.faqs.length > 0 && (
        <FAQSection
          faqs={specialty.faqs}
          eyebrow={`Common questions about ${specialty.name.toLowerCase()}`}
          title="Frequently asked questions."
        />
      )}

      <QuoteCTA itemName={specialty.name} />
    </>
  );
}
