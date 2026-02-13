import React from 'react'
import Link from "next/link";
import Image from "next/image";



const DailyNews = ({heroPost,smallPosts}) => {



  return (

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-5 py-5 max-w-[1300px] mx-auto border-b border-[#414141]">
        
        {/* First column - One large card */}
        {heroPost && (
          // <div className="bg-white overflow-hidden">
          //   <Image
          //     src={heroPost.image}
          //     alt={heroPost.alt}
          //     width={1600}
          //     height={900}
          //     priority
          //     sizes="100vw"
          //     className="w-full h-auto object-cover"
          //   />


          //   <h1 className="text-[25px] font-black text-black p-[15px]">
          //     <Link 
          //       href={`/${heroPost.category}/${heroPost.slug}`}
          //       title={heroPost.heading}
          //       className="no-underline text-inherit relative hover:text-orange-500 transition-colors"
          //     >
          //       {heroPost.heading}
          //     </Link>
          //   </h1>

          //   {/* <p className="text-sm text-black px-[15px] pb-[15px]">
          //     {heroPost.metaDescription}
          //   </p> */}
          //   <p className="hidden md:block text-sm text-black px-[15px] pb-[15px]">
          //     {heroPost.metaDescription}
          //   </p>


          //   <span className="text-xs text-black px-[15px] pb-[15px] block">
          //     By {heroPost.author?.name} | {heroPost.date}
          //   </span>
          // </div>
          <div className="bg-white overflow-hidden flex flex-col h-full">
            {/* Image container - responsive height control */}
            <div className="relative w-full aspect-[16/9] md:aspect-auto md:h-full">
              <Image
                src={heroPost.image}
                alt={heroPost.alt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                quality={82}
              />
            </div>

            {/* Text content - always below image on mobile, can be positioned differently on desktop if needed */}
            <div className="flex flex-col flex-grow p-4 md:p-[15px]">
              <h1 className="text-[22px] md:text-[25px] font-black text-black mb-2 md:mb-0">
                <Link
                  href={`/${heroPost.category}/${heroPost.slug}`}
                  title={heroPost.heading}
                  className="no-underline text-inherit hover:text-orange-500 transition-colors"
                >
                  {heroPost.heading}
                </Link>
              </h1>

              {/* Description - hidden on mobile, visible on desktop */}
              <p className="hidden md:block text-sm text-gray-700 mb-3">
                {heroPost.metaDescription}
              </p>

              {/* Author & date - smaller on mobile */}
              <span className="text-xs text-gray-600">
                By {heroPost.author?.name || "Court News"} • {heroPost.date}
              </span>
            </div>
          </div>

        )}

        {/* Second column - 4 smaller cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {smallPosts.map((post, index) => (
            <div key={index} className="bg-white overflow-hidden">
              <Image
                src={post.image}
                alt={post.heading}
                width={700}
                height={400}
                sizes="(max-width: 768px) 100vw, 700px"
                className="w-full h-[150px] object-cover"
              />


              <h2 className="text-lg font-bold text-black p-[15px]">
                <Link 
                  href={`/${post.category}/${post.slug}`}
                  title={post.heading}
                  className="no-underline text-inherit relative hover:text-orange-500 transition-colors"
                >
                  {post.heading}
                </Link>
              </h2>

              <span className="text-xs text-black px-[15px] pb-[15px] block">
                By {post.author?.name} | {post.date}
              </span>
            </div>
          ))}
        </div>
      </div>
 
  )
}

export default DailyNews
