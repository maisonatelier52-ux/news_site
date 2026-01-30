import React from "react";
import Link from "next/link";
import Image from "next/image";

const CourtNews = ({ latestCourtPosts }) => {
  // Helper function to format date
  const formatDate = (dateStr) => {
    if (dateStr && dateStr.includes(",")) {
      return dateStr;
    }
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

  // Ensure latestCourtPosts is an array and has data
  if (!Array.isArray(latestCourtPosts) || latestCourtPosts.length === 0) {
    return <div>No court news available.</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-x-[50px] lg:gap-y-10 max-w-[1300px] mx-auto pt-5 pb-[10px] p-5">
      {latestCourtPosts.map((post, index) => (
        <article
          key={post.id || index}
          className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-6 pb-[10px] "
        >
          <div>
            <span className="text-[13px] font-bold uppercase inline-flex items-center gap-[6px] before:content-[''] before:w-2 before:h-2 before:bg-orange-500 before:rounded-full">
              {post.category.replace("-", " ")}
            </span>
            <h3 className="text-xl font-extrabold leading-[1.35] my-3">
              <Link
                href={`/${post.category}/${post.slug}`}
                className="hover:text-orange-500 transition-colors"
              >
                {post.heading}
              </Link>
            </h3>
            <div className="text-[13px] text-black flex items-center gap-[10px]">
              {/* Ensure you're rendering the name or other string from the author */}
              By {post.author?.name || "Admin"} · {formatDate(post.date)}
            </div>
          </div>

          <div>
            <Image
              src={post.image}
              alt={post.alt || post.heading}
              className="w-full h-[150px] object-cover rounded"
              width={400}
              height={150}
            />
          </div>
        </article>
      ))}
    </div>
  );
};

export default CourtNews;
