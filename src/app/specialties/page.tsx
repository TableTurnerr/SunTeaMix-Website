import type { Metadata } from "next";
import { createMetadata } from "@/data/metadata";
import { breadcrumbSchema, webPageSchema } from "@/data/schema";
import { SPECIALTIES } from "@/data/specialties";
import { SERVICE_CATEGORIES } from "@/data/services";
import { BUSINESS } from "@/data/business";
import SchemaInjector from "@/components/shared/SchemaInjector";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import QuoteCTA from "@/components/shared/QuoteCTA";
import SpecialtiesExperience from "@/components/specialties/SpecialtiesExperience";

const TITLE = "Guest Favorites: Soufflé Pancakes, Boba & Fruit Tea | Sun Tea Mix";
const DESCRIPTION =
  "Soufflé pancakes, boba milk tea, real-fruit tea, cheese foam smoothies and CoCo desserts: the Sun Tea Mix favorites in Kakaʻako, Honolulu.";

export const metadata: Metadata = createMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/specialties/",
  keywords: [
    "best boba Honolulu",
    "souffle pancakes Honolulu",
    "fruit tea Honolulu",
    "cheese foam Honolulu",
    "dessert Kakaako",
  ],
});

function specialtiesListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Sun Tea Mix Favorites",
    itemListElement: SPECIALTIES.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.name,
      url: `${BUSINESS.url}/specialties/${s.slug}/`,
    })),
  };
}

export default function SpecialtiesIndexPage() {
  return (
    <>
      <SchemaInjector
        schema={[
          webPageSchema({
            url: "/specialties/",
            name: TITLE,
            description: DESCRIPTION,
            primaryImage: "/Images/ProductImg_CremeBruleeSouffle.webp",
          }),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Favorites", url: "/specialties/" },
          ]),
          specialtiesListSchema(),
        ]}
      />
      <BreadcrumbNav
        items={[
          { name: "Home", url: "/" },
          { name: "Favorites", url: "/specialties/" },
        ]}
      />

      <SpecialtiesExperience
        specialties={SPECIALTIES}
        serviceCategories={SERVICE_CATEGORIES}
        phone={BUSINESS.phone}
        phoneRaw={BUSINESS.phoneRaw}
        quoteUrl={BUSINESS.orderUrl}
        address={BUSINESS.address.full}
      />

      <QuoteCTA />
    </>
  );
}
