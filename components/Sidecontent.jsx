import React from 'react';
import { FaPlus } from "react-icons/fa";
import Link from 'next/link';
import categoryPageData from "../public/data/category/categorypagedata.json"; // Assuming the path to the data
import authorsData from "../public/data/authors.json"; // Assuming the path to the data
import Image from "next/image";

const Sidecontent = () => {
  // Check if categoryPageData and authorsData are available
  if (!categoryPageData || !authorsData) {
    return <div>Loading...</div>; // Show loading message until data is available
  }

  // Category → Author map
  const authorsByCategory = authorsData.categories?.reduce((acc, item) => {
    acc[item.category] = item.author;
    return acc;
  }, {});

  if (!authorsByCategory) {
    return <div>Data not found.</div>; // Show error message if authorsByCategory is not available
  }

  // Collect all posts and add author information
  const allPosts = Object.entries(categoryPageData).flatMap(
    ([category, posts]) =>
      posts.map(post => ({
        ...post,
        category,
        author: authorsByCategory[category] || {} // Provide fallback if no author is found
      }))
  );

  // Sort posts by date (latest first)
  const sortedPosts = [...allPosts].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  // Hero post (most recent post)
  const heroPost = sortedPosts[0];

  // Small posts (next 4 posts)
  const smallPosts = sortedPosts.slice(1, 5);

  return (
    <div className="text-black">
      <div className="sticky top-0 border-l border-gray-200 space-y-8 lg:pl-6">
        {/* ========== BLOCK 1: FOLLOW US ========== */}
        <div className="bg-white p-6">
          <h3 className="text-lg font-bold mb-2 text-center">Follow Us</h3>
          <p className="text-sm mb-4 text-center">Find us on social media</p>

          <div className="grid grid-cols-4 gap-4 text-center">
            <div className="flex flex-col items-center text-sm">
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white">
                <FaPlus />
              </span>
              <span className="mt-1">Facebook</span>
            </div>
            <div className="flex flex-col items-center text-sm">
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white">
                <FaPlus />
              </span>
              <span className="mt-1">Twitter</span>
            </div>
            <div className="flex flex-col items-center text-sm">
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-red-600 text-white">
                <FaPlus />
              </span>
              <span className="mt-1">YouTube</span>
            </div>
            <div className="flex flex-col items-center text-sm">
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-400 text-white">
                <FaPlus />
              </span>
              <span className="mt-1">Telegram</span>
            </div>
          </div>
        </div>

        {/* ---------- DIVIDER ---------- */}
        <div className="border-t border-dashed border-gray-300"></div>

        {/* ========== POPULAR NEWS ========== */}
        <div className="sidebar-container p-4 bg-white">
           <div className="popular-news mb-6">
          <h2 className="text-xl font-semibold">
            Latest News
          </h2>

          <div className="main-news mt-4">
            {heroPost && (
              <>
                <div className="news-image mt-4">
                  <Image
                    src={heroPost.image}
                    alt={heroPost.heading}
                    className="w-full h-auto object-cover"
                    width={1200}  // Specify the width (adjust as needed based on your design)
                    height={800}  // Specify the height (adjust as needed based on your design)
                  />
                </div>

                <h3 className="text-lg font-semibold hover:text-blue-600 cursor-pointer">
                  <Link href={`/${heroPost.category}/${heroPost.slug}`}>
                    {heroPost.heading}
                  </Link>
                </h3>

                <div className="flex items-center gap-4 mt-2">
                  <Image
                      src={heroPost.author?.profileImage || "https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b48-420x280.jpg"}
                      alt={heroPost.author?.name || "Author"}
                      className="w-10 h-10 rounded-full"
                      width={40}  // 10 * 4 (adjust based on your design)
                      height={40} // 10 * 4 (adjust based on your design)
                    />

                  <div>
                    <p className="text-sm font-semibold">
                      By {heroPost.author?.name || "Unknown"}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs">
                      {new Date(heroPost.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Additional News */}
          <div className="additional-news mt-6">
            <ul className="space-y-4">
              {smallPosts.map((post, index) => (
                <li key={index} className="flex items-center gap-2">
                  <FaPlus />
                  <Link href={`/${post.category}/${post.slug}`} className="text-sm hover:text-orange-500 hover:underline transition">
                    {post.heading.length > 60 ? post.heading.slice(0, 60) + "..." : post.heading}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

          {/* Advertisement */}
          <div className="ad-image mt-8">
            <p className="text-center text-sm mb-2">- Ads -</p>
            <Link href="https://www.morenews.org/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/morenews.png"
                alt="More News"
                className="w-full h-25 rounded-lg"
                width={1000}  // Adjust the width based on your design
                height={100}  // Adjust the height based on your design
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidecontent;
