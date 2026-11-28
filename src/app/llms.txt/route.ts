// /llms.txt: a plain-text summary of Sun Tea Mix for AI answer engines (ChatGPT, Claude, Perplexity...).
// Built from the same data as the website, so it never disagrees with the pages.
import { BUSINESS } from "@/data/business";
import { FAQS } from "@/data/faqs";
import { NEIGHBORHOODS } from "@/data/neighborhoods";
import { SERVICE_CATEGORIES } from "@/data/services";
import { SPECIALTIES } from "@/data/specialties";
import { priceSpan } from "@/data/answers";

export const dynamic = "force-static";

const url = (path: string) => `${BUSINESS.url}${path}`;
const plain = (text: string) => text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");

export function GET() {
  const lines: string[] = [
    `# ${BUSINESS.name}`,
    "",
    `> ${BUSINESS.shortDescription}`,
    "",
    BUSINESS.longDescription,
    "",
    "## Key facts",
    "",
    `- Address: ${BUSINESS.address.full}`,
    `- Neighborhood: ${BUSINESS.address.neighborhood}, Honolulu, Hawaiʻi`,
    `- Hours: ${BUSINESS.hoursNote}`,
    `- Phone: ${BUSINESS.phone}`,
    `- Email: ${BUSINESS.email}`,
    `- Order online for pickup: ${BUSINESS.orderUrl}`,
    `- Directions: ${BUSINESS.directionsUrl}`,
    `- Instagram: ${BUSINESS.socials.instagram}`,
    `- Yelp: ${BUSINESS.socials.yelp}`,
    `- Website: ${BUSINESS.url}`,
    ...BUSINESS.features.map((f) => `- ${f}`),
    "",
    "## Main pages",
    "",
    `- [Full menu with prices](${url("/menu/")})`,
    `- [Guest favorites](${url("/specialties/")})`,
    `- [Visit us: map, hours and FAQ](${url("/contact/")})`,
    `- [Our story](${url("/our-story/")})`,
    ...SPECIALTIES.map((s) => `- [${s.name}](${url(`/specialties/${s.slug}/`)}): ${s.metaDescription}`),
    ...NEIGHBORHOODS.map((n) => `- [Near ${n.city}](${url(`/near/${n.slug}/`)})`),
    "",
    "## Menu",
    "",
    "Prices are from the online ordering menu and may change. M = medium, L = large.",
  ];

  for (const c of SERVICE_CATEGORIES) {
    const span = priceSpan(c.items);
    lines.push("", `### ${c.name}${span ? ` (${span.text})` : ""}`, "", c.description, `Page: ${url(`/menu/${c.id}/`)}`, "");
    for (const i of c.items) lines.push(`- ${i.name}${i.price ? `, ${i.price}` : ""}${i.popular ? " (guest favorite)" : ""}: ${i.description}`);
  }

  lines.push("", "## Frequently asked questions", "");
  for (const f of FAQS) lines.push(`### ${f.question}`, "", plain(f.answer), "");

  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
