import React from 'react';
import Link from 'next/link';
import Image from "next/image";


const InvestigationNews = ({investiagtionPost, row2Posts }) => {

  
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

  // Format category name
  const formatCategoryName = (category) => {
    return category
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
      .replace('Us ', 'US ');
  };

  return (
    <div className="max-w-[1300px] mx-auto gap-5 pt-5 pb-[10px] p-5">
      
      {/* SECTION TITLE */}
      <div className="flex items-center gap-[10px] mb-[25px] pb-[5px] border-b border-[#eee]">
        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
        <h2 className="text-lg font-bold">INVESTIGATION</h2>
      </div>

      {/* ROW 1 - Featured Investigation */}
      {investiagtionPost && (
        <Link href={`/${investiagtionPost.category}/${investiagtionPost.slug}`}>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 mb-[50px] border-b border-[#eee] pb-5 group cursor-pointer">
            <div>
              <span className="text-xs text-orange-500 font-bold uppercase">
                {formatCategoryName(investiagtionPost.category)}
              </span>
              <h1 className="text-[42px] font-extrabold leading-[1.2] my-[14px] group-hover:text-orange-500 transition">
                {/* {investiagtionPost.heading} */}
                {investiagtionPost.heading.slice(0,60)}..
              </h1>
              <p className="text-[15px] text-[#cfcfe6] max-w-[420px] pb-[10px]">
                {investiagtionPost.excerpt}
              </p>
              <span className="text-[13px] text-white pb-[10px] block">
                By {investiagtionPost.author?.name || "Unknown"} · {formatDate(investiagtionPost.date)}
              </span>
            </div>

            <div>
              <Image 
                src={investiagtionPost.image}
                alt={investiagtionPost.alt || investiagtionPost.heading}
                className="w-full h-auto object-cover"
                width={500}  // You can adjust the width as needed
                height={300} // You can adjust the height as needed
              />
            </div>
          </div>
        </Link>
      )}

      {/* ROW 2 - Two Medium Posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] mb-[60px]">
        {row2Posts.map((post, index) => (
          <Link 
            key={post.id || index}
            href={`/${post.category}/${post.slug}`}
            className="group cursor-pointer block"
          >
            {/* MOBILE LAYOUT - Image first, text below */}
            <div className="md:hidden">
              <Image
                  src={post.image}
                  alt={post.alt || post.heading}
                  className="w-full h-[200px] object-cover mb-3"
                  width={500} // Set the width for optimization (adjust as needed)
                  height={200} // Set the height to match your Tailwind class (200px)
                  priority={true} // Optional: Use 'priority' if this image should load first (e.g., hero images)
                />
              <span className="text-xs text-orange-500 font-bold uppercase flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                {formatCategoryName(post.category)}
              </span>
              <h3 className="text-lg font-bold mt-3 text-white group-hover:text-orange-500 transition leading-tight">
                {post.heading}
              </h3>
              <div className="flex items-center gap-2 mt-3">
                <span className="text-xs text-[#aaa]">
                  By {post.author?.name || "Unknown"}
                </span>
                <span className="text-xs text-[#aaa]">·</span>
                <span className="text-xs text-[#aaa]">
                  {formatDate(post.date)}
                </span>
              </div>
            </div>

            {/* DESKTOP LAYOUT - Text left, image right */}
            <div className="hidden md:flex items-start gap-4">
              {/* Text Content on Left */}
              <div className="flex-1">
                <span className="text-xs text-orange-500 font-bold uppercase flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                  {formatCategoryName(post.category)}
                </span>
                <h3 className="text-lg font-bold mt-3 text-white group-hover:text-orange-500 transition leading-tight">
                  {post.heading}
                </h3>
                <div className="flex items-center gap-2 mt-3">
                  <span className="text-xs text-[#aaa]">
                    By {post.author?.name || "Unknown"}
                  </span>
                  <span className="text-xs text-[#aaa]">·</span>
                  <span className="text-xs text-[#aaa]">
                    {formatDate(post.date)}
                  </span>
                </div>
              </div>

              {/* Image on Right */}
              <div className="flex-shrink-0">
                <Image
                  src={post.image}
                  alt={post.alt || post.heading}
                  className="object-cover"
                  width={270}  // Set the width to match the Tailwind class w-[270px]
                  height={160} // Set the height to match the Tailwind class h-[160px]
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default InvestigationNews;