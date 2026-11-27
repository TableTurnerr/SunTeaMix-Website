import { Clock, MapPin, Sparkles } from "lucide-react";
import ThemeBtn from "../shared/ThemeBtn";
import OrderButton from "../shared/OrderButton";
import SmartImage from "../shared/SmartImage";
import HeroStatusBadge from "./HeroStatusBadge";
import { BUSINESS } from "@/data/business";

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="container-pad relative grid gap-12 lg:grid-cols-2 lg:gap-20 items-center pt-12 pb-16 md:pt-24 md:pb-28">
        <div className="animate-fade-up">
          <div className="eyebrow">{BUSINESS.slogan} · Kakaʻako, Honolulu</div>
          <h1 className="mb-7">
            Boba,{" "}
            <em
              className="text-[var(--color-primary)]"
              style={{ fontFamily: "var(--font-accent)", fontStyle: "italic", fontWeight: 400, letterSpacing: "-0.02em" }}
            >
              fruit tea
            </em>{" "}
            &amp; soufflé pancakes in Honolulu
          </h1>
          <p className="text-lg text-[var(--color-text-muted)] max-w-xl mb-10 leading-relaxed">
            Sun Tea Mix is a bright little tea café in Kakaʻako. We mix fresh fruit with real tea, top
            smoothies with our signature salted cheese foam, and make every fluffy soufflé pancake to order.
            Stay a while or order online for pickup.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            <OrderButton />
            <ThemeBtn href="/menu/" variant="secondary">See the Menu</ThemeBtn>
          </div>

          <div className="flex items-center gap-x-6 gap-y-3 flex-wrap text-sm">
            <div className="flex items-center gap-1.5 font-medium text-[var(--color-text-muted)]">
              <Clock size={16} className="text-[var(--color-primary)]" aria-hidden="true" />
              Open daily 11 AM–9 PM
            </div>
            <div className="flex items-center gap-1.5 font-medium text-[var(--color-text-muted)]">
              <MapPin size={16} className="text-[var(--color-primary)]" aria-hidden="true" />
              400 Keawe St · Free guest parking
            </div>
          </div>
        </div>

        <div className="relative animate-fade-in lg:pr-5">
          <SmartImage
            src="/Images/insta/1.webp"
            alt="A layered strawberry and mango drink held up inside the Sun Tea Mix café in Kakaʻako"
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="aspect-[4/5] rounded-[28px] border-4 border-white shadow-[0_30px_80px_-30px_rgba(10,89,100,0.42)]"
          />

          <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/35 bg-[rgba(8,43,48,0.86)] px-4 py-3 text-white shadow-lg backdrop-blur-sm md:inset-x-6 md:bottom-6 md:px-5">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--color-gold)] text-[var(--color-text)]">
                <Sparkles size={19} strokeWidth={2.2} aria-hidden="true" />
              </div>
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/65">Our best seller</div>
                <div className="text-sm font-semibold">Strawberry Lime Tea, made with fresh fruit</div>
              </div>
            </div>
          </div>

          <HeroStatusBadge />

          <div className="hidden md:flex absolute -top-6 -right-6 bg-[var(--color-primary)] text-white rounded-full w-28 h-28 items-center justify-center text-center px-4 shadow-[var(--shadow-lift)]">
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] opacity-90">Made to order</div>
              <div className="text-sm mt-1 italic" style={{ fontFamily: "var(--font-accent)", fontWeight: 500 }}>
                Soufflé pancakes
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
