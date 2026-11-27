import ThemeBtn from "./ThemeBtn";
import OrderButton from "./OrderButton";
import CallButton from "./CallButton";
import { BUSINESS } from "@/data/business";

type Props = {
  /** Optional item or topic name, used in the heading. */
  itemName?: string;
};

// Shared "order or visit" call to action at the bottom of most pages.
export default function QuoteCTA({ itemName }: Props) {
  const heading = itemName ? `Ready for ${itemName}?` : "Craving something fresh?";

  return (
    <section className="bg-[var(--color-warm-white)] section-pad">
      <div className="container-pad max-w-3xl">
        <h2 className="mb-6">{heading}</h2>
        <p className="text-lg text-[var(--color-text-muted)] leading-relaxed mb-8">
          Order online and pick up at the café, or come by {BUSINESS.address.street}, {BUSINESS.address.neighborhood}.
          We are open every day from 11 AM to 9 PM, with free parking for guests.
        </p>
        <div className="flex flex-wrap gap-3">
          <OrderButton />
          <ThemeBtn href={BUSINESS.directionsUrl} external variant="secondary">Get Directions</ThemeBtn>
          <CallButton />
        </div>
      </div>
    </section>
  );
}
