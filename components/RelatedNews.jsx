import React from 'react';
import Link from 'next/link';
import categoryPageData from "../public/data/category/categorypagedata.json";
import authorsData from "../public/data/authors.json";
import Image from "next/image";

const RelatedNews = ({ currentCategory, currentSlug }) => {
  // Check if data is available
  if (!categoryPageData || !authorsData) {
    return <div>Loading...</div>;
  }

  // Create category → author mapping
  const authorsByCategory = authorsData.categories?.reduce((acc, item) => {
    acc[item.category] = item.author;
    return acc;
  }, {});

  if (!authorsByCategory) {
    return <div>Data not found.</div>;
  }

  // Get posts from the current category only
  const categoryPosts = categoryPageData[currentCategory] || [];
  
  // Filter out the current article, add author information, and sort by date (newest first)
  const relatedPosts = categoryPosts
    .filter(post => post.slug !== currentSlug) // Exclude current article
    .map(post => ({
      ...post,
      category: currentCategory,
      author: authorsByCategory[currentCategory] || {}
    }))
    .sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort by date, newest first
    .slice(0, 4); // Get only 4 most recent related articles

  // If no related posts, don't render the component
  if (relatedPosts.length === 0) {
    return null;
  }

  // Helper function to format date
  const formatDate = (dateStr) => {
    // If date is already in format like "24 Jan, 2026", return as is
    if (dateStr && dateStr.includes(',')) {
      return dateStr;
    }
    // Otherwise try to parse and format
    try {
      const date = new Date(dateStr);
      return date.toLocaleDateString('en-US', { 
        day: 'numeric', 
        month: 'short', 
        year: 'numeric' 
      });
    } catch {
      return dateStr;
    }
  };

  // Helper function to format category name
  const formatCategoryName = (category) => {
    if (!category) return '';
    // Convert "civil-rights" to "Civil Rights", "us-news" to "US News", etc.
    return category
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
      .replace('Us ', 'US '); // Handle "US News" case
  };

  return (
    <div className="text-black">
      <div className="mt-10 mb-10">
        {/* Section Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">
            More in {formatCategoryName(currentCategory)}
          </h2>
        </div>

        <div className="w-full border-t-4 border-orange-500 mb-6"></div>

        {/* ================= DESKTOP VIEW ================= */}
        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedPosts.map((post, index) => (
            <Link 
              key={post.id || index} 
              href={`/${post.category}/${post.slug}`}
              className="flex flex-col items-start group"
            >
              <Image
                src={post.image}
                alt={post.alt || post.heading}
                className="w-full h-auto object-cover rounded"
                width={1200}  // Specify the width (adjust according to your design)
                height={800}  // Specify the height (adjust based on the aspect ratio you need)
              />
              <p className="mt-2 text-sm font-semibold group-hover:text-orange-500 transition line-clamp-3">
                {post.heading}
              </p>
              <p className="text-xs text-gray-600 mt-1">
                By {post.author?.name || "Unknown"}
              </p>
              <p className="text-xs text-gray-500">
                {formatDate(post.date)}
              </p>
            </Link>
          ))}
        </div>

        {/* ================= MOBILE VIEW ================= */}
        <div className="lg:hidden space-y-5">
          {relatedPosts.map((post, index) => (
            <Link 
              key={post.id || index}
              href={`/${post.category}/${post.slug}`}
              className={`flex items-start gap-4 group ${
                index !== relatedPosts.length - 1 ? 'border-b pb-4' : ''
              }`}
            >
              <div className="flex-1">
                <h3 className="text-sm font-semibold leading-snug group-hover:text-orange-500 transition line-clamp-2">
                  {post.heading}
                </h3>
                <p className="text-xs text-gray-600 mt-1">
                  By {post.author?.name || "Unknown"}
                </p>
                <p className="text-xs text-gray-500">
                  {formatDate(post.date)}
                </p>
              </div>
              <Image
                  src={post.image}
                  alt={post.alt || post.heading}
                  className="w-20 h-16 object-cover rounded flex-shrink-0"
                  width={80}  // 20 * 4 (adjust based on your design)
                  height={64}  // 16 * 4 (adjust based on your design)
                />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedNews;