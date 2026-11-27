import { Quote } from "lucide-react";
import { REVIEWS } from "@/data/reviews";
import { BUSINESS } from "@/data/business";

export default function Reviews() {
  return (
    <section className="bg-[var(--color-warm-white)] section-pad">
      <div className="container-pad">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="eyebrow">Guest Reviews</div>
          <h2 className="mb-4">What guests say about Sun Tea Mix.</h2>
          <p className="text-[var(--color-text-muted)]">A few words from Google reviews.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-5">
          {REVIEWS.map((r) => (
            <article
              key={r.author}
              className="flex flex-col w-full md:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] rounded-2xl border border-[var(--color-border)] bg-white p-7 transition-all duration-500 hover:border-transparent hover:shadow-[var(--shadow-lift)] hover:-translate-y-1"
            >
              <Quote size={22} className="mb-4 text-[var(--color-gold)]" aria-hidden="true" />
              <blockquote className="flex-1 text-[var(--color-text)] mb-5 leading-relaxed text-[0.97rem]">&ldquo;{r.text}&rdquo;</blockquote>
              <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
                <cite className="not-italic font-semibold text-sm">{r.author}</cite>
                {r.url ? (
                  <a href={r.url} target="_blank" rel="noopener noreferrer" className="text-[11px] text-[var(--color-primary)] uppercase tracking-[0.15em] hover:underline">Read on {r.source}</a>
                ) : (
                  <span className="text-[11px] text-[var(--color-text-muted)] uppercase tracking-[0.15em]">{r.source}</span>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center gap-3 mt-12">
          <a href={BUSINESS.socials.googleReview} target="_blank" rel="noopener noreferrer" className="btn-primary">Leave us a review</a>
          <a href={BUSINESS.socials.yelp} target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--color-primary)] underline underline-offset-2 hover:opacity-75 transition-opacity">
            See us on Yelp
          </a>
        </div>
      </div>
    </section>
  );
}
