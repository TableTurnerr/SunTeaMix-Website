import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Our Story | Honolulu Bubble Tea & Dessert Café",
  description:
    "The story of Sun Tea Mix: a Kakaʻako café opened in 2020 around real fruit, comforting tea, and made-to-order soufflé pancakes.",
  alternates: { canonical: "/our-story/" },
};

const chapters = [
  {
    number: "01",
    title: "A little more sunshine in the day",
    text: "Sun Tea Mix opened in 2020 with an uncomplicated hope: make the kind of drinks and desserts that give people a reason to pause. Tea has always been a small ritual — a familiar order, a quick reset, a way to catch up — and we wanted to make that ritual feel a little brighter.",
  },
  {
    number: "02",
    title: "Built around the mix",
    text: "Our name is a promise to keep things playful. It is in the contrast of creamy milk tea and chewy boba, in fruit and tea coming together over ice, and in a dessert menu that asks guests to slow down. Familiar favorites sit beside tropical, fruit-forward combinations made for a Honolulu afternoon.",
  },
  {
    number: "03",
    title: "Made to share",
    text: "A café becomes part of a neighborhood one visit at a time. At our Keawe Street counter, students take a study break, coworkers meet after work, and visitors discover a new favorite. Those ordinary, happy moments are the story we are still writing every day.",
  },
] as const;

export default function OurStoryPage() {
  return (
    <>
      <section className="sun-hero sun-hero--story text-white">
        <div className="wrap grid gap-12 py-14 md:py-20 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-16">
          <div className="relative z-10 max-w-xl">
            <p className="text-xs font-extrabold tracking-[.22em] text-[#d9f0f5] uppercase">Our story · since 2020</p>
            <h1 className="mt-5 text-balance font-serif text-[clamp(3.3rem,7vw,6.6rem)] leading-[.92] tracking-[-.055em] text-white">
              Made for the in-between moments.
            </h1>
            <p className="mt-7 max-w-lg text-lg leading-8 text-white/75">
              Sun Tea Mix began with a love for the small rituals that bring people together: a cool cup of tea, a shared dessert, and an unhurried table in the middle of the city.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link className="button bg-[#d9f0f5] !text-teal-950 hover:bg-[#b8dce3]" href="/menu/">
                Find your favorite
              </Link>
              <a className="text-sm font-bold text-white underline decoration-[#92c4ca] decoration-2 underline-offset-4" href={SITE.map}>
                Visit us in Kakaʻako
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[660px] pb-8 sm:pb-12 lg:pb-16">
            <div className="relative aspect-[1.2/1] overflow-hidden rounded-[2rem] border border-white/15 bg-[#0a282a] shadow-2xl shadow-black/30">
              <Image src="/Images/featuring/1.webp" alt="A Sun Tea Mix drink on a café table" fill priority sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover" />
            </div>
            <div className="absolute -bottom-1 left-4 w-[39%] overflow-hidden rounded-[1.45rem] border-4 border-[#123f42] bg-[#f6d87c] shadow-xl sm:left-9">
              <div className="relative aspect-square">
                <Image src="/Images/ProductImg_MangoCharm.webp" alt="Mango Charm from Sun Tea Mix" fill sizes="(max-width: 640px) 38vw, 250px" className="object-cover" />
              </div>
            </div>
            <p className="absolute right-2 -bottom-1 max-w-[44%] text-right text-[.68rem] leading-4 font-bold tracking-[.13em] text-white/70 uppercase sm:right-5 sm:text-xs">
              One bright stop<br />on Keawe Street
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#fff9ed] py-18 md:py-24">
        <div className="wrap grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
          <div>
            <p className="eyebrow">The beginning</p>
            <h2 className="mt-3 max-w-md">A neighborhood café with a sunny point of view.</h2>
          </div>
          <div className="max-w-2xl space-y-5 text-lg text-teal-950/75">
            <p>
              When Sun Tea Mix opened its doors in 2020, Kakaʻako was already a place in motion. We saw room for a café that could move at its own pace: quick enough for a takeout tea, inviting enough for a long conversation, and always generous with color and flavor.
            </p>
            <p>
              The menu grew from that feeling. Real fruit, classic tea, creamy toppings, and airy soufflé pancakes each bring something different to the table — but they all share the same intention: make an everyday break feel like a treat.
            </p>
          </div>
        </div>
      </section>

      <section className="wrap py-18 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_.94fr] lg:items-center lg:gap-18">
          <div className="max-w-xl">
            <p className="eyebrow">What has stayed true</p>
            <h2 className="mt-3">More than a bubble tea café.</h2>
            <p className="mt-6 text-lg text-teal-950/75">
              Sun Tea Mix is Honolulu&apos;s home for creativity, community, and desserts you will remember. From the start, our mission has been simple: make space for people to connect through bright flavors and a little everyday joy.
            </p>
            <ul className="mt-7 grid gap-3 text-teal-950/80">
              {[
                "Bring people together through fresh flavors.",
                "Use real fruit in the drinks we make.",
                "Serve the fluffiest soufflé pancakes in Honolulu.",
              ].map((promise) => (
                <li className="flex items-start gap-3" key={promise}>
                  <span aria-hidden="true" className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#ffc640] text-xs text-teal-950">☀</span>
                  <span className="font-bold">{promise}</span>
                </li>
              ))}
            </ul>
            <p className="mt-7 text-teal-950/70">
              From nearby college students to Waikīkī visitors looking for a memorable dessert stop, we are proud to be a welcoming part of a Honolulu day.
            </p>
          </div>
          <figure className="relative overflow-hidden rounded-[2rem] bg-[#d6ebe4] shadow-xl shadow-teal-950/10">
            <div className="relative aspect-square">
              <Image src="/Images/featuring/4.webp" alt="The Sun Tea Mix counter in Kakaʻako" fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
            </div>
            <figcaption className="absolute bottom-5 left-5 rounded-full bg-[#fff9ed]/95 px-4 py-2 text-xs font-extrabold tracking-[.12em] text-teal-950 uppercase shadow-sm">
              Our Kakaʻako counter
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="wrap py-18 md:py-24">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">How the story unfolds</p>
            <h2 className="mt-3">Not a rush. A rhythm.</h2>
          </div>
          <p className="max-w-sm text-teal-950/65">Three ideas that have guided us from the first cup to the next shared plate.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {chapters.map((chapter) => (
            <article className="rounded-[1.6rem] border border-teal-950/10 bg-white p-7 shadow-[0_12px_35px_rgba(23,56,58,.06)]" key={chapter.number}>
              <p className="font-serif text-4xl tracking-[-.06em] text-[#f56855]">{chapter.number}</p>
              <h3 className="mt-8 text-[1.75rem] leading-tight">{chapter.title}</h3>
              <p className="mt-4 text-teal-950/70">{chapter.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="overflow-hidden bg-[#e6faf0] py-18 md:py-24">
        <div className="wrap grid gap-10 lg:grid-cols-[1fr_.9fr] lg:items-center lg:gap-18">
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <div className="relative mt-10 aspect-[.82/1] overflow-hidden rounded-[1.75rem] bg-[#ffc640] shadow-lg shadow-teal-950/10">
              <Image src="/Images/ProductImg_StrawberryLimeTea.webp" alt="Strawberry Lime Tea made by Sun Tea Mix" fill sizes="(max-width: 1024px) 46vw, 30vw" className="object-cover" />
            </div>
            <div className="relative aspect-[.82/1] overflow-hidden rounded-[1.75rem] bg-[#f56855] shadow-lg shadow-teal-950/10">
              <Image src="/Images/ProductImg_StrawberrySoufflePancakes.webp" alt="Strawberry soufflé pancake from Sun Tea Mix" fill sizes="(max-width: 1024px) 46vw, 30vw" className="object-cover" />
            </div>
          </div>
          <div className="max-w-xl lg:pl-6">
            <p className="eyebrow">The table is waiting</p>
            <h2 className="mt-3">Come as you are. Stay for something sweet.</h2>
            <p className="mt-6 text-lg text-teal-950/75">
              Whether you know exactly what you want or you are here to try something new, we hope Sun Tea Mix becomes one of your Honolulu traditions. Bring a friend, choose a new flavor, and leave with a little more sunshine than you came in with.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="button primary" href={SITE.order}>Order online</a>
              <Link className="button ghost" href="/menu/">Explore the menu</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
