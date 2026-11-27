# Sun Tea Mix Website

The website for **Sun Tea Mix**, a boba, fruit tea and soufflé pancake café in Kakaʻako, Honolulu. Built by TableTurnerr on the same client-site template as Cooling Comfort (Next.js 15, static export, Tailwind v4).

## Where to change things

All business facts and page content live in `src/data/`:

| File | What it holds |
|---|---|
| `business.ts` | Name, address, phone, hours, order link, social links |
| `services.ts` | The menu: categories, items, prices and photos (`/menu/`) |
| `specialties.ts` | Favorites landing pages (`/specialties/…`) |
| `neighborhoods.ts` | "Near you" pages for Honolulu neighborhoods (`/near/…`) |
| `faqs.ts`, `reviews.ts` | FAQ answers and published Google review excerpts |
| `schema.ts`, `metadata.ts` | Search-engine data (structured data, titles, social previews) |

Photos are in `public/Images/`. Only Sun Tea Mix's own product photos and Instagram posts are used.

## Commands

```bash
pnpm install
pnpm dev      # local preview at http://localhost:3000
pnpm build    # static site in ./out
```

Pushing to `main` publishes the live site, so work on a branch and get approval first.
