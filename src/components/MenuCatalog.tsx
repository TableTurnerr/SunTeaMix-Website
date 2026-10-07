"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type MenuItem = {
  name: string;
  price: string;
  description?: string;
  popularity?: string;
  image?: string;
};

type MenuCategory = {
  name: string;
  items: readonly MenuItem[];
};

function ProductImage({ item, className = "" }: { item: MenuItem; className?: string }) {
  return <div className={`relative overflow-hidden bg-[#e6faf0] ${className}`}>
    {item.image ? <Image src={item.image} alt={item.name} fill sizes="(min-width: 768px) 38vw, 100vw" className="object-cover" /> : <span role="img" aria-label={`Product image wireframe for ${item.name}`} className="grid h-full w-full place-items-center bg-slate-200/55"><svg aria-hidden="true" viewBox="0 0 120 180" className="h-[82%] w-[58%] max-w-36 text-slate-400" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M67 8L75 33" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /><path d="M10 34H110" stroke="currentColor" strokeWidth="4" strokeLinecap="round" /><path d="M16 40H104L88 166H32L16 40Z" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" /><path d="M25 96H95" stroke="currentColor" strokeWidth="2" strokeOpacity="0.6" /></svg></span>}
  </div>;
}

export default function MenuCatalog({ menu, orderUrl }: { menu: readonly MenuCategory[]; orderUrl: string }) {
  const [selected, setSelected] = useState<(MenuItem & { category: string }) | null>(null);

  useEffect(() => {
    if (!selected) return;
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") setSelected(null); };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selected]);

  return <>
    <div className="mt-14 grid gap-5 md:grid-cols-2">
      {menu.map((category) => <section className="card" key={category.name}>
        <h2 className="text-3xl">{category.name}</h2>
        <p className="mt-2 text-sm text-teal-950/60">Select an item to see the full details and photo.</p>
        <ul className="mt-5 space-y-3">
          {category.items.map((item) => <li key={item.name}>
            <button type="button" onClick={() => setSelected({ ...item, category: category.name })} className="group grid w-full grid-cols-[4.75rem_1fr] gap-3 rounded-xl border border-teal-950/10 p-2 text-left transition hover:border-teal-700 hover:bg-[#e6faf0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700">
              <ProductImage item={item} className="aspect-square rounded-lg" />
              <span className="min-w-0 self-center"><span className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1"><span className="font-bold text-teal-950">{item.name}</span><span className="font-bold text-teal-950">{item.price}</span></span>{item.description && <span className="mt-1 block line-clamp-2 text-sm text-teal-950/70">{item.description}</span>}{item.popularity && <span className="mt-1 block text-xs font-bold text-teal-700">{item.popularity}</span>}<span className="mt-2 block text-xs font-bold text-teal-700 underline">View details</span></span>
            </button>
          </li>)}
        </ul>
      </section>)}
    </div>

    {selected && <div className="fixed inset-0 z-[100] grid place-items-center bg-teal-950/70 p-4" role="presentation" onMouseDown={() => setSelected(null)}>
      <section role="dialog" aria-modal="true" aria-labelledby="product-dialog-title" className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-[#fffdf7] shadow-2xl" onMouseDown={(event) => event.stopPropagation()}>
        <div className="grid md:grid-cols-2"><ProductImage item={selected} className="min-h-72 md:min-h-full md:rounded-l-3xl" /><div className="p-6 sm:p-8"><div className="flex items-start justify-between gap-4"><p className="eyebrow">{selected.category}</p><button type="button" aria-label="Close product details" onClick={() => setSelected(null)} className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-teal-950/15 text-xl font-bold text-teal-950 transition hover:bg-[#e6faf0]">×</button></div><h2 id="product-dialog-title" className="mt-3 text-3xl">{selected.name}</h2><p className="mt-3 text-xl font-black text-teal-700">{selected.price}</p>{selected.popularity && <p className="mt-3 inline-block rounded-full bg-[#fff5d6] px-3 py-1 text-sm font-bold text-teal-800">{selected.popularity}</p>}<p className="mt-5 leading-7 text-teal-950/75">{selected.description ?? `Ask the Sun Tea Mix team about today’s preparation and customization options for ${selected.name}.`}</p><p className="mt-5 text-sm text-teal-950/60">Availability and customization options may vary. Please confirm dietary needs and topping preferences with the team.</p><div className="mt-7 flex flex-wrap gap-3"><a className="button primary" href={orderUrl}>Order online</a><button type="button" onClick={() => setSelected(null)} className="button ghost">Continue browsing</button></div></div></div>
      </section>
    </div>}
  </>;
}
