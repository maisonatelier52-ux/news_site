import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { FaXTwitter,FaInstagram } from "react-icons/fa6";
import { FaRedditAlien } from "react-icons/fa";
import { BsSubstack } from "react-icons/bs";





const CivilRightsNews = ({ rightPosts, middlePost, leftPost, leftPost2 }) => {

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
        {/* <div className="bg-[#f0f0f0] p-5 text-center ">
          <p className="text-sm mb-2">-Advertisement-</p>
          
          <Link href="https://www.morenews.org/" title="More News" target="_blank" rel="noopener noreferrer">
             <Image
                src="/images/morenews.webp"
                alt="More News"
                className="rounded-md"
                width={500}  // You can adjust this width as needed
                height={100} // You can adjust this height as needed
                loading="lazy"
                />
          </Link>
        </div> */}
        

        {leftPost && (
          <Link href={`/${leftPost.category}/${leftPost.slug}`} title={leftPost.heading}>
           
            <div className="bg-white group cursor-pointer">
               <Image
                src={leftPost.image}
                alt={leftPost.alt || leftPost.heading}
                className="w-full h-[150px] object-cover"
                width={500}  // You can adjust this width as needed
                height={100} // You can adjust this height as needed
                loading="lazy"
                />
              <h3 className="text-lg font-bold pt-2 group-hover:text-orange-500 transition">
                {leftPost.heading}
              </h3>
              {/* <p className="text-sm text-black mt-2 line-clamp-3">
                {leftPost.excerpt}
              </p> */}
              <span className="text-xs text-gray-600 mt-2 block">
                By {leftPost.author?.name || "Unknown"} · {formatDate(leftPost.date)}
              </span>
            </div>
          </Link>
        )}
        {leftPost2 && (
          <Link href={`/${leftPost2.category}/${leftPost2.slug}`} title={leftPost2.heading}>
           
            <div className="bg-white group cursor-pointer">
               <Image
                src={leftPost2.image}
                alt={leftPost2.alt || leftPost2.heading}
                className="w-full h-[150px] object-cover"
                width={500}  // You can adjust this width as needed
                height={100} // You can adjust this height as needed
                loading="lazy"
                />
              <h3 className="text-lg font-bold pt-2 group-hover:text-orange-500 transition">
                {leftPost2.heading}
              </h3>
              {/* <p className="text-sm text-black mt-2 line-clamp-3">
                {leftPost.excerpt}
              </p> */}
              <span className="text-xs text-gray-600 mt-2 block">
                By {leftPost2.author?.name || "Unknown"} · {formatDate(leftPost2.date)}
              </span>
            </div>
          </Link>
        )}
      </div>

      {/* Middle Column */}
      <div className="flex flex-col gap-5">
        {middlePost && (
          <Link href={`/${middlePost.category}/${middlePost.slug}`} title={middlePost.heading}>
            <div className="group cursor-pointer">
              <Image
                src={middlePost.image}
                alt={middlePost.alt || middlePost.heading}
                className="object-cover"
                width={700} // Adjust width as needed
                height={200} // Adjust height as needed
                loading="lazy"
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

          <div className="grid grid-cols-4 gap-4 text-center">
            {/* X (Twitter) */}
            <div className="flex flex-col items-center text-sm">
              <span className="w-12 h-12 flex items-center justify-center rounded-full bg-black text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-black/30">
                <Link href="https://x.com/CourtNews10" title="Follow us on X (Twitter)" target="_blank" rel="noopener noreferrer">
                  <FaXTwitter className="text-xl" />
                </Link> 
              </span>
            </div>

            {/* Instagram */}
            <div className="flex flex-col items-center text-sm">
              <span className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-[#E1306C] via-[#C13584] to-[#F56040] text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/40">
                <Link href="https://www.instagram.com/_court_news/" title="Follow us on Instagram" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-xl" />
                </Link>
              </span>
            </div>

            {/* Reddit */}
            <div className="flex flex-col items-center text-sm">
              <span className="w-12 h-12 flex items-center justify-center rounded-full bg-[#FF4500] text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-orange-600/40">
                <Link href="https://www.reddit.com/user/court_news/" title="Follow us on Reddit" target="_blank" rel="noopener noreferrer">
                  <FaRedditAlien className="text-xl" />
                </Link>
              </span>
            </div>

            {/* Substack */}
            <div className="flex flex-col items-center text-sm">
              <span className="w-12 h-12 flex items-center justify-center rounded-full bg-[#FF6719] text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-orange-600/40">
                <Link href="https://substack.com/@courtnews" title="Follow us on Substack" target="_blank" rel="noopener noreferrer">
                  <BsSubstack className="text-xl" />
                </Link>
              </span>
            </div>
          </div>
        </div>

        {rightPosts.map((post, index) => (
          <Link 
            key={post.id || index}
            href={`/${post.category}/${post.slug}`}
            title={post.heading}
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