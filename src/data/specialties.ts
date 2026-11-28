// Landing pages for what people search for: "soufflé pancakes Honolulu", "boba near me", etc.
export type Specialty = { slug: string; name: string; metaTitle: string; metaDescription: string; keywords: string[]; heroEyebrow?: string; heroHeadline: string; heroSubheadline?: string; primaryBlock: { heading: string; body: string }; quickAnswer?: { question: string; answer: string }; image?: string; relatedServiceNames?: string[]; faqs?: { question: string; answer: string }[] };

export const SPECIALTIES: Specialty[] = [
  {
    slug: "souffle-pancakes-honolulu",
    name: "Soufflé Pancakes",
    metaTitle: "Soufflé Pancakes in Honolulu | Sun Tea Mix Kakaʻako",
    metaDescription: "Fluffy Japanese-style soufflé pancakes made to order in Kakaʻako, Honolulu: strawberry, crème brûlée, brown sugar boba and classic. Open daily 11 AM–9 PM.",
    keywords: ["souffle pancakes Honolulu", "Japanese souffle pancakes Hawaii", "fluffy pancakes Kakaako", "dessert Honolulu", "souffle pancake near me"],
    heroEyebrow: "MADE TO ORDER",
    heroHeadline: "Soufflé Pancakes in Honolulu",
    heroSubheadline: "Tall, jiggly and cloud-soft, cooked fresh the moment you order at our Kakaʻako café.",
    quickAnswer: {
      question: "Where can I get soufflé pancakes in Honolulu?",
      answer: "Sun Tea Mix makes Japanese-style soufflé pancakes to order at 400 Keawe St #107 in Kakaʻako, Honolulu. Choose Strawberry, Crème Brûlée, Brown Sugar Boba or Classic. Each order is two pancakes and takes about 20 minutes. Open every day, 11 AM to 9 PM.",
    },
    primaryBlock: {
      heading: "Why our soufflé pancakes are worth the wait",
      body: "A soufflé pancake is only as good as how fresh it is, so we never make them ahead. Each order is whipped and slowly cooked when you order, which takes about 20 minutes, and arrives as two warm, airy pancakes stacked on top of each other. Go fruity with the Strawberry Soufflé (fresh strawberries, blueberries and strawberry sauce), crack into the caramelized top of the Crème Brûlée Soufflé, or pair chewy boba with the Brown Sugar Boba Soufflé. Order a drink while you wait and settle in.",
    },
    image: "/Images/ProductImg_CremeBruleeSouffle.webp",
    relatedServiceNames: ["Strawberry Soufflé", "Crème Brûlée Soufflé", "Brown Sugar Boba Soufflé", "Classic Soufflé"],
    faqs: [
      { question: "How long do soufflé pancakes take?", answer: "They are made fresh to order and usually take about 20 minutes. Order a drink while you wait, or order ahead online for pickup." },
      { question: "How many pancakes come in an order?", answer: "Each order comes with two soufflé pancakes stacked together, a nice size for a snack or to share." },
      { question: "Which soufflé pancake is most popular?", answer: "The Crème Brûlée Soufflé and Strawberry Soufflé are two of our most-liked items." },
    ],
  },
  {
    slug: "boba-milk-tea-honolulu",
    name: "Boba & Milk Tea",
    metaTitle: "Boba Milk Tea in Honolulu | Sun Tea Mix Kakaʻako",
    metaDescription: "Hong Kong–style classic milk tea, brown sugar boba milk, oolong milk teas and matcha latte in Kakaʻako, Honolulu. Order online for pickup.",
    keywords: ["boba Honolulu", "boba near me", "bubble tea Honolulu", "milk tea Kakaako", "brown sugar boba Honolulu", "boba tea Hawaii"],
    heroEyebrow: "BOBA NEAR YOU",
    heroHeadline: "Boba & Milk Tea in Honolulu",
    heroSubheadline: "Creamy Hong Kong–style milk tea, brown sugar boba and toasty oolong, made in Kakaʻako.",
    quickAnswer: {
      question: "Where can I get boba milk tea in Honolulu?",
      answer: "Sun Tea Mix at 400 Keawe St #107 in Kakaʻako, Honolulu serves boba and milk tea every day from 11 AM to 9 PM. Its most-liked drink is the Hong Kong–style Classic Milk Tea, and Brown Sugar Boba Milk adds chewy brown sugar boba under salted cheese foam. Order online for pickup or stay in the café.",
    },
    primaryBlock: {
      heading: "Our most-liked drink is a classic",
      body: "Classic Milk Tea is the most-liked drink at Sun Tea Mix: black tea and milk blended smooth in the Hong Kong style. Craving boba? Brown Sugar Boba Milk swirls brown sugar syrup and chewy brown sugar boba through fresh milk under our salted cheese foam, and Brown Sugar Milk Tea brings the same caramel sweetness to black milk tea. For something different, try Phoenix or Camellia oolong milk tea, a matcha latte, or the Oreo Snowcap Milk Tea with whipped cream and cookie crumbs.",
    },
    image: "/Images/ProductImg_BrownSugarMilkTea.webp",
    relatedServiceNames: ["Classic Milk Tea", "Brown Sugar Boba Milk", "Brown Sugar Milk Tea", "Crème Milk Tea", "Phoenix Oolong Milk Tea", "Matcha Latte"],
    faqs: [
      { question: "What is your most popular milk tea?", answer: "Classic Milk Tea, a Hong Kong–style black milk tea, is our #1 most-liked drink." },
      { question: "Can I change the sweetness or ice?", answer: "Yes. Ask our team about sweetness, ice and topping choices when you order." },
      { question: "Do you have caffeine-free boba drinks?", answer: "Our fresh milk drinks, like Brown Sugar Boba Milk and Strawberry Milk, are made without tea." },
    ],
  },
  {
    slug: "fruit-tea-honolulu",
    name: "Fresh Fruit Tea",
    metaTitle: "Fresh Fruit Tea in Honolulu | Sun Tea Mix Kakaʻako",
    metaDescription: "Real-fruit iced teas in Kakaʻako: Strawberry Lime Tea, Lilikoi & Pineapple, Mango, Orange and Fruit Oolong. Fresh fruit and brewed tea, open daily.",
    keywords: ["fruit tea Honolulu", "strawberry lime tea", "lilikoi tea Honolulu", "iced tea Kakaako", "fresh fruit tea near me"],
    heroEyebrow: "REAL FRUIT",
    heroHeadline: "Fresh Fruit Tea in Honolulu",
    heroSubheadline: "Fresh-cut fruit shaken with brewed jasmine green and oolong tea. Bright, cold and not too sweet.",
    quickAnswer: {
      question: "Where can I get fresh fruit tea in Honolulu?",
      answer: "Sun Tea Mix in Kakaʻako makes its fruit teas with fresh fruit. The best seller is Strawberry Lime Tea, and Lilikoi & Pineapple Tea and Fruit Oolong Tea are other favorites. Find it at 400 Keawe St #107, Honolulu, open every day from 11 AM to 9 PM.",
    },
    primaryBlock: {
      heading: "Our best seller is a fruit tea",
      body: "Strawberry Lime Tea is the best seller of the store: strawberry and lime with tea, fresh strawberry slices and lime wedges on top, and crystal jelly on the bottom. For a taste of the islands, the Lilikoi & Pineapple Tea pairs passion fruit with local pineapple, and Fruit Oolong Tea packs lilikoi, strawberry, mango, lime and pineapple into one cup. Every fruit tea is made with fresh fruit.",
    },
    image: "/Images/ProductImg_LilikoiPineappleTea.webp",
    relatedServiceNames: ["Strawberry Lime Tea", "Lilikoi & Pineapple Tea", "Mango Tea", "Orange Tea", "Strawberry Tea", "Fruit Oolong Tea"],
    faqs: [
      { question: "What is your best-selling drink?", answer: "Strawberry Lime Tea is the best seller of the store." },
      { question: "Is there real fruit in your fruit teas?", answer: "Yes. Our fruit teas are made with fresh fruit like strawberry, lime, mango, orange, lilikoi and pineapple." },
      { question: "What tea do you use?", answer: "Our fruit teas use brewed jasmine green or oolong tea, depending on the drink." },
    ],
  },
  {
    slug: "smoothies-cheese-foam",
    name: "Smoothies & Cheese Foam",
    metaTitle: "Smoothies with Cheese Foam in Honolulu | Sun Tea Mix",
    metaDescription: "Mango Charm, Watermelon Smoothie, Smoogurt and fruit smoothies topped with our signature salted cheese foam in Kakaʻako, Honolulu.",
    keywords: ["cheese foam Honolulu", "mango smoothie Honolulu", "smoothies Kakaako", "watermelon smoothie Honolulu", "yogurt smoothie Honolulu"],
    heroEyebrow: "SIGNATURE FOAM",
    heroHeadline: "Smoothies with Salted Cheese Foam",
    heroSubheadline: "Thick fruit smoothies and layered Sun Tea Specials, crowned with our signature salted cheese foam.",
    quickAnswer: {
      question: "What is a cheese foam smoothie?",
      answer: "It is a fruit smoothie topped with salted cheese foam, a creamy, lightly salty layer that makes the fruit taste brighter. At Sun Tea Mix in Kakaʻako, Honolulu, Mango Charm and the Watermelon Smoothie are popular picks. Sip through the foam first, then mix it in.",
    },
    primaryBlock: {
      heading: "Sweet fruit meets salty-creamy foam",
      body: "Salted cheese foam is a creamy, lightly salty topping that makes fruit taste even brighter. Mango Charm, our #2 most-liked drink, layers fresh mango, crystal boba and cheese foam under a mango smoothie with grapefruit. The Watermelon Smoothie is blended fresh watermelon under a cap of foam. Prefer yogurt? Mango and Strawberry Smoogurt use 100% pure vanilla yogurt instead. Our classic smoothies come in strawberry, mango, grape, grapefruit, pineapple, and blueberry and strawberry.",
    },
    image: "/Images/ProductImg_TropicalLavaFlow.webp",
    relatedServiceNames: ["Mango Charm", "Watermelon Smoothie", "Mango Smoogurt", "Tropical Lava Flow", "Strawberry Avocado Yogurt", "Grape Smoothie"],
    faqs: [
      { question: "What is cheese foam?", answer: "It is a creamy, lightly salty foam spooned on top of the drink. Sip through it first, then mix it in." },
      { question: "Which smoothie should I try first?", answer: "Mango Charm is one of our most-liked drinks and a great place to start." },
      { question: "Do you have yogurt drinks?", answer: "Yes. Mango Smoogurt and Strawberry Smoogurt are made with 100% pure vanilla yogurt." },
    ],
  },
  {
    slug: "coconut-desserts",
    name: "CoCo Coconut Desserts",
    metaTitle: "Coconut Jelly Desserts in Honolulu | Sun Tea Mix CoCo",
    metaDescription: "CoCo coconut jelly desserts topped with fresh mango, strawberry or avocado at Sun Tea Mix in Kakaʻako, Honolulu.",
    keywords: ["coconut dessert Honolulu", "coconut jelly Honolulu", "mango dessert Honolulu", "dessert Kakaako", "cold dessert Honolulu"],
    heroEyebrow: "COOL & CREAMY",
    heroHeadline: "CoCo Coconut Desserts",
    heroSubheadline: "Smooth coconut jelly topped with fresh fruit. A cool treat for a warm Honolulu day.",
    quickAnswer: {
      question: "What is CoCo at Sun Tea Mix?",
      answer: "CoCo is Sun Tea Mix’s coconut jelly dessert: creamy, lightly sweet and topped with fresh fruit. Choose Coco Mango, Strawberry Coco, Avo Coco or Classic CoCo at the café at 400 Keawe St #107 in Kakaʻako, Honolulu.",
    },
    primaryBlock: {
      heading: "A lighter dessert, full of coconut",
      body: "CoCo is our creamy coconut jelly dessert, lightly sweet and topped with fresh fruit. Coco Mango, piled with fresh mango chunks, is a Sun Tea Mix summer favorite. Strawberry Coco adds fresh strawberry, Avo Coco brings in avocado, and Classic CoCo keeps it simple. Pair one with a fruit tea, or share it alongside a soufflé pancake.",
    },
    image: "/Images/ProductImg_CocoMango.webp",
    relatedServiceNames: ["Coco Mango", "Strawberry Coco", "Avo Coco", "Classic CoCo"],
    faqs: [
      { question: "What is CoCo?", answer: "CoCo is our coconut jelly dessert, creamy and lightly sweet, topped with fresh fruit." },
      { question: "Which CoCo is most popular?", answer: "Coco Mango, with fresh mango chunks, is a summer favorite." },
    ],
  },
  {
    slug: "study-cafe-kakaako",
    name: "Study & Hangout Café",
    metaTitle: "Café to Study & Hang Out in Kakaʻako | Sun Tea Mix",
    metaDescription: "A calm, bright tea café in Kakaʻako with Wi-Fi, outlets, games and free guest parking. Bring your laptop or your friends. Open daily 11 AM–9 PM.",
    keywords: ["cafe to study Honolulu", "study spot Kakaako", "cafe with wifi Honolulu", "places to hang out Honolulu", "tea cafe Kakaako"],
    heroEyebrow: "STAY A WHILE",
    heroHeadline: "A Café to Study & Hang Out in Kakaʻako",
    heroSubheadline: "Bright, calm and comfortable, with Wi-Fi, outlets and plenty of drinks to keep you going.",
    quickAnswer: {
      question: "Is Sun Tea Mix a good place to study in Kakaʻako?",
      answer: "Yes. Sun Tea Mix at 400 Keawe St #107 is a bright, calm tea café with Wi-Fi, plenty of outlets and games for breaks. It is open every day from 11 AM to 9 PM, so there is time to settle in with a drink and a soufflé pancake.",
    },
    primaryBlock: {
      heading: "Room to work, room to relax",
      body: "Guests often tell us Sun Tea Mix is a great place to work or study: the room is bright and calm, there is Wi-Fi, plenty of outlets, and games for when it is time for a break. It is an easy meet-up spot for friends and families too. Grab a fruit tea or milk tea, order a soufflé pancake to share, and stay as long as you like. We are open every day from 11 AM to 9 PM, with free parking for guests.",
    },
    image: "/Images/insta/5.webp",
    relatedServiceNames: ["Classic Milk Tea", "Strawberry Lime Tea", "Crème Brûlée Soufflé"],
    faqs: [
      { question: "Do you have Wi-Fi and outlets?", answer: "Yes. The café has Wi-Fi and plenty of outlets for laptops and phones." },
      { question: "Is there parking?", answer: "Yes. Free parking is available for Sun Tea Mix guests." },
      { question: "When are you open?", answer: "We are open every day from 11 AM to 9 PM." },
    ],
  },
];

export const SPECIALTY_SLUGS = SPECIALTIES.map(({ slug }) => slug);
