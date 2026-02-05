import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { BsSubstack } from "react-icons/bs";
import { SiMedium } from "react-icons/si";




const CivilRightsNews = ({ rightPosts, middlePost, leftPost }) => {

  // Helper function to format date
  const formatDate = (dateStr) => {
    if (dateStr && dateStr.includes(',')) {
      return dateStr;
    }
    try {
      const date = new Date(dateStr);
      const day = date.getDate();
      const month = date.toLocaleDateString('en-US', { month: 'short' });
      const year = date.getFullYear();
      return `${day} ${month}, ${year}`;
    } catch {
      return dateStr;
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] gap-5 p-5 max-w-[1300px] mx-auto">
      
      {/* Left Column */}
      <div className="flex flex-col gap-5">
        <div className="bg-[#f0f0f0] p-5 text-center ">
          <p className="text-sm mb-2">-Advertisement-</p>
          
          <Link href="https://www.morenews.org/" target="_blank" rel="noopener noreferrer">
             <Image
                src="/images/morenews.png"
                alt="More News"
                className="rounded-md"
                width={500}  // You can adjust this width as needed
                height={100} // You can adjust this height as needed
                />
          </Link>
        </div>
        

        {leftPost && (
          <Link href={`/${leftPost.category}/${leftPost.slug}`}>
            <div className="bg-white p-[15px] group cursor-pointer">
              <h3 className="text-lg font-bold group-hover:text-orange-500 transition">
                {leftPost.heading}
              </h3>
              <p className="text-sm text-black mt-2 line-clamp-3">
                {leftPost.excerpt}
              </p>
              <span className="text-xs text-gray-600 mt-2 block">
                By {leftPost.author?.name || "Unknown"} · {formatDate(leftPost.date)}
              </span>
            </div>
          </Link>
        )}
      </div>

      {/* Middle Column */}
      <div className="flex flex-col gap-5">
        {middlePost && (
          <Link href={`/${middlePost.category}/${middlePost.slug}`}>
            <div className="group cursor-pointer">
              <Image
                src={middlePost.image}
                alt={middlePost.alt || middlePost.heading}
                className="object-cover"
                width={700} // Adjust width as needed
                height={200} // Adjust height as needed
                />
              <h2 className="text-2xl font-bold mt-[15px] group-hover:text-orange-500 transition">
                {middlePost.heading}
              </h2>
              {/* <p className="text-base text-black mt-3 line-clamp-3">
                {middlePost.excerpt}
              </p> */}
              <span className="text-xs text-black mt-2 block">
                By {middlePost.author?.name || "Unknown"} · {formatDate(middlePost.date)}
              </span>
            </div>
          </Link>
        )}
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-5">
        <div className="bg-[#f9f9f9] p-5">
          <h3 className="text-xl font-bold mb-[15px] text-center">Follow Us</h3>

          <div className="grid grid-cols-4 gap-4 text-center ">
            {/* X (Twitter) */}
            <div className="flex flex-col items-center text-sm">
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white">
                    <a href="https://facebook.com" className="text-base no-underline hover:text-orange-500 transition">
                    <RiTwitterXLine />
                    </a>
            </span>
            
            </div>

            {/* Instagram */}
            <div className="flex flex-col items-center text-sm">
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-pink-600 text-white">
                <a href="https://facebook.com" className="text-base no-underline hover:text-orange-500 transition">
                    <FaInstagram />
                    </a>
            </span>
            
            </div>

            {/* Substack (using FaEnvelope as a placeholder) */}
            <div className="flex flex-col items-center text-sm">
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-500 text-white">
                <a href="https://facebook.com" className="text-base no-underline hover:text-white-500 transition">
                    <BsSubstack />
                    </a>
            
            </span>

    </div>

    {/* Medium */}
    <div className="flex flex-col items-center text-sm">
      <span className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white">
        <a href="https://facebook.com" className="text-base no-underline hover:text-orange-500 transition">
              <SiMedium />
            </a>
          
      </span>
    </div>
  </div>
        </div>

        {rightPosts.map((post, index) => (
          <Link 
            key={post.id || index}
            href={`/${post.category}/${post.slug}`}
          >
            <div className="bg-white p-[10px] group cursor-pointer">
              <h3 className="text-lg font-bold group-hover:text-orange-500 transition">
                {post.heading}
              </h3>
              <span className="text-xs text-gray-600 mt-2 block">
                By {post.author?.name || "Unknown"} · {formatDate(post.date)}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CivilRightsNews;