import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPopularItem, POPULAR_ITEMS, SPECIALTIES, SITE } from "@/data/site";

export function generateStaticParams() {
  return [...new Set([...SPECIALTIES.map(([slug]) => slug), ...POPULAR_ITEMS.map((item) => item.slug)])]
    .map((topic) => ({ topic }));
}

export async function generateMetadata({ params }: { params: Promise<{ topic: string }> }): Promise<Metadata> {
  const { topic } = await params;
  const item = getPopularItem(topic);
  if (item) {
    return {
      title: `${item.name} in Honolulu`,
      description: `${item.shortDescription} Discover this popular Sun Tea Mix item in Kakaʻako, Honolulu.`,
      alternates: { canonical: `/specialties/${item.slug}/` },
      openGraph: { title: `${item.name} | Sun Tea Mix Honolulu`, description: item.shortDescription, images: item.image ? [{ url: item.image, alt: item.imageAlt ?? item.name }] : [] },
    };
  }
  const specialty = SPECIALTIES.find(([slug]) => slug === topic);
  return specialty ? { title: `${specialty[1]} in Honolulu`, description: `${specialty[2]} Find it at Sun Tea Mix in Kakaʻako, Honolulu.`, alternates: { canonical: `/specialties/${specialty[0]}/` } } : {};
}

function PopularItemPage({ item }: { item: (typeof POPULAR_ITEMS)[number] }) {
  const relatedItems = POPULAR_ITEMS.filter((candidate) => candidate.slug !== item.slug).slice(0, 3);
  const schema = { "@context": "https://schema.org", "@graph": [
    { "@type": "WebPage", name: `${item.name} in Honolulu | Sun Tea Mix`, description: item.shortDescription, url: `${SITE.url}/specialties/${item.slug}/`, ...(item.image ? { primaryImageOfPage: `${SITE.url}${item.image}` } : {}), about: { "@type": "MenuItem", name: item.name, description: item.shortDescription, offers: { "@type": "Offer", price: item.price.replace(/[^0-9.]/g, "").split("/")[0], priceCurrency: "USD", availability: "https://schema.org/InStock" } } },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE.url }, { "@type": "ListItem", position: 2, name: "Specialties", item: `${SITE.url}/specialties/` }, { "@type": "ListItem", position: 3, name: item.name, item: `${SITE.url}/specialties/${item.slug}/` }] },
  ] };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <section className="sun-hero sun-hero--mango py-12 sm:py-16"><div className="wrap grid items-center gap-10 lg:grid-cols-2"><div><nav aria-label="Breadcrumb" className="text-sm font-semibold text-teal-700"><Link href="/">Home</Link><span className="px-2">/</span><Link href="/specialties/">Specialties</Link><span className="px-2">/</span><span>{item.name}</span></nav><p className="eyebrow mt-6">{item.category}</p><h1 className="mt-3">{item.name} in Honolulu.</h1><p className="mt-6 text-lg leading-8 text-teal-950/75">{item.description}</p><div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3"><p className="text-2xl font-black text-teal-950">{item.price}</p><p className="border-l border-teal-950/15 pl-5 text-sm font-semibold text-teal-950/70">Popular at Sun Tea Mix<br />Kakaʻako · Honolulu</p></div><div className="mt-8 flex flex-wrap gap-3"><a className="button primary" href={SITE.order}>Order online</a><a className="button ghost" href={SITE.map}>Get directions</a></div></div>{item.image ? <div className="relative mx-auto w-full max-w-xl overflow-hidden rounded-[2rem] border-4 border-[#92c4ca] shadow-xl shadow-teal-950/15"><Image src={item.image} alt={item.imageAlt ?? item.name} width={900} height={750} priority className="aspect-[6/5] w-full object-cover" sizes="(min-width: 1024px) 50vw, 100vw" /></div> : <div className="mx-auto aspect-[6/5] w-full max-w-xl rounded-[2rem] bg-[#d4efe5]" />}</div></section>
    <section className="wrap grid gap-10 py-16 lg:grid-cols-[1.25fr_.75fr]"><article className="max-w-none"><p className="eyebrow">Why try it</p><h2 className="mt-2">A Sun Tea Mix favorite, made for your Honolulu day.</h2><p className="mt-5 text-lg leading-8 text-teal-950/75">{item.shortDescription} Find it at Sun Tea Mix in Kakaʻako, a convenient stop for bubble tea, fruit tea, desserts, and a sweet break near Ala Moana and Downtown Honolulu.</p><h3 className="mt-9 text-2xl">What to know before you order</h3><p className="mt-3 leading-7 text-teal-950/75">{item.bestFor} Menu selection and availability can change, so please ask our team about today’s options, toppings, and dietary needs when you order.</p><h3 className="mt-9 text-2xl">Looking for {item.name} near you?</h3><p className="mt-3 leading-7 text-teal-950/75">Sun Tea Mix is at <a className="font-bold text-teal-700 underline" href={SITE.map}>{SITE.shortAddress}</a>. Stop in for a quick pickup, settle in with friends, or order online for an easy Kakaʻako dessert and drink run.</p></article><aside className="rounded-3xl bg-[#fff5d6] p-7"><p className="eyebrow">At a glance</p><h2 className="mt-2 text-2xl">{item.name}</h2><dl className="mt-6 space-y-4">{item.highlights.map((highlight) => <div className="border-b border-teal-950/10 pb-4" key={highlight}><dt className="text-sm font-bold text-teal-950/60">Highlight</dt><dd className="mt-1 font-bold text-teal-950">{highlight}</dd></div>)}</dl><Link className="button primary mt-7 w-full" href="/menu/">See the full menu</Link></aside></section>
    <section className="bg-teal-950 py-16 text-white"><div className="wrap"><p className="eyebrow !text-[#ffc640]">DoorDash popularity</p><h2 className="mt-2 !text-white">{item.category}</h2><p className="mt-4 max-w-2xl text-white/70">Popularity labels follow the items and rankings shown on DoorDash.</p></div></section>
    <section className="wrap py-16"><p className="eyebrow">Explore more</p><h2 className="mt-2">More popular Sun Tea Mix items.</h2><div className="mt-8 grid gap-5 md:grid-cols-3">{relatedItems.map((related) => <Link href={`/specialties/${related.slug}/`} className="card group overflow-hidden !p-0" key={related.slug}><div className="relative aspect-[16/10] bg-[#e6faf0]">{related.image && <Image src={related.image} alt={related.imageAlt ?? related.name} fill sizes="(min-width: 768px) 31vw, 100vw" className="object-cover transition duration-300 group-hover:scale-105" />}</div><div className="p-5"><h3 className="text-xl">{related.name}</h3><p className="mt-2 text-sm text-teal-950/70">{related.shortDescription}</p><span className="mt-4 inline-block font-bold text-teal-700 underline">Read more</span></div></Link>)}</div><p className="mt-10 text-sm text-teal-950/60">Popular searches: {item.seoKeywords}.</p></section>
  </>;
}

function CategoryPage({ specialty }: { specialty: (typeof SPECIALTIES)[number] }) {
  const [slug, name, copy] = specialty;
  const schema = { "@context": "https://schema.org", "@type": "Article", headline: `${name} at Sun Tea Mix`, description: copy, mainEntityOfPage: `${SITE.url}/specialties/${slug}/` };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><section className="sun-hero sun-hero--coral py-16"><div className="wrap max-w-4xl"><p className="eyebrow">Sun Tea Mix specialty</p><h1 className="mt-3">{name} in Honolulu.</h1><p className="mt-6 text-lg text-teal-950/70">{copy}</p><div className="mt-8 flex gap-3"><a className="button primary" href={SITE.order}>Order online</a><Link className="button ghost" href="/menu/">View menu</Link></div></div></section><section className="wrap max-w-4xl py-16"><h2>Made for a bright Kakaʻako break.</h2><p className="mt-4 leading-7 text-teal-950/75">Sun Tea Mix brings together fresh fruit, tea, and playful dessert. Our café at {SITE.shortAddress} is a welcoming stop for a quick pickup, a study break, or a slow afternoon with friends.</p><p className="mt-4 leading-7 text-teal-950/75">Ask our team about current availability and customizations. For made-to-order soufflé pancakes, plan a little extra time — the result is worth it.</p></section></>;
}

export default async function Topic({ params }: { params: Promise<{ topic: string }> }) {
  const { topic } = await params;
  const item = getPopularItem(topic);
  if (item) return <PopularItemPage item={item} />;
  const specialty = SPECIALTIES.find(([slug]) => slug === topic);
  if (!specialty) notFound();
  return <CategoryPage specialty={specialty} />;
}
