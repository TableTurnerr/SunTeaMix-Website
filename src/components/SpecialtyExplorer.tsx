"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type MenuItem = { name: string; price: string; description?: string; popularity?: string; image?: string };
type MenuCategory = { name: string; items: readonly MenuItem[] };
type Specialty = readonly [string, string, string];

const referenceImages: Record<string, string> = {
  "Soufflé Pancake": "/Images/ProductImg_CremeBruleeSouffle.webp",
  "Sun Tea Special": "/Images/ProductImg_MangoCharm.webp",
  "Fruit Iced Tea": "/Images/ProductImg_TropicalLavaFlow.webp",
  "Smoothie w/ Cheese Foam": "/Images/ProductImg_MangoSmoogurt.webp",
  "Milk Tea": "/Images/ProductImg_ClassicMilkTea.webp",
  "Fresh Milk": "/Images/ProductImg_ClassicMilkTea.webp",
  "Pure Fruit Milkshake": "/Images/ProductImg_MangoSmoogurt.webp",
  "Pure Tea": "/Images/ProductImg_TropicalLavaFlow.webp",
  CoCo: "/Images/ProductImg_MangoSmoogurt.webp",
};

function ProductPhoto({ item, category, className = "" }: { item: MenuItem; category: string; className?: string }) {
  const isReference = !item.image;
  return <div className={`relative overflow-hidden bg-[#e6faf0] ${className}`}>
    <Image src={item.image ?? referenceImages[category]} alt={isReference ? `Reference image for ${item.name}` : item.name} fill sizes="(min-width: 768px) 28vw, 100vw" className="object-cover" />
    {isReference && <span className="absolute bottom-2 left-2 rounded-full bg-teal-950/85 px-2 py-1 text-[.62rem] font-bold uppercase tracking-wide text-white">Reference photo</span>}
  </div>;
}

export default function SpecialtyExplorer({ specialties, menu, orderUrl }: { specialties: readonly Specialty[]; menu: readonly MenuCategory[]; orderUrl: string }) {
  const [openSpecialty, setOpenSpecialty] = useState<Specialty | null>(null);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const category = openSpecialty ? menu.find((entry) => entry.name === openSpecialty[1]) : undefined;

  useEffect(() => {
    if (!openSpecialty) return;
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") { setSelectedItem(null); setOpenSpecialty(null); } };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [openSpecialty]);

  function close() { setSelectedItem(null); setOpenSpecialty(null); }

  return <>
    <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{specialties.map((specialty) => {
      const [slug, name, copy] = specialty;
      const matchingCategory = menu.find((entry) => entry.name === name);
      return <button className="card group text-left transition hover:-translate-y-1 hover:border-teal-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700" type="button" onClick={() => setOpenSpecialty(specialty)} key={slug}><p className="text-sm font-bold uppercase tracking-wider text-teal-700">{matchingCategory?.items.length ?? 0} menu items</p><h3 className="mt-2 text-2xl">{name}</h3><p className="mt-3 text-teal-950/70">{copy}</p><span className="mt-5 inline-block font-bold text-teal-700 underline">Explore products</span></button>;
    })}</div>

    {openSpecialty && category && <div className="fixed inset-0 z-[100] grid place-items-center bg-teal-950/70 p-4" role="presentation" onMouseDown={close}>
      <section role="dialog" aria-modal="true" aria-labelledby="specialty-dialog-title" className="max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-3xl bg-[#fffdf7] shadow-2xl" onMouseDown={(event) => event.stopPropagation()}>
        {selectedItem ? <div className="grid md:grid-cols-2"><ProductPhoto item={selectedItem} category={category.name} className="min-h-72 md:min-h-full md:rounded-l-3xl" /><div className="p-6 sm:p-8"><div className="flex items-start justify-between gap-4"><button type="button" onClick={() => setSelectedItem(null)} className="text-sm font-bold text-teal-700 underline">← All {category.name}</button><button type="button" aria-label="Close product details" onClick={close} className="grid h-9 w-9 place-items-center rounded-full border border-teal-950/15 text-xl font-bold text-teal-950 hover:bg-[#e6faf0]">×</button></div><p className="eyebrow mt-6">{category.name}</p><h2 className="mt-2 text-3xl">{selectedItem.name}</h2><p className="mt-3 text-xl font-black text-teal-700">{selectedItem.price}</p>{selectedItem.popularity && <p className="mt-3 inline-block rounded-full bg-[#fff5d6] px-3 py-1 text-sm font-bold text-teal-800">{selectedItem.popularity}</p>}<p className="mt-5 leading-7 text-teal-950/75">{selectedItem.description ?? `Ask the Sun Tea Mix team about today’s preparation and customization options for ${selectedItem.name}.`}</p><div className="mt-7 flex flex-wrap gap-3"><a className="button primary" href={orderUrl}>Order online</a><button type="button" className="button ghost" onClick={() => setSelectedItem(null)}>Back to products</button></div></div></div> : <div className="p-6 sm:p-8"><div className="flex items-start justify-between gap-4"><div><p className="eyebrow">Sun Tea Mix speciality</p><h2 id="specialty-dialog-title" className="mt-2 text-3xl">{category.name}</h2><p className="mt-3 max-w-2xl text-teal-950/70">{openSpecialty[2]}</p></div><button type="button" aria-label="Close specialty products" onClick={close} className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-teal-950/15 text-xl font-bold text-teal-950 hover:bg-[#e6faf0]">×</button></div><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{category.items.map((item) => <button type="button" onClick={() => setSelectedItem(item)} className="group overflow-hidden rounded-2xl border border-teal-950/10 bg-white text-left transition hover:border-teal-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700" key={item.name}><ProductPhoto item={item} category={category.name} className="aspect-[4/3]" /><span className="block p-4"><span className="flex justify-between gap-3"><span className="font-bold text-teal-950">{item.name}</span><span className="shrink-0 font-bold text-teal-700">{item.price}</span></span><span className="mt-2 block text-sm text-teal-950/70">{item.description ?? "View product details and current availability."}</span><span className="mt-3 block text-sm font-bold text-teal-700 underline">View item</span></span></button>)}</div><div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-teal-950/10 pt-6"><Link href={`/specialties/${openSpecialty[0]}/`} className="font-bold text-teal-700 underline">Read the {category.name} guide</Link><a className="button primary" href={orderUrl}>Order online</a></div></div>}
      </section>
    </div>}
  </>;
}
