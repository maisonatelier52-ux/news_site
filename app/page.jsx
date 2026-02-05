import React from "react";
import Link from "next/link";
import categoryPageData from "../public/data/category/categorypagedata.json";
import authorsData from "../public/data/authors.json";
import DailyNews from "../components/DailyNews";
import CrimeNews from "../components/CrimeNews";
import PoliticsNews from "../components/PoliticsNews";
import CourtNews from "../components/CourtNews";
import InvestigationNews from "../components/InvestigationNews";
import CategoryCards from "../components/Categorycards";
import CivilrightsNews from "../components/CivilrightsNews";
import LawandJusticeNews from "../components/LawandjusticeNews";
import UsNews from "../components/UsNews";
import Image from "next/image";

const MainSection = async ({ searchParams }) => {
  // 1. Await searchParams (required in server components!)
  const params = await searchParams;
  const showAll = params?.all === "true";

  // Category → Author map
  const authorsByCategory = authorsData.categories.reduce((acc, item) => {
    acc[item.category] = item.author;
    return acc;
  }, {});

  // Collect all posts and add author information
  const allPosts = Object.entries(categoryPageData).flatMap(([category, posts]) =>
    posts.map((post) => ({
      ...post,
      category,
      author: authorsByCategory[category] || {},
    }))
  );

  // Sort posts by date (latest first)
  const sortedPosts = [...allPosts].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  // Hero post (most recent)
  const heroPost = sortedPosts[0];

  // Small posts (next 4)
  const smallPosts = sortedPosts.slice(1, 5);

  // ──────────────────────────────────────────────
  // US NEWS SECTION – now safe with awaited params
  // ──────────────────────────────────────────────
  const usNewsPosts = sortedPosts.filter(
    (post) => post.category?.toLowerCase() === "us-news"
  );

  const uniqueUsNewsPosts = usNewsPosts.filter((post) => {
    if (heroPost && post.slug === heroPost.slug) return false;
    return !smallPosts.some((small) => small.slug === post.slug);
  });

  if (uniqueUsNewsPosts.length === 0) {
    // Optional: you can return early or just skip rendering
    // return null; // or continue
  }

  const postsToShow = showAll
    ? uniqueUsNewsPosts
    : uniqueUsNewsPosts.slice(0, 4);

  const hasMorePosts = uniqueUsNewsPosts.length > 4;

  // ──────────────────────────────────────────────
  // CRIME NEWS SECTION
  // ──────────────────────────────────────────────
  const crimePosts = sortedPosts.filter(
    (post) => post.category?.toLowerCase() === "crime"
  );

  const uniqueCrimePosts = crimePosts.filter((post) => {
    if (heroPost && post.slug === heroPost.slug) return false;
    return !smallPosts.some((small) => small.slug === post.slug);
  });

  const latestCrimePosts = uniqueCrimePosts.slice(0, 4);

  // ──────────────────────────────────────────────
  // POLITICS NEWS SECTION
  // ──────────────────────────────────────────────
  const politicsPosts = sortedPosts.filter(
    (post) => post.category?.toLowerCase() === "politics"
  );

  const uniquePoliticsPosts = politicsPosts.filter((post) => {
    if (heroPost && post.slug === heroPost.slug) return false;
    return !smallPosts.some((small) => small.slug === post.slug);
  });

  const featuredPost = uniquePoliticsPosts[0];
  const textPosts = uniquePoliticsPosts.slice(1, 3);
  const imagePosts = uniquePoliticsPosts.slice(3, 5);

  // ──────────────────────────────────────────────
  // COURT NEWS SECTION
  // ──────────────────────────────────────────────
  const courtPosts = sortedPosts.filter(
    (post) => post.category?.toLowerCase() === "courts"
  );

  const uniqueCourtPosts = courtPosts.filter((post) => {
    if (heroPost && post.slug === heroPost.slug) return false;
    if (smallPosts.some((small) => small.slug === post.slug)) return false;
    if (latestCrimePosts.some((crime) => crime.slug === post.slug)) return false;
    return true;
  });

  const latestCourtPosts = uniqueCourtPosts.slice(0, 4);

  // ──────────────────────────────────────────────
  // INVESTIGATION NEWS SECTION
  // ──────────────────────────────────────────────
  const investigationPosts = sortedPosts.filter(
    (post) => post.category?.toLowerCase() === "investigations"
  );

  const uniqueInvestigationPosts = investigationPosts.filter((post) => {
    if (heroPost && post.slug === heroPost.slug) return false;
    return !smallPosts.some((small) => small.slug === post.slug);
  });

  const investiagtionPost = uniqueInvestigationPosts[0];
  const row2Posts = uniqueInvestigationPosts.slice(1, 3);

  // ──────────────────────────────────────────────
  // CATEGORY CARDS
  // ──────────────────────────────────────────────
  const allCategories = Object.entries(categoryPageData).map(([category, posts]) => {
    const sorted = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));
    const latest = sorted[0];
    return {
      name: category,
      postCount: posts.length,
      image: latest?.image,
      slug: category,
    };
  });

  const desktopCategories = allCategories.slice(0, 5);

  // ──────────────────────────────────────────────
  // CIVIL RIGHTS NEWS SECTION
  // ──────────────────────────────────────────────
  const civilRightsPosts = sortedPosts.filter(
    (post) => post.category?.toLowerCase() === "civil-rights"
  );

  const uniqueCivilRightsPosts = civilRightsPosts.filter((post) => {
    if (heroPost && post.slug === heroPost.slug) return false;
    return !smallPosts.some((small) => small.slug === post.slug);
  });

  const leftPost = uniqueCivilRightsPosts[0];
  const middlePost = uniqueCivilRightsPosts[1];
  const rightPosts = uniqueCivilRightsPosts.slice(2, 5);

  // ──────────────────────────────────────────────
  // LAW AND JUSTICE NEWS SECTION
  // ──────────────────────────────────────────────
  const lawAndJusticePosts = sortedPosts.filter(
    (post) => post.category?.toLowerCase() === "law-and-justice"
  );

  const uniqueLawAndJusticePosts = lawAndJusticePosts.filter((post) => {
    if (heroPost && post.slug === heroPost.slug) return false;
    return !smallPosts.some((small) => small.slug === post.slug);
  });

  const lawfirstpost = uniqueLawAndJusticePosts[0];
  const lawsecondpsot = uniqueLawAndJusticePosts[1];
  const lawthirdpost = uniqueLawAndJusticePosts[2];

  return (
    <main>
      {/* FIRST SECTION - Daily News */}
      <DailyNews heroPost={heroPost} smallPosts={smallPosts} />

      {/* SECOND SECTION - Crime News */}
      <CrimeNews latestCrimePosts={latestCrimePosts} />

      {/* THIRD SECTION - Politics News */}
      <PoliticsNews featuredPost={featuredPost} textPosts={textPosts} imagePosts={imagePosts} />

      {/* SPONSORED AD SECTION */}
      <div className="w-full bg-white py-[30px] pb-10 mx-auto text-center border-b border-[#414141] p-5 max-w-[1300px]">
        <span className="block text-sm text-black mb-3">– Sponsored –</span>
        <div className="max-w-[1100px] mx-auto">
          <Link href="https://www.progresskingdom.com/" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/progresskingdom.png"
              alt="Progress Kingdom"
              className="w-full h-32 object-fit rounded-md"
              width={1100}
              height={125}
            />
          </Link>
        </div>
      </div>

      {/* FOURTH SECTION - Court News */}
      {latestCourtPosts.length > 0 && (
        <section>
          <CourtNews latestCourtPosts={latestCourtPosts} />
        </section>
      )}

      {/* FIFTH SECTION - Investigation News + Category Cards */}
      <div className="bg-gradient-to-b from-[#1b1446] via-[#0e0a2b] to-[#07051c] py-[25px] px-0 text-white">
        <InvestigationNews
          heroPost={heroPost}
          smallPosts={smallPosts}
          investiagtionPost={investiagtionPost}
          row2Posts={row2Posts}
        />
        <CategoryCards allCategories={allCategories} desktopCategories={desktopCategories} />
      </div>

      {/* SIXTH SECTION - CIVIL RIGHTS NEWS */}
      <CivilrightsNews
        rightPosts={rightPosts}
        middlePost={middlePost}
        leftPost={leftPost}
      />

      {/* SEVENTH SECTION - LAW AND JUSTICE */}
      <LawandJusticeNews
        lawthirdpost={lawthirdpost}
        lawsecondpsot={lawsecondpsot}
        lawfirstpost={lawfirstpost}
      />

      {/* EIGHTH SECTION - US News */}
      <UsNews posts={uniqueUsNewsPosts} />
    </main>
  );
};

export default MainSection;