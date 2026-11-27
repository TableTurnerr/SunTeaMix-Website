import type { Metadata } from "next";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { createMetadata } from "@/data/metadata";
import { breadcrumbSchema, webPageSchema } from "@/data/schema";
import { NEIGHBORHOODS } from "@/data/neighborhoods";
import { BUSINESS } from "@/data/business";
import SchemaInjector from "@/components/shared/SchemaInjector";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import ThemeBtn from "@/components/shared/ThemeBtn";
import QuoteCTA from "@/components/shared/QuoteCTA";

const TITLE = "Boba Near You in Honolulu | Sun Tea Mix Kakaʻako";
const DESCRIPTION = "Looking for boba or soufflé pancakes near you? Sun Tea Mix in Kakaʻako is close to Ala Moana, Waikīkī, Downtown, Makiki, UH Mānoa and more.";
const CRUMBS = [{ name: "Home", url: "/" }, { name: "Near You", url: "/near/" }];

export const metadata: Metadata = createMetadata({ title: TITLE, description: DESCRIPTION, path: "/near/", keywords: ["boba near me Honolulu", "bubble tea near Ala Moana", "boba near Waikiki", "dessert near me Honolulu"] });

export default function NearIndex() {
  return (
    <>
      <SchemaInjector schema={[breadcrumbSchema(CRUMBS), webPageSchema({ url: "/near/", name: TITLE, description: DESCRIPTION, primaryImage: "/Images/insta/5.webp" })]} />
      <BreadcrumbNav items={CRUMBS} />
      <section className="container-pad py-12 md:py-20 max-w-3xl">
        <div className="eyebrow">Kakaʻako, Honolulu</div>
        <h1 className="mb-6">Boba and soufflé pancakes, close to you.</h1>
        <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
          {BUSINESS.name} is at {BUSINESS.address.street} in {BUSINESS.address.neighborhood}, an easy trip from much of Honolulu.
          Pick your neighborhood to see how close we are, or get directions and come by any day from 11 AM to 9 PM.
        </p>
        <div className="flex flex-wrap gap-3 mt-6">
          <ThemeBtn href={BUSINESS.directionsUrl} external>Get Directions</ThemeBtn>
          <ThemeBtn href="/menu/" variant="secondary">See the Menu</ThemeBtn>
        </div>
      </section>
      <section className="container-pad pb-16 md:pb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {NEIGHBORHOODS.map((area) => (
            <Link key={area.slug} href={`/near/${area.slug}/`} className="card p-6">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[var(--color-text-muted)] mb-3">
                <MapPin size={14} className="text-[var(--color-primary)]" />Honolulu, HI
              </div>
              <h2 className="!text-xl !mb-2">{area.city}</h2>
              <p className="text-sm text-[var(--color-text-muted)]">{area.distance}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-[var(--color-primary)]">See details</span>
            </Link>
          ))}
        </div>
      </section>
      <QuoteCTA />
    </>
  );
}
