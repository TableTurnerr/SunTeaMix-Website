export default function PressStrip() {
  return (
    <section className="bg-[var(--color-sand)] border-y border-[var(--color-border)] mb-5 md:mb-7">
      <div className="container-pad py-6 md:py-7">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-7 text-center">
          <p className="m-0 text-sm font-semibold text-[var(--color-text)]">Fresh fruit in every fruit tea</p>
          <span className="hidden md:block h-5 w-px bg-[var(--color-border)]" aria-hidden="true" />
          <p className="m-0 text-sm text-[var(--color-text-muted)]">Soufflé pancakes made to order</p>
          <span className="hidden md:block h-5 w-px bg-[var(--color-border)]" aria-hidden="true" />
          <p className="m-0 text-sm text-[var(--color-text-muted)]">Open every day, 11 AM to 9 PM</p>
        </div>
      </div>
    </section>
  );
}
