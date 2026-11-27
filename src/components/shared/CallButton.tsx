import { PhoneCall } from "lucide-react";
import { BUSINESS } from "@/data/business";

type Props = {
  phone?: string;
  phoneRaw?: string;
  className?: string;
  compact?: boolean;
};

export default function CallButton({
  phone = BUSINESS.phone,
  phoneRaw = BUSINESS.phoneRaw,
  className = "",
  compact = false,
}: Props) {
  return (
    <a
      href={`tel:${phoneRaw}`}
      className={`call-button${compact ? " call-button--compact" : ""}${className ? ` ${className}` : ""}`}
      aria-label={`Call ${BUSINESS.name} at ${phone}`}
    >
      <span className="call-button__icon" aria-hidden="true">
        <PhoneCall size={18} strokeWidth={2.1} />
      </span>
      <span className="call-button__label">Call {phone}</span>
    </a>
  );
}
