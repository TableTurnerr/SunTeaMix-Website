import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { POPULAR_ITEMS } from "@/data/site";

export const metadata: Metadata = {
  title: "Specialties | Boba, Fruit Tea & Soufflé Pancakes",
  description: "Explore Sun Tea Mix's popular DoorDash menu items in Honolulu.",
  alternates: { canonical: "/specialties/" },
};

export default function Specialties() {
  return <>
    <section className="sun-hero sun-hero--coral py-16">
      <div className="wrap">
        <p className="eyebrow">Sun Tea Mix specialties</p>
        <h1 className="mt-3">The flavors people come back for.</h1>
        <p className="mt-5 max-w-3xl text-lg text-teal-950/70">Explore the items DoorDash currently marks as Most Ordered and Most liked.</p>
      </div>
    </section>
    <section className="wrap py-16">
      <div className="flex flex-wrap items-end justify-between gap-4"><div><p className="eyebrow">Popular menu items</p><h2 className="mt-2">Most Ordered and Most liked.</h2></div><p className="max-w-md text-teal-950/70">Only Sun Tea Mix’s current popular items are featured here.</p></div>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{POPULAR_ITEMS.map((item) => { const rank = item.category.match(/#(\d+)/)?.[1]; return <Link className="card group overflow-hidden !p-0" href={`/specialties/${item.slug}/`} key={item.slug}><div className="relative aspect-[4/3] overflow-hidden bg-[#e6faf0]">{item.image && <Image src={item.image} alt={item.imageAlt ?? item.name} fill sizes="(min-width: 1024px) 31vw, (min-width: 768px) 47vw, 100vw" className="object-cover transition duration-300 group-hover:scale-105" />}{rank && <span aria-label={`Rank ${rank}`} className="absolute bottom-3 left-3 rounded-md bg-teal-950 px-3 py-1.5 text-sm font-black tracking-wide text-white shadow-lg">#{rank}</span>}</div><div className="p-6"><p className="text-sm font-bold uppercase tracking-wider text-teal-700">{item.category.split(" · ")[0]}</p><h3 className="mt-2 text-2xl">{item.name}</h3><p className="mt-3 text-teal-950/70">{item.shortDescription}</p></div></Link>; })}</div>
    </section>
  </>;
}
