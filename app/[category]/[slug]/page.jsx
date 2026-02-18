import Link from "next/link";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { FaRedditAlien, FaShareSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { SiMedium } from "react-icons/si";
import { BsSubstack } from "react-icons/bs";
import RelatedNews from "../../../components/RelatedNews";
import Sidecontent from "../../../components/Sidecontent";
import AuthorProfile from "../../../components/AuthorProfile";
import PrevNextArticles from "../../../components/PrevNextArticles";

import categoryPageData from "../../../public/data/category/categorypagedata.json";
import authorsData from "../../../public/data/authors.json";
import CaseInformation from "../../../components/CaseInformation";

const SITE_URL = "https://www.courtnews.org";

export async function generateMetadata({ params }) {
  const { category, slug } = await params;

  // Find the article
  const post = categoryPageData[category]?.find((item) => item.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found | CourtNews",
      description: "The requested article could not be found.",
      robots: "noindex",
    };
  }

  const fullImageUrl = post.heroImage.startsWith("http")
    ? post.heroImage
    : `${SITE_URL}${post.heroImage}`;

  const canonicalUrl = `${SITE_URL}/${category}/${slug}`;

  return {
    title: `${post.metaTitle}`,
    description: post.metaDescription,
    keywords: post.keywords || [category.replace(/-/g, " ")],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: canonicalUrl,
      type: "article",
      siteName: "CourtNews",
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: post.heading,
        },
      ],
      publishedTime: new Date(post.date).toISOString(),
      modifiedTime: new Date(post.modifiedDate || post.date).toISOString(),
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
      images: [fullImageUrl],
    },
  };
}

export default async function Page({ params }) {
  const { category, slug } = await params;

  // 1️⃣ Find the post by category + slug
  const post = categoryPageData[category]?.find((item) => item.slug === slug);

  if (!post) {
    return <div className="max-w-7xl mx-auto px-4 py-8">Post not found</div>;
  }

  // 2️⃣ Build author lookup
  const authorsByCategory = authorsData.categories.reduce((acc, item) => {
    acc[item.category] = item.author;
    return acc;
  }, {});

  // 3️⃣ Get author by category
  const author = authorsByCategory[category];

  // 4️⃣ Get body data from post
  const body = post.body;

  // 5️⃣ Calculate fullImageUrl (FIXED - was missing in Page function)
  const fullImageUrl = post.heroImage.startsWith("http")
    ? post.heroImage
    : `${SITE_URL}${post.heroImage}`;

  const canonicalUrl = `${SITE_URL}/${category}/${slug}`;

  // ──────────────────────────────────────────────
  // Share variables (add this block)
  // ──────────────────────────────────────────────
  const pageUrl = `${SITE_URL}/${category}/${slug}`;
  const encodedUrl = encodeURIComponent(pageUrl);
  const shareTitle = encodeURIComponent(post.heading.trim());

  // RELATED NEWS SECTION
  // Get posts from the current category only
  const categoryPosts = categoryPageData[category] || [];

  // Filter out the current article, add author information, and sort by date (newest first)
  const relatedPosts = categoryPosts
    .filter((post) => post.slug !== slug) // Use slug from params
    .map((post) => ({
      ...post,
      category: category, // Use category from params
      author: authorsByCategory[category] || {},
    }))
    .sort((a, b) => new Date(b.date) - new Date(a.date)) // newest first
    .slice(0, 4); // limit to 4 posts

  // If no related posts, don't render the component
  if (relatedPosts.length === 0) {
    return null;
  }

  //SIDE CONTENT
  // Collect all posts and add author information
  const allPosts = Object.entries(categoryPageData).flatMap(
    ([category, posts]) =>
      posts.map((post) => ({
        ...post,
        category,
        author: authorsByCategory[category] || {}, // Provide fallback if no author is found
      })),
  );

  // Sort posts by date (latest first)
  const sortedPosts = [...allPosts].sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  );

  // Hero post (most recent post)
  const heroPost = sortedPosts[0];

  // Small posts (next 4 posts)
  const smallPosts = sortedPosts.slice(1, 5);

  // ──────────────────────────────────────────────
  // PREV / NEXT ARTICLES
  // ──────────────────────────────────────────────
  // Sort articles in the SAME CATEGORY by date (newest first)
  const categorySorted = [...categoryPosts].sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  );

  // Find current article index
  const currentIndex = categorySorted.findIndex((p) => p.slug === slug);

  // Previous and next posts
  const prevPost = currentIndex > 0 ? categorySorted[currentIndex - 1] : null;
  const nextPost =
    currentIndex < categorySorted.length - 1
      ? categorySorted[currentIndex + 1]
      : null;

  // ──────────────────────────────────────────────
  // JSON-LD – NewsArticle
  // ──────────────────────────────────────────────
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: post.metaTitle,
    description: post.metaDescription,
    image: [
      {
        "@type": "ImageObject",
        url: fullImageUrl,
        width: 1200,
        height: 630,
      },
    ],
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.modifiedDate || post.date).toISOString(),
    author: author
      ? {
          "@type": "Person",
          name: author.name,
          url:
            author.profileUrl ||
            `${SITE_URL}/authors/${author.id || author.name.toLowerCase()}`,
        }
      : { "@type": "Person", name: "CourtNews Staff" },
    publisher: {
      "@type": "Organization",
      name: "CourtNews",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/logo.webp`,
        width: 600,
        height: 60,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    articleSection:
      category.replace(/-/g, " ").charAt(0).toUpperCase() +
      category.replace(/-/g, " ").slice(1),
    keywords: post.keywords || category,
  };

  // ──────────────────────────────────────────────
  // JSON-LD – BreadcrumbList
  // ──────────────────────────────────────────────
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
        name: category
          .replace(/-/g, " ")
          .replace(/\b\w/g, (c) => c.toUpperCase()),
        item: `${SITE_URL}/${category}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.heading,
        item: canonicalUrl,
      },
    ],
  };

  // ──────────────────────────────────────────────
  // JSON-LD – Organization (for better SEO)
  // ──────────────────────────────────────────────
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsMediaOrganization",
    name: "CourtNews",
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.webp`,
    sameAs: [
      "https://facebook.com/courtnews",
      "https://twitter.com/courtnews",
      "https://instagram.com/courtnews",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Editorial",
      url: SITE_URL,
    },
  };

  return (
    <main>
      {/* JSON-LD Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />

      <section className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Category Badge */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-orange-500"></span>
            <span className="text-sm font-semibold uppercase tracking-wide text-black">
              {category.replace(/-/g, " ")}
            </span>
          </div>

          {/* Main Heading - Only H1 on page */}
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-black mb-4">
            {post.heading}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-black max-w-3xl mb-6">
            {post.metaDescription}
          </p>

          {/* Case Information */}
          <CaseInformation caseInfo={post.caseInformation} />

          {/* Author + Meta */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-t border-b py-4">
            {/* Author */}
            <div className="flex items-center gap-3">
              <Image
                src={author.profileImage}
                alt={author.name || "Author"}
                width={48}
                height={48}
                sizes="48px"
                className="w-12 h-12 rounded-full object-cover"
              />

              <div className="text-sm">
                <p className="font-semibold text-black">{author.name}</p>
                <time
                  className="text-black"
                  dateTime={new Date(post.date).toISOString()}
                >
                  {post.date}
                </time>
              </div>
            </div>

            {/* Share Icons */}
            <div className="flex items-center gap-4 text-black">
              {/* Social Media Icons */}
              {author.social?.twitter && (
                <Link
                  href={author.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition"
                  title="Follow on Twitter"
                >
                  <FaXTwitter className="w-5 h-5" />
                </Link>
              )}
              {author.social?.instagram && (
                <Link
                  href={author.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition"
                  title="Follow on Instagram"
                >
                  <FaInstagram className="w-5 h-5" />
                </Link>
              )}
              {author.social?.reddit && (
                <Link
                  href={author.social.reddit}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition"
                  title="Follow on Reddit"
                >
                  <FaRedditAlien className="w-5 h-5" />
                </Link>
              )}
              {author.social?.substack && (
                <Link
                  href={author.social.substack}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition"
                  title="Follow on Substack"
                >
                  <BsSubstack className="w-5 h-5" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 mt-1">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
          {/* LEFT – ARTICLE IMAGE */}
          <div>
            <Image
              src={post.heroImage}
              alt={post.heading}
              width={1200}
              height={630}
              priority
              sizes="100vw"
              className="w-full h-auto object-cover"
            />

            <section className="max-w-7xl mx-auto px-4 mt-4">
              <div className="grid grid-cols-1 lg:grid-cols-[60px_1fr] gap-6">
                {/* LEFT – STICKY SHARE */}
                <div className="hidden lg:block">
                  <div className="sticky top-20 flex flex-col items-center gap-5 p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 shadow-sm">
                    {/* Share Label */}
                    <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                      <FaShareSquare className="text-lg" />
                    </div>

                    {/* Social Icons */}
                    <div className="flex flex-col gap-4">
                      <Link
                        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${shareTitle}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-black transition-colors duration-200 text-2xl"
                        aria-label="Share on X"
                        title="Share on X"
                      >
                        <FaXTwitter />
                      </Link>

                      <Link
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-2xl"
                        aria-label="Share on Facebook"
                        title="Share on Facebook"
                      >
                        <FaFacebookF />
                      </Link>

                      <Link
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-[#0A66C2] transition-colors duration-200 text-2xl"
                        aria-label="Share on LinkedIn"
                        title="Share on LinkedIn"
                      >
                        <FaLinkedinIn />
                      </Link>

                      <Link
                        href={`https://medium.com/new-story?url=${encodedUrl}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-black transition-colors duration-200 text-2xl"
                        aria-label="Share on Medium"
                        title="Share on Medium"
                      >
                        <SiMedium />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* RIGHT – ARTICLE CONTENT */}
                <article className="max-w-3xl">
                  {/* DROP CAP PARAGRAPH */}
                  {body.dropcap && (
                    <p className="text-gray-700 leading-7 text-lg mb-4">
                      <span className="float-left text-8xl font-bold mr-3 leading-none text-black">
                        {body.dropcap.letter}
                      </span>
                      {body.dropcap.text}
                    </p>
                  )}

                  {/* PARAGRAPHS */}
                  {body.paragraphs?.map((paragraph, idx) => (
                    <p key={idx} className="text-gray-700 leading-7 mb-4">
                      {paragraph}
                    </p>
                  ))}

                  {/* QUOTE BLOCK */}
                  {body.quote && (
                    <blockquote className="text-center max-w-2xl mx-auto my-10 border-l-4 border-orange-500 pl-6">
                      <span className="text-orange-500 text-6xl block mb-4">
                        "
                      </span>
                      <p className="text-xl font-semibold leading-relaxed mb-4">
                        {body.quote.text}
                      </p>
                      <span className="text-sm text-gray-500 italic">
                        — {body.quote.author}
                      </span>
                    </blockquote>
                  )}

                  <section className="mt-5">
                    {/* RENDER DYNAMIC SECTIONS */}
                    {body.sections?.map((section, sectionIdx) => {
                      // IMAGE WITH TEXT SECTION
                      if (section.type === "imageWithText") {
                        return (
                          <div key={sectionIdx}>
                            {section.text?.map((text, idx) => (
                              <p
                                key={idx}
                                className="text-lg text-gray-700 mb-4"
                              >
                                {text}
                              </p>
                            ))}

                            {section.image && (
                              <div className="w-full mb-5">
                                <Image
                                  src={section.image.url}
                                  alt={section.image.alt}
                                  width={1200}
                                  height={800}
                                  sizes="(max-width: 768px) 100vw, 700px"
                                  className="w-full h-auto object-cover"
                                  loading="lazy"
                                />
                              </div>
                            )}

                            {section.additionalText?.map((text, idx) => (
                              <p
                                key={`add-${idx}`}
                                className="text-lg text-gray-700 mb-4"
                              >
                                {text}
                              </p>
                            ))}
                          </div>
                        );
                      }

                      // TWO COLUMN LAYOUT
                      if (section.type === "twoColumnLayout") {
                        return (
                          <div
                            key={sectionIdx}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                          >
                            <div className="lg:col-span-2">
                              <h2 className="text-3xl font-bold mb-4">
                                {section.title}
                              </h2>
                              {section.mainContent?.map((text, idx) => (
                                <p
                                  key={idx}
                                  className="text-lg text-gray-700 mb-4"
                                >
                                  {text}
                                </p>
                              ))}
                            </div>
                          </div>
                        );
                      }

                      // FULL WIDTH SECTION
                      if (section.type === "fullWidth") {
                        return (
                          <div key={sectionIdx} className="mt-5">
                            <div className="bg-white">
                              <h2 className="text-2xl font-bold mb-4">
                                {section.title}
                              </h2>
                              {section.content?.map((text, idx) => (
                                <p
                                  key={idx}
                                  className="text-lg text-gray-700 mb-4"
                                >
                                  {text}
                                </p>
                              ))}

                              {section.image && (
                                <div>
                                  <Image
                                    src={section.image.url}
                                    alt={section.image.alt}
                                    width={1200}
                                    height={800}
                                    sizes="(max-width: 768px) 100vw, 700px"
                                    className="object-cover w-full h-auto"
                                    loading="lazy"
                                  />
                                </div>
                              )}

                              {section.subsections?.map(
                                (subsection, subIdx) => (
                                  <div
                                    key={subIdx}
                                    className="flex flex-col justify-start mt-5"
                                  >
                                    {/* FIXED: Changed from h2 to h3 for proper hierarchy */}
                                    <h3 className="text-2xl font-bold mb-4">
                                      {subsection.title}
                                    </h3>
                                    {subsection.text?.map((text, txtIdx) => (
                                      <p
                                        key={txtIdx}
                                        className="text-lg text-gray-700 mb-4"
                                      >
                                        {text}
                                      </p>
                                    ))}

                                    {subsection.checklist?.map(
                                      (item, itemIdx) => (
                                        <h4
                                          key={itemIdx}
                                          className="text-sm font-semibold mb-2"
                                        >
                                          <span className="text-orange-500">
                                            ✓
                                          </span>{" "}
                                          {item}
                                        </h4>
                                      ),
                                    )}

                                    {subsection.additionalText?.map(
                                      (text, addIdx) => (
                                        <p
                                          key={`sub-add-${addIdx}`}
                                          className="text-lg text-gray-700 mb-4"
                                        >
                                          {text}
                                        </p>
                                      ),
                                    )}
                                  </div>
                                ),
                              )}
                            </div>
                          </div>
                        );
                      }

                      // FINAL SECTION
                      if (section.type === "finalSection") {
                        return (
                          <div key={sectionIdx}>
                            <h2 className="text-3xl font-bold mb-4">
                              {section.title}
                            </h2>
                            {section.intro?.map((text, idx) => (
                              <p
                                key={idx}
                                className="text-lg text-gray-700 mb-4"
                              >
                                {text}
                              </p>
                            ))}

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                              <div>
                                {section.twoColumnContent?.left?.map(
                                  (text, idx) => (
                                    <p
                                      key={idx}
                                      className="text-lg text-gray-700 mb-4"
                                    >
                                      {text}
                                    </p>
                                  ),
                                )}
                              </div>

                              {section.twoColumnContent?.rightQuote && (
                                <div className="flex items-center justify-center">
                                  <blockquote className="text-center text-xl italic text-gray-800 font-semibold pl-4 border-l-4 border-orange-500">
                                    {section.twoColumnContent.rightQuote.text}
                                    <span className="text-center block mt-2 text-sm text-gray-500">
                                      —{" "}
                                      {
                                        section.twoColumnContent.rightQuote
                                          .author
                                      }
                                    </span>
                                  </blockquote>
                                </div>
                              )}
                            </div>

                            {section.conclusion?.map((text, idx) => (
                              <p
                                key={`conclusion-${idx}`}
                                className="text-lg text-gray-700 mt-4 mb-4"
                              >
                                {text}
                              </p>
                            ))}
                          </div>
                        );
                      }

                      return null;
                    })}
                  </section>
                </article>
              </div>
              <div className="article-container">
                {/* Share Section */}
                <div className="mt-5">
                  <hr className="border-t-2 border-dotted border-gray-400" />
                  <div className="flex justify-between items-center mt-6">
                    <div className="flex items-center gap-2">
                      <FaShareSquare className="text-2xl" />{" "}
                      {/* ← bigger than text-xl */}
                      <span className="text-sm font-semibold">Share</span>
                    </div>
                    <div className="flex items-center gap-3">
                      {/* Facebook Icon */}
                      <a
                        href={`https://facebook.com/sharer/sharer.php?u=${canonicalUrl}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Share on Facebook"
                        className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-400 text-gray-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition"
                      >
                        <FaFacebookF className="w-5 h-5" />
                      </a>
                      {/* Twitter Icon */}
                      <a
                        href={`https://twitter.com/intent/tweet?url=${canonicalUrl}&text=${post.heading}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Share on X"
                        className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-400 text-gray-600 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition"
                      >
                        <FaXTwitter className="w-5 h-5" />
                      </a>
                      {/* Reddit Icon */}
                      <a
                        href={`https://reddit.com/submit?url=${canonicalUrl}&title=${post.heading}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Share on Reddit"
                        className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-400 text-gray-600 hover:bg-blue-700 hover:text-white hover:border-blue-700 transition"
                      >
                        <FaRedditAlien className="w-5 h-5" />
                      </a>
                      {/* Instagram Icon */}
                      <a
                        href={`https://instagram.com`}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Share on Instagram"
                        className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-400 text-gray-600 hover:bg-black hover:text-white hover:border-black transition"
                      >
                        <FaInstagram className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
                <hr className="border-t-2 border-dotted border-gray-400 mt-6" />

                {/* Author Section */}
                <AuthorProfile author={author} />
                <PrevNextArticles
                  prevPost={prevPost}
                  nextPost={nextPost}
                  category={category}
                />
              </div>
            </section>
          </div>

          {/* RIGHT – SIDEBAR */}
          <Sidecontent heroPost={heroPost} smallPosts={smallPosts} />
        </div>

        {/* related news components */}
        <RelatedNews currentCategory={category} relatedPosts={relatedPosts} />
      </section>
    </main>
  );
}
