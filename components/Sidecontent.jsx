import React from 'react';
import { FaPlus } from "react-icons/fa";
import { FaXTwitter,FaInstagram } from "react-icons/fa6";
import { FaRedditAlien } from "react-icons/fa";
import { BsSubstack } from "react-icons/bs";

import Link from 'next/link';
import categoryPageData from "../public/data/category/categorypagedata.json"; // Assuming the path to the data
import authorsData from "../public/data/authors.json"; // Assuming the path to the data
import Image from "next/image";

const Sidecontent = ({heroPost, smallPosts}) => {



  return (
    <div className="text-black">
      <div className="sticky top-0 border-l border-gray-200 space-y-8 lg:pl-6">
        {/* ========== BLOCK 1: FOLLOW US ========== */}
        <div className="bg-white p-6">
          <h3 className="text-lg font-bold mb-2 text-center pb-5">Follow Us</h3>

           <div className="grid grid-cols-4 gap-4 text-center">
            {/* X (Twitter) */}
            <div className="flex flex-col items-center text-lg">
              <span className="w-12 h-12 flex items-center justify-center rounded-full bg-black text-white transition hover:scale-110 hover:shadow-md hover:shadow-black/40">
                <Link href="https://twitter.com" title="Follow us on Twitter" target="_blank" rel="noopener noreferrer">
                <FaXTwitter /></Link>
              </span>
            </div>

            {/* Instagram */}
            <div className="flex flex-col items-center text-lg">
              <span className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-[#E1306C] via-[#C13584] to-[#F56040] text-white transition hover:scale-110 hover:shadow-md hover:shadow-pink-500/40">
                <Link href="https://instagram.com" title="Follow us on Instagram" target="_blank" rel="noopener noreferrer">
                  <FaInstagram /></Link>
              </span>
            </div>

            {/* Reddit */}
            <div className="flex flex-col items-center text-lg">
              <span className="w-12 h-12 flex items-center justify-center rounded-full bg-[#FF4500] text-white transition hover:scale-110 hover:shadow-md hover:shadow-orange-700/50">
                <Link href="https://reddit.com" title="Follow us on Reddit" target="_blank" rel="noopener noreferrer">
                  <FaRedditAlien />
                </Link>
              </span>
            </div>

            {/* Substack */}
            <div className="flex flex-col items-center text-lg">
              <span className="w-12 h-12 flex items-center justify-center rounded-full bg-[#FF6719] text-white transition hover:scale-110 hover:shadow-md hover:shadow-orange-600/40">
                <Link href="https://substack.com" title="Follow us on Substack" target="_blank" rel="noopener noreferrer">
                  <BsSubstack />
                </Link>
              </span>
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
                <div className="news-image mt-4 pb-2">
                  <Image
                    src={heroPost.image}
                    alt={heroPost.heading}
                    className="w-full h-auto object-cover"
                    width={1200}  // Specify the width (adjust as needed based on your design)
                    height={800}  // Specify the height (adjust as needed based on your design)
                    loading="lazy"
                  />
                </div>

                <h3 className="text-lg font-semibold hover:text-orange-600 cursor-pointer">
                  <Link href={`/${heroPost.category}/${heroPost.slug}`} title={`View article: ${heroPost.heading}`}>
                    {heroPost.heading}
                  </Link>
                </h3>

                <div className="flex items-center gap-4 mt-2">
                  <Image
                    src={heroPost.author?.profileImage}
                    alt={heroPost.author?.name || "Author"}
                    width={40}
                    height={40}
                    sizes="40px"
                    className="w-10 h-10 rounded-full object-cover"
                    loading="lazy"
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
                  <Link href={`/${post.category}/${post.slug}`} title={`View article: ${post.heading}`} className="text-sm hover:text-orange-500 hover:underline transition">
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
            <Link href="https://www.morenews.org/" title="Visit More News" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/morenews.webp"
                alt="More News"
                className="w-full h-25 rounded-lg"
                width={1000}  // Adjust the width based on your design
                height={100}  // Adjust the height based on your design
                loading="lazy"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidecontent;
