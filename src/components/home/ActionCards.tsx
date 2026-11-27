import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SmartImage from "../shared/SmartImage";
import { BUSINESS } from "@/data/business";

type Action = { href: string; title: string; sub: string; image: string; alt: string; external?: boolean };

const ACTIONS: Action[] = [
  { href: "/menu/", title: "Our Menu", sub: "Fruit tea, milk tea, smoothies & dessert", image: "/Images/hero.webp", alt: "A row of Sun Tea Mix fruit teas, smoothies and milk teas" },
  { href: BUSINESS.orderUrl, title: "Order Online", sub: "Skip the wait, pick up at the café", image: "/Images/ProductImg_StrawberryTea.webp", alt: "Sun Tea Mix Strawberry Tea with fresh strawberries", external: true },
  { href: "/specialties/", title: "Guest Favorites", sub: "Soufflé pancakes, boba & cheese foam", image: "/Images/ProductImg_MangoSmoogurt.webp", alt: "Sun Tea Mix Mango Smoogurt" },
  { href: "/contact/", title: "Visit Us", sub: "400 Keawe St, Kakaʻako · Free parking", image: "/Images/insta/3.webp", alt: "Fruit drinks and soufflé pancake on a table at Sun Tea Mix" },
];

export default function ActionCards() {
  return (
    <section className="container-pad pb-4">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {ACTIONS.map(({ href, title, sub, image, alt, external }) => {
          const inner = (
            <>
              <SmartImage src={image} alt={alt} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="aspect-[4/3] w-full transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(13,43,48,0.8)] via-[rgba(13,43,48,0.2)] to-transparent" aria-hidden="true" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
                <div>
                  <div className="font-semibold text-white" style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem" }}>{title}</div>
                  <div className="text-sm text-white/85">{sub}</div>
                </div>
                <ArrowUpRight size={22} className="shrink-0 text-white/90 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
              </div>
            </>
          );
          return external ? (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="card group relative overflow-hidden p-0">{inner}</a>
          ) : (
            <Link key={href} href={href} className="card group relative overflow-hidden p-0">{inner}</Link>
          );
        })}
      </div>
    </section>
  );
}
