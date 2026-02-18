

import React from "react";
import categoryPageData from "../../public/data/category/categorypagedata.json";
import authorsData from "../../public/data/authors.json";
import Link from "next/link"; 
import Image from "next/image";
import { notFound } from "next/navigation";

const SITE_URL = "https://www.courtnews.org";

// Category configurations
const categoryConfig = {
  crime: {
    title: "Crime",
    metaTitle: "Crime News & Analysis — CourtNews",
    metaDescription:
      "Stay updated with the latest crime news and criminal justice reporting. In-depth analysis, investigative stories, and breaking developments from CourtNews.",
    heroDescription:
      "Our crime section delivers original journalism focused on accuracy, accountability, and insight. Our editorial team covers breaking developments, law enforcement operations, criminal investigations, and public safety issues.",
    heroImage: "/images/crime-hero.webp",
    keywords: "crime news, criminal justice, law enforcement, investigations, breaking crime"
  },
  political: {
    title: "Political",
    metaTitle: "Political News & Analysis — CourtNews",
    metaDescription:
      "Stay updated with the latest political news and analysis. Congressional coverage, White House policies, elections, and national debates from CourtNews.",
    heroDescription:
      "Our Political section delivers original journalism focused on accuracy, accountability, and insight. Our editorial team covers breaking political developments, congressional actions, White House policies, elections, and national policy debates.",
    heroImage: "/images/politics-hero.webp",
    keywords: "Political news, elections, congress, white house, policy"
  },
  courts: {
    title: "Courts",
    metaTitle: "Courts News & Analysis — CourtNews",
    metaDescription:
      "Stay updated with the latest court news and judicial coverage. Supreme Court rulings, landmark cases, and constitutional matters from CourtNews.",
    heroDescription:
      "Our courts section delivers original journalism focused on accuracy, accountability, and insight. Our editorial team covers federal courts, Supreme Court rulings, landmark cases, judicial appointments, and constitutional matters.",
    heroImage: "/images/courts-hero.webp",
    keywords: "courts news, supreme court, federal courts, judicial, constitutional law"
  },
  investigations: {
    title: "Investigations",
    metaTitle: "Investigative News & Analysis — CourtNews",
    metaDescription:
      "Stay updated with the latest investigative journalism. Corruption, government accountability, corporate misconduct, and data-driven reporting from CourtNews.",
    heroDescription:
      "Our investigations section delivers original journalism focused on accuracy, accountability, and insight. Our editorial team covers corruption, government accountability, corporate misconduct, and data-driven reporting.",
    heroImage: "/images/investigations-hero.webp",
    keywords: "investigative journalism, corruption, accountability, government, data journalism"
  },
  "us-news": {
    title: "U.S.",
    metaTitle: "U.S. News & Analysis — CourtNews",
    metaDescription:
      "Stay updated with the latest U.S. news. Breaking national developments, federal agencies, major events impacting Americans from CourtNews.",
    heroDescription:
      "Our U.S. news section delivers original journalism focused on accuracy, accountability, and insight. Our editorial team covers breaking national developments, federal agencies, disasters, major domestic events, and stories impacting Americans nationwide.",
    heroImage: "/images/us-news-hero.webp",
    keywords: "us news, national news, breaking news, federal agencies"
  },
  "civil-rights": {
    title: "Civil Rights",
    metaTitle: "Civil Rights News & Analysis — CourtNews",
    metaDescription:
      "Stay updated with civil rights news and social justice reporting. Voting rights, policing reform, equality issues, and discrimination from CourtNews.",
    heroDescription:
      "Our civil rights section delivers original journalism focused on accuracy, accountability, and insight. Our editorial team covers social justice movements, voting rights, policing reform, equality issues, and discrimination cases.",
    heroImage: "/images/civil-rights-hero.webp",
    keywords: "civil rights, voting rights, social justice, equality, discrimination"
  },
  "law-and-justice": {
    title: "Law & Justice",
    metaTitle: "Law & Justice News & Analysis — CourtNews",
    metaDescription:
      "Stay updated with law and justice news. Criminal justice reform, federal law enforcement, legislation, and judicial system developments from CourtNews.",
    heroDescription:
      "Our law and justice section delivers original journalism focused on accuracy, accountability, and insight. Our editorial team covers criminal justice reform, federal law enforcement, legislation, legal policy, and judicial system developments.",
    heroImage: "/images/law-justice-hero.webp",
    keywords: "law news, justice news, criminal justice, federal law, legal policy"
  },
};

export async function generateMetadata({ params }) {
  const { category } = await params;
  const categorySlug = decodeURIComponent(category);
  const config = categoryConfig[categorySlug] || categoryConfig["us-news"];

  const canonicalUrl = `${SITE_URL}/${categorySlug}`;


  return {
    title: config.metaTitle,
    description: config.metaDescription,
    keywords: config.keywords,
    robots: "index, follow",
    viewport: "width=device-width, initial-scale=1",
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: config.metaTitle,
      description: config.metaDescription,
      url: canonicalUrl,
      type: "website",
      siteName: "CourtNews",
      locale: "en_US",
      images: [
        {
          url: `${SITE_URL}${config.heroImage}`,
          width: 1200,
          height: 630,
          alt: `${config.title} News - CourtNews`,
          type: "image/webp",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: config.metaTitle,
      description: config.metaDescription,
      images: [`${SITE_URL}${config.heroImage}`],
      creator: "@courtnews",
    },
  };
}

export default async function CategoryPage({ params }) {
  const { category } = await params;
  const categorySlug = decodeURIComponent(category);

    if (!categorySlug || !categoryConfig[categorySlug]) {
    notFound();
  }


  // Get category configuration
  const config = categoryConfig[categorySlug] || categoryConfig["us-news"];

  // Get author for this category
  const categoryAuthor = authorsData.categories.find(
    (item) => item.category === categorySlug
  );

  // Get articles for this category
  const categoryArticles = categoryPageData[categorySlug] || [];

  // Sort articles by date (latest first)
  const sortedArticles = [...categoryArticles].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  // Get only the latest 6 articles
  const filteredArticles = sortedArticles.slice(0, 6);

  const canonicalUrl = `${SITE_URL}/${categorySlug}`;
  const categoryTitleFormatted = config.title.replace(/\s+/g, " ");

  /* ---------- JSON-LD – COLLECTION PAGE ---------- */
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${config.title} News`,
    description: config.metaDescription,
    url: canonicalUrl,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: filteredArticles.map((article, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${SITE_URL}/${categorySlug}/${article.slug}`,
        name:  article.metaTitle,
        image: article.image || article.heroImage,
        datePublished: new Date(article.date).toISOString(),
        author: {
          "@type": "Person",
          name: categoryAuthor?.author?.name || "CourtNews Staff",
        },
      })),
    },
    hasPart: filteredArticles.map((article) => ({
      "@type": "NewsArticle",
      headline: article.metaTitle,
      url: `${SITE_URL}/${categorySlug}/${article.slug}`,
      datePublished: new Date(article.date).toISOString(),
      image: article.image || article.heroImage,
      author: {
        "@type": "Person",
        name: categoryAuthor?.author?.name || "CourtNews Staff",
      },
    })),
  };

  /* ---------- JSON-LD – BREADCRUMB LIST ---------- */
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: config.title,
        item: canonicalUrl,
      },
    ],
  };

  /* ---------- JSON-LD – ORGANIZATION ---------- */
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsMediaOrganization",
    name: "CourtNews",
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.webp`,
    description: "Independent reporting on U.S. courts, justice and legal affairs.",
    sameAs: [
      "https://facebook.com/courtnews",
      "https://twitter.com/courtnews",
      "https://instagram.com/courtnews",
      "https://linkedin.com/company/courtnews",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Editorial",
      email: "editorial@courtnews.org",
      url: SITE_URL,
    },
    areaServed: "US",
    serviceType: "News Reporting",
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        id="category-collection-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <script
        id="category-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        id="organization-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />

      <main>
        {/* Hero Section with Dotted Background */}
        <section className="mb-1 relative" aria-label="Category header">
          {/* Background with Radial Gradient Dots */}
          <div
            className="absolute inset-0 bg-gray-100 bg-opacity-20"
            style={{
              backgroundImage: "radial-gradient(#dcdcdc 1.2px, transparent 1.2px)",
              backgroundSize: "16px 16px",
            }}
            aria-hidden="true"
          ></div>

          {/* Content Container */}
          <div className="relative z-10 px-6 py-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8">
            {/* Left: Title and Description */}
            <div className="lg:w-2/3">
              {/* ONLY H1 ON PAGE */}
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {categoryTitleFormatted} News
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
                {config.heroDescription}
              </p>
            </div>

            {/* Right: Image */}
            <div className="hidden md:block lg:w-1/3">
              <div className="relative w-full h-[220px] overflow-hidden rounded-lg shadow-xl shadow-black/40">
                <Image
                  src={config.heroImage}
                  alt={`${config.title} Category`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Articles Section */}
        <section className="max-w-7xl mx-auto px-4 pt-1 pb-10" aria-label="Latest articles">
          <div className="mb-10">
            {/* Section Header */}
            <div className="flex items-center justify-between mb-1">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Latest {categoryTitleFormatted} News
              </h2>
            </div>
            
            {/* Decorative Line */}
            <div className="w-full border-t-4 border-orange-500 mb-8"></div>

            {/* Articles Grid */}
            {filteredArticles.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  No articles available in this category yet.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* First Row - Large Items (Two Items with Equal Width) */}
                {filteredArticles.slice(0, 2).map((article, idx) => (
                  <article 
                    key={article.id || idx} 
                    className="relative lg:col-span-2 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <Link href={`/${categorySlug}/${article.slug}`} title={article.heading || article.metaTitle} className="block group">
                      <div className="relative w-full h-80 overflow-hidden">
                        <Image
                          src={article.image || article.heroImage}
                          alt={article.alt || article.heading || 'Article image'}
                          width={1200}
                          height={675}
                          priority
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                        />

                        
                      </div>
                      
                      {/* Dark Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent p-6 flex flex-col justify-end">
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300 line-clamp-3">
                          {article.heading || article.metaTitle}
                        </h3>
                        <div className="flex items-center justify-between text-sm text-gray-200">
                          <span className="font-semibold">
                            By {categoryAuthor?.author?.name || "CourtNews Staff"}
                          </span>
                          <time dateTime={new Date(article.date).toISOString()} className="text-xs">
                            {article.date}
                          </time>
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}

                {/* Second Row - Regular Items */}
                {filteredArticles.slice(2, 6).map((article, idx) => (
                  <article 
                    key={article.id || idx} 
                    className="relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <Link href={`/${categorySlug}/${article.slug}`} title={article.heading || article.metaTitle} className="block group">
                      <div className="relative w-full h-64 overflow-hidden">
                        <Image
                          src={article.image || article.heroImage}
                          alt={article.alt || article.heading || 'Article image'}
                          width={1200}
                          height={675}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                      
                      {/* Dark Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent p-6 flex flex-col justify-end">
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300 line-clamp-3">
                          {article.heading || article.metaTitle}
                        </h3>
                        <div className="flex items-center justify-between text-xs text-gray-200">
                          <span className="font-semibold">
                            By {categoryAuthor?.author?.name || "CourtNews Staff"}
                          </span>
                          <time dateTime={new Date(article.date).toISOString()}>
                            {article.date}
                          </time>
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}