import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, Check, Instagram } from "lucide-react";
import { createMetadata } from "@/data/metadata";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/data/schema";
import { FAQS } from "@/data/faqs";
import SchemaInjector from "@/components/shared/SchemaInjector";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import ThemeBtn from "@/components/shared/ThemeBtn";
import OrderButton from "@/components/shared/OrderButton";
import CallButton from "@/components/shared/CallButton";
import FAQSection from "@/components/home/FAQSection";
import { BUSINESS } from "@/data/business";

const TITLE = "Visit Sun Tea Mix | Hours, Parking & Directions in Kakaʻako";
const DESCRIPTION = "Visit Sun Tea Mix at 400 Keawe St #107 in Kakaʻako, Honolulu. Open daily 11 AM–9 PM with free guest parking. Call (808) 219-5749 or order online.";

function formatTime(t: string) {
  const [h, m] = t.split(":").map(Number);
  return `${h % 12 || 12}${m ? `:${String(m).padStart(2, "0")}` : ""} ${h >= 12 ? "PM" : "AM"}`;
}

const GOOD_TO_KNOW = [
  "Free parking for guests",
  "Wi-Fi and plenty of outlets",
  "Games for a study break",
  "Soufflé pancakes take about 20 minutes",
  "Order online for pickup",
  "Available on delivery apps",
];

export const metadata: Metadata = createMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/contact/",
  keywords: ["Sun Tea Mix hours", "Sun Tea Mix phone", "Sun Tea Mix parking", "boba Kakaako directions"],
  ogImage: "/Images/insta/5.webp",
});

export default function ContactPage() {
  const daily = BUSINESS.hours[0];
  return (
    <>
      <SchemaInjector
        schema={[
          webPageSchema({ url: "/contact/", name: TITLE, description: DESCRIPTION, primaryImage: "/Images/insta/5.webp" }),
          breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Visit Us", url: "/contact/" }]),
          faqSchema(FAQS),
        ]}
      />
      <BreadcrumbNav items={[{ name: "Home", url: "/" }, { name: "Visit Us", url: "/contact/" }]} />

      <section className="container-pad py-10 md:py-16 max-w-3xl">
        <div className="eyebrow">Hours, parking &amp; directions</div>
        <h1 className="mb-6">Visit Sun Tea Mix</h1>
        <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
          Find us at {BUSINESS.address.street} in Honolulu’s {BUSINESS.address.neighborhood} neighborhood. We are open every day
          from {formatTime(daily.open)} to {formatTime(daily.close)}. Come in and stay a while, or order online and pick up.
        </p>
        <div className="flex flex-wrap gap-3 mt-7">
          <ThemeBtn href={BUSINESS.directionsUrl} external>Get Directions</ThemeBtn>
          <OrderButton variant="secondary" />
          <CallButton />
        </div>
      </section>

      <section className="container-pad pb-12">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <div className="rounded-[var(--radius-section)] overflow-hidden border border-[var(--color-border)] min-h-[360px] bg-[var(--color-sand)]">
            <iframe title="Sun Tea Mix location map" src={BUSINESS.mapEmbed} width="100%" height="100%" style={{ border: 0, minHeight: 360 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
          </div>
          <div className="bg-[var(--color-warm-white)] rounded-[var(--radius-section)] p-8 md:p-10 border border-[var(--color-border)] grid sm:grid-cols-2 gap-8">
            <div>
              <h2 className="!text-lg mb-4" style={{ fontFamily: "var(--font-display)" }}>Contact</h2>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3"><Phone size={18} strokeWidth={2} className="call-detail-icon shrink-0 mt-0.5" aria-hidden="true" /><a href={`tel:${BUSINESS.phoneRaw}`} className="text-[var(--color-text)] link-underline">{BUSINESS.phone}</a></li>
                <li className="flex items-start gap-3"><Mail size={18} className="text-[var(--color-primary)] shrink-0 mt-0.5" aria-hidden="true" /><a href={`mailto:${BUSINESS.email}`} className="text-[var(--color-text)] link-underline break-words">{BUSINESS.email}</a></li>
                <li className="flex items-start gap-3"><MapPin size={18} className="text-[var(--color-primary)] shrink-0 mt-0.5" aria-hidden="true" /><span className="text-[var(--color-text-muted)]">{BUSINESS.address.full}</span></li>
                <li className="flex items-start gap-3"><Instagram size={18} className="text-[var(--color-primary)] shrink-0 mt-0.5" aria-hidden="true" /><a href={BUSINESS.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-[var(--color-text)] link-underline">@sunteamix808</a></li>
              </ul>
            </div>
            <div>
              <h2 className="!text-lg mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-display)" }}><Clock size={18} className="text-[var(--color-primary)]" aria-hidden="true" />Hours</h2>
              <ul className="space-y-1.5 text-sm">
                {BUSINESS.hours.map((h) => (
                  <li key={h.day} className="flex justify-between gap-4 text-[var(--color-text-muted)]"><span className="text-[var(--color-text)]">{h.day}</span><span>{formatTime(h.open)}–{formatTime(h.close)}</span></li>
                ))}
              </ul>
            </div>
            <div className="sm:col-span-2">
              <h2 className="!text-lg mb-4" style={{ fontFamily: "var(--font-display)" }}>Good to know</h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {GOOD_TO_KNOW.map((g) => (
                  <li key={g} className="flex items-start gap-3 text-sm"><Check size={18} className="text-[var(--color-primary)] shrink-0" aria-hidden="true" /><span>{g}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={FAQS} />
    </>
  );
}
