import { BUSINESS } from "./business";

export type FAQ = { question: string; answer: string };

export const FAQS: FAQ[] = [
  {
    question: "Where is Sun Tea Mix?",
    answer: `We are at ${BUSINESS.address.full}, in Honolulu’s Kakaʻako neighborhood. Free parking is available for guests.`,
  },
  {
    question: "What are your hours?",
    answer: `${BUSINESS.hoursNote} Call ${BUSINESS.phone} if you have a question before you visit.`,
  },
  {
    question: "What is Sun Tea Mix known for?",
    answer: "Real-fruit iced teas like our best-selling Strawberry Lime Tea, Hong Kong–style Classic Milk Tea, smoothies topped with salted cheese foam, and soufflé pancakes made to order.",
  },
  {
    question: "How long do soufflé pancakes take?",
    answer: "Soufflé pancakes are made fresh to order and usually take about 20 minutes.",
  },
  {
    question: "Can I order online for pickup?",
    answer: `Yes. [Order online](${BUSINESS.orderUrl}) and pick up at the café, or call ${BUSINESS.phone}. Sun Tea Mix is also available on delivery apps.`,
  },
  {
    question: "Can I customize my drink?",
    answer: "Yes. Ask our team about sweetness, ice and topping choices such as boba, jelly and cheese foam.",
  },
  {
    question: "Is it a good place to study or work?",
    answer: "Many guests study and work here. The café is bright and calm, with Wi-Fi and plenty of outlets.",
  },
  {
    question: "Is there parking?",
    answer: "Yes. Complimentary parking is available for Sun Tea Mix guests.",
  },
];
