// Every fact here comes from Sun Tea Mix's own website, menu and profiles.
// Change a fact once here and it updates across the whole site.
export const BUSINESS = {
  name: "Sun Tea Mix",
  legalName: "Sun Tea Mix",
  tagline: "Boba, Fruit Tea & Soufflé Pancakes in Kakaʻako, Honolulu",
  // Homepage <title> and meta description (kept to ~60 and ~155 characters).
  metaTitle: "Sun Tea Mix | Boba & Soufflé Pancakes in Honolulu",
  metaDescription:
    "Boba milk tea, real-fruit iced tea, cheese foam smoothies and made-to-order soufflé pancakes in Kakaʻako, Honolulu. Open daily 11 AM–9 PM. Order online.",
  slogan: "Fresh fruit. Real tea. Fluffy soufflé.",
  shortDescription:
    "Sun Tea Mix is a bubble tea and dessert café in Kakaʻako, Honolulu, serving boba milk tea, real-fruit iced tea, cheese foam smoothies, fresh milk drinks, CoCo coconut desserts and made-to-order soufflé pancakes.",
  longDescription:
    "Sun Tea Mix is a bright, relaxed tea café on Keawe Street in Honolulu’s Kakaʻako neighborhood. We blend fresh fruit with real brewed tea, top smoothies with our signature salted cheese foam, and make every soufflé pancake to order. Stay for a while, or order online for pickup.",
  footerDescription:
    "Boba milk tea, fresh fruit tea, cheese foam smoothies and made-to-order soufflé pancakes in Kakaʻako, Honolulu. Open every day from 11 AM to 9 PM.",
  address: {
    street: "400 Keawe St #107",
    city: "Honolulu",
    neighborhood: "Kakaʻako",
    state: "HI",
    zip: "96813",
    country: "US",
    full: "400 Keawe St #107, Honolulu, HI 96813, United States",
  },
  googlePlaceId: "ChIJLQAAcsZvAHwR5iFKGJjPSmk",
  mapEmbed:
    "https://www.google.com/maps?q=Sun%20Tea%20Mix%2C%20400%20Keawe%20St%2C%20Honolulu%2C%20HI%2096813&output=embed",
  directionsUrl: "https://maps.app.goo.gl/bR4pAoTpwBCYqMzo9",
  phone: "(808) 219-5749",
  phoneRaw: "+18082195749",
  email: "suntea808@gmail.com",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://sunteamix.co",
  orderUrl: "https://www.clover.com/online-ordering/sun-tea-mix-honolulu",
  priceRange: "$",
  servesCuisine: ["Bubble Tea", "Tea", "Desserts", "Smoothies"],
  currenciesAccepted: "USD",
  founded: "2020",
  owner: "Sun Tea Mix",
  hours: [
    { day: "Monday", open: "11:00", close: "21:00" },
    { day: "Tuesday", open: "11:00", close: "21:00" },
    { day: "Wednesday", open: "11:00", close: "21:00" },
    { day: "Thursday", open: "11:00", close: "21:00" },
    { day: "Friday", open: "11:00", close: "21:00" },
    { day: "Saturday", open: "11:00", close: "21:00" },
    { day: "Sunday", open: "11:00", close: "21:00" },
  ],
  hoursNote: "Open every day from 11 AM to 9 PM.",
  socials: {
    instagram: "https://www.instagram.com/sunteamix808/",
    yelp: "https://www.yelp.com/biz/sun-tea-mix-honolulu",
    googleMaps: "https://maps.app.goo.gl/bR4pAoTpwBCYqMzo9",
    googleReview: "https://search.google.com/local/writereview?placeid=ChIJLQAAcsZvAHwR5iFKGJjPSmk",
  },
  features: [
    "Real fruit in every fruit tea",
    "Signature salted cheese foam",
    "Soufflé pancakes made to order",
    "Wi-Fi and outlets for studying",
    "Free parking for guests",
    "Online ordering for pickup",
  ],
  // Honolulu neighborhoods that have their own page on this site.
  areasServed: ["Kakaʻako", "Ala Moana", "Waikīkī", "Downtown Honolulu", "Makiki", "University of Hawaiʻi", "Mōʻiliʻili", "Hawaiʻi Kai"],
  serviceAreasLabel: "Kakaʻako and greater Honolulu",
} as const;

export type BusinessHours = (typeof BUSINESS.hours)[number];
