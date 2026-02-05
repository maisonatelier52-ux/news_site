// import React from 'react'

// function page() {
//   return (
//     <div>
//       <div className=" mb-1 relative  ">
//   {/* Background with Radial Gradient Dots */}
//   <div
//     className="absolute inset-0 bg-gray-100 bg-opacity-20"
//     style={{
//       backgroundImage: "radial-gradient(#dcdcdc 1.2px, transparent 1.2px)",
//       backgroundSize: "16px 16px",
//     }}
//   ></div>

//   {/* Content Container */}
//   <div className="relative z-10 px-6 py-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
//     {/* Left: Title and Description */}
//     <div className="lg:w-2/3">
//       <h1 className="text-4xl font-semibold text-gray-900 mb-4">
//         Politics
//       </h1>
//       <p className="text-lg text-gray-700">
//         Politics is the art of looking for trouble, finding it everywhere, diagnosing it incorrectly and applying the wrong remedies.
//       </p>
//     </div>

//     {/* Right: Image */}
//     <div className="lg:w-1/3 mt-8 lg:mt-0">
//       <img
//         src="https://foxiz.io/business/wp-content/uploads/sites/6/2022/03/b4.jpg" // Replace with your actual image URL
//         alt="Category Image"
//         className="w-full h-auto object-cover  shadow-xl shadow-black/40" // Apply shadow
//       />
//     </div>
  
// </div>
// </div>
//       <div className="max-w-7xl mx-auto px-4 py-8">
//   <div className=" mb-10"> 
//   {/* Section Header */}
//   <div className="flex items-center justify-between ">
//     <h2 className="text-xl font-semibold text-gray-900">You Might Also Like</h2>
//   </div>
//   <div className="w-full border-t-4 border-orange-500 mb-6"></div>

//   {/* Articles Grid */}
//   <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

//     {/* First Row - Large Items (Two Items with Equal Width) */}
//     <div className="relative lg:col-span-2">
//       <img
//         src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b9-330x220.jpg" // Replace with your actual image URL
//         alt="Article Image"
//         className="w-full h-80 object-cover rounded-lg"
//       />
//       <div className="absolute inset-0 bg-black bg-opacity-40 p-4 flex flex-col justify-end">
//         <h3 className="text-2xl font-semibold text-white mb-2">
//           It’s Final: 12 Names on The 2025 Ballot for President, 9 for VP
//         </h3>
//         <p className="text-xs text-gray-300">By Hugh Son · 4 years ago</p>
//       </div>
//     </div>

//     <div className="relative lg:col-span-2">
//       <img
//         src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b9-330x220.jpg" // Replace with your actual image URL
//         alt="Article Image"
//         className="w-full h-80 object-cover rounded-lg"
//       />
//       <div className="absolute inset-0 bg-black bg-opacity-40 p-4 flex flex-col justify-end">
//         <h3 className="text-2xl font-semibold text-white mb-2">
//           What’s Wrong With Asgard’s 2022 Audit? A Lot, Thor Say
//         </h3>
//         <p className="text-xs text-gray-300">By Hugh Son · 4 years ago</p>
//       </div>
//     </div>

//     {/* Second Row - Regular Items */}
//     <div className="relative">
//       <img
//         src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b9-330x220.jpg" // Replace with your actual image URL
//         alt="Article Image"
//         className="w-full h-64 object-cover rounded-lg"
//       />
//       <div className="absolute inset-0 bg-black bg-opacity-40 p-4 flex flex-col justify-end">
//         <h3 className="text-lg font-semibold text-white mb-2">
//           One Day Noticed, Politicians Wary Resignation Timetable
//         </h3>
//         <p className="text-xs text-gray-300">By Hugh Son · 4 years ago</p>
//       </div>
//     </div>

//     <div className="relative">
//       <img
//         src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b9-330x220.jpg" // Replace with your actual image URL
//         alt="Article Image"
//         className="w-full h-64 object-cover rounded-lg"
//       />
//       <div className="absolute inset-0 bg-black bg-opacity-40 p-4 flex flex-col justify-end">
//         <h3 className="text-lg font-semibold text-white mb-2">
//           National Day Rally 2023: Sacrifice, Effort Needed to Preserve Harmony
//         </h3>
//         <p className="text-xs text-gray-300">By Hugh Son · 4 years ago</p>
//       </div>
//     </div>

//     <div className="relative">
//       <img
//         src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b9-330x220.jpg" // Replace with your actual image URL
//         alt="Article Image"
//         className="w-full h-64 object-cover rounded-lg"
//       />
//       <div className="absolute inset-0 bg-black bg-opacity-40 p-4 flex flex-col justify-end">
//         <h3 className="text-lg font-semibold text-white mb-2">
//           National Day Rally 2023: Sacrifice, Effort Needed to Preserve Harmony
//         </h3>
//         <p className="text-xs text-gray-300">By Hugh Son · 4 years ago</p>
//       </div>
//     </div>
//     <div className="relative">
//       <img
//         src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b9-330x220.jpg" // Replace with your actual image URL
//         alt="Article Image"
//         className="w-full h-64 object-cover rounded-lg"
//       />
//       <div className="absolute inset-0 bg-black bg-opacity-40 p-4 flex flex-col justify-end">
//         <h3 className="text-lg font-semibold text-white mb-2">
//           National Day Rally 2023: Sacrifice, Effort Needed to Preserve Harmony
//         </h3>
//         <p className="text-xs text-gray-300">By Hugh Son · 4 years ago</p>
//       </div>
//     </div>

//   </div>
// </div>

//   </div>

  


//     </div>
//   )
// }

// export default page


import React from "react";
import categoryPageData from "../../public/data/category/categorypagedata.json";
import authorsData from "../../public/data/authors.json";
import Link from "next/link";

const SITE_URL = "https://www.courtnews.org";

// Category configurations
const categoryConfig = {
  crime: {
    title: "Crime",
    metaTitle: "Crime News & Analysis - Court News",
    metaDescription:
      "Stay updated with the latest crime news. Our experts bring you in-depth analysis, investigative reporting, and exclusive stories.",
    heroDescription:
      "crime section delivers original journalism focused on accuracy, accountability, and insight. Our editorial team covers breaking developments, law enforcement operations, criminal investigations, and public safety issues.",
    heroImage: "/images/crime-hero.jpg",
  },
  politics: {
    title: "Politics",
    metaTitle: "Politics News & Analysis - Court News",
    metaDescription:
      "Stay updated with the latest political news. Our experts bring you in-depth analysis, investigative reporting, and exclusive stories.",
    heroDescription:
      "politics section delivers original journalism focused on accuracy, accountability, and insight. Our editorial team covers breaking political developments, congressional actions, White House policies, elections, and national policy debates.",
    heroImage: "/images/politics-hero.jpg",
  },
  courts: {
    title: "Courts",
    metaTitle: "Courts News & Analysis - Court News",
    metaDescription:
      "Stay updated with the latest court news. Our experts bring you in-depth analysis, investigative reporting, and exclusive stories.",
    heroDescription:
      "courts section delivers original journalism focused on accuracy, accountability, and insight. Our editorial team covers federal courts, Supreme Court rulings, landmark cases, judicial appointments, and constitutional matters.",
    heroImage: "/images/courts-hero.jpg",
  },
  investigations: {
    title: "Investigations",
    metaTitle: "Investigation News & Analysis - Court News",
    metaDescription:
      "Stay updated with the latest investigative news. Our experts bring you in-depth analysis, investigative reporting, and exclusive stories.",
    heroDescription:
      "investigations section delivers original journalism focused on accuracy, accountability, and insight. Our editorial team covers corruption, government accountability, corporate misconduct, and data-driven reporting.",
    heroImage: "/images/investigations-hero.jpg",
  },
  "us-news": {
    title: "U.S. News",
    metaTitle: "U.S. News & Analysis - Court News",
    metaDescription:
      "Stay updated with the latest U.S. news. Our experts bring you in-depth analysis, investigative reporting, and exclusive stories.",
    heroDescription:
      "U.S. news section delivers original journalism focused on accuracy, accountability, and insight. Our editorial team covers breaking national developments, federal agencies, disasters, major domestic events, and stories impacting Americans nationwide.",
    heroImage: "/images/us-news-hero.jpg",
  },
  "civil-rights": {
    title: "Civil Rights",
    metaTitle: "Civil Rights News & Analysis - Court News",
    metaDescription:
      "Stay updated with the latest civil rights news. Our experts bring you in-depth analysis, investigative reporting, and exclusive stories.",
    heroDescription:
      "civil rights section delivers original journalism focused on accuracy, accountability, and insight. Our editorial team covers social justice movements, voting rights, policing reform, equality issues, and discrimination cases.",
    heroImage: "/images/civil-rights-hero.jpg",
  },
  "law-and-justice": {
    title: "Law & Justice",
    metaTitle: "Law & Justice News & Analysis - Court News",
    metaDescription:
      "Stay updated with the latest law and justice news. Our experts bring you in-depth analysis, investigative reporting, and exclusive stories.",
    heroDescription:
      "law and justice section delivers original journalism focused on accuracy, accountability, and insight. Our editorial team covers criminal justice reform, federal law enforcement, legislation, legal policy, and judicial system developments.",
    heroImage: "/images/law-justice-hero.jpg",
  },
};

export async function generateMetadata({ params }) {
  const { category } = await params;
  const categorySlug = decodeURIComponent(category);
  const config = categoryConfig[categorySlug] || categoryConfig["us-news"];

  return {
    title: config.metaTitle,
    description: config.metaDescription,
    alternates: {
      canonical: `${SITE_URL}/${categorySlug}`,
    },
    openGraph: {
      title: config.metaTitle,
      description: config.metaDescription,
      url: `${SITE_URL}/${categorySlug}`,
      type: "website",
      siteName: "Court News",
      images: [
        {
          url: config.heroImage,
          width: 1200,
          height: 630,
          alt: `${config.title} News`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: config.metaTitle,
      description: config.metaDescription,
      images: [config.heroImage],
    },
  };
}

export default async function CategoryPage({ params }) {
  const { category } = await params;
  const categorySlug = decodeURIComponent(category);

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

  /* ---------- JSON-LD ---------- */
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${config.title} News`,
    description: config.metaDescription,
    url: `${SITE_URL}/${categorySlug}`,
    hasPart: filteredArticles.map((article) => ({
      "@type": "NewsArticle",
      headline: article.heading || article.metaTitle,
      url: `${SITE_URL}/${categorySlug}/${article.slug}`,
      datePublished: new Date(article.date).toISOString(),
    })),
  };

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
        item: `${SITE_URL}/${categorySlug}`,
      },
    ],
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

      <div>
        {/* Hero Section with Dotted Background */}
        <div className="mb-1 relative">
          {/* Background with Radial Gradient Dots */}
          <div
            className="absolute inset-0 bg-gray-100 bg-opacity-20"
            style={{
              backgroundImage: "radial-gradient(#dcdcdc 1.2px, transparent 1.2px)",
              backgroundSize: "16px 16px",
            }}
          ></div>

          {/* Content Container */}
          <div className="relative z-10 px-6 py-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
            {/* Left: Title and Description */}
            <div className="lg:w-2/3">
              <h1 className="text-4xl font-semibold text-gray-900 mb-4">
                {config.title}
              </h1>
              <p className="text-lg text-gray-700">
                {config.heroDescription}
              </p>
            </div>

            {/* Right: Image */}
            <div className="lg:w-1/3 mt-8 lg:mt-0">
              <img
                src={config.heroImage}
                alt={`${config.title} Category`}
                className="w-full h-auto object-cover shadow-xl shadow-black/40"
              />
            </div>
          </div>
        </div>

        {/* Articles Section */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="mb-10">
            {/* Section Header */}
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">
                Latest news
              </h2>
            </div>
            <div className="w-full border-t-4 border-orange-500 mb-6"></div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {filteredArticles.length === 0 ? (
                <div className="lg:col-span-4 text-center py-12">
                  <p className="text-gray-500 text-lg">
                    No articles available in this category yet.
                  </p>
                </div>
              ) : (
                <>
                  {/* First Row - Large Items (Two Items with Equal Width) */}
                  {filteredArticles.slice(0, 2).map((article) => (
                    <Link
                      key={article.id}
                      href={`/${categorySlug}/${article.slug}`}
                      className="relative lg:col-span-2"
                    >
                      <img
                        src={article.image || article.heroImage}
                        alt={article.alt || article.heading}
                        className="w-full h-80 object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 p-4 flex flex-col justify-end">
                        <h3 className="text-2xl font-semibold text-white mb-2">
                          {article.heading || article.metaTitle}
                        </h3>
                        <p className="text-xs text-gray-300">
                          By {categoryAuthor?.author?.name || "Staff Writer"} ·{" "}
                          {article.date}
                        </p>
                      </div>
                    </Link>
                  ))}

                  {/* Second Row - Regular Items */}
                  {filteredArticles.slice(2, 6).map((article) => (
                    <Link
                      key={article.id}
                      href={`/${categorySlug}/${article.slug}`}
                      className="relative"
                    >
                      <img
                        src={article.image || article.heroImage}
                        alt={article.alt || article.heading}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 p-4 flex flex-col justify-end">
                        <h3 className="text-lg font-semibold text-white mb-2">
                          {article.heading || article.metaTitle}
                        </h3>
                        <p className="text-xs text-gray-300">
                          By {categoryAuthor?.author?.name || "Staff Writer"} ·{" "}
                          {article.date}
                        </p>
                      </div>
                    </Link>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}