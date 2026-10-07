import type {Metadata} from "next";
import {MENU,SITE} from "@/data/site";
import MenuCatalog from "@/components/MenuCatalog";

export const metadata:Metadata={title:"Menu | Sun Tea Mix",description:"Sun Tea Mix drinks and soufflé pancakes in Honolulu.",alternates:{canonical:"/menu/"}};

export default function Menu(){
  return <>
    <section className="sun-hero sun-hero--berry">
      <div className="wrap py-16 md:py-20">
        <p className="eyebrow">Sun Tea Mix menu</p>
        <h1 className="mt-3 max-w-3xl">Drinks and desserts for your Honolulu day.</h1>
        <p className="mt-5 max-w-2xl text-lg text-teal-950/75">From fruit-forward tea to boba classics and made-to-order soufflé pancakes, choose a little color for your day.</p>
        <a className="button primary mt-7" href={SITE.order}>Order online</a>
      </div>
    </section>
    <section className="wrap py-16"><MenuCatalog menu={MENU} orderUrl={SITE.order} /></section>
  </>
}
