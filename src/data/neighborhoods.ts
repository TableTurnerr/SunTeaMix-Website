// Honolulu neighborhoods near the café, each with its own "near" page.
export type Neighborhood = {
  slug: string;
  city: string;
  state: "HI";
  image: string;
  distance: string;
  blurb: string;
};

export const NEIGHBORHOODS: Neighborhood[] = [
  { slug: "kakaako", city: "Kakaʻako", state: "HI", image: "/Images/insta/5.webp", distance: "Right in the neighborhood", blurb: "Sun Tea Mix is on Keawe Street in Kakaʻako, so it is an easy stop for boba, real-fruit tea and soufflé pancakes before or after a walk around the neighborhood’s murals, shops and parks." },
  { slug: "ala-moana", city: "Ala Moana", state: "HI", image: "/Images/ProductImg_MangoCharm.webp", distance: "A short ride from Ala Moana", blurb: "Cool down after shopping or a beach day at Ala Moana with a fruit tea, cheese foam smoothie or a made-to-order soufflé pancake just down the road in Kakaʻako." },
  { slug: "waikiki", city: "Waikīkī", state: "HI", image: "/Images/ProductImg_StrawberrySoufflePancakes.webp", distance: "A quick drive from Waikīkī", blurb: "Visiting Waikīkī and hunting for boba or a dessert worth the trip? Make Sun Tea Mix part of your Honolulu day for fluffy soufflé pancakes and tropical fruit teas made with lilikoi and pineapple." },
  { slug: "downtown-honolulu", city: "Downtown Honolulu", state: "HI", image: "/Images/ProductImg_ClassicMilkTea.webp", distance: "Minutes from Downtown", blurb: "Step away from the office for a Hong Kong–style milk tea, an iced fruit tea, or order ahead online so your drinks are ready for pickup." },
  { slug: "makiki", city: "Makiki", state: "HI", image: "/Images/ProductImg_StrawberryLimeTea.webp", distance: "A quick drive from Makiki", blurb: "Meet friends for boba, smoothies and soufflé pancakes at a relaxed, bright café in Kakaʻako with free parking for guests." },
  { slug: "university-of-hawaii", city: "University of Hawaiʻi", state: "HI", image: "/Images/insta/6.webp", distance: "A convenient study break", blurb: "Students and campus visitors can settle in with a drink, Wi-Fi and outlets, then share a soufflé pancake when it is time for a break." },
  { slug: "moiliili", city: "Mōʻiliʻili", state: "HI", image: "/Images/ProductImg_LilikoiPineappleTea.webp", distance: "A short ride from Mōʻiliʻili", blurb: "Find tropical fruit tea, boba drinks and made-fresh desserts at Sun Tea Mix in nearby Kakaʻako." },
  { slug: "hawaii-kai", city: "Hawaiʻi Kai", state: "HI", image: "/Images/ProductImg_CocoMango.webp", distance: "Worth the drive into town", blurb: "Heading into town from Hawaiʻi Kai? Plan a Kakaʻako stop for smoothies, fruit tea, CoCo coconut desserts and fluffy soufflé pancakes." },
];

export const NEIGHBORHOOD_SLUGS = NEIGHBORHOODS.map(({ slug }) => slug);
