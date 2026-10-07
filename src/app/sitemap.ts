import type { MetadataRoute } from "next";
import { POPULAR_ITEMS, SPECIALTIES, SITE } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const fixed = ["", "/menu/", "/our-story/", "/faq/", "/specialties/"];
  const specialtySlugs = [...new Set([...SPECIALTIES.map(([slug]) => slug), ...POPULAR_ITEMS.map((item) => item.slug)])];
  return [
    ...fixed.map((path) => ({ url: `${SITE.url}${path}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: path === "" ? 1 : .8 })),
    ...specialtySlugs.map((slug) => ({ url: `${SITE.url}/specialties/${slug}/`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: .7 })),
  ];
}
