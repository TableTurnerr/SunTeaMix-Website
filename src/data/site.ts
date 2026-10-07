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
  description: "Sun Tea Mix is a Kakaʻako bubble tea and dessert café serving fruit iced teas, milk teas, smoothies, fresh milk drinks, pure teas, CoCo, and soufflé pancakes.",
  hours: "Daily 11:00 AM–9:00 PM",
} as const;

export const MENU = [
  { name: "Soufflé Pancake", items: [
    { name: "Strawberry Soufflé", price: "$11.99", description: "Light, fluffy pancake topped with fresh strawberries, blueberries, and a generous drizzle of pink strawberry sauce.", popularity: "100% (7)", image: "/Images/ProductImg_StrawberrySoufflePancakes.webp" },
    { name: "Brown Sugar Boba Soufflé", price: "$11.99", description: "Fluffy soufflé pancake topped with brown sugar syrup and chewy boba pearls.", image: "/Images/ProductImg_BrownSugarSoufflePancakes.webp" },
    { name: "Crème Brûlée Soufflé", price: "$11.99", description: "Delicate, fluffy soufflé pancake topped with a caramelized sugar crust.", popularity: "90% (11) · #3 Most liked", image: "/Images/ProductImg_CremeBruleeSouffle.webp" },
    { name: "Classic Soufflé", price: "$9.99", description: "Light and airy soufflé pancake topped with a smooth, creamy glaze.", image: "/Images/ProductImg_ClassicSouffle.webp" },
  ] },
  { name: "Sun Tea Special", items: [
    { name: "Mango Charm", price: "$7.99", description: "Fresh mango mix with signature salted cheese foam and crystal boba, topped with mango smoothie and grapefruit.", popularity: "100% (21) · #2 Most liked", image: "/Images/ProductImg_MangoCharm.webp" },
    { name: "Watermelon Smoothie", price: "$7.99", description: "Blended fresh watermelon with a smooth texture, topped with signature salted cheese foam", image: "/Images/ProductImg_WatermelonSmoothie.webp" },
    { name: "Mango Smoogurt", price: "$7.99", description: "Fresh mango mix with crystal jelly and 100% pure vanilla yogurt, topped with mango smoothie", image: "/Images/ProductImg_MangoSmoogurt.webp" },
    { name: "Strawberry Smoogurt", price: "$7.99", description: "Fresh strawberry mix with crystal jelly and 100% pure vanilla yogurt, topped with mango smoothie", image: "/Images/ProductImg_StrawberrySmoogurt.webp" },
    { name: "Strawberry Avocado Yogurt", price: "$7.99", description: "Avocado smashed on the bottom with signature salted cheese foam, fresh strawberry blended with greek yogurt.", image: "/Images/ProductImg_StrawberryAvocadoYogurt.webp" },
    { name: "Tropical Lava Flow", price: "$7.99", description: "Fresh Strawberry with coconut cream and crystal jelly, topped with signature salted cheese foam and mango smoothie", image: "/Images/ProductImg_TropicalLavaFlow.webp" },
  ] },
  { name: "Fruit Iced Tea", items: [
    { name: "Strawberry Lime Tea", price: "$6.99", description: "A blend of strawberry and lime with tea, topped with fresh strawberry slices and lime wedges and crystal Jelly on the bottom. Most refreshing and BEST SELLER of the store.", image: "/Images/ProductImg_StrawberryLimeTea.webp" },
    { name: "Mango Tea", price: "$6.99", description: "Sweet mango chunks in refreshing tea with crystal jelly", image: "/Images/ProductImg_MangoTea.webp" },
    { name: "Orange Tea", price: "$6.99", description: "Fresh Orange blends with Jasmine green tea, perfect choice for a vitamin boost", image: "/Images/ProductImg_OrangeTea.webp" },
    { name: "Lilikoi & Pineapple Tea", price: "$6.99", description: "Lilikoi ( Passion Fruit) blend with local Pineapple, forms a perfect taste of the tropical flavor of Hawaii", image: "/Images/ProductImg_LilikoiPineappleTea.webp" },
    { name: "Camellia Oolong Lime Tea", price: "$6.99" },
    { name: "Strawberry Tea", price: "$6.99", description: "Features fresh strawberries and tea and crystal Jelly, combined for a fruity and refreshing drink.", image: "/Images/ProductImg_StrawberryTea.webp" },
    { name: "Mango Lime Tea", price: "$6.99", description: "A refreshing blend of mango and lime, creating a vibrant and tangy iced tea experience.", image: "/Images/ProductImg_MangoLimeTea.webp" },
    { name: "Lime Tea", price: "$6.99", description: "A refreshing blend of lime and tea, combining citrus notes with a smooth tea base.", image: "/Images/ProductImg_LimeTea.webp" },
    { name: "Fruit Oolong Tea", price: "$6.99", description: "Lilikoi+Strawberry+Mango+Lime+Pineapple, a fresh blend of all the best fruit in Hawaii.", image: "/Images/ProductImg_FruitOolongTea.webp" },
  ] },
  { name: "Smoothie w/ Cheese Foam", items: [
    { name: "Strawberry Smoothie", price: "$6.99", image: "/Images/ProductImg_StrawberrySmoothie.webp" },
    { name: "Grape Smoothie", price: "$6.99", description: "Blended grape smoothie topped with a layer of creamy cheese foam.", image: "/Images/ProductImg_GrapeSmoothie.webp" },
    { name: "Grapefruit Smoothie", price: "$6.99" },
    { name: "Pineapple Smoothie", price: "$6.99" },
    { name: "Mango Smoothie", price: "$6.99", image: "/Images/ProductImg_MangoSmoothie.webp" },
    { name: "Blueberry & Strawberry Smoothie", price: "$6.99" },
  ] },
  { name: "Milk Tea", items: [
    { name: "White Peach Oolong Milk Tea (L)", price: "$7.99" },
    { name: "White Peach Oolong Milk Tea (M)", price: "$6.99" },
    { name: "Matcha Latte (L)", price: "$7.99", description: "Creamy blend of matcha and milk, offering a smooth texture and vibrant green hue.", image: "/Images/ProductImg_MatchaLatte.webp" },
    { name: "Matcha Latte (M)", price: "$6.99" },
    { name: "Phoenix Oolong Milk Tea (L)", price: "$6.99", description: "Rich oolong tea blended with creamy milk, featuring chewy boba pearls.", image: "/Images/ProductImg_PhoenixOolongMilkTea.webp" },
    { name: "Phoenix Oolong Milk Tea (M)", price: "$5.99" },
    { name: "Crème Milk Tea (L)", price: "$7.49", description: "A large milk tea with a creamy layer, featuring a blend of tea and milk.", image: "/Images/ProductImg_CremeMilkTea.webp" },
    { name: "Crème Milk Tea (M)", price: "$6.49" },
    { name: "Brown Sugar Milk Tea (L)", price: "$6.99", description: "Sweet brown sugar swirls through HK style black milk tea", image: "/Images/ProductImg_BrownSugarMilkTea.webp" },
    { name: "Brown Sugar Milk Tea (M)", price: "$5.99" },
    { name: "Camellia Oolong Milk Tea (L)", price: "$6.99" },
    { name: "Camellia Oolong Milk Tea (M)", price: "$6.49" },
    { name: "Oreo Snowcap Milk Tea", price: "$7.99", description: "Creamy milk tea with chewy tapioca pearls, topped with a layer of whipped cream and crushed Oreo cookies.", image: "/Images/ProductImg_OreoSnowcapMilkTea.webp" },
    { name: "Classic Milk Tea (L)", price: "$6.99", description: "Creamy blend of black tea and milk, sweetened to perfection. Known as the Hong Kong Style Milk Tea", popularity: "100% (25) · #1 Most liked", image: "/Images/ProductImg_ClassicMilkTea.webp" },
  ] },
  { name: "Fresh Milk", items: [
    { name: "Brown Sugar Boba Milk", price: "$6.59", description: "Fresh milk mixed with brown sugar syrup and spcial brown sugar boba, topped with signature salted cheese foam", image: "/Images/ProductImg_BrownSugarBobaMilk.webp" },
    { name: "Strawberry Milk", price: "$6.59", description: "Fresh milk with fresh strawberry pieces", image: "/Images/ProductImg_StrawberryMilk.webp" },
    { name: "Matcha Mango", price: "$6.99" },
    { name: "matcha Strawberry", price: "$6.99" },
  ] },
  { name: "Pure Fruit Milkshake", items: [
    { name: "Mix Berry Blast", price: "$7.99" },
    { name: "Avocado Banana Smoothie", price: "$7.99" },
    { name: "Hawaii Special", price: "$7.99" },
  ] },
  { name: "Pure Tea", items: [
    { name: "Four Seaons Oolong Tea (M)", price: "$5.29" },
    { name: "Jasmine Green Tea (M)", price: "$5.29" },
    { name: "Jasmine Green Tea (L)", price: "$6.29" },
    { name: "White Peach Oolong Tea (M)", price: "$5.29" },
    { name: "White Peach Oolong Tea (L)", price: "$6.29" },
    { name: "Camellia Oolong Tea (L)", price: "$6.29" },
  ] },
  { name: "CoCo", items: [
    { name: "Coco Mango", price: "$10.99", description: "Creamy coconut jelly topped with fresh mango chunks — a signature Sun Tea Mix summer special.", image: "/Images/ProductImg_CocoMango.webp" },
    { name: "Avo Coco", price: "$11.99" },
    { name: "Classic CoCo", price: "$9.99" },
    { name: "Strawberry Coco", price: "$10.99" },
  ] },
];

export const FAQS = [
  ["Where is Sun Tea Mix?", "Find Sun Tea Mix at 400 Keawe St #107 in Honolulu’s Kakaʻako neighborhood."],
  ["What is Sun Tea Mix known for?", "Guests come for fruit iced tea, milk tea, smoothies, fresh milk drinks, pure tea, CoCo, and soufflé pancakes."],
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
  ["hawaii-kai", "Hawaiʻi Kai", "Worth the drive for dessert", "Plan a Kakaʻako stop for smoothies, fruit tea, and fluffy soufflé pancakes."],
] as const;

export const SPECIALTIES = [
  ["souffle-pancake", "Soufflé Pancake", "Soufflé pancakes including Strawberry, Brown Sugar Boba, Crème Brûlée, and Classic."],
  ["sun-tea-special", "Sun Tea Special", "Mango Charm, smoothies, and yogurt drinks from the Sun Tea Special menu."],
  ["fruit-iced-tea", "Fruit Iced Tea", "Strawberry Lime Tea, Mango Tea, and Orange Tea."],
  ["smoothie-cheese-foam", "Smoothie w/ Cheese Foam", "Strawberry, Grape, and Grapefruit Smoothies."],
  ["milk-tea", "Milk Tea", "Milk tea, matcha latte, and Oreo Snowcap Milk Tea."],
  ["fresh-milk", "Fresh Milk", "Brown Sugar Boba Milk, Strawberry Milk, and Matcha Mango."],
  ["pure-fruit-milkshake", "Pure Fruit Milkshake", "Mix Berry Blast, Avocado Banana Smoothie, and Hawaii Special."],
  ["pure-tea", "Pure Tea", "Jasmine Green Tea, White Peach Oolong Tea, and Camellia Oolong Tea."],
  ["coco", "CoCo", "Avo Coco, Classic CoCo, and Strawberry Coco."],
] as const;

export type PopularItem = {
  slug: string;
  name: string;
  image?: string;
  imageAlt?: string;
  price: string;
  category: string;
  description: string;
  shortDescription: string;
  highlights: readonly string[];
  bestFor: string;
  seoKeywords: string;
};

// These are the items featured in the site's “Trending in Honolulu” menu.
// Product details deliberately stay close to the current menu descriptions.
export const POPULAR_ITEMS: readonly PopularItem[] = [
  {
    slug: "classic-milk-tea-l",
    name: "Classic Milk Tea (L)",
    image: "/Images/ProductImg_ClassicMilkTea.webp",
    imageAlt: "Classic Milk Tea at Sun Tea Mix",
    price: "$6.99",
    category: "Most Ordered · #1 Most liked",
    shortDescription: "Creamy blend of black tea and milk, sweetened to perfection. Known as the Hong Kong Style Milk Tea",
    description: "Creamy blend of black tea and milk, sweetened to perfection. Known as the Hong Kong Style Milk Tea",
    highlights: ["Black tea", "Milk", "Large size"],
    bestFor: "A classic milk tea.",
    seoKeywords: "Classic Milk Tea (L), Sun Tea Mix menu",
  },
  {
    slug: "mango-charm",
    name: "Mango Charm",
    image: "/Images/ProductImg_MangoCharm.webp",
    imageAlt: "Mango Charm at Sun Tea Mix",
    price: "$7.99",
    category: "Most Ordered · #2 Most liked",
    shortDescription: "Fresh mango mix with signature salted cheese foam and crystal boba, topped with mango smoothie and grapefruit.",
    description: "Fresh mango mix with signature salted cheese foam and crystal boba, topped with mango smoothie and grapefruit.",
    highlights: ["Fresh mango", "Salted cheese foam", "Crystal boba", "Grapefruit"],
    bestFor: "A fruit-forward signature drink.",
    seoKeywords: "Mango Charm, Sun Tea Mix menu",
  },
  {
    slug: "creme-brulee-souffle",
    name: "Crème Brûlée Soufflé",
    image: "/Images/ProductImg_CremeBruleeSouffle.webp",
    imageAlt: "Crème Brûlée Soufflé at Sun Tea Mix",
    price: "$11.99",
    category: "Most Ordered · #3 Most liked",
    shortDescription: "Delicate, fluffy soufflé pancake topped with a caramelized sugar crust.",
    description: "Delicate, fluffy soufflé pancake topped with a caramelized sugar crust.",
    highlights: ["Soufflé pancake", "Caramelized sugar crust"],
    bestFor: "A soufflé pancake dessert.",
    seoKeywords: "Crème Brûlée Soufflé, Sun Tea Mix menu",
  },
  {
    slug: "mango-smoogurt",
    name: "Mango Smoogurt",
    image: "/Images/ProductImg_MangoSmoogurt.webp",
    imageAlt: "Mango Smoogurt at Sun Tea Mix",
    price: "$7.99",
    category: "Most Ordered",
    shortDescription: "Fresh mango mix with crystal jelly and 100% pure vanilla yogurt, topped with mango smoothie",
    description: "Fresh mango mix with crystal jelly and 100% pure vanilla yogurt, topped with mango smoothie",
    highlights: ["Fresh mango", "Crystal jelly", "100% pure vanilla yogurt", "Mango smoothie"],
    bestFor: "A fruit and yogurt drink.",
    seoKeywords: "Mango Smoogurt, Sun Tea Mix menu",
  },
  {
    slug: "strawberry-lime-tea",
    name: "Strawberry Lime Tea",
    image: "/Images/ProductImg_StrawberryLimeTea.webp",
    price: "$6.99",
    category: "Most Ordered · Best seller",
    shortDescription: "A blend of strawberry and lime with tea, topped with fresh strawberry slices and lime wedges and crystal Jelly on the bottom. Most refreshing and BEST SELLER of the store.",
    description: "A blend of strawberry and lime with tea, topped with fresh strawberry slices and lime wedges and crystal Jelly on the bottom. Most refreshing and BEST SELLER of the store.",
    highlights: ["Strawberry", "Lime", "Crystal Jelly"],
    bestFor: "A refreshing fruit tea.",
    seoKeywords: "Strawberry Lime Tea, Sun Tea Mix menu",
  },
  {
    slug: "strawberry-souffle",
    name: "Strawberry Soufflé",
    image: "/Images/ProductImg_StrawberrySoufflePancakes.webp",
    imageAlt: "Strawberry Soufflé at Sun Tea Mix",
    price: "$11.99",
    category: "Most Ordered · 100% (7)",
    shortDescription: "Light, fluffy pancake topped with fresh strawberries, blueberries, and a generous drizzle of pink strawberry sauce.",
    description: "Light, fluffy pancake topped with fresh strawberries, blueberries, and a generous drizzle of pink strawberry sauce.",
    highlights: ["Soufflé pancake", "Strawberries", "Blueberries"],
    bestFor: "A fruit-topped soufflé pancake.",
    seoKeywords: "Strawberry Soufflé, Sun Tea Mix menu",
  },
] as const;

export function getPopularItem(slug: string) {
  return POPULAR_ITEMS.find((item) => item.slug === slug);
}
