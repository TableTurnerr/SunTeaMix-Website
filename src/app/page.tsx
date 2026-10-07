import Image from "next/image";
import Link from "next/link";
import { FAQS, MENU, NEIGHBORHOODS, SITE } from "@/data/site";

const favorites = [
  ["Classic Milk Tea (L)", "Creamy Hong Kong-style black milk tea — the most-liked Sun Tea Mix drink.", "/Images/ProductImg_ClassicMilkTea.webp"],
  ["Mango Charm", "Fresh mango, grapefruit, crystal boba, and a signature salted cheese foam.", "/Images/ProductImg_MangoCharm.webp"],
  ["Crème Brûlée Soufflé", "A delicate, airy pancake with a caramelized sugar crust, made fresh to order.", "/Images/ProductImg_CremeBruleeSouffle.webp"],
] as const;

const menuHighlights = [
  ["Fruit Iced Tea", "Bright, real-fruit refreshment", "/Images/ProductImg_StrawberryLimeTea.webp", MENU[2].items.slice(0, 3)],
  ["Milk Tea", "Creamy classics with boba", "/Images/ProductImg_ClassicMilkTea.webp", MENU[4].items.slice(-3)],
  ["Sun Tea Special", "Tropical house favorites", "/Images/ProductImg_TropicalLavaFlow.webp", MENU[1].items.slice(0, 3)],
  ["Soufflé Pancakes", "Warm, fluffy, made to order", "/Images/ProductImg_StrawberrySoufflePancakes.webp", MENU[0].items.slice(0, 3)],
] as const;

const mapEmbedUrl = "https://www.google.com/maps?q=Sun+Tea+Mix+400+Keawe+St+107+Honolulu+HI+96813&output=embed";

export default function Home() {
  const schema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.slice(0, 3).map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) };

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

    <section className="sun-hero sun-hero--mango">
      <div className="wrap grid min-h-[620px] items-center gap-10 py-18 lg:grid-cols-[1.1fr_.9fr]">
        <div>
          <p className="eyebrow">Kakaʻako, Honolulu</p>
          <h1 className="mt-3">Tea bright enough for island days.</h1>
          <p className="mt-6 max-w-xl text-lg text-teal-950/75">Fresh fruit tea, classic boba, smoothies, and made-to-order soufflé pancakes — all waiting at Sun Tea Mix on Keawe Street.</p>
          <div className="mt-8 flex flex-wrap gap-3"><a className="button primary" href={SITE.order}>Order pickup or delivery</a><a className="button ghost" href={SITE.map}>Get directions</a></div>
          <div className="mt-8 flex flex-wrap gap-2">{["Fresh fruit", "Boba & milk tea", "Soufflé pancakes", "Easy parking"].map((item) => <span className="pill" key={item}>{item}</span>)}</div>
        </div>
        <div className="relative rounded-[2rem] bg-[#92c4ca] p-6 shadow-2xl shadow-teal-900/15"><Image src="/Images/hero.webp" alt="Sun Tea Mix drinks and desserts" width={900} height={1125} priority className="aspect-[4/5] w-full rounded-[1.4rem] object-cover" sizes="(min-width: 1024px) 45vw, 100vw" /><div className="absolute -bottom-4 -left-3 rounded-2xl bg-[#6d9397] p-4 font-bold text-white">Mango Charm<br /><span className="text-sm font-medium">#2 Most liked</span></div></div>
      </div>
    </section>

    <section className="wrap py-18">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="eyebrow">Try a favorite</p><h2 className="mt-2 max-w-2xl">A tea stop, a dessert date, a place to stay awhile.</h2></div><Link href="/menu/" className="font-bold text-teal-700 underline">See every menu item</Link></div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">{favorites.map(([name, description, image]) => <article className="card group overflow-hidden !p-0" key={name}><div className="relative aspect-[16/10] bg-[#e6faf0]"><Image src={image} alt={name} fill sizes="(min-width: 768px) 31vw, 100vw" className="object-cover transition duration-300 group-hover:scale-105" /></div><div className="p-6"><p className="eyebrow">Sun Tea Mix favorite</p><h3 className="mt-2 text-2xl">{name}</h3><p className="mt-3 text-teal-950/70">{description}</p><Link href="/menu/" className="mt-5 inline-block font-bold text-teal-700 underline">Find it on the menu</Link></div></article>)}</div>
    </section>

    <section className="bg-teal-950 py-16 text-white">
      <div className="wrap grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        <div><p className="eyebrow !text-[#ffc640]">Visit Sun Tea Mix</p><h2 className="mt-2 !text-white">Find your bright pause in Kakaʻako.</h2><p className="mt-5 max-w-xl text-white/75">Just off Keawe Street, Sun Tea Mix is an easy Honolulu stop for a cool drink, a warm soufflé pancake, or a quick pickup between plans.</p><div className="mt-7 space-y-3 text-sm leading-6"><p><span className="font-bold text-[#ffc640]">Address</span><br />{SITE.address}</p><p><span className="font-bold text-[#ffc640]">Hours</span><br />{SITE.hours}</p><p><span className="font-bold text-[#ffc640]">Good to know</span><br />Complimentary parking is available for Sun Tea Mix guests.</p></div><div className="mt-8 flex flex-wrap gap-3"><a className="button bg-[#ffc640] !text-teal-950" href={SITE.map}>Open directions</a><a className="button border border-white/60 text-white" href={`tel:${SITE.phoneRaw}`}>Call the café</a></div></div>
        <div className="overflow-hidden rounded-[1.5rem] border border-white/15 bg-white shadow-xl shadow-black/20"><iframe title="Map showing Sun Tea Mix in Honolulu" src={mapEmbedUrl} className="h-[360px] w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
      </div>
    </section>

    <section className="wrap py-16"><p className="eyebrow">Boba & dessert near you</p><h2 className="mt-2 max-w-3xl">Your Honolulu stop for fruit tea, boba, and soufflé pancakes.</h2><p className="mt-5 max-w-3xl text-lg text-teal-950/70">Sun Tea Mix is located at {SITE.shortAddress}, convenient for tea and dessert guests in Kakaʻako, Ala Moana, Waikīkī, Downtown Honolulu, Makiki, the University of Hawaiʻi, Mōʻiliʻili, and Hawaiʻi Kai.</p><p className="mt-4 max-w-3xl text-teal-950/70">Stop by for real-fruit tea, milk tea, smoothies, and made-to-order soufflé pancakes — whether you’re heading home, taking a beach break, shopping, or meeting friends.</p><div className="mt-7 flex flex-wrap gap-2">{NEIGHBORHOODS.map(([, name]) => <span className="pill" key={name}>{name}</span>)}</div></section>

    <section className="bg-[#fff5d6] py-18"><div className="wrap"><div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="eyebrow">Menu highlights</p><h2 className="mt-2">A little something for every craving.</h2><p className="mt-4 max-w-2xl text-teal-950/70">Start with a fan favorite, or explore the full menu for even more fruit tea, boba, smoothies, and desserts.</p></div><Link href="/menu/" className="button primary">Browse the menu</Link></div><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{menuHighlights.map(([name, tagline, image, items]) => <article className="overflow-hidden rounded-[1.25rem] bg-white shadow-sm" key={name}><div className="relative aspect-[4/3] bg-[#e6faf0]"><Image src={image} alt={name} fill sizes="(min-width: 1024px) 23vw, (min-width: 640px) 48vw, 100vw" className="object-cover" /></div><div className="p-5"><p className="text-xs font-extrabold uppercase tracking-[.14em] text-teal-700">{tagline}</p><h3 className="mt-2 text-2xl">{name}</h3><ul className="mt-4 space-y-2 text-sm text-teal-950/70">{items.map((item) => <li className="flex justify-between gap-3" key={item.name}><span>{item.name}</span><span className="font-bold text-teal-950">{item.price}</span></li>)}</ul></div></article>)}</div></div></section>

    <section className="wrap py-18"><div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]"><div><p className="eyebrow">Most asked</p><h2 className="mt-2">Good to know before you go.</h2><p className="mt-5 max-w-md text-teal-950/70">Here are the three questions our guests ask most often before they visit Sun Tea Mix.</p><Link href="/faq/" className="button primary mt-7">Read all FAQs</Link></div><div className="grid gap-4">{FAQS.slice(0, 3).map(([question, answer], index) => <article className="rounded-2xl border border-teal-950/10 bg-[#f5fbf8] p-6" key={question}><p className="text-sm font-black text-teal-700">0{index + 1}</p><h3 className="mt-2 text-2xl">{question}</h3><p className="mt-3 text-teal-950/70">{answer}</p></article>)}</div></div></section>
  </>;
}
