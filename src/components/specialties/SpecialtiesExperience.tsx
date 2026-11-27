"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, MapPin, Navigation, X } from "lucide-react";
import CallButton from "@/components/shared/CallButton";
import { BUSINESS } from "@/data/business";
import type { Specialty } from "@/data/specialties";
import type { ServiceCategory } from "@/data/services";

type Props = {
  specialties: Specialty[];
  serviceCategories: ServiceCategory[];
  phone: string;
  phoneRaw: string;
  quoteUrl: string;
  address: string;
};

export default function SpecialtiesExperience({
  specialties,
  serviceCategories,
  phone,
  phoneRaw,
  quoteUrl,
  address,
}: Props) {
  const [active, setActive] = useState(specialties[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setShowPrompt(true), 1100);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <section className="specialties-hero">
        <div className="container-pad specialties-hero__grid">
          <div className="specialties-hero__copy">
            <div className="eyebrow">Guest favorites</div>
            <h1 className="mb-6">Soufflé pancakes, boba &amp; real fruit tea in Honolulu.</h1>
            <p className="text-lg text-[var(--color-text-muted)] max-w-xl">
              These are the things people come to Sun Tea Mix for. Tap a favorite to learn what makes it
              special, see what is on the menu, and find out how to order.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <button type="button" className="btn-primary" onClick={() => setIsOpen(true)}>
                Help me choose <ArrowRight size={16} aria-hidden="true" />
              </button>
              <CallButton phone={phone} phoneRaw={phoneRaw} />
            </div>
            <div className="specialties-hero__trust">
              <span>Open daily 11 AM–9 PM</span><i /> <span>Kakaʻako, Honolulu</span>
            </div>
          </div>

          <div className="specialties-montage" aria-label="Sun Tea Mix favorites">
            {specialties.slice(0, 6).map((specialty, index) => specialty.image && (
              <button
                type="button"
                key={specialty.slug}
                onClick={() => { setActive(specialty); setIsOpen(true); }}
                className={`specialties-montage__tile specialties-montage__tile--${index + 1}`}
                aria-label={`Explore ${specialty.name}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={specialty.image} alt="" />
                <span>{specialty.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="specialties-featured" aria-labelledby="featured-services-title">
        <div className="container-pad py-14 md:py-20">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-10">
            <div className="max-w-2xl">
              <div className="eyebrow">On the menu</div>
              <h2 id="featured-services-title">Nine ways to treat yourself.</h2>
            </div>
            <Link href="/menu/" className="link-underline font-semibold text-sm w-fit">See the full menu <ArrowRight size={15} /></Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {serviceCategories.map((category) => (
              <Link key={category.id} href={`/menu/${category.id}/`} className="featured-service-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={category.image} alt="" />
                <div className="featured-service-card__body">
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                  <ul>
                    {category.items.slice(0, 3).map((item) => <li key={item.name}>{item.name}</li>)}
                  </ul>
                  <span>See items <ArrowRight size={15} /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container-pad py-14 md:py-24" id="specialties">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-10">
          <div className="max-w-2xl">
            <div className="eyebrow">Explore favorites</div>
            <h2>What are you in the mood for?</h2>
          </div>
          <button type="button" className="link-underline font-semibold text-sm w-fit" onClick={() => setIsOpen(true)}>
            Not sure? We’ll help you pick <ArrowRight size={15} />
          </button>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {specialties.map((specialty) => (
            <Link key={specialty.slug} href={`/specialties/${specialty.slug}/`} className="specialty-card">
              {specialty.image && <img src={specialty.image} alt="" />}
              <div className="specialty-card__shade" />
              <div className="specialty-card__content">
                <span>{specialty.heroEyebrow}</span>
                <h3>{specialty.name}</h3>
                <div className="specialty-card__link">Explore <ArrowRight size={15} /></div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-pad pb-14 md:pb-24">
        <div className="specialties-map">
          <div className="specialties-map__panel">
            <div className="eyebrow">Find us</div>
            <h2>In the heart of Kakaʻako.</h2>
            <p>{address}. Free parking for guests, open every day from 11 AM to 9 PM.</p>
            <div className="flex flex-wrap items-center gap-3 mt-7">
              <a className="inline-flex items-center gap-2 font-semibold text-sm" target="_blank" rel="noreferrer" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}>
                <Navigation size={16} aria-hidden="true" /> Get directions <ArrowRight size={15} aria-hidden="true" />
              </a>
              <CallButton phone={phone} phoneRaw={phoneRaw} compact />
            </div>
          </div>
          <div className="specialties-map__frame">
            <iframe
              title="Sun Tea Mix location map"
              src={BUSINESS.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="specialties-map__label"><MapPin size={15} /> 400 Keawe St, Honolulu</div>
          </div>
        </div>
      </section>

      {showPrompt && (
        <button type="button" className="specialties-prompt" onClick={() => setIsOpen(true)}>
          <span className="specialties-prompt__pulse" />
          <span><strong>Can’t decide?</strong><small>Help me pick a treat</small></span>
          <ArrowRight size={18} aria-hidden="true" />
          <span className="sr-only">Open favorites finder</span>
        </button>
      )}

      {isOpen && (
        <div className="specialties-modal" role="dialog" aria-modal="true" aria-labelledby="favorites-finder-title" onMouseDown={() => setIsOpen(false)}>
          <div className="specialties-modal__card" onMouseDown={(event) => event.stopPropagation()}>
            <button type="button" className="specialties-modal__close" aria-label="Close favorites finder" onClick={() => setIsOpen(false)}><X size={20} /></button>
            <div className="eyebrow">Quick picker</div>
            <h2 id="favorites-finder-title">What sounds good?</h2>
            <p>Pick a favorite to see the details, or go straight to online ordering.</p>
            <div className="specialties-modal__services">
              {specialties.map((specialty) => (
                <Link key={specialty.slug} href={`/specialties/${specialty.slug}/`} onClick={() => setIsOpen(false)}>
                  <span>{specialty.name}</span><ArrowRight size={17} />
                </Link>
              ))}
            </div>
            <a href={quoteUrl} target="_blank" rel="noopener noreferrer" className="btn-primary mt-6" onClick={() => setIsOpen(false)}>Order online <ArrowRight size={16} /></a>
          </div>
        </div>
      )}
    </>
  );
}
