import 'dotenv/config';
import OpenAI from "openai";
import fs from "fs";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const categories = [
  "crime",
  "politics",
  "courts",
  "investigations",
  "civil-rights",
  "law-and-justice",
  "us-news"
];

const filePath = "public/data/category/categorypagedata.json";

// ---------- Helpers ----------

function getNextId(arr) {
  if (!arr.length) return 1;
  return Math.max(...arr.map(a => a.id)) + 1;
}

function isDuplicateSlug(arr, slug) {
  return arr.some(article => article.slug === slug);
}

function isSimilarContent(existingArticles, newText) {
  const newStart = newText.substring(0, 300).toLowerCase();
  return existingArticles.some(article => {
    const oldStart = article.body.dropcap.text.substring(0, 300).toLowerCase();
    return oldStart.includes(newStart.slice(0, 150));
  });
}

function extractJSON(text) {
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}") + 1;
  return text.slice(start, end);
}

function getTodayDate() {
  const today = new Date();
  return today.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

// ---------- AI Article Generator ----------

async function generateArticle(category) {
  const prompt = `
You are a senior US court reporter writing for courtnews.org.

Write a realistic, SEO-optimized United States legal news article for 2026.

The topic MUST relate to US courts, law, justice, crime, civil rights, investigations, or legal politics.

Category: "${category}"

Write in professional legal journalism tone like Court News Service / AP News.

Follow this EXACT JSON structure and fill ALL fields properly.

Return ONLY valid JSON:

{
  "metaTitle": "",
  "metaDescription": "",
  "slug": "",
  "heading": "",
  "excerpt": "",
  "date": "",
  "image": "/images/sample.webp",
  "alt": "",
  "heroImage": "/images/sample.webp",
  "body": {
    "dropcap": { "letter": "", "text": "" },
    "paragraphs": [],
    "quote": { "text": "", "author": "" },
    "sections": [
      {
        "type": "imageWithText",
        "text": [],
        "image": { "url": "/images/sample-si.webp", "alt": "" },
        "additionalText": []
      },
      {
        "type": "twoColumnLayout",
        "title": "",
        "mainContent": [],
        "showMoreRead": true
      },
      {
        "type": "fullWidth",
        "title": "",
        "content": [],
        "image": { "url": "/images/sample-ti.webp", "alt": "" },
        "subsections": [
          {
            "title": "",
            "text": [],
            "checklist": [],
            "additionalText": []
          }
        ]
      },
      {
        "type": "finalSection",
        "title": "",
        "intro": [],
        "twoColumnContent": {
          "left": [],
          "rightQuote": { "text": "", "author": "" }
        },
        "conclusion": []
      }
    ]
  }
}
`;

  const res = await openai.chat.completions.create({
    model: "gpt-4.1-mini",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.8,
  });

  const raw = res.choices[0].message.content;
  const clean = extractJSON(raw);
  const article = JSON.parse(clean);

  // Set today date automatically
  article.date = getTodayDate();

  return article;
}

// ---------- Main Runner ----------

async function run() {
  const newsData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  for (const category of categories) {
    let article = await generateArticle(category);
    let attempts = 0;

    while (
      (isDuplicateSlug(newsData[category], article.slug) ||
        isSimilarContent(newsData[category], article.body.dropcap.text)) &&
      attempts < 3
    ) {
      console.log(`Duplicate detected in ${category}. Regenerating...`);
      article = await generateArticle(category);
      attempts++;
    }

    if (
      !isDuplicateSlug(newsData[category], article.slug) &&
      !isSimilarContent(newsData[category], article.body.dropcap.text)
    ) {
      const id = getNextId(newsData[category]);
      newsData[category].push({ id, ...article });
      console.log(`✅ Added unique article to ${category}`);
    } else {
      console.log(`⛔ Skipped duplicate in ${category}`);
    }
  }

  fs.writeFileSync(filePath, JSON.stringify(newsData, null, 2));
  console.log("🎉 All categories updated successfully!");
}

run();
