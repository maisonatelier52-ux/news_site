// "use client";

// import React, { useState } from 'react';
// import Link from 'next/link';
// import categoryPageData from "../public/data/category/categorypagedata.json";
// import authorsData from "../public/data/authors.json";

// const UsNews = ({ postsToShow, hasMorePosts }) => {
//   const [showAll, setShowAll] = useState(false);




//   // Helper function to format date
//   const formatDate = (dateStr) => {
//     if (dateStr && dateStr.includes(',')) {
//       return dateStr;
//     }
//     try {
//       const date = new Date(dateStr);
//       const day = date.getDate();
//       const month = date.toLocaleDateString('en-US', { month: 'short' });
//       const year = date.getFullYear();
//       return `${day} ${month}, ${year}`;
//     } catch {
//       return dateStr;
//     }
//   };

//   return (
//     <div className="bg-white p-5 max-w-[1300px] mx-auto">
      
//       {/* Header */}
//       <div className="flex justify-between items-center mb-5 font-bold">
//         <div className="text-lg text-black">U.S. News</div>
//         <Link 
//           href="/us-news"
//           className="text-lg text-orange-500 cursor-pointer hover:underline"
//         >
//           All Stories
//         </Link>
//       </div>

//       {/* News Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
//         {postsToShow.map((post, index) => (
//           <Link
//             key={post.id || index}
//             href={`/${post.category}/${post.slug}`}
//           >
//             <div className="bg-white p-[15px] transition-transform duration-300 hover:-translate-y-[5px] hover:shadow-[0_4px_20px_rgba(0,0,0,0.1)] cursor-pointer">
//               <img 
//                 src={post.image}
//                 alt={post.alt || post.heading}
//                 className="w-full h-[150px] object-cover mb-[15px]"
//               />
//               <h3 className="text-base font-bold text-black mb-[10px] line-clamp-2 hover:text-orange-500 transition">
//                 {post.heading}
//               </h3>
//               <div className="flex items-center justify-between text-sm text-gray-600">
//                 <span>By {post.author?.name || "Unknown"}</span>
//                 <span>{formatDate(post.date)}</span>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>

//       {/* Show More Button */}
//       {hasMorePosts && (
//         <div className="flex justify-center mt-8">
//           <button
//             onClick={() => setShowAll(!showAll)}
//             className="px-8 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors duration-300"
//           >
//             {showAll ? 'Show Less' : 'More'}
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UsNews;



// components/UsNews.jsx
"use client";  // ← only this small component is client-side

import { useState } from "react";
import Link from "next/link";

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
          <Link key={post.id || index} href={`/${post.category}/${post.slug}`}>
            <div className="bg-white p-[15px] hover:shadow cursor-pointer">
              <img
                src={post.image}
                alt={post.alt || post.heading}
                className="w-full h-[150px] object-cover mb-[15px]"
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
            className="px-8 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors duration-300"
          >
            {showAll ? "Show Less" : "More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default UsNews;