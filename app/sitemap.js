// FIXED 2025-02-10 - removed old vercel url
import categoryPageData from "../public/data/category/categorypagedata.json";
import authorsData from "../public/data/authors.json";

const SITE_URL = "https://www.courtnews.org";

export default function sitemap() {
  const now = new Date();

  /* ---------------- STATIC PAGES ---------------- */
  const staticPages = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/about-us`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${SITE_URL}/terms-and-conditions`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];

  /* ---------------- CATEGORY PAGES ---------------- */
  const categoryPages = Object.keys(categoryPageData).map((category) => ({
    url: `${SITE_URL}/${category}`,
    lastModified: now,
    changeFrequency: "daily",
    priority: 0.8,
  }));

  /* ---------------- ARTICLE PAGES ---------------- */
  const articlePages = [];

  Object.entries(categoryPageData).forEach(([category, posts]) => {
    posts.forEach((post) => {
      articlePages.push({
        url: `${SITE_URL}/${category}/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: "weekly",
        priority: 0.9,
      });
    });
  });

  /* ---------------- AUTHOR PAGES ---------------- */
  const authorPages = authorsData.categories.map((item) => {
    const author = item.author;
    return {
      url: `${SITE_URL}/authors/${author.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.6,
    };
  });

  /* ---------------- COMBINE ALL ---------------- */
  return [...staticPages, ...categoryPages, ...articlePages, ...authorPages];
}
