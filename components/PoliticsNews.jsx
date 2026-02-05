import React from 'react';
import Link from 'next/link';
import Image from "next/image";


const PoliticsNews = ({featuredPost, textPosts, imagePosts }) => {

  //  console.log("Featuredpost:",featuredPost)
  //   console.log("Textpost:",textPosts)
  //    console.log("imagepost:",imagePosts)

  // Helper function to format date
  const formatDate = (dateStr) => {
    // If date is already in format like "24 Jan, 2026", return as is
    if (dateStr && dateStr.includes(',')) {
      return dateStr;
    }
    // Otherwise try to parse and format
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
    <div className="grid grid-cols-1 lg:grid-cols-[2.2fr_1.2fr_1.2fr] gap-5 max-w-[1300px] mx-auto pt-5 border-b border-[#414141] pb-[10px] p-5">
      
      {/* COLUMN 1 – BIG FEATURED */}
      <div>
        {featuredPost && (
          <Link href={`/${featuredPost.category}/${featuredPost.slug}`}>
            <article className="group cursor-pointer">
              <Image
                src={featuredPost.image}
                alt={featuredPost.alt || featuredPost.heading}
                className="w-full h-[380px] object-cover"
                width={1920}  // Adjust the width as needed (based on your design)
                height={380}  // Since h-[380px] is set, this should match the height
                />
              <h2 className="text-[32px] font-extrabold group-hover:text-orange-500 transition">
                {featuredPost.heading}
              </h2>
              <p className="text-base text-black leading-[1.6]">
                {featuredPost.excerpt}
              </p>
              <span className="text-[13px] text-black">
                By {featuredPost.author?.name || "Unknown"} · {formatDate(featuredPost.date)}
              </span>
            </article>
          </Link>
        )}
      </div>

      {/* COLUMN 2 – ADS + TEXT NEWS */}
      <div className="flex flex-col gap-3">
        {/* ADVERTISEMENT */}
        <div>
          <span className="block text-xs text-[#1c1c1c] text-center mb-[3px]">
            -Advertisement-
          </span>
          
          <Link href="https://www.morenews.org/" target="_blank" rel="noopener noreferrer">
            <Image
                src="/images/morenews.png"
                alt="More News"
                className="w-full h-[300px] rounded-lg"
                width={1000}  // Specify the width (adjust based on your design)
                height={300}  // h-25 corresponds to 100px in height
                />
          </Link>
        </div>

        {/* TEXT-ONLY NEWS */}
        {textPosts.map((post, index) => (
          <Link 
            key={post.id || index}
            href={`/${post.category}/${post.slug}`}
          >
            <article className="bg-white p-[10px] group cursor-pointer">
              <h3 className="text-lg font-bold mb-[3px] group-hover:text-orange-500 transition">
                {post.heading}
              </h3>
              {/* <p className="text-sm text-black line-clamp-2">
                {post.excerpt}
              </p> */}
              <span className="text-[13px] text-black">
                Politics · {formatDate(post.date)}
              </span>
            </article>
          </Link>
        ))}
      </div>

      {/* COLUMN 3 – IMAGE NEWS */}
      <div className="flex flex-col gap-6">
        {imagePosts.map((post, index) => (
          <Link 
            key={post.id || index}
            href={`/${post.category}/${post.slug}`}
          >
            <article className="group cursor-pointer">
              <Image
                src={post.image}
                alt={post.alt || post.heading}
                className="w-full h-[150px] object-cover"
                width={1000}  // Adjust the width based on your design
                height={150}  // Since h-[200px] is set, this should match the height
                />
              <h3 className="text-lg font-bold mt-[10px] group-hover:text-orange-500 transition">
                {post.heading}
              </h3>
              <span className="text-[13px] text-black">
                Politics · {formatDate(post.date)}
              </span>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PoliticsNews;