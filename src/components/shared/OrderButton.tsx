import ThemeBtn from "./ThemeBtn";
import { BUSINESS } from "@/data/business";

type Props = { className?: string; label?: string; variant?: "primary" | "secondary" | "gold" };

// Opens Sun Tea Mix online ordering (pickup) in a new tab.
export default function OrderButton({ className = "", label = "Order Online", variant = "primary" }: Props) {
  return (
    <ThemeBtn href={BUSINESS.orderUrl} external variant={variant} className={className} ariaLabel={`${label} from ${BUSINESS.name} (opens in a new tab)`}>
      {label}
    </ThemeBtn>
  );
}
