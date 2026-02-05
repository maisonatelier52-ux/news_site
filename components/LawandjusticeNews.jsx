import React from 'react';
import Link from 'next/link';
import Image from "next/image";

const LawAndJusticeNews = ({ lawfirstpost, lawsecondpsot, lawthirdpost }) => {

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
    <div className="bg-gradient-to-b from-[#1b1446] via-[#0e0a2b] to-[#07051c] py-[25px] px-[10px] text-white">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr_1px_1fr] gap-5 max-w-[1300px] w-full p-5 mx-auto">
        
        {/* Left Column */}
        {lawfirstpost && (
          <Link href={`/${lawfirstpost.category}/${lawfirstpost.slug}`}>
            <div className="text-white group cursor-pointer">
              <div className="mb-[15px]">
                <Image
                    src={lawfirstpost.image}
                    alt={lawfirstpost.alt || lawfirstpost.heading}
                    width={1200}
                    height={200}
                    className="w-full h-[200px] object-cover"
                    />
              </div>
              <div className="text-[1.2em] font-bold mb-[10px] text-orange-500 group-hover:text-orange-400 transition">
                {lawfirstpost.heading.slice(0,50)}..
              </div>
              <div className="text-base text-[#d1d1d1] mb-[15px] line-clamp-2">
                {lawfirstpost.excerpt}
              </div>
              <div className="text-[0.9em] text-[#aaa] flex justify-between">
                <span>By {lawfirstpost.author?.name || "Unknown"}</span>
                <span>{formatDate(lawfirstpost.date)}</span>
              </div>
            </div>
          </Link>
        )}

        {/* Separator 1 */}
        <div className="hidden lg:block border-l border-[#444] h-full"></div>

        {/* Middle Column */}
        {lawsecondpsot && (
          <Link href={`/${lawsecondpsot.category}/${lawsecondpsot.slug}`}>
            <div className="text-white group cursor-pointer">
              <div className="mb-[15px]">
                <Image
                    src={lawsecondpsot.image}
                    alt={lawsecondpsot.alt || lawsecondpsot.heading}
                    width={1200}
                    height={200}
                    className="w-full h-[200px] object-cover"
                    />
              </div>
              <div className="text-[1.2em] font-bold mb-[10px] text-orange-500 group-hover:text-orange-400 transition">
                {lawsecondpsot.heading.slice(0,50)}..
                
              </div>
              <div className="text-base text-[#d1d1d1] mb-[15px] line-clamp-2">
                {lawsecondpsot.excerpt}
              </div>
              <div className="text-[0.9em] text-[#aaa] flex justify-between">
                <span>By {lawsecondpsot.author?.name || "Unknown"}</span>
                <span>{formatDate(lawsecondpsot.date)}</span>
              </div>
            </div>
          </Link>
        )}

        {/* Separator 2 */}
        <div className="hidden lg:block border-l border-[#444] h-full"></div>

        {/* Right Column */}
        {lawthirdpost && (
          <Link href={`/${lawthirdpost.category}/${lawthirdpost.slug}`}>
            <div className="text-white group cursor-pointer">
              <div className="mb-[15px]">
              <Image
                src={lawthirdpost.image}
                alt={lawthirdpost.alt || lawthirdpost.heading}
                width={1200}
                height={200}
                className="w-full h-[200px] object-cover"
                />
              </div>
              <div className="text-[1.2em] font-bold mb-[10px] text-orange-500 group-hover:text-orange-400 transition">
                {lawthirdpost.heading.slice(0,50)}..
              </div>
              <div className="text-base text-[#d1d1d1] mb-[15px] line-clamp-2">
                {lawthirdpost.excerpt}
              </div>
              <div className="text-[0.9em] text-[#aaa] flex justify-between">
                <span>By {lawthirdpost.author?.name || "Unknown"}</span>
                <span>{formatDate(lawthirdpost.date)}</span>
              </div>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default LawAndJusticeNews;