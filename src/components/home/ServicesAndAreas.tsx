import Link from "next/link";
import { MapPin } from "lucide-react";
import { SERVICE_CATEGORIES } from "@/data/services";
import { NEIGHBORHOODS } from "@/data/neighborhoods";
import { BUSINESS } from "@/data/business";

// The whole menu by name, plus the neighborhoods we have pages for.
// Listing them on the homepage tells search engines exactly what the café serves and where.
export default function ServicesAndAreas() {
  return (
    <section className="bg-[var(--color-warm-white)] section-pad">
      <div className="container-pad">
        <div className="max-w-2xl mb-10">
          <div className="eyebrow">Bubble tea &amp; dessert café</div>
          <h2 className="mb-4">The full Sun Tea Mix menu at a glance.</h2>
          <p className="text-[var(--color-text-muted)] leading-relaxed">
            Fruit iced tea, milk tea, cheese foam smoothies, fresh milk, pure tea, CoCo coconut desserts and soufflé
            pancakes in {BUSINESS.address.neighborhood}, Honolulu. Call{" "}
            <a href={`tel:${BUSINESS.phoneRaw}`} className="font-semibold text-[var(--color-primary)]">{BUSINESS.phone}</a>{" "}
            or{" "}
            <a href={BUSINESS.orderUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-[var(--color-primary)]">order online for pickup</a>.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICE_CATEGORIES.map((category) => (
            <div key={category.id} className="rounded-[var(--radius-section)] border border-[var(--color-border)] bg-white p-6 md:p-7">
              <h3 className="text-xl mb-4">
                <Link href={`/menu/${category.id}/`} className="hover:text-[var(--color-primary)] transition-colors">{category.name}</Link>
              </h3>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li key={item.name} className="flex items-baseline justify-between gap-3 text-sm">
                    <span className="text-[var(--color-text)]">{item.name}</span>
                    {item.price && <span className="shrink-0 text-[var(--color-text-muted)]">{item.price.split(" · ")[0]}</span>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 max-w-3xl">
          <h2 className="mb-4">Close to you in Honolulu</h2>
          <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
            We are on Keawe Street in {BUSINESS.address.neighborhood}, an easy trip from these Honolulu neighborhoods:
          </p>
          <ul className="flex flex-wrap gap-2">
            {NEIGHBORHOODS.map((area) => (
              <li key={area.slug}>
                <Link href={`/near/${area.slug}/`} className="inline-flex items-center gap-1.5 text-sm bg-white border border-[var(--color-border)] rounded-full px-3 py-1.5 hover:border-[var(--color-primary)] transition-colors">
                  <MapPin size={14} className="text-[var(--color-primary)]" aria-hidden="true" />
                  {area.city}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
