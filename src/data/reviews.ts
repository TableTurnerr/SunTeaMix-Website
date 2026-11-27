export type Review = { author: string; rating?: number; text: string; date?: string; source?: "Google"; url?: string };

// Real Google reviews, already shown on the current sunteamix.co site. Excerpts end with "…".
export const REVIEWS: Review[] = [
  {
    author: "SK. Fazlee Rabby",
    text: "Best place in Honolulu to have a cup of tea. The interior is really aesthetic and calm. The place is really suitable if you want to work/study as it remains quite mostly…",
    source: "Google",
    url: "https://share.google/2NkwLo0iD89kijQDY",
  },
  {
    author: "David Yoshihara",
    text: "Cute place that we happened to stop by on a Monday afternoon around 4:30 pm. They have a nice dining area with games, plenty of outlets, and wifi. The tea came out quickly…",
    source: "Google",
    url: "https://share.google/w5GAVS5ef4PdGoGpK",
  },
  {
    author: "Annabelle",
    text: "Decent soufflé pancakes! The portion size is perfect for a snack (two pancakes stacked on top of each other). The batter was a tad bit dense to my liking, but still tasted pretty good!",
    source: "Google",
    url: "https://share.google/YdqJhukpUi5VXdjk6",
  },
];
