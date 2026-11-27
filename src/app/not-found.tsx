import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { createMetadata } from "@/data/metadata";
import { BUSINESS } from "@/data/business";
import ThemeBtn from "@/components/shared/ThemeBtn";

export const metadata: Metadata = createMetadata({ title: `Page Not Found | ${BUSINESS.name}`, description: "This page could not be found. See the Sun Tea Mix menu or plan your visit.", path: "/404/", noindex: true });

export default function NotFound() {
  return (
    <section className="container-pad py-16 md:py-24 text-center">
      <Image src="/Images/404Image.webp" alt="404 with a Sun Tea Mix cup as the zero" width={480} height={160} className="mx-auto mb-8 h-auto w-[min(480px,90%)]" priority />
      <h1 className="mx-auto mb-5">This page spilled.</h1>
      <p className="mx-auto max-w-xl text-lg text-[var(--color-text-muted)]">The page may have moved. Take a look at the menu, or find out how to visit us in Kakaʻako.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3"><ThemeBtn href="/menu/">See the Menu</ThemeBtn><ThemeBtn href="/contact/" variant="secondary">Visit Us</ThemeBtn></div>
      <p className="mt-6 text-sm"><Link href="/" className="text-[var(--color-primary)] underline underline-offset-4">Return to the home page</Link></p>
    </section>
  );
}
