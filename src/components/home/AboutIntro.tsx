import SmartImage from "../shared/SmartImage";
import ThemeBtn from "../shared/ThemeBtn";

export default function AboutIntro() {
  return (
    <section className="section-pad">
      <div className="container-pad grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="card-img rounded-[28px] overflow-hidden aspect-[4/3] lg:aspect-square">
          <SmartImage
            src="/Images/insta/5.webp"
            alt="Guests relaxing inside the Sun Tea Mix café under the lit cup logo sign"
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="w-full h-full"
          />
        </div>

        <div>
          <div className="eyebrow">A Kakaʻako hangout</div>
          <h2 className="mb-5">Fresh flavors, and a place to slow down.</h2>
          <div className="space-y-4 text-[var(--color-text-muted)] leading-relaxed">
            <p>
              Sun Tea Mix started with a simple idea: bring people together over fresh flavors. That means real fruit
              in our fruit teas, signature salted cheese foam, and soufflé pancakes made one order at a time.
            </p>
            <p>
              The café is bright and calm, with Wi-Fi, plenty of outlets and games, so it works just as well for a
              study session as it does for catching up with friends. Students, families and visitors exploring
              Honolulu all find their way here.
            </p>
          </div>
          <div className="mt-7">
            <ThemeBtn href="/our-story/" variant="secondary">Our Story</ThemeBtn>
          </div>
        </div>
      </div>
    </section>
  );
}
