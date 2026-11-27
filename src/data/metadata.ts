import type { Metadata } from "next";
import { BUSINESS } from "./business";

const BASE_URL = BUSINESS.url;
const DEFAULT_OG = `${BASE_URL}/Images/hero.webp`;
export type PageMetaInput = { title: string; description: string; path: string; ogImage?: string; keywords?: string[]; noindex?: boolean };
const BASE_KEYWORDS = ["Sun Tea Mix", "Sun Tea Mix Honolulu", "boba Honolulu", "bubble tea Honolulu", "boba near me", "souffle pancakes Honolulu", "fruit tea Honolulu", "milk tea Kakaako", "dessert cafe Honolulu", "Kakaako cafe"];

export function createMetadata({ title, description, path, ogImage = DEFAULT_OG, keywords, noindex = false }: PageMetaInput): Metadata {
  const url = path.startsWith("http") ? path : `${BASE_URL}${path}`;
  const fullTitle = title.includes(BUSINESS.name) ? title : `${title} | ${BUSINESS.name}`;
  const image = ogImage.startsWith("http") ? ogImage : `${BASE_URL}${ogImage}`;
  return {
    metadataBase: new URL(BASE_URL),
    title: fullTitle,
    description,
    keywords: [...BASE_KEYWORDS, ...(keywords ?? [])],
    alternates: { canonical: url },
    robots: noindex ? { index: false, follow: false } : { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
    openGraph: { type: "website", locale: "en_US", url, siteName: BUSINESS.name, title: fullTitle, description, images: [{ url: image, alt: "Sun Tea Mix boba, fruit tea and soufflé pancakes in Honolulu" }] },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [image] },
    icons: { icon: "/icon.png", apple: "/apple-touch-icon.png" },
    manifest: "/manifest.json",
    other: { "theme-color": "#0E7F8E" },
  };
}
