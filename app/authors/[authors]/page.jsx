// import React from 'react'
// import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

  
// function page() {
//   return (
//     <div>
//       <div className=" mb-1 relative  ">
//   {/* Background with Radial Gradient Dots */}
//   <div
//     className="absolute inset-0 bg-gray-100 bg-opacity-20"
//     style={{
//       backgroundImage: "radial-gradient(#dcdcdc 1.2px, transparent 1.2px)",
//       backgroundSize: "16px 16px",
//     }}
//   ></div>

//   {/* Content Container */}
//   <div className="relative z-10 px-6 py-10 max-w-7xl mx-auto flex flex-col items-center lg:flex-row">
//   {/* Left: Author Profile Image */}
//   <div className="w-32 h-32 rounded-full overflow-hidden shadow-xl mb-4 lg:mb-0">
//     <img
//       src="https://foxiz.io/business/wp-content/uploads/sites/6/2022/03/b4.jpg" // Replace with actual image URL
//       alt="Author Image"
//       className="w-full h-full object-cover"
//     />
//   </div>

//   {/* Right: Author Info */}
//   <div className="lg:ml-6 flex flex-col items-center lg:items-start text-center lg:text-left">
//     {/* Author Name */}
//     <h2 className="text-2xl font-semibold text-gray-900 mb-2 border-b-2 border-dotted border-orange-500">
//   Hugh Son
// </h2>


//     {/* Author Description */}
//     <p className="text-lg text-gray-700 mb-2">
//       Inspiring the world through Personal Development and Entrepreneurship. Experimenter in life, productivity, and creativity.
//     </p>

//     {/* Author Role */}
//     <p className="text-sm text-gray-500 mb-4">
//       Senior Editor
//     </p>

//     {/* Social Media Icons */}
//     <div className="flex gap-4 justify-center lg:justify-start">
//       <a href="https://twitter.com" className="text-gray-600 hover:text-blue-500">
//         <FaTwitter />
//       </a>
//       <a href="https://facebook.com" className="text-gray-600 hover:text-blue-700">
//         <FaFacebookF />
//       </a>
//       <a href="https://instagram.com" className="text-gray-600 hover:text-pink-500">
//         <FaInstagram />
//       </a>
//       <a href="https://linkedin.com" className="text-gray-600 hover:text-blue-600">
//         <FaLinkedinIn />
//       </a>
//     </div>
//   </div>
// </div>

// </div>
//       <div className="container mx-auto px-6 py-10 ">
//   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

//     {/* Article 1 */}
//     <div className="bg-white  overflow-hidden">
//       <img
//         src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b9-330x220.jpg" // Replace with actual image URL
//         alt="Article Image"
//         className="w-full h-56 object-cover"
//       />
//       <div className="pt-2">
//         <h3 className="text-lg font-semibold text-gray-900 mb-2">
//           What is the Presidential Records Act, and How Did Thomas Violate It?
//         </h3>
//         <p className="text-xs text-gray-500">By Hugh Son · 4 years ago</p>
//       </div>
//     </div>

//     {/* Article 2 */}
//     <div className="bg-white  overflow-hidden">
//       <img
//         src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b9-330x220.jpg" // Replace with actual image URL
//         alt="Article Image"
//         className="w-full h-56 object-cover"
//       />
//       <div className="pt-2">
//         <h3 className="text-lg font-semibold text-gray-900 mb-2">
//           Bad Credit Shouldn't Affect Health Insurance, Experts Say
//         </h3>
//         <p className="text-xs text-gray-500">By Hugh Son · 4 years ago</p>
//       </div>
//     </div>

//     {/* Article 3 */}
//     <div className="bg-white  overflow-hidden">
//       <img
//         src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b9-330x220.jpg" // Replace with actual image URL
//         alt="Article Image"
//         className="w-full h-56 object-cover"
//       />
//       <div className="pt-2">
//         <h3 className="text-lg font-semibold text-gray-900 mb-2">
//           It's Final: 12 Names on The 2025 Ballot for President, 9 for VP
//         </h3>
//         <p className="text-xs text-gray-500">By Hugh Son · 4 years ago</p>
//       </div>
//     </div>

//     {/* Article 4 */}
//     <div className="bg-white  overflow-hidden">
//       <img
//         src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b9-330x220.jpg" // Replace with actual image URL
//         alt="Article Image"
//         className="w-full h-56 object-cover"
//       />
//       <div className="pt-2p">
//         <h3 className="text-lg font-semibold text-gray-900 mb-2">
//           One Day Noticed, Politicians Wary Resignation Timetable
//         </h3>
//         <p className="text-xs text-gray-500">By Hugh Son · 4 years ago</p>
//       </div>
//     </div>

//     {/* Article 5 */}
//     <div className="bg-white  overflow-hidden">
//       <img
//         src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b9-330x220.jpg" // Replace with actual image URL
//         alt="Article Image"
//         className="w-full h-56 object-cover"
//       />
//       <div className="pt-2">
//         <h3 className="text-lg font-semibold text-gray-900 mb-2">
//           National Day Rally 2023: Sacrifice, Effort Needed to Preserve Harmony
//         </h3>
//         <p className="text-xs text-gray-500">By Hugh Son · 4 years ago</p>
//       </div>
//     </div>

//     {/* Article 6 */}
//     <div className="bg-white  overflow-hidden">
//       <img
//         src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b9-330x220.jpg" // Replace with actual image URL
//         alt="Article Image"
//         className="w-full h-56 object-cover"
//       />
//       <div className="pt-2">
//         <h3 className="text-lg font-semibold text-gray-900 mb-2">
//           New Census Data Will Shake Up Alabama Politics
//         </h3>
//         <p className="text-xs text-gray-500">By Hugh Son · 4 years ago</p>
//       </div>
//     </div>

//   </div>
// </div>



  


//     </div>
//   )
// }

// export default page
// app/authors/[author]/page.jsx

// app/authors/[author]/page.jsx

import categoryPageData from "../../../public/data/category/categorypagedata.json";
import authorsData from "../../../public/data/authors.json";
import Link from "next/link";
import Image from "next/image";
import { FaTwitter, FaQuora, FaReddit, FaMedium } from "react-icons/fa";

// Helper: find author by slug (now using the "slug" field directly)
const getAuthorBySlug = (authorSlug) => {
  for (const cat of authorsData.categories) {
    const author = cat.author;
    if (author.slug === authorSlug) {  // ← changed: direct comparison
      return {
        ...author,
        category: cat.category,
      };
    }
  }
  return null;
};

// Helper: get articles for this author
const getArticlesByAuthor = (category) => {
  return categoryPageData[category] || [];
};

export default async function AuthorPage({ params }) {
  const { author } = params;  // params.author comes from URL: /authors/laura-mitchell
  const authorSlug = decodeURIComponent(author);  // safe decoding

  // Find author using the new slug field
  const authorData = getAuthorBySlug(authorSlug);

  if (!authorData) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Author Not Found</h1>
        <p className="text-xl text-gray-600 mb-8">
          Sorry, we couldn't find an author with that name.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition"
        >
          ← Back to Home
        </Link>
      </div>
    );
  }

  // Get and sort articles
  const authorArticles = getArticlesByAuthor(authorData.category);
  const sortedArticles = [...authorArticles].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  const latestArticles = sortedArticles.slice(0, 6);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero / Profile Section */}
      <div className="bg-gradient-to-b from-orange-50 to-white border-b">
        <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10">
          {/* Profile Image */}
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-2xl flex-shrink-0">
            <Image
              src={authorData.profileImage}
              alt={`${authorData.name} profile`}
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
              {authorData.name}
            </h1>
            <p className="text-xl text-orange-600 font-medium mb-6">
              {authorData.jobtitle.trim()}  {/* trim() removes trailing space */}
            </p>
            <p className="text-lg text-gray-700 max-w-2xl">
              {authorData.bio}
            </p>

            {/* Social Icons */}
            {Object.values(authorData.social).some(Boolean) && (
              <div className="mt-8 flex gap-6 justify-center md:justify-start">
                {authorData.social.twitter && (
                  <a href={authorData.social.twitter} target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="text-3xl text-gray-600 hover:text-blue-500 transition" />
                  </a>
                )}
                {authorData.social.quora && (
                  <a href={authorData.social.quora} target="_blank" rel="noopener noreferrer">
                    <FaQuora className="text-3xl text-gray-600 hover:text-red-600 transition" />
                  </a>
                )}
                {authorData.social.reddit && (
                  <a href={authorData.social.reddit} target="_blank" rel="noopener noreferrer">
                    <FaReddit className="text-3xl text-gray-600 hover:text-orange-500 transition" />
                  </a>
                )}
                {authorData.social.medium && (
                  <a href={authorData.social.medium} target="_blank" rel="noopener noreferrer">
                    <FaMedium className="text-3xl text-gray-600 hover:text-black transition" />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Articles Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 border-b border-orange-500 pb-4">
          Articles by {authorData.name}
        </h2>

        {latestArticles.length === 0 ? (
          <p className="text-center text-gray-600 text-xl py-12">
            No articles found for this author yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/${authorData.category}/${article.slug}`}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={article.image || article.heroImage || "/images/placeholder.jpg"}
                    alt={article.alt || article.heading}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-orange-600 transition">
                    {article.heading || article.metaTitle}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {article.date} · {authorData.name}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}