import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { createMetadata } from "@/data/metadata";
import { breadcrumbSchema, webPageSchema } from "@/data/schema";
import { NEIGHBORHOODS, NEIGHBORHOOD_SLUGS } from "@/data/neighborhoods";
import { SPECIALTIES } from "@/data/specialties";
import { BUSINESS } from "@/data/business";
import SchemaInjector from "@/components/shared/SchemaInjector";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import ThemeBtn from "@/components/shared/ThemeBtn";
import SmartImage from "@/components/shared/SmartImage";
import OrderButton from "@/components/shared/OrderButton";
import QuoteCTA from "@/components/shared/QuoteCTA";

type Props = { params: Promise<{ city: string }> };
const findArea = (slug: string) => NEIGHBORHOODS.find((a) => a.slug === slug);

export function generateStaticParams() {
  return NEIGHBORHOOD_SLUGS.map((city) => ({ city }));
}

const titleFor = (city: string) => `Boba & Soufflé Pancakes near ${city} | Sun Tea Mix`;
const descriptionFor = (city: string, distance: string) =>
  `${distance}: Sun Tea Mix in Kakaʻako serves boba milk tea, real-fruit tea, cheese foam smoothies and soufflé pancakes near ${city}, Honolulu.`.slice(0, 160);

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const area = findArea(city);
  if (!area) return {};
  return createMetadata({
    title: titleFor(area.city),
    description: descriptionFor(area.city, area.distance),
    path: `/near/${city}/`,
    keywords: [`boba near ${area.city}`, `bubble tea ${area.city}`, `souffle pancakes near ${area.city}`, `dessert near ${area.city}`],
    ogImage: area.image,
  });
}

export default async function NeighborhoodPage({ params }: Props) {
  const { city } = await params;
  const area = findArea(city);
  if (!area) notFound();
  const path = `/near/${city}/`;
  const crumbs = [{ name: "Home", url: "/" }, { name: "Near You", url: "/near/" }, { name: area.city, url: path }];
  const isHome = area.slug === "kakaako";

  return (
    <>
      <SchemaInjector schema={[breadcrumbSchema(crumbs), webPageSchema({ url: path, name: titleFor(area.city), description: descriptionFor(area.city, area.distance), primaryImage: area.image })]} />
      <BreadcrumbNav items={crumbs} />
      <section className="container-pad py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <div className="eyebrow">{area.distance}</div>
            <h1 className="mb-5">{isHome ? "Boba & soufflé pancakes in Kakaʻako." : `Boba & soufflé pancakes near ${area.city}.`}</h1>
            <p className="text-lg text-[var(--color-text-muted)] mb-7">{area.blurb}</p>
            <div className="flex flex-wrap gap-3">
              <ThemeBtn href={BUSINESS.directionsUrl} external>Get Directions</ThemeBtn>
              <OrderButton variant="secondary" />
            </div>
          </div>
          <SmartImage src={area.image} alt={`Sun Tea Mix drinks and desserts, ${area.distance.toLowerCase()}`} priority sizes="(min-width: 1024px) 50vw, 100vw" className="aspect-[4/3] rounded-[var(--radius-section)]" />
        </div>
      </section>

      <section className="bg-[var(--color-warm-white)] section-pad">
        <div className="container-pad">
          <div className="max-w-2xl mb-9">
            <div className="eyebrow">Worth the trip</div>
            <h2 className="mb-4">What {isHome ? "neighbors" : `guests from ${area.city}`} come in for.</h2>
            <p className="text-[var(--color-text-muted)]">
              Every fruit tea is made with fresh fruit, every soufflé pancake is cooked to order, and the café has Wi-Fi,
              outlets and free guest parking. We are at {BUSINESS.address.full.replace(", United States", "")}.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SPECIALTIES.map((s) => (
              <Link key={s.slug} href={`/specialties/${s.slug}/`} className="card p-6">
                <h3 className="text-xl mb-2">{s.name}</h3>
                <p className="text-sm text-[var(--color-text-muted)]">{s.heroSubheadline}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-[var(--color-primary)]">Learn more</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container-pad section-pad text-center max-w-2xl mx-auto">
        <h2 className="mb-4">Open every day, 11 AM to 9 PM.</h2>
        <p className="text-[var(--color-text-muted)] mb-8">Order ahead online and your drinks will be ready for pickup, or come in and stay a while.</p>
        <div className="flex flex-wrap justify-center gap-3"><OrderButton /><ThemeBtn href="/menu/" variant="secondary">See the Menu</ThemeBtn></div>
      </section>

      <section className="bg-[var(--color-warm-white)] py-10">
        <div className="container-pad">
          <h2 className="mb-6 text-center">Other nearby neighborhoods</h2>
          <div className="flex flex-wrap gap-2 justify-center">
            {NEIGHBORHOODS.filter((o) => o.slug !== area.slug).map((o) => (
              <Link key={o.slug} href={`/near/${o.slug}/`} className="px-4 py-2 rounded-full border border-[var(--color-border)] bg-white text-sm font-medium hover:border-[var(--color-primary)]">{o.city}</Link>
            ))}
          </div>
        </div>
      </section>
      <QuoteCTA />
    </>
  );
}
