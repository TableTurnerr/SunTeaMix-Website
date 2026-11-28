import type { Metadata } from "next";
import Link from "next/link";
import { Check, ChevronLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { BUSINESS } from "@/data/business";
import { createMetadata } from "@/data/metadata";
import { SERVICE_CATEGORIES } from "@/data/services";
import { SPECIALTIES } from "@/data/specialties";
import { breadcrumbSchema, faqSchema, menuSectionSchema, webPageSchema } from "@/data/schema";
import { categoryFaqs } from "@/data/answers";
import FAQSection from "@/components/home/FAQSection";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import QuoteCTA from "@/components/shared/QuoteCTA";
import SchemaInjector from "@/components/shared/SchemaInjector";
import SmartImage from "@/components/shared/SmartImage";
import OrderButton from "@/components/shared/OrderButton";
import CallButton from "@/components/shared/CallButton";
import ServiceCard from "@/components/services/ServiceCard";

type Props = { params: Promise<{ category: string }> };

const getCategory = (id: string) => SERVICE_CATEGORIES.find((c) => c.id === id);

export function generateStaticParams() {
  return SERVICE_CATEGORIES.map(({ id }) => ({ category: id }));
}

function titleFor(name: string) {
  return `${name} in Honolulu | Sun Tea Mix Menu`;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: id } = await params;
  const category = getCategory(id);
  if (!category) return {};
  return createMetadata({
    title: titleFor(category.name),
    description: `${category.description} Prices and photos from Sun Tea Mix in Kakaʻako, Honolulu.`.slice(0, 160),
    path: `/menu/${category.id}/`,
    keywords: [`${category.name.toLowerCase()} Honolulu`, `${category.name.toLowerCase()} Kakaako`, `${category.name.toLowerCase()} near me`],
    ogImage: category.image,
  });
}

export default async function MenuCategoryPage({ params }: Props) {
  const { category: id } = await params;
  const category = getCategory(id);
  if (!category) notFound();

  const path = `/menu/${category.id}/`;
  const breadcrumbs = [{ name: "Home", url: "/" }, { name: "Menu", url: "/menu/" }, { name: category.name, url: path }];
  const specialty = SPECIALTIES.find((s) => s.slug === category.specialtySlug);
  const others = SERVICE_CATEGORIES.filter((c) => c.id !== category.id);
  const faqs = categoryFaqs(category);

  return (
    <>
      <SchemaInjector schema={[breadcrumbSchema(breadcrumbs), webPageSchema({ url: path, name: titleFor(category.name), description: category.description, primaryImage: category.image }), menuSectionSchema(category), faqSchema(faqs)]} />
      <BreadcrumbNav items={breadcrumbs} />

      <section className="container-pad pt-5 pb-12 md:pt-8 md:pb-20">
        <Link href="/menu/" className="link-underline text-sm font-semibold text-[var(--color-text-muted)] mb-8">
          <ChevronLeft size={16} aria-hidden="true" /> Full menu
        </Link>
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <div className="eyebrow">Sun Tea Mix · Kakaʻako</div>
            <h1 className="mb-5">{category.name} in Honolulu</h1>
            <p className="text-lg text-[var(--color-text-muted)] mb-7">{category.description}</p>
            <div className="flex flex-wrap gap-3"><OrderButton /><CallButton /></div>
          </div>
          <SmartImage src={category.image} alt={`${category.name} at ${BUSINESS.name}`} priority sizes="(min-width: 1024px) 45vw, 100vw" className="aspect-[4/3] rounded-[var(--radius-section)] shadow-[0_30px_80px_-30px_rgba(13,43,48,0.35)]" />
        </div>
      </section>

      <section className="bg-[var(--color-warm-white)] section-pad">
        <div className="container-pad grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="max-w-2xl">
            <div className="eyebrow">About this menu</div>
            <h2 className="mb-5">{category.detailHeading}</h2>
            <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">{category.detailBody}</p>
            {specialty && (
              <p className="mt-6"><Link href={`/specialties/${specialty.slug}/`} className="link-underline font-semibold text-[var(--color-primary)]">Read more about {specialty.name.toLowerCase()} at Sun Tea Mix</Link></p>
            )}
          </div>
          <aside className="rounded-2xl border border-[var(--color-border)] bg-white p-7">
            <h3 className="text-xl mb-5">Good to know</h3>
            <ul className="grid gap-4">
              {category.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-[var(--color-text-muted)]">
                  <Check size={18} className="mt-1 shrink-0 text-[var(--color-primary)]" aria-hidden="true" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="container-pad section-pad">
        <div className="flex items-end justify-between gap-5 flex-wrap mb-8">
          <div>
            <div className="eyebrow">{category.items.length} items</div>
            <h2>What’s on the {category.name.toLowerCase()} menu.</h2>
          </div>
          <a href={BUSINESS.orderUrl} target="_blank" rel="noopener noreferrer" className="link-underline text-sm font-semibold">Order for pickup</a>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {category.items.map((item) => <ServiceCard key={item.name} item={item} />)}
        </div>
        <p className="mt-6 text-sm text-[var(--color-text-muted)]">Prices are from our online menu and may change.</p>
      </section>

      <FAQSection faqs={faqs} eyebrow={`${category.name} at Sun Tea Mix`} title="Quick answers." />

      <section className="container-pad py-10">
        <div>
          <h2 className="mb-6 text-center">More from the menu</h2>
          <div className="flex flex-wrap gap-2 justify-center">
            {others.map((o) => (
              <Link key={o.id} href={`/menu/${o.id}/`} className="px-4 py-2 rounded-full border border-[var(--color-border)] bg-white text-sm font-medium hover:border-[var(--color-primary)]">{o.name}</Link>
            ))}
          </div>
        </div>
      </section>

      <QuoteCTA itemName={category.name.toLowerCase()} />
    </>
  );
}
