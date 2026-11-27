import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SmartImage from "../shared/SmartImage";

// The most-liked items on the online ordering menu.
const FAVORITES = [
  { image: "/Images/ProductImg_ClassicMilkTea.webp", name: "Classic Milk Tea", note: "#1 most liked", price: "$6.99", href: "/menu/milk-tea/" },
  { image: "/Images/ProductImg_MangoCharm.webp", name: "Mango Charm", note: "#2 most liked", price: "$7.99", href: "/menu/sun-tea-specials/" },
  { image: "/Images/ProductImg_CremeBruleeSouffle.webp", name: "Crème Brûlée Soufflé", note: "#3 most liked", price: "$11.99", href: "/menu/souffle-pancakes/" },
  { image: "/Images/ProductImg_StrawberryLimeTea.webp", name: "Strawberry Lime Tea", note: "Best seller", price: "$6.99", href: "/menu/fruit-iced-tea/" },
];

export default function ProjectsStrip() {
  return (
    <section className="section-pad">
      <div className="container-pad">
        <div className="mb-10 max-w-2xl">
          <div className="eyebrow">Most liked</div>
          <h2 className="mb-4">Not sure what to order? Start here.</h2>
          <p className="text-[var(--color-text-muted)]">The drinks and desserts our guests like most on our online menu.</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {FAVORITES.map(({ image, name, note, price, href }) => (
            <Link key={name} href={href} className="group block">
              <div className="card-img aspect-square overflow-hidden bg-[var(--color-sand)]">
                <SmartImage src={image} alt={`${name} at Sun Tea Mix`} sizes="(min-width: 1024px) 25vw, 50vw" className="w-full h-full" />
              </div>
              <div className="mt-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--color-gold-dark)]">{note}</div>
              <p className="text-base font-semibold text-[var(--color-text)] group-hover:text-[var(--color-primary)]">{name} <span className="font-normal text-[var(--color-text-muted)]">· {price}</span></p>
            </Link>
          ))}
        </div>
        <Link href="/menu/" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold link-underline">
          See the full menu <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
