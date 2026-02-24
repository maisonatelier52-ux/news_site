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

import profilesData from "../../../public/data/clients/law-and-justice.json";
// ── Place this file at: app/law-and-justice/[slug]/page.jsx
// ── JSON stays at:      public/data/clients/law-and-justice.json
import categoryPageData from "../../../public/data/category/categorypagedata.json";
import authorsData from "../../../public/data/authors.json";

import { notFound } from "next/navigation";

const SITE_URL = "https://www.courtnews.org";

// ── If you have multiple client JSON files, import them all and merge into an array
// For now we wrap the single object in an array for consistent lookup
const allProfiles = Array.isArray(profilesData) ? profilesData : [profilesData];

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = allProfiles.find((item) => item.slug === slug);

  if (!post) {
    return {
      title: "Profile Not Found | CourtNews",
      description: "The requested profile could not be found.",
      robots: "noindex",
    };
  }

  const fullImageUrl = post.heroImage.startsWith("http")
    ? post.heroImage
    : `${SITE_URL}${post.heroImage}`;

  const canonicalUrl = `${SITE_URL}/law-and-justice/${slug}`;

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: canonicalUrl,
      type: "article",
      siteName: "CourtNews",
      images: [{ url: fullImageUrl, width: 1200, height: 630, alt: post.heading }],
      publishedTime: new Date(post.date).toISOString(),
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
      images: [fullImageUrl],
    },
  };
}

export default async function ClientProfilePage({ params }) {
  const { slug } = await params;

  // ── 1. Find profile by slug ──
  const post = allProfiles.find((item) => item.slug === slug);
  if (!post) notFound();

  // ── 2. Author — use first author from authorsData as default for client pages ──
  const author = authorsData.categories[0]?.author || {
    name: "CourtNews Staff",
    slug: "staff-reporter",
    profileImage: "/images/default-author.webp",
    jobtitle: "Staff Reporter",
    bio: "",
    social: {},
  };

  // ── 3. Sidebar data from all category articles ──
  const authorsByCategory = authorsData.categories.reduce((acc, item) => {
    acc[item.category] = item.author;
    return acc;
  }, {});

  const allPosts = Object.entries(categoryPageData).flatMap(([cat, posts]) =>
    posts.map((p) => ({ ...p, category: cat, author: authorsByCategory[cat] || {} }))
  );
  const sortedPosts = [...allPosts].sort((a, b) => new Date(b.date) - new Date(a.date));
  const heroPost = sortedPosts[0];
  const smallPosts = sortedPosts.slice(1, 5);
  const relatedPosts = sortedPosts.slice(0, 4);

  // ── 4. URL helpers ──
  const canonicalUrl = `${SITE_URL}/law-and-justice/${slug}`;
  const encodedUrl = encodeURIComponent(canonicalUrl);
  const shareTitle = encodeURIComponent(post.heading.trim());

  const fullImageUrl = post.heroImage.startsWith("http")
    ? post.heroImage
    : `${SITE_URL}${post.heroImage}`;

  // ── 5. JSON-LD ──
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: post.metaTitle,
    description: post.metaDescription,
    image: [{ "@type": "ImageObject", url: fullImageUrl, width: 1200, height: 630 }],
    datePublished: new Date(post.date).toISOString(),
    author: { "@type": "Person", name: author.name },
    publisher: {
      "@type": "Organization",
      name: "CourtNews",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/images/logo.webp` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Law & Justice", item: `${SITE_URL}/law-and-justice` },
      { "@type": "ListItem", position: 3, name: post.heading, item: canonicalUrl },
    ],
  };

  // ── 6. Body + Content ──
  const body = post.body;
  const content = post.content || [];

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* ── TOP HEADER SECTION ── */}
      <section className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 py-8">

          {/* Category Badge */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-orange-500"></span>
            <span className="text-sm font-semibold uppercase tracking-wide text-black">
              Law & Justice
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-black mb-4">
            {post.heading}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-black max-w-3xl mb-6">
            {post.metaDescription}
          </p>

          {/* Author + Meta */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-t border-b py-4">
            <div className="flex items-center gap-3">
              <Image
                src={author.profileImage}
                alt={author.name}
                width={48}
                height={48}
                sizes="48px"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="text-sm">
                <p className="font-semibold text-black">{author.name}</p>
                <time className="text-black" dateTime={new Date(post.date).toISOString()}>
                  {post.date}
                </time>
              </div>
            </div>

            {/* Author Social Icons */}
            <div className="flex items-center gap-4 text-black">
              {author.social?.twitter && (
                <Link href={author.social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition" title="Follow on Twitter">
                  <FaXTwitter className="w-5 h-5" />
                </Link>
              )}
              {author.social?.instagram && (
                <Link href={author.social.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-600 transition" title="Follow on Instagram">
                  <FaInstagram className="w-5 h-5" />
                </Link>
              )}
              {author.social?.substack && (
                <Link href={author.social.substack} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-orange-500 transition" title="Follow on Substack">
                  <BsSubstack className="w-5 h-5" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT GRID ── */}
      <section className="max-w-7xl mx-auto px-4 mt-1">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">

          {/* LEFT – ARTICLE */}
          <div>
            {/* Hero Image */}
            <Image
              src={post.heroImage}
              alt={post.alt || post.heading}
              width={1200}
              height={630}
              priority
              sizes="100vw"
              className="w-full h-auto object-cover"
            />

            <section className="max-w-7xl mx-auto px-4 mt-4">
              <div className="grid grid-cols-1 lg:grid-cols-[60px_1fr] gap-6">

                {/* LEFT – STICKY SHARE SIDEBAR */}
                <div className="hidden lg:block">
                  <div className="sticky top-20 flex flex-col items-center gap-5 p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 shadow-sm">
                    <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                      <FaShareSquare className="text-lg" />
                    </div>
                    <div className="flex flex-col gap-4">
                      <Link href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${shareTitle}`} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition-colors duration-200 text-2xl" aria-label="Share on X">
                        <FaXTwitter />
                      </Link>
                      <Link href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-2xl" aria-label="Share on Facebook">
                        <FaFacebookF />
                      </Link>
                      <Link href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#0A66C2] transition-colors duration-200 text-2xl" aria-label="Share on LinkedIn">
                        <FaLinkedinIn />
                      </Link>
                      <Link href={`https://medium.com/new-story?url=${encodedUrl}`} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition-colors duration-200 text-2xl" aria-label="Share on Medium">
                        <SiMedium />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* RIGHT – ARTICLE BODY */}
                <article className="max-w-3xl">

                  {/* ── DROP CAP ── */}
                  {body?.dropcap && (
                    <p className="text-gray-700 leading-7 text-lg mb-4">
                      <span className="float-left text-8xl font-bold mr-3 leading-none text-black">
                        {body.dropcap.letter}
                      </span>
                      {body.dropcap.text}
                    </p>
                  )}

                  {/* ── BODY PARAGRAPHS (from body.paragraphs) ── */}
                  {body?.paragraphs?.map((paragraph, idx) => (
                    <p key={idx} className="text-gray-700 leading-7 mb-4">
                      {paragraph}
                    </p>
                  ))}

                  {/* ── BODY QUOTE BLOCK ── */}
                  {body?.quote && (
                    <blockquote className="text-center max-w-2xl mx-auto my-10 border-l-4 border-orange-500 pl-6">
                      <span className="text-orange-500 text-6xl block mb-4">"</span>
                      <p className="text-xl font-semibold leading-relaxed mb-4">
                        {body.quote.text}
                      </p>
                      <span className="text-sm text-gray-500 italic">— {body.quote.author}</span>
                    </blockquote>
                  )}

                  {/* ── MAIN CONTENT ARRAY (unique to client JSON structure) ── */}
                  <section className="mt-5">
                    {content.map((block, blockIdx) => {

                      // Top-level paragraph
                      if (block.type === "paragraph") {
                        return (
                          <p key={blockIdx} className="text-gray-700 leading-7 text-lg mb-4">
                            {block.text}
                          </p>
                        );
                      }

                      // Section block — has title + nested content array
                      if (block.type === "section") {
                        return (
                          <div key={blockIdx} className="mt-6">
                            {block.title && (
                              <h2 className="text-2xl font-bold mb-4 text-black">
                                {block.title}
                              </h2>
                            )}

                            {block.content?.map((item, itemIdx) => {

                              // Nested paragraph
                              if (item.type === "paragraph") {
                                return (
                                  <p key={itemIdx} className="text-gray-700 leading-7 text-lg mb-4">
                                    {item.text}
                                  </p>
                                );
                              }

                              // Nested list
                              if (item.type === "list") {
                                return (
                                  <ul key={itemIdx} className="list-disc list-inside mb-4 space-y-2 text-gray-700">
                                    {item.items?.map((li, liIdx) => (
                                      <li key={liIdx} className="text-base leading-7">{li}</li>
                                    ))}
                                  </ul>
                                );
                              }

                              return null;
                            })}
                          </div>
                        );
                      }

                      // imageWithText (if ever added to client JSON)
                      if (block.type === "imageWithText") {
                        return (
                          <div key={blockIdx}>
                            {block.text?.map((text, idx) => (
                              <p key={idx} className="text-lg text-gray-700 mb-4">{text}</p>
                            ))}
                            {block.image && (
                              <div className="w-full mb-5">
                                <Image
                                  src={block.image.url}
                                  alt={block.image.alt}
                                  width={1200}
                                  height={800}
                                  sizes="(max-width: 768px) 100vw, 700px"
                                  className="w-full h-auto object-cover"
                                  loading="lazy"
                                />
                              </div>
                            )}
                            {block.additionalText?.map((text, idx) => (
                              <p key={`add-${idx}`} className="text-lg text-gray-700 mb-4">{text}</p>
                            ))}
                          </div>
                        );
                      }

                      return null;
                    })}
                  </section>
                </article>
              </div>

              {/* ── SHARE + AUTHOR FOOTER ── */}
              <div className="article-container">
                <div className="mt-5">
                  <hr className="border-t-2 border-dotted border-gray-400" />
                  <div className="flex justify-between items-center mt-6">
                    <div className="flex items-center gap-2">
                      <FaShareSquare className="text-2xl" />
                      <span className="text-sm font-semibold">Share</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <a href={`https://facebook.com/sharer/sharer.php?u=${canonicalUrl}`} target="_blank" rel="noopener noreferrer" title="Share on Facebook" className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-400 text-gray-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition">
                        <FaFacebookF className="w-5 h-5" />
                      </a>
                      <a href={`https://twitter.com/intent/tweet?url=${canonicalUrl}&text=${post.heading}`} target="_blank" rel="noopener noreferrer" title="Share on X" className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-400 text-gray-600 hover:bg-black hover:text-white hover:border-black transition">
                        <FaXTwitter className="w-5 h-5" />
                      </a>
                      <a href={`https://reddit.com/submit?url=${canonicalUrl}&title=${post.heading}`} target="_blank" rel="noopener noreferrer" title="Share on Reddit" className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-400 text-gray-600 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition">
                        <FaRedditAlien className="w-5 h-5" />
                      </a>
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" title="Share on Instagram" className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-400 text-gray-600 hover:bg-pink-600 hover:text-white hover:border-pink-600 transition">
                        <FaInstagram className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>

                <hr className="border-t-2 border-dotted border-gray-400 mt-6" />

                <AuthorProfile author={author} />
                <PrevNextArticles prevPost={null} nextPost={null} category="law-and-justice" />
              </div>
            </section>
          </div>

          {/* RIGHT – SIDEBAR */}
          <Sidecontent heroPost={heroPost} smallPosts={smallPosts} />
        </div>

        {/* Related News */}
        <RelatedNews currentCategory="crime" relatedPosts={relatedPosts} />
      </section>
    </main>
  );
}