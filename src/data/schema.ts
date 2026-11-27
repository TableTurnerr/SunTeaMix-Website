import { BUSINESS } from "./business";
import { SERVICE_CATEGORIES, type ServiceCategory, type ServiceItem } from "./services";
import { FAQS, type FAQ } from "./faqs";

const BASE_URL = BUSINESS.url;
const abs = (path: string) => (path.startsWith("http") ? path : `${BASE_URL}${path}`);

const PRIMARY_IMAGES = [
  abs("/Images/hero.webp"),
  abs("/Images/insta/5.webp"),
  abs("/Images/ProductImg_StrawberrySoufflePancakes.webp"),
  abs("/Images/ProductImg_MangoCharm.webp"),
];
const LOGO = abs("/Images/SunTeaMixLogo.webp");

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: BUSINESS.address.street,
  addressLocality: BUSINESS.address.city,
  addressRegion: BUSINESS.address.state,
  postalCode: BUSINESS.address.zip,
  addressCountry: BUSINESS.address.country,
};

const DAY_URL: Record<string, string> = {
  Monday: "https://schema.org/Monday", Tuesday: "https://schema.org/Tuesday", Wednesday: "https://schema.org/Wednesday",
  Thursday: "https://schema.org/Thursday", Friday: "https://schema.org/Friday", Saturday: "https://schema.org/Saturday", Sunday: "https://schema.org/Sunday",
};

const openingHoursSpecification = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: BUSINESS.hours.map((h) => DAY_URL[h.day]),
    opens: BUSINESS.hours[0].open,
    closes: BUSINESS.hours[0].close,
  },
];

const areaServed = BUSINESS.areasServed.map((name) => ({ "@type": "Place", name: `${name}, Honolulu, HI` }));

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: BUSINESS.name,
    url: BASE_URL,
    logo: { "@type": "ImageObject", url: LOGO },
    email: BUSINESS.email,
    telephone: BUSINESS.phone,
    sameAs: Object.values(BUSINESS.socials),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    url: BASE_URL,
    name: BUSINESS.name,
    description: BUSINESS.shortDescription,
    publisher: { "@id": `${BASE_URL}/#organization` },
    inLanguage: "en-US",
  };
}

// The café itself. Shown on every page via the root layout.
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    "@id": `${BASE_URL}/#business`,
    name: BUSINESS.name,
    description: BUSINESS.longDescription,
    url: BASE_URL,
    image: PRIMARY_IMAGES,
    logo: LOGO,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    address: postalAddress,
    hasMap: BUSINESS.directionsUrl,
    priceRange: BUSINESS.priceRange,
    servesCuisine: BUSINESS.servesCuisine,
    currenciesAccepted: BUSINESS.currenciesAccepted,
    acceptsReservations: false,
    hasMenu: `${BASE_URL}/menu/`,
    openingHoursSpecification,
    areaServed,
    potentialAction: { "@type": "OrderAction", target: BUSINESS.orderUrl, deliveryMethod: "http://purl.org/goodrelations/v1#DeliveryModePickUp" },
    parentOrganization: { "@id": `${BASE_URL}/#organization` },
    sameAs: Object.values(BUSINESS.socials),
  };
}

// Kept for the home page; points at the same café entity.
export function businessSchema() {
  return localBusinessSchema();
}

function menuItem(item: ServiceItem) {
  const price = item.price?.match(/\$(\d+\.\d{2})/)?.[1];
  return {
    "@type": "MenuItem",
    name: item.name,
    description: item.description,
    ...(item.image ? { image: abs(item.image) } : {}),
    ...(price ? { offers: { "@type": "Offer", price, priceCurrency: "USD" } } : {}),
  };
}

export function menuSectionSchema(category: ServiceCategory) {
  return {
    "@context": "https://schema.org",
    "@type": "MenuSection",
    "@id": `${BASE_URL}/menu/${category.id}/#section`,
    name: category.name,
    description: category.description,
    image: abs(category.image),
    url: `${BASE_URL}/menu/${category.id}/`,
    hasMenuItem: category.items.map(menuItem),
  };
}

// Full menu, used on /menu/.
export function serviceCatalogSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Menu",
    "@id": `${BASE_URL}/menu/#menu`,
    name: `${BUSINESS.name} Menu`,
    url: `${BASE_URL}/menu/`,
    inLanguage: "en-US",
    hasMenuSection: SERVICE_CATEGORIES.map((c) => {
      const { "@context": _ctx, ...section } = menuSectionSchema(c);
      void _ctx;
      return section;
    }),
  };
}

export function faqSchema(faqs: FAQ[] = FAQS) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") },
    })),
  };
}

// A named list of menu items (specialty and neighborhood pages).
export function itemListSchema({ name, url, items }: { name: string; url: string; items: ServiceItem[] }) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${abs(url)}#items`,
    name,
    itemListElement: items.map((item, i) => ({ "@type": "ListItem", position: i + 1, item: menuItem(item) })),
  };
}

export type ArticleSchemaInput = { url: string; headline: string; description: string; image?: string; datePublished?: string; dateModified?: string; authorName?: string };

export function articleSchema({ url, headline, description, image, datePublished, dateModified, authorName }: ArticleSchemaInput) {
  const absoluteUrl = abs(url);
  const today = new Date().toISOString().slice(0, 10);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${absoluteUrl}#article`,
    headline,
    description,
    image: image ? abs(image) : PRIMARY_IMAGES[0],
    url: absoluteUrl,
    mainEntityOfPage: { "@id": `${absoluteUrl}#webpage` },
    publisher: { "@id": `${BASE_URL}/#organization` },
    author: authorName ? { "@type": "Organization", name: authorName } : { "@id": `${BASE_URL}/#organization` },
    inLanguage: "en-US",
    datePublished: datePublished ?? today,
    dateModified: dateModified ?? today,
  };
}

export type WebPageSchemaInput = { url: string; name: string; description: string; primaryImage?: string; dateModified?: string; hasBreadcrumb?: boolean };

export function webPageSchema({ url, name, description, primaryImage, dateModified, hasBreadcrumb = true }: WebPageSchemaInput) {
  const absoluteUrl = abs(url);
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absoluteUrl}#webpage`,
    url: absoluteUrl,
    name,
    description,
    inLanguage: "en-US",
    isPartOf: { "@id": `${BASE_URL}/#website` },
    about: { "@id": `${BASE_URL}/#business` },
    publisher: { "@id": `${BASE_URL}/#organization` },
    primaryImageOfPage: { "@type": "ImageObject", url: primaryImage ? abs(primaryImage) : PRIMARY_IMAGES[0] },
    dateModified: dateModified ?? new Date().toISOString().slice(0, 10),
    ...(hasBreadcrumb && { breadcrumb: { "@id": `${absoluteUrl}#breadcrumb` } }),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  const last = items[items.length - 1];
  const pageUrl = last ? abs(last.url) : BASE_URL;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: items.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.name, item: abs(item.url) })),
  };
}
