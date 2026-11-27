import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { createMetadata } from "@/data/metadata";
import { SERVICE_CATEGORIES, MENU_ITEM_COUNT } from "@/data/services";
import { BUSINESS } from "@/data/business";
import { breadcrumbSchema, serviceCatalogSchema, webPageSchema } from "@/data/schema";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CategoryNav from "@/components/services/CategoryNav";
import ServiceCard from "@/components/services/ServiceCard";
import QuoteCTA from "@/components/shared/QuoteCTA";
import SchemaInjector from "@/components/shared/SchemaInjector";
import SmartImage from "@/components/shared/SmartImage";
import OrderButton from "@/components/shared/OrderButton";
import CallButton from "@/components/shared/CallButton";

const PAGE_TITLE = "Menu & Prices | Sun Tea Mix Boba & Dessert, Honolulu";
const PAGE_DESCRIPTION = "See the full Sun Tea Mix menu with prices: fruit iced tea, milk tea, cheese foam smoothies, fresh milk, pure tea, CoCo and soufflé pancakes in Kakaʻako, Honolulu.";
const BREADCRUMBS = [{ name: "Home", url: "/" }, { name: "Menu", url: "/menu/" }];

export const metadata: Metadata = createMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/menu/",
  keywords: ["Sun Tea Mix menu", "boba menu Honolulu", "souffle pancake price Honolulu", "bubble tea prices Honolulu"],
  ogImage: "/Images/hero.webp",
});

export default function MenuPage() {
  return (
    <>
      <SchemaInjector schema={[serviceCatalogSchema(), webPageSchema({ url: "/menu/", name: PAGE_TITLE, description: PAGE_DESCRIPTION, primaryImage: "/Images/hero.webp" }), breadcrumbSchema(BREADCRUMBS)]} />
      <BreadcrumbNav items={BREADCRUMBS} />
      <section className="container-pad py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="max-w-2xl">
            <div className="eyebrow">{MENU_ITEM_COUNT} drinks &amp; desserts</div>
            <h1 className="mb-5">The Sun Tea Mix menu.</h1>
            <p className="text-lg text-[var(--color-text-muted)] mb-7">
              Real-fruit iced tea, Hong Kong–style milk tea, smoothies with salted cheese foam, fresh milk drinks, CoCo
              coconut desserts and soufflé pancakes made to order. Prices are from our online ordering menu and may change.
            </p>
            <div className="flex flex-wrap gap-3"><OrderButton /><CallButton /></div>
          </div>
          <SmartImage src="/Images/hero.webp" alt="A lineup of Sun Tea Mix fruit teas, smoothies and milk tea in branded cups" priority sizes="(min-width: 1024px) 45vw, 100vw" className="aspect-[4/3] rounded-[var(--radius-section)]" />
        </div>
      </section>

      <CategoryNav categories={SERVICE_CATEGORIES.map(({ id, name }) => ({ id, name }))} />

      {SERVICE_CATEGORIES.map((category, i) => (
        <section key={category.id} id={category.id} className={`scroll-mt-[140px] section-pad ${i % 2 === 0 ? "bg-[var(--color-warm-white)]" : ""}`}>
          <div className="container-pad">
            <div className="flex items-end justify-between gap-5 flex-wrap mb-8">
              <div className="max-w-2xl">
                <h2 className="mb-3">{category.name}</h2>
                <p className="text-[var(--color-text-muted)]">{category.description}</p>
              </div>
              <Link href={`/menu/${category.id}/`} className="link-underline text-sm font-semibold">
                More about {category.name.toLowerCase()} <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {category.items.map((item) => <ServiceCard key={item.name} item={item} />)}
            </div>
          </div>
        </section>
      ))}

      <section className="container-pad pb-6 pt-10 text-sm text-[var(--color-text-muted)]">
        Prices and availability can change. See <a href={BUSINESS.orderUrl} target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] underline underline-offset-2">online ordering</a> for today’s menu, or ask our team about sweetness, ice and toppings.
      </section>
      <QuoteCTA />
    </>
  );
}
