import { CupSoda, CakeSlice, Wifi, Car } from "lucide-react";

const ITEMS = [
  { icon: CupSoda, label: "Real Fruit Tea", sub: "Fresh-cut fruit" },
  { icon: CakeSlice, label: "Soufflé Pancakes", sub: "Made to order" },
  { icon: Wifi, label: "Wi-Fi & Outlets", sub: "Stay & study" },
  { icon: Car, label: "Free Parking", sub: "For guests" },
];

export default function TrustBar() {
  return (
    <section className="container-pad py-6 md:py-8 border-t border-b border-[var(--color-border)]">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
        {ITEMS.map(({ icon: Icon, label, sub }) => (
          <div key={label} className="flex flex-col items-center text-center gap-2 group">
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-[var(--color-primary)] transition-transform duration-300 group-hover:scale-110">
              <Icon size={18} strokeWidth={1.5} aria-hidden="true" />
            </div>
            <div className="font-semibold text-[var(--color-text)]" style={{ fontFamily: "var(--font-display)", fontSize: "0.9rem" }}>{label}</div>
            <div className="text-[10px] text-[var(--color-text-muted)] uppercase tracking-[0.18em]">{sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
