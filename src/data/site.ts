export const SITE = {
  name: "Sun Tea Mix",
  url: "https://sunteamix.co",
  phone: "+1 808-219-5749",
  phoneRaw: "+18082195749",
  email: "suntea808@gmail.com",
  address: "400 Keawe St #107, Honolulu, HI 96813, United States",
  shortAddress: "400 Keawe St #107, Honolulu, HI 96813",
  map: "https://www.google.com/maps/search/?api=1&query=Sun+Tea+Mix+400+Keawe+St+107+Honolulu+HI+96813",
  order: "https://www.clover.com/online-ordering/sun-tea-mix-honolulu",
  instagram: "https://www.instagram.com/sunteamix808/",
  description: "Sun Tea Mix is a Kakaʻako bubble tea and dessert café serving fruit teas, boba, smoothies, Coco Mango, and made-to-order soufflé pancakes.",
  hours: "Daily 11:00 AM–9:00 PM",
} as const;

export const MENU = [
  { name: "Fruit Iced Tea", items: ["Mango Tea — $6.99", "Strawberry Lime Tea — $6.99", "Lilikoi & Pineapple Tea — $6.99", "Fruit Oolong Tea — $6.99", "Fruit Green Tea — $6.99"] },
  { name: "Milk Tea & Boba", items: ["Classic Milk Tea — $5.29 / $6.29", "Brown Sugar Boba Milk Tea", "Oreo Snowcap Milk Tea", "Matcha Latte", "White Peach Oolong Tea"] },
  { name: "Sun Tea Specials", items: ["Coco Mango — $10.99", "Tropical Lava Flow — $7.99", "Mango Charm — $7.99", "Mango Smoogurt — $7.99", "Strawberry Smoogurt — $7.99", "Watermelon Smoothie — $7.99"] },
  { name: "Soufflé Pancakes", items: ["Classic Soufflé — $9.99", "Crème Brûlée Soufflé — $11.99", "Strawberry Soufflé — $11.99", "Brown Sugar Boba Soufflé — $11.99"] },
];

export const FAQS = [
  ["Where is Sun Tea Mix?", "Find Sun Tea Mix at 400 Keawe St #107 in Honolulu’s Kakaʻako neighborhood."],
  ["What is Sun Tea Mix known for?", "Guests come for fresh fruit teas, boba drinks, smoothies, Coco Mango, and fluffy Japanese-style soufflé pancakes made to order."],
  ["How long do soufflé pancakes take?", "Soufflé pancakes are made fresh to order and typically take about 20 minutes."],
  ["Can I customize my drink?", "Ask the team about sweetness, ice, and topping choices such as boba, jelly, pudding, and cheese foam."],
  ["Do you offer pickup or delivery?", "Yes. Check the online ordering options or call Sun Tea Mix for current pickup and delivery availability."],
  ["Is there parking?", "Complimentary parking is available for Sun Tea Mix guests."],
];

export const NEIGHBORHOODS = [
  ["kakaako", "Kakaʻako", "Right in the neighborhood", "Kakaʻako’s stop for boba, fruit tea, and soufflé pancakes near Keauhou Lane and Ala Moana Boulevard."],
  ["ala-moana", "Ala Moana", "A short ride from Ala Moana", "Cool down after shopping or the beach with boba, real-fruit tea, smoothies, and dessert in nearby Kakaʻako."],
  ["waikiki", "Waikīkī", "About 15 minutes from Waikīkī", "Visitors looking for bubble tea and an unforgettable dessert can make Sun Tea Mix part of a Honolulu day out."],
  ["downtown-honolulu", "Downtown Honolulu", "Minutes from Downtown", "Step away from the office for fruit tea, milk tea, or a made-to-order soufflé pancake in Kakaʻako."],
  ["makiki", "Makiki", "A quick drive from Makiki", "Meet friends for boba, smoothies, and airy pancakes at a relaxed Kakaʻako café."],
  ["university-of-hawaii", "University of Hawaiʻi", "A convenient dessert break", "Students and campus visitors can settle in with drinks, Wi‑Fi, outlets, and shareable soufflé pancakes."],
  ["moiliili", "Mōʻiliʻili", "A short ride from Mōʻiliʻili", "Find tropical fruit tea, boba drinks, and made-fresh dessert at Sun Tea Mix in Kakaʻako."],
  ["hawaii-kai", "Hawaiʻi Kai", "Worth the drive for dessert", "Plan a Kakaʻako stop for Coco Mango, smoothies, fruit tea, and fluffy soufflé pancakes."],
] as const;

export const SPECIALTIES = [
  ["boba-bubble-tea", "Bubble Tea & Boba", "Classic milk tea, fruit tea, toppings, and customizable sips in Honolulu."],
  ["souffle-pancakes", "Soufflé Pancakes", "Japanese-style pancakes made fresh to order — light, jiggly, and built for sharing."],
  ["coco-mango", "Coco Mango", "A signature coconut-jelly dessert finished with fresh mango chunks."],
  ["fruit-tea", "Fresh Fruit Tea", "Bright fruit tea made for warm Honolulu days, with favorites from mango to strawberry lime."],
  ["smoothies-yogurt", "Smoothies & Yogurt Drinks", "Creamy, fruit-forward drinks including Mango Smoogurt and Strawberry Smoogurt."],
  ["tropical-lava-flow", "Tropical Lava Flow", "A refreshing layered fruit tea with strawberry, pineapple, and mango."],
] as const;
