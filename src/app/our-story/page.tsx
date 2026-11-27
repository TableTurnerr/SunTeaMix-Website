import type { Metadata } from "next";
import { Check, Citrus, Users, Sparkles, Sun } from "lucide-react";
import { createMetadata } from "@/data/metadata";
import { articleSchema, breadcrumbSchema, webPageSchema } from "@/data/schema";
import { BUSINESS } from "@/data/business";
import SchemaInjector from "@/components/shared/SchemaInjector";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import ThemeBtn from "@/components/shared/ThemeBtn";
import OrderButton from "@/components/shared/OrderButton";
import SmartImage from "@/components/shared/SmartImage";
import QuoteCTA from "@/components/shared/QuoteCTA";

const HEADLINE = "Fresh flavors that bring people together.";
const TITLE = "Our Story | Sun Tea Mix, Kakaʻako Tea & Dessert Café";
const DESCRIPTION =
  "Meet Sun Tea Mix, the Kakaʻako tea café serving real-fruit tea, Hong Kong–style milk tea and made-to-order soufflé pancakes in Honolulu since 2020.";

const VALUES = [
  { icon: Users, title: "Bring people together", text: "A bright, calm café where friends, families and students can sit, sip and stay a while." },
  { icon: Citrus, title: "Use real fruit", text: "Fresh strawberry, mango, lime, lilikoi and pineapple go into our fruit teas and smoothies." },
  { icon: Sparkles, title: "Make it fresh", text: "Soufflé pancakes are cooked to order, so every one reaches the table light and warm." },
];

export const metadata: Metadata = createMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/our-story/",
  keywords: ["Sun Tea Mix story", "Kakaako tea cafe", "Honolulu boba shop", "tea cafe Honolulu"],
  ogImage: "/Images/insta/5.webp",
});

export default function OurStoryPage() {
  return (
    <>
      <SchemaInjector
        schema={[
          breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Our Story", url: "/our-story/" }]),
          webPageSchema({ url: "/our-story/", name: TITLE, description: DESCRIPTION, primaryImage: "/Images/insta/5.webp" }),
          articleSchema({ url: "/our-story/", headline: HEADLINE, description: DESCRIPTION, image: "/Images/insta/5.webp", authorName: BUSINESS.owner }),
        ]}
      />
      <BreadcrumbNav items={[{ name: "Home", url: "/" }, { name: "Our Story", url: "/our-story/" }]} />

      <section className="story-hero">
        <div className="container-pad story-hero__grid">
          <div className="story-hero__copy">
            <div className="eyebrow">The Sun Tea Mix story</div>
            <h1>{HEADLINE}</h1>
            <p className="story-hero__lead">
              Sun Tea Mix was founded in 2020 with a simple mission: bring people together through fresh flavors, use real
              fruit, and serve the fluffiest soufflé pancakes in Honolulu.
            </p>
            <div className="story-hero__facts" aria-label="Sun Tea Mix highlights">
              <span><Check aria-hidden="true" /> Founded in 2020</span>
              <span><Check aria-hidden="true" /> Kakaʻako, Honolulu</span>
            </div>
            <div className="flex flex-wrap gap-3 mt-8">
              <OrderButton />
              <ThemeBtn href="/menu/" variant="secondary">See the Menu</ThemeBtn>
            </div>
          </div>
          <div className="story-hero__visual">
            <SmartImage src="/Images/insta/5.webp" alt="Inside Sun Tea Mix: a milk tea in front of the lit cup logo sign and guests at tables" priority sizes="(min-width: 1024px) 50vw, 100vw" className="story-hero__image" />
            <div className="story-hero__badge"><Sun aria-hidden="true" /><span>Made fresh<br /><strong>every day</strong></span></div>
          </div>
        </div>
      </section>

      <section className="story-intro section-pad">
        <div className="container-pad story-intro__grid">
          <div><div className="eyebrow">A neighborhood favorite</div><h2>From a quick boba run to a long study session.</h2></div>
          <div className="story-intro__body">
            <p>
              From students at nearby colleges to visitors hunting for Honolulu’s best desserts, Sun Tea Mix has become a stop
              for anyone searching for boba near them or soufflé pancakes in Honolulu.
            </p>
            <p>
              Guests tell us they love the calm, bright room, the Wi-Fi and outlets, and the games for a break. Our menu
              keeps growing too, from the best-selling Strawberry Lime Tea to Mango Charm and Hong Kong–style Classic Milk Tea.
            </p>
          </div>
        </div>
      </section>

      <section className="story-values section-pad">
        <div className="container-pad">
          <div className="story-section-heading"><div><div className="eyebrow">What guides us</div><h2>Three simple promises.</h2></div><p>The same ideas we started with in 2020 still shape every cup and every plate.</p></div>
          <div className="story-values__grid">
            {VALUES.map(({ icon: Icon, title, text }) => (
              <article className="story-value" key={title}><div className="story-value__icon"><Icon aria-hidden="true" /></div><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="story-work section-pad">
        <div className="container-pad story-work__grid">
          <div className="story-work__photos">
            <SmartImage src="/Images/insta/6.webp" alt="Sun Tea Mix drinks and soufflé pancakes on a sunny table inside the café" sizes="(min-width: 1024px) 21vw, 48vw" className="story-work__photo story-work__photo--one" />
            <SmartImage src="/Images/ProductImg_StrawberrySoufflePancakes.webp" alt="Strawberry Soufflé pancakes with fresh berries" sizes="(min-width: 1024px) 17vw, 40vw" className="story-work__photo story-work__photo--two" />
            <div className="story-work__caption">Real fruit. Fresh soufflé.<br /><strong>Every single order.</strong></div>
          </div>
          <div className="story-work__copy">
            <div className="eyebrow">Care in every cup</div><h2>Small details, big flavor.</h2>
            <p>
              Fresh strawberry slices and lime wedges on a Strawberry Lime Tea. A cap of salted cheese foam on a smoothie.
              A soufflé pancake cooked only when you order it. These little choices are what make a visit to Sun Tea Mix feel special.
            </p>
            <ul>
              <li><Check aria-hidden="true" /> Fruit tea, milk tea, smoothies and fresh milk</li>
              <li><Check aria-hidden="true" /> Soufflé pancakes and CoCo coconut desserts</li>
              <li><Check aria-hidden="true" /> Open every day, 11 AM to 9 PM</li>
            </ul>
          </div>
        </div>
      </section>
      <QuoteCTA />
    </>
  );
}
