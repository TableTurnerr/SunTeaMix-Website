// Short, direct answers for search and AI answer engines (Google, ChatGPT, Perplexity...).
// Every answer is built from the menu and business data, so prices and hours never drift.
import { BUSINESS } from "./business";
import type { FAQ } from "./faqs";
import type { Neighborhood } from "./neighborhoods";
import type { ServiceCategory, ServiceItem } from "./services";

const STREET = BUSINESS.address.street;
const WHERE = `${STREET} in Kakaʻako, Honolulu`;

export function listNames(names: string[]): string {
  if (names.length <= 2) return names.join(" and ");
  return `${names.slice(0, -1).join(", ")} and ${names[names.length - 1]}`;
}

// "$5.29 to $7.99" from prices like "$5.29 (M) · $6.29 (L)". Null when no prices are listed.
export function priceSpan(items: ServiceItem[]): { text: string; sized: boolean } | null {
  const prices = items.flatMap((i) => [...(i.price ?? "").matchAll(/\$(\d+\.\d{2})/g)].map((m) => Number(m[1])));
  if (prices.length === 0) return null;
  const min = Math.min(...prices).toFixed(2);
  const max = Math.max(...prices).toFixed(2);
  const sized = items.some((i) => /\((M|L)\)/.test(i.price ?? ""));
  return { text: min === max ? `$${min}` : `$${min} to $${max}`, sized };
}

// Natural questions people type or ask, per menu section.
const CATEGORY_QUESTIONS: Record<string, { price: string; where: string }> = {
  "souffle-pancakes": { price: "How much are soufflé pancakes at Sun Tea Mix?", where: "Where can I get soufflé pancakes in Honolulu?" },
  "sun-tea-specials": { price: "How much are the Sun Tea Specials?", where: "Where can I try Sun Tea Mix’s specialty drinks?" },
  "fruit-iced-tea": { price: "How much is fruit tea at Sun Tea Mix?", where: "Where can I get fresh fruit tea in Honolulu?" },
  smoothies: { price: "How much are smoothies at Sun Tea Mix?", where: "Where can I get a cheese foam smoothie in Honolulu?" },
  "milk-tea": { price: "How much is milk tea at Sun Tea Mix?", where: "Where can I get boba milk tea in Honolulu?" },
  "fresh-milk": { price: "How much are fresh milk drinks at Sun Tea Mix?", where: "Where can I get brown sugar boba milk in Honolulu?" },
  "fruit-milkshakes": { price: "How much are fruit milkshakes at Sun Tea Mix?", where: "Where can I get a fruit milkshake in Kakaʻako?" },
  "pure-tea": { price: "How much is pure tea at Sun Tea Mix?", where: "Where can I get oolong or jasmine tea in Honolulu?" },
  coco: { price: "How much is CoCo at Sun Tea Mix?", where: "Where can I get coconut jelly dessert in Honolulu?" },
};

export function categoryFaqs(category: ServiceCategory): FAQ[] {
  const q = CATEGORY_QUESTIONS[category.id] ?? {
    price: `How much is ${category.name} at Sun Tea Mix?`,
    where: `Where can I get ${category.name} in Honolulu?`,
  };
  const names = category.items.map((i) => i.name);
  const span = priceSpan(category.items);
  const faqs: FAQ[] = [
    {
      question: `What is on the ${category.name} menu at Sun Tea Mix?`,
      answer: `There are ${names.length} choices: ${listNames(names)}. [Order online](${BUSINESS.orderUrl}) for pickup or order at the café.`,
    },
  ];
  if (span) {
    faqs.push({
      question: q.price,
      answer: `Items on the ${category.name} menu ${span.text.includes(" to ") ? `range from ${span.text}` : `cost ${span.text}`} on our online menu${span.sized ? ", depending on the item and size (M or L)" : ""}. Prices can change, so check the online ordering page for today’s prices.`,
    });
  }
  faqs.push({
    question: q.where,
    answer: `At Sun Tea Mix, ${WHERE}. ${BUSINESS.hoursNote} You can also order ahead online for pickup.`,
  });
  return faqs;
}

export function neighborhoodFaqs(area: Neighborhood): FAQ[] {
  const isHome = area.slug === "kakaako";
  return [
    isHome
      ? {
          question: "Where is Sun Tea Mix in Kakaʻako?",
          answer: `On Keawe Street: ${BUSINESS.address.full.replace(", United States", "")}. [Get directions](${BUSINESS.directionsUrl}).`,
        }
      : {
          question: `Where can I get boba and soufflé pancakes near ${area.city}?`,
          answer: `Sun Tea Mix is at ${WHERE}. We serve boba milk tea, fresh fruit tea, smoothies with salted cheese foam and soufflé pancakes made to order. [Get directions](${BUSINESS.directionsUrl}).`,
        },
    { question: "What time is Sun Tea Mix open?", answer: BUSINESS.hoursNote },
    {
      question: "Can I order ahead for pickup?",
      answer: `Yes. [Order online](${BUSINESS.orderUrl}) and pick up your drinks and desserts at the café, or call us at ${BUSINESS.phone}.`,
    },
  ];
}
