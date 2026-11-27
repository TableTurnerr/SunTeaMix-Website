"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X, ArrowUpRight } from "lucide-react";
import SmartImage from "../shared/SmartImage";
import { BUSINESS } from "@/data/business";

// Sun Tea Mix's own Instagram and product photos.
const IMAGES = [
  { src: "/Images/insta/6.webp", caption: "Drinks & soufflé for the table", alt: "Four Sun Tea Mix drinks with brown sugar boba and crème brûlée soufflé pancakes inside the café" },
  { src: "/Images/insta/4.webp", caption: "Watermelon smoothie", alt: "Sun Tea Mix Watermelon Smoothie topped with cheese foam next to fresh watermelon" },
  { src: "/Images/insta/3.webp", caption: "Fruit drinks & desserts", alt: "Strawberry and mango drinks with dessert cups and a soufflé pancake at Sun Tea Mix" },
  { src: "/Images/ProductImg_MangoMilk.webp", caption: "Fresh mango", alt: "A Sun Tea Mix mango drink with fresh mango chunks on top" },
];

export default function Gallery() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const close = useCallback(() => setLightboxIdx(null), []);
  const next = useCallback(() => setLightboxIdx((i) => (i === null ? null : (i + 1) % IMAGES.length)), []);
  const prev = useCallback(() => setLightboxIdx((i) => (i === null ? null : (i - 1 + IMAGES.length) % IMAGES.length)), []);
  useEffect(() => {
    if (lightboxIdx === null) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); if (e.key === "ArrowRight") next(); if (e.key === "ArrowLeft") prev(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIdx, close, next, prev]);

  return (
    <section className="section-pad">
      <div className="container-pad">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <div className="eyebrow">@sunteamix808</div>
          <h2 className="mb-4">Fresh from our Instagram.</h2>
          <p className="text-[var(--color-text-muted)]">New drinks, seasonal specials and a peek inside the café. Follow along for what is fresh this week.</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {IMAGES.map((image, index) => (
            <button type="button" key={image.src} onClick={() => setLightboxIdx(index)} className="relative aspect-square overflow-hidden rounded-2xl border border-[var(--color-border)] group">
              <SmartImage src={image.src} alt={image.alt} className="h-full w-full" imgClassName="gallery-img" />
              <span className="absolute inset-x-0 bottom-0 p-3 text-left text-sm text-white opacity-0 group-hover:opacity-100 bg-gradient-to-t from-black/80 to-transparent transition-opacity">{image.caption}</span>
            </button>
          ))}
        </div>
        <div className="text-center mt-10">
          <a href={BUSINESS.socials.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold link-underline">
            Follow @sunteamix808 on Instagram <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
      {lightboxIdx !== null && (
        <div role="dialog" aria-modal="true" aria-label="Sun Tea Mix photo gallery" onClick={close} className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <button type="button" onClick={close} aria-label="Close gallery" className="absolute top-5 right-5 text-white"><X /></button>
          <button type="button" onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous photo" className="absolute left-4 text-white"><ChevronLeft size={32} /></button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={IMAGES[lightboxIdx].src} alt={IMAGES[lightboxIdx].alt} className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg" />
          <button type="button" onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next photo" className="absolute right-4 text-white"><ChevronRight size={32} /></button>
        </div>
      )}
    </section>
  );
}
