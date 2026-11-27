import { MapPin, Phone, Mail, Clock } from "lucide-react";
import OrderButton from "../shared/OrderButton";
import CallButton from "../shared/CallButton";
import QRHover from "../shared/QRHover";
import { BUSINESS } from "@/data/business";

const DIRECTIONS = BUSINESS.directionsUrl;
const MAP_EMBED = BUSINESS.mapEmbed;

function formatHour(time: string): string {
  const hour = parseInt(time.split(":")[0], 10);
  if (hour === 0) return "12 AM";
  if (hour === 12) return "12 PM";
  return hour < 12 ? `${hour} AM` : `${hour - 12} PM`;
}

function renderRange(h: { open: string; close: string }): string {
  if (h.open === "Closed") return "Closed";
  return `${formatHour(h.open)} - ${formatHour(h.close)}`;
}

// Same hours every day.
const DAILY = BUSINESS.hours[0];

export default function OurLocation() {
  return (
    <section className="bg-white section-pad">
      <div className="container-pad">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="eyebrow">Visit Us</div>
          <h2>Find Sun Tea Mix in Kakaʻako, Honolulu.</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2 rounded-[var(--radius-section)] overflow-hidden border border-[var(--color-border)] aspect-video lg:aspect-auto lg:min-h-[440px] bg-[var(--color-sand)]">
            <iframe
              title="Sun Tea Mix location map"
              src={MAP_EMBED}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 440 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className="rounded-[var(--radius-section)] border border-[var(--color-border)] p-8 flex flex-col gap-6 bg-[var(--color-warm-white)]">
            <div className="flex items-start gap-3">
              <MapPin size={18} strokeWidth={1.75} className="text-[var(--color-primary)] shrink-0 mt-1" />
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-text-muted)] mb-1.5">Address</div>
                <QRHover value={DIRECTIONS}>
                  <span className="text-[var(--color-text)] leading-relaxed">
                    {BUSINESS.address.full}
                  </span>
                </QRHover>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone size={18} strokeWidth={2} className="call-detail-icon shrink-0 mt-1" aria-hidden="true" />
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-text-muted)] mb-1.5">Call</div>
                <QRHover value={`tel:${BUSINESS.phoneRaw}`}>
                  <a
                    href={`tel:${BUSINESS.phoneRaw}`}
                    className="text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    {BUSINESS.phone}
                  </a>
                </QRHover>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail size={18} strokeWidth={1.75} className="text-[var(--color-primary)] shrink-0 mt-1" />
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-text-muted)] mb-1.5">Email</div>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors break-all"
                >
                  {BUSINESS.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock size={18} strokeWidth={1.75} className="text-[var(--color-primary)] shrink-0 mt-1" />
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-text-muted)] mb-1.5">Hours</div>
                <div className="text-[var(--color-text)] space-y-1 text-sm">
                  <div>Every day &nbsp;·&nbsp; {renderRange(DAILY)}</div>
                </div>
                <p className="text-xs text-[var(--color-text-muted)] mt-2 leading-relaxed">
                  {BUSINESS.hoursNote}
                </p>
              </div>
            </div>

            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-text-muted)] mb-2.5">Good to know</div>
              <div className="flex flex-wrap gap-1.5">
                {["Free guest parking", "Wi-Fi & outlets", "Dine in or pick up"].map((area) => (
                  <span
                    key={area}
                    className="text-xs text-[var(--color-text)] bg-white border border-[var(--color-border)] rounded-full px-2.5 py-1"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-auto pt-2 flex flex-col gap-3">
              <OrderButton className="w-full justify-center" />
              <QRHover value={`tel:${BUSINESS.phoneRaw}`} block>
                <CallButton className="w-full justify-center" />
              </QRHover>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
