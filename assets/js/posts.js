/* My2cents Inked — post data.
   In a production build this would come from a CMS/API;
   here it's a static array so the whole site runs with no backend.
   Only genuine, explicitly-provided pieces belong here — never seed
   or placeholder content. Empty categories should stay empty until
   real writing is added. */

const POSTS = [
  {
    slug: "the-two-cents-lilies",
    title: "The Two Cents Lilies",
    category: "Poetry",
    tags: ["poetry", "relationships", "love", "flowers", "reflection"],
    excerpt: "A bouquet of lilies quietly witnesses two people rediscovering each other through silence, patience, and small acts of love.",
    date: "2026-07-29",
    author: "Dr. Pooja Wadekar",
    featured: false,
    cover: "cover-2",
    content: `
      <p>The two-cent lilies you got me<br>
      From the pavement the other day.<br>
      Funny thing was,<br>
      I didn't really have a say.<br>
      I stood watching<br>
      The raindrops join the ocean,<br>
      Happy for them<br>
      To finally be complete.<br>
      Softly, I peeked into my soul too,<br>
      Wondering what she was up to.<br>
      She had been so silent<br>
      Since he arrived—<br>
      No more tantrums,<br>
      No more cries.<br>
      She stood quietly,<br>
      Watching the raindrops too.<br>
      The stillness<br>
      Just before the tempest.<br>
      Her eyelashes were wet<br>
      As she looked up at me.<br>
      Why?<br>
      I couldn't see.<br>
      He returned,<br>
      Lilies in his hand.<br>
      I smiled<br>
      At my man.</p>
    `,
  },
  {
    slug: "where-can-peace-be-found",
    title: "Where Can Peace Be Found?",
    category: "Poetry",
    tags: ["poetry", "observation", "everyday-life", "bazaar", "peace", "reflection"],
    excerpt: "Dragged reluctantly into a crowded bazaar, I discover that peace isn't always found in silence—it sometimes hides in the heart of chaos.",
    date: "2026-07-21",
    author: "Dr. Pooja Wadekar",
    featured: false,
    cover: "cover-5",
    content: `
      <p>I was sour, being dragged to a bazaar today,<br>
      Coughed and spluttered throughout the way.<br>
      It was only on Saturdays and Mondays,<br>
      So imagine the utter chaos of that place!</p>
      <p>&ldquo;Dear God,<br>
      Do people actually like this?<br>
      Serenity and peace,<br>
      Don't they miss?&rdquo;</p>
      <p>To give it a try,<br>
      I closed my eyes and counted from five.<br>
      You'll be surprised to know what happened<br>
      When I opened my eyes.</p>
      <p>Stretched overhead was a vast clear blue sky,<br>
      Speckled with birds that merrily fly.<br>
      Wafted the tantalising smell<br>
      Of dried spices of all sorts.<br>
      I got to taste water,<br>
      Cooled in beautiful earthen pots.</p>
      <p>Sunlight was scattered<br>
      By dust in the air,<br>
      Adding sparkle<br>
      To the eyes of dolls, intricate and fair.</p>
      <p>Colourful dancing tents<br>
      Whistled slightly overhead.<br>
      Beneath them,<br>
      Furry cats dozed, happily well-fed.</p>
      <p>Every yell,<br>
      Every bargain,<br>
      Now seemed to be following a rhyme.<br>
      Suddenly,<br>
      All of it felt so divine.</p>
      <p>Couldn't even remember<br>
      What I was thinking about,<br>
      As I joined wholeheartedly<br>
      The swaying crowd.</p>
      <p>Something about peace, was it?<br>
      Ah,<br>
      I see now<br>
      How God's plans fit.</p>
    `,
  },
];

/* --- Helpers shared across pages --- */

function wordsToReadingTime(html) {
  const text = html.replace(/<[^>]+>/g, " ");
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

POSTS.forEach((p) => {
  p.readingTime = wordsToReadingTime(p.content);
  p.excerptWords = p.excerpt;
});

const CATEGORIES = ["Women's Health", "Medicine", "Essays", "Stories", "Poetry", "Books & Chapters", "Exploration"];

const CATEGORY_ACCENTS = {
  "Women's Health": "accent-womens-health",
  Medicine: "accent-medicine",
  Essays: "accent-essays",
  Stories: "accent-stories",
  Poetry: "accent-poetry",
  "Books & Chapters": "accent-books",
  Exploration: "accent-exploration",
};

function categoryAccentClass(cat) {
  return CATEGORY_ACCENTS[cat] || "";
}

function getAllTags() {
  const set = new Set();
  POSTS.forEach((p) => p.tags.forEach((t) => set.add(t)));
  return Array.from(set).sort();
}

function getPostBySlug(slug) {
  return POSTS.find((p) => p.slug === slug);
}

function getPostsByCategory(category) {
  return POSTS.filter((p) => p.category === category).sort((a, b) => new Date(b.date) - new Date(a.date));
}

function getFeaturedPosts() {
  return POSTS.filter((p) => p.featured).sort((a, b) => new Date(b.date) - new Date(a.date));
}

function getLatestPosts(limit = 6, excludeSlug = null) {
  return POSTS
    .filter((p) => p.slug !== excludeSlug)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);
}

function getRelatedPosts(post, limit = 3) {
  return POSTS
    .filter((p) => p.slug !== post.slug && (p.category === post.category || p.tags.some((t) => post.tags.includes(t))))
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);
}

function getAdjacentPosts(post, categoryFilter = null) {
  const pool = categoryFilter ? POSTS.filter((p) => p.category === categoryFilter) : POSTS;
  const sorted = [...pool].sort((a, b) => new Date(b.date) - new Date(a.date));
  const index = sorted.findIndex((p) => p.slug === post.slug);
  return {
    newer: index > 0 ? sorted[index - 1] : null,
    older: index < sorted.length - 1 ? sorted[index + 1] : null,
  };
}

function formatDate(dateStr) {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

function initials(name) {
  const clean = name.replace(/^(Dr|Mr|Mrs|Ms|Prof)\.?\s+/i, "");
  return clean.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
}
