import ThemeBtn from "../shared/ThemeBtn";
import SmartImage from "../shared/SmartImage";

export default function SouffleSpotlight() {
  return (
    <section className="bg-[var(--color-warm-white)] section-pad">
      <div className="container-pad grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <div className="eyebrow">Worth the 20 minutes</div>
          <h2 className="mb-6">Soufflé pancakes, made the moment you order.</h2>
          <p className="text-lg text-[var(--color-text-muted)] mb-8 leading-relaxed">
            Our Japanese-style soufflé pancakes are whipped and cooked fresh for every order, so they arrive
            tall, jiggly and warm. Top them with fresh strawberries and blueberries, a crackly crème brûlée
            crust, or brown sugar boba. Order a fruit tea while you wait, and bring a friend to share.
          </p>
          <div className="flex flex-wrap gap-3">
            <ThemeBtn href="/specialties/souffle-pancakes-honolulu/" variant="primary">Explore Soufflé Pancakes</ThemeBtn>
            <ThemeBtn href="/menu/souffle-pancakes/" variant="secondary">See Prices</ThemeBtn>
          </div>
        </div>
        <div className="card-img overflow-hidden aspect-[4/3]">
          <SmartImage
            src="/Images/ProductImg_BrownSugarSoufflePancakes.webp"
            alt="Brown Sugar Boba Soufflé pancakes topped with brown sugar syrup and boba pearls"
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
