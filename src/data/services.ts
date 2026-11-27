// The Sun Tea Mix menu. Names and prices match the online ordering menu.
// Only Sun Tea Mix's own product photos are used (no customer photos).
export type ServiceItem = { name: string; description: string; price?: string; image?: string; popular?: boolean };
export type ServiceCategory = {
  id: string;
  name: string;
  description: string;
  image: string;
  specialtySlug?: string;
  detailHeading: string;
  detailBody: string;
  highlights: string[];
  items: ServiceItem[];
};

const P = (file: string) => `/Images/ProductImg_${file}.webp`;

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "souffle-pancakes",
    name: "Soufflé Pancakes",
    description: "Tall, jiggly Japanese-style soufflé pancakes made fresh to order, with fruit, brown sugar boba or a caramelized crème brûlée top.",
    image: P("StrawberrySoufflePancakes"),
    specialtySlug: "souffle-pancakes-honolulu",
    detailHeading: "Made to order, so they arrive warm and fluffy.",
    detailBody: "Our soufflé pancakes are whipped and cooked when you order, not ahead of time, so they come to the table light, airy and still warm. Each order is two stacked pancakes, a good size to share with a drink. Because they are made fresh, please allow about 20 minutes.",
    highlights: ["Cooked fresh for every order", "About 20 minutes to make", "Two pancakes per order, great for sharing"],
    items: [
      { name: "Strawberry Soufflé", price: "$11.99", description: "Light, fluffy soufflé pancakes topped with fresh strawberries, blueberries and a drizzle of pink strawberry sauce.", image: P("StrawberrySoufflePancakes"), popular: true },
      { name: "Crème Brûlée Soufflé", price: "$11.99", description: "Delicate soufflé pancakes finished with a crackly caramelized sugar crust.", image: P("CremeBruleeSouffle"), popular: true },
      { name: "Brown Sugar Boba Soufflé", price: "$11.99", description: "Fluffy soufflé pancakes topped with brown sugar syrup and chewy boba pearls.", image: P("BrownSugarSoufflePancakes") },
      { name: "Classic Soufflé", price: "$9.99", description: "Light and airy soufflé pancakes with a smooth, creamy glaze.", image: P("ClassicSouffle") },
    ],
  },
  {
    id: "sun-tea-specials",
    name: "Sun Tea Specials",
    description: "Our signature drinks: fresh mango, strawberry and watermelon layered with salted cheese foam, crystal boba or vanilla yogurt.",
    image: P("MangoCharm"),
    specialtySlug: "smoothies-cheese-foam",
    detailHeading: "The drinks people come back for.",
    detailBody: "Sun Tea Specials are layered drinks built around fresh fruit. Mango Charm, one of our most-liked drinks, stacks fresh mango, crystal boba and our signature salted cheese foam under a mango smoothie with grapefruit. The Smoogurt drinks swap the foam for 100% pure vanilla yogurt.",
    highlights: ["Fresh mango, strawberry and watermelon", "Signature salted cheese foam", "Yogurt and avocado options"],
    items: [
      { name: "Mango Charm", price: "$7.99", description: "Fresh mango with signature salted cheese foam and crystal boba, topped with mango smoothie and grapefruit.", image: P("MangoCharm"), popular: true },
      { name: "Mango Smoogurt", price: "$7.99", description: "Fresh mango with crystal jelly and 100% pure vanilla yogurt, topped with mango smoothie.", image: P("MangoSmoogurt"), popular: true },
      { name: "Strawberry Smoogurt", price: "$7.99", description: "Fresh strawberry with crystal jelly and 100% pure vanilla yogurt, topped with mango smoothie.", image: P("StrawberrySmoogurt") },
      { name: "Watermelon Smoothie", price: "$7.99", description: "Fresh watermelon blended smooth and topped with signature salted cheese foam.", image: P("WatermelonSmoothie") },
      { name: "Tropical Lava Flow", price: "$7.99", description: "Fresh strawberry with coconut cream and crystal jelly, topped with salted cheese foam and mango smoothie.", image: P("TropicalLavaFlow") },
      { name: "Strawberry Avocado Yogurt", price: "$7.99", description: "Smashed avocado and salted cheese foam under fresh strawberry blended with Greek yogurt.", image: P("StrawberryAvocadoYogurt") },
    ],
  },
  {
    id: "fruit-iced-tea",
    name: "Fruit Iced Tea",
    description: "Real fruit shaken with freshly brewed tea: strawberry lime, mango, orange, lilikoi pineapple and more.",
    image: P("StrawberryLimeTea"),
    specialtySlug: "fruit-tea-honolulu",
    detailHeading: "Real fruit, real tea, nothing from a powder.",
    detailBody: "Our fruit teas start with fresh-cut fruit and brewed jasmine green or oolong tea. Strawberry Lime Tea is the best seller of the store: strawberry and lime with tea, fresh strawberry slices, lime wedges and crystal jelly on the bottom. The Lilikoi & Pineapple Tea pairs passion fruit with local pineapple for a true taste of Hawaiʻi.",
    highlights: ["Fresh-cut fruit in every cup", "Brewed jasmine green and oolong teas", "Strawberry Lime Tea is our best seller"],
    items: [
      { name: "Strawberry Lime Tea", price: "$6.99", description: "Strawberry and lime with tea, topped with fresh strawberry slices and lime wedges, with crystal jelly on the bottom. Our best seller.", image: P("StrawberryLimeTea"), popular: true },
      { name: "Lilikoi & Pineapple Tea", price: "$6.99", description: "Lilikoi (passion fruit) blended with local pineapple for the tropical flavor of Hawaiʻi.", image: P("LilikoiPineappleTea") },
      { name: "Mango Tea", price: "$6.99", description: "Sweet mango chunks in refreshing tea with crystal jelly.", image: P("MangoTea") },
      { name: "Orange Tea", price: "$6.99", description: "Fresh orange blended with jasmine green tea.", image: P("OrangeTea") },
      { name: "Strawberry Tea", price: "$6.99", description: "Fresh strawberries, tea and crystal jelly for a fruity, refreshing drink.", image: P("StrawberryTea") },
      { name: "Fruit Oolong Tea", price: "$6.99", description: "Lilikoi, strawberry, mango, lime and pineapple with oolong tea.", image: P("FruitOolongTea") },
      { name: "Mango Lime Tea", price: "$6.99", description: "Mango and lime with tea for a bright, tangy iced tea." },
      { name: "Lime Tea", price: "$6.99", description: "Fresh lime with a smooth tea base." },
      { name: "Camellia Oolong Lime Tea", price: "$6.99", description: "Camellia oolong tea with fresh lime." },
    ],
  },
  {
    id: "smoothies",
    name: "Smoothies with Cheese Foam",
    description: "Blended fruit smoothies crowned with a creamy layer of salted cheese foam.",
    image: "/Images/insta/4.webp",
    specialtySlug: "smoothies-cheese-foam",
    detailHeading: "Sweet fruit, salty-creamy foam.",
    detailBody: "Each smoothie is blended from fruit and finished with a layer of our salted cheese foam. Sip through the foam first, then mix it in. Choose strawberry, grape, grapefruit, pineapple, mango, or blueberry and strawberry.",
    highlights: ["Six fruit flavors", "Topped with salted cheese foam", "Thick, icy and refreshing"],
    items: [
      { name: "Strawberry Smoothie", price: "$6.99", description: "Blended strawberry smoothie topped with salted cheese foam." },
      { name: "Mango Smoothie", price: "$6.99", description: "Blended mango smoothie topped with salted cheese foam." },
      { name: "Grape Smoothie", price: "$6.99", description: "Blended grape smoothie topped with a layer of creamy cheese foam." },
      { name: "Grapefruit Smoothie", price: "$6.99", description: "Blended grapefruit smoothie topped with salted cheese foam." },
      { name: "Pineapple Smoothie", price: "$6.99", description: "Blended pineapple smoothie topped with salted cheese foam." },
      { name: "Blueberry & Strawberry Smoothie", price: "$6.99", description: "Blueberry and strawberry blended together and topped with salted cheese foam." },
    ],
  },
  {
    id: "milk-tea",
    name: "Milk Tea",
    description: "Hong Kong–style classic milk tea, brown sugar milk tea, oolong milk teas, matcha latte and Oreo Snowcap.",
    image: P("ClassicMilkTea"),
    specialtySlug: "boba-milk-tea-honolulu",
    detailHeading: "Our most-liked drink starts here.",
    detailBody: "Classic Milk Tea, a creamy Hong Kong–style blend of black tea and milk, is the most-liked drink on our menu. Prefer something toasty? Try Phoenix or Camellia oolong milk tea, brown sugar milk tea, or a matcha latte. Most milk teas come in medium or large.",
    highlights: ["Hong Kong–style Classic Milk Tea", "Oolong, brown sugar and matcha options", "Medium and large sizes"],
    items: [
      { name: "Classic Milk Tea", price: "$6.99 (L)", description: "Creamy black tea and milk, known as Hong Kong–style milk tea. Our #1 most-liked drink.", image: P("ClassicMilkTea"), popular: true },
      { name: "Brown Sugar Milk Tea", price: "$5.99 (M) · $6.99 (L)", description: "Sweet brown sugar swirled through Hong Kong–style black milk tea.", image: P("BrownSugarMilkTea") },
      { name: "Crème Milk Tea", price: "$6.49 (M) · $7.49 (L)", description: "Milk tea finished with a smooth, creamy top layer.", image: P("CremeMilkTea") },
      { name: "Matcha Latte", price: "$6.99 (M) · $7.99 (L)", description: "Creamy matcha and milk with a smooth texture and bright green color." },
      { name: "Phoenix Oolong Milk Tea", price: "$5.99 (M) · $6.99 (L)", description: "Rich oolong tea blended with creamy milk and chewy boba pearls." },
      { name: "Camellia Oolong Milk Tea", price: "$6.49 (M) · $6.99 (L)", description: "Floral camellia oolong tea with milk." },
      { name: "White Peach Oolong Milk Tea", price: "$6.99 (M) · $7.99 (L)", description: "White peach oolong tea with milk." },
      { name: "Oreo Snowcap Milk Tea", price: "$7.99", description: "Milk tea with chewy tapioca pearls, topped with whipped cream and crushed Oreo cookies." },
    ],
  },
  {
    id: "fresh-milk",
    name: "Fresh Milk",
    description: "Fresh milk drinks with brown sugar boba, fresh strawberry or matcha, no tea needed.",
    image: P("BrownSugarBobaMilk"),
    specialtySlug: "boba-milk-tea-honolulu",
    detailHeading: "Caffeine-free and full of boba.",
    detailBody: "Fresh milk drinks skip the tea. Brown Sugar Boba Milk swirls brown sugar syrup and our brown sugar boba through fresh milk, then adds salted cheese foam on top. Strawberry Milk is fresh milk with real strawberry pieces. Matcha Mango and Matcha Strawberry layer matcha over fruit.",
    highlights: ["Brown sugar boba in fresh milk", "Real strawberry pieces", "Matcha and fruit layers"],
    items: [
      { name: "Brown Sugar Boba Milk", price: "$6.59", description: "Fresh milk with brown sugar syrup and brown sugar boba, topped with signature salted cheese foam.", image: P("BrownSugarBobaMilk"), popular: true },
      { name: "Strawberry Milk", price: "$6.59", description: "Fresh milk with fresh strawberry pieces.", image: P("StrawberryMilk") },
      { name: "Matcha Mango", price: "$6.99", description: "Matcha and fresh milk layered with mango." },
      { name: "Matcha Strawberry", price: "$6.99", description: "Matcha and fresh milk layered with strawberry." },
    ],
  },
  {
    id: "fruit-milkshakes",
    name: "Pure Fruit Milkshakes",
    description: "Thick blended fruit shakes: Mix Berry Blast, Avocado Banana and the Hawaii Special.",
    image: P("AvocadoMilkShake"),
    specialtySlug: "smoothies-cheese-foam",
    detailHeading: "Blended thick with whole fruit.",
    detailBody: "Our pure fruit milkshakes are blended thick and creamy. Pick Mix Berry Blast for berries, Avocado Banana for something rich and smooth, or the Hawaii Special for a tropical mix.",
    highlights: ["Blended thick and creamy", "Berry, avocado and tropical flavors", "A filling treat on its own"],
    items: [
      { name: "Mix Berry Blast", price: "$7.99", description: "A blended mixed-berry milkshake." },
      { name: "Avocado Banana Smoothie", price: "$7.99", description: "Avocado and banana blended rich and smooth." },
      { name: "Hawaii Special", price: "$7.99", description: "The house special fruit milkshake." },
    ],
  },
  {
    id: "pure-tea",
    name: "Pure Tea",
    description: "Freshly brewed jasmine green, Four Seasons oolong, white peach oolong and camellia oolong teas.",
    image: "/Images/insta/6.webp",
    specialtySlug: "fruit-tea-honolulu",
    detailHeading: "Just good tea, brewed fresh.",
    detailBody: "If you like your tea clean and simple, try our pure teas. Jasmine green tea is light and floral, Four Seasons oolong is smooth and fragrant, and white peach oolong has a gentle fruity aroma. Available in medium or large.",
    highlights: ["Jasmine green and oolong teas", "Clean, simple and refreshing", "Medium and large sizes"],
    items: [
      { name: "Jasmine Green Tea", price: "$5.29 (M) · $6.29 (L)", description: "Light, floral jasmine green tea." },
      { name: "Four Seasons Oolong Tea", price: "$5.29 (M)", description: "Smooth, fragrant Four Seasons oolong." },
      { name: "White Peach Oolong Tea", price: "$5.29 (M) · $6.29 (L)", description: "Oolong tea with a gentle white peach aroma." },
      { name: "Camellia Oolong Tea", price: "$6.29 (L)", description: "Floral camellia oolong tea." },
    ],
  },
  {
    id: "coco",
    name: "CoCo",
    description: "Creamy coconut jelly desserts topped with fresh mango, strawberry or avocado.",
    image: P("CocoMango"),
    specialtySlug: "coconut-desserts",
    detailHeading: "A cool, creamy coconut dessert.",
    detailBody: "CoCo is our coconut jelly dessert: smooth, creamy and lightly sweet, topped with fresh fruit. Coco Mango, with fresh mango chunks, is a Sun Tea Mix summer favorite.",
    highlights: ["Creamy coconut jelly", "Topped with fresh fruit", "A light dessert for warm days"],
    items: [
      { name: "Coco Mango", price: "$10.99", description: "Creamy coconut jelly topped with fresh mango chunks.", image: P("CocoMango"), popular: true },
      { name: "Strawberry Coco", price: "$10.99", description: "Creamy coconut jelly topped with fresh strawberry." },
      { name: "Avo Coco", price: "$11.99", description: "Creamy coconut jelly with avocado." },
      { name: "Classic CoCo", price: "$9.99", description: "Our original creamy coconut jelly." },
    ],
  },
];

export const MENU_ITEM_COUNT = SERVICE_CATEGORIES.reduce((n, c) => n + c.items.length, 0);
