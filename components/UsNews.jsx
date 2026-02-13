
"use client";  // ← only this small component is client-side

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const UsNews = ({ posts }) => {

  const [showAll, setShowAll] = useState(false);

  const postsToShow = showAll ? posts : posts.slice(0, 4);
  const hasMorePosts = posts.length > 4;

  const formatDate = (dateStr) => {
    if (dateStr && dateStr.includes(",")) return dateStr;
    try {
      const date = new Date(dateStr);
      const day = date.getDate();
      const month = date.toLocaleDateString("en-US", { month: "short" });
      const year = date.getFullYear();
      return `${day} ${month}, ${year}`;
    } catch {
      return dateStr;
    }
  };

  return (
    <div className="bg-white p-5 max-w-[1300px] mx-auto">
      <div className="flex justify-between items-center mb-5 font-bold">
        <div className="text-lg text-black">U.S. News</div>
        {/* <Link href="/us-news" className="text-lg text-orange-500 hover:underline">
          All Stories
        </Link> */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {postsToShow.map((post, index) => (
          <Link key={post.id || index} href={`/${post.category}/${post.slug}`} title={`View article: ${post.heading}`} className="hover:shadow-lg transition-shadow duration-300">
            <div className="bg-white p-[15px] hover:shadow cursor-pointer">
              <Image
                src={post.image}
                alt={post.alt || post.heading}
                className="w-full h-[150px] object-cover mb-[15px]"
                width={800}    // required - choose a reasonable intrinsic width
                height={150}   // required - matches the display height
                loading="lazy"
              />
              <h3 className="text-base font-bold text-black mb-[10px] line-clamp-2 hover:text-orange-500">
                {post.heading}
              </h3>
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>By {post.author?.name || "Unknown"}</span>
                <span>{formatDate(post.date)}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {hasMorePosts && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 bg-orange-600 text-white font-semibold rounded-full hover:bg-orange-700 transition-colors duration-300"
            title={showAll ? "Show fewer posts" : "Show more posts"}
          >
            {showAll ? "Show Less" : "More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default UsNews;