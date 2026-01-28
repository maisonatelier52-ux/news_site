import Link from "next/link";
import { FaFacebookF, FaXTwitter, FaEnvelope, FaInstagram, FaRedditAlien, FaUserCircle } from "react-icons/fa6";
import { FiShare2, FiMoreHorizontal } from "react-icons/fi";
import { FaYoutube, FaTelegramPlane, FaPlus } from "react-icons/fa";
import RelatedNews from "../../../components/RelatedNews";
import Sidecontent from "../../../components/Sidecontent";
import MoreRead from "../../../components/MoreRead";

import categoryPageData from "../../../public/data/category/categorypagedata.json";
import authorsData from "../../../public/data/authors.json";


export default async function Page({ params }) {
  const { category, slug } = await params;

  // 1️⃣ Find the post by category + slug
  const post = categoryPageData[category]?.find(
    (item) => item.slug === slug
  );

  if (!post) {
    return <div className="max-w-7xl mx-auto px-4 py-8">Post not found</div>;
  }

  // 2️⃣ Build author lookup
  const authorsByCategory = authorsData.categories.reduce((acc, item) => {
    acc[item.category] = item.author;
    return acc;
  }, {});

  // 3️⃣ Get author by category
  const author = authorsByCategory[category];

  // 4️⃣ Get body data from post
  const body = post.body;

  return (
    <main>
      <section className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 py-8">

          {/* Breadcrumb */}
          <nav className="text-sm text-black mb-4 hidden md:block">
            <Link href="/" className="hover:text-black">Home</Link> &gt;{" "}
            <Link href={`/${category}`} className="hover:text-black">
              {category}
            </Link>{" "}
            &gt;{" "}
            <span className="text-black">
              {post.heading}
            </span>
          </nav>

          {/* Category */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-orange-500"></span>
            <span className="text-sm font-semibold uppercase tracking-wide text-black">
              {category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-black mb-4">
            {post.heading}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-black max-w-3xl mb-6">
            {post.metaDescription}
          </p>

          {/* Author + Meta */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-t border-b py-4">

            {/* Author */}
            <div className="flex items-center gap-3">
              <img
                src={author.profileImage}
                alt={author.name}
                className="w-12 h-12 rounded-full object-cover"
              />

              <div className="text-sm">
                <p className="font-semibold text-black">
                  {author.name}
                </p>
                <p className="text-black">
                  {post.date}
                </p>
              </div>
            </div>

            {/* Share Icons */}
            <div className="flex items-center gap-4 text-black">
              <FiShare2 className="cursor-pointer hover:text-black" />
              <FaFacebookF className="cursor-pointer hover:text-blue-600" />
              <FaXTwitter className="cursor-pointer hover:text-black" />
              <FaEnvelope className="cursor-pointer hover:text-red-500" />
            </div>

          </div>

        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 mt-5">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">

          {/* LEFT – ARTICLE IMAGE */}
          <div>
            <img
              src={post.heroImage || "https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b35-860x561.jpg"}
              alt="Article"
              className="w-full h-auto object-cover"
            />
            
            <section className="max-w-7xl mx-auto px-4 mt-10">
              <div className="grid grid-cols-1 lg:grid-cols-[60px_1fr] gap-6">

                {/* LEFT – STICKY SHARE */}
                <div className="hidden lg:block">
                  <div className="sticky top-10 flex flex-col items-center gap-4 text-gray-500">
                    <button className="hover:text-blue-600">
                      <FaFacebookF />
                    </button>
                    <button className="hover:text-black">
                      <FaXTwitter />
                    </button>
                    <button className="hover:text-red-600">
                      <FaEnvelope />
                    </button>
                  </div>
                </div>

                {/* RIGHT – ARTICLE CONTENT */}
                <article className="max-w-3xl">
                  {/* DROP CAP PARAGRAPH */}
                  {body.dropcap && (
                    <p className="text-gray-700 leading-7 text-lg mb-6">
                      <span className="float-left text-8xl font-bold mr-3 leading-none text-black">
                        {body.dropcap.letter}
                      </span>
                      {body.dropcap.text}
                    </p>
                  )}

                  {/* PARAGRAPHS */}
                  {body.paragraphs?.map((paragraph, idx) => (
                    <p key={idx} className="text-gray-700 leading-7 mb-10">
                      {paragraph}
                    </p>
                  ))}

                  {/* QUOTE BLOCK */}
                  {body.quote && (
                    <blockquote className="text-center max-w-2xl mx-auto my-16">
                      <span className="text-orange-500 text-6xl block mb-4">"</span>
                      <p className="text-xl font-semibold leading-relaxed mb-4">
                        {body.quote.text}
                      </p>
                      <span className="text-sm text-gray-500 italic">— {body.quote.author}</span>
                    </blockquote>
                  )}

                  <section className="mt-5">
                    {/* RENDER DYNAMIC SECTIONS */}
                    {body.sections?.map((section, sectionIdx) => {
                      // IMAGE WITH TEXT SECTION
                      if (section.type === 'imageWithText') {
                        return (
                          <div key={sectionIdx}>
                            {section.text?.map((text, idx) => (
                              <p key={idx} className="text-lg text-gray-700 mb-4">
                                {text}
                              </p>
                            ))}

                            {section.image && (
                              <div className="w-full mb-6">
                                <img
                                  src={section.image.url}
                                  alt={section.image.alt}
                                  className="w-full h-auto object-cover"
                                />
                              </div>
                            )}

                            {section.additionalText?.map((text, idx) => (
                              <p key={`add-${idx}`} className="text-lg text-gray-700 mb-4">
                                {text}
                              </p>
                            ))}
                          </div>
                        );
                      }

                      // TWO COLUMN LAYOUT
                      if (section.type === 'twoColumnLayout') {
                        return (
                          <div key={sectionIdx} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-2">
                              <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
                              {section.mainContent?.map((text, idx) => (
                                <p key={idx} className="text-lg text-gray-700 mb-4">
                                  {text}
                                </p>
                              ))}
                            </div>

                            {section.showMoreRead && <MoreRead />}
                          </div>
                        );
                      }

                      // FULL WIDTH SECTION
                      if (section.type === 'fullWidth') {
                        return (
                          <div key={sectionIdx} className="mt-8">
                            <div className="bg-white">
                              <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                              {section.content?.map((text, idx) => (
                                <p key={idx} className="text-lg text-gray-700 mb-4">
                                  {text}
                                </p>
                              ))}

                              {section.image && (
                                <div>
                                  <img
                                    src={section.image.url}
                                    alt={section.image.alt}
                                    className="object-cover w-full h-auto"
                                  />
                                </div>
                              )}

                              {section.subsections?.map((subsection, subIdx) => (
                                <div key={subIdx} className="flex flex-col justify-start mt-6">
                                  <h2 className="text-3xl font-bold mb-4">{subsection.title}</h2>
                                  {subsection.text?.map((text, txtIdx) => (
                                    <p key={txtIdx} className="text-lg text-gray-700 mb-4">
                                      {text}
                                    </p>
                                  ))}

                                  {subsection.checklist?.map((item, itemIdx) => (
                                    <h3 key={itemIdx} className="text-sm font-semibold mb-2">
                                      <span className="text-orange-500">✓</span> {item}
                                    </h3>
                                  ))}

                                  {subsection.additionalText?.map((text, addIdx) => (
                                    <p key={`sub-add-${addIdx}`} className="text-lg text-gray-700 mb-4">
                                      {text}
                                    </p>
                                  ))}
                                </div>
                              ))}
                            </div>
                          </div>
                        );
                      }

                      // FINAL SECTION
                      if (section.type === 'finalSection') {
                        return (
                          <div key={sectionIdx}>
                            <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
                            {section.intro?.map((text, idx) => (
                              <p key={idx} className="text-lg text-gray-700 mb-4">
                                {text}
                              </p>
                            ))}

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                              <div>
                                {section.twoColumnContent?.left?.map((text, idx) => (
                                  <p key={idx} className="text-lg text-gray-700 mb-4">
                                    {text}
                                  </p>
                                ))}
                              </div>

                              {section.twoColumnContent?.rightQuote && (
                                <div className="flex items-center justify-center">
                                  <blockquote className="text-center text-xl italic text-gray-800 font-semibold pl-4">
                                    <span className="text-center text-orange-500 text-6xl block mb-4">"</span>
                                    {section.twoColumnContent.rightQuote.text}
                                    <span className="text-center block mt-2 text-sm text-gray-500">
                                      — {section.twoColumnContent.rightQuote.author}
                                    </span>
                                  </blockquote>
                                </div>
                              )}
                            </div>

                            {section.conclusion?.map((text, idx) => (
                              <p key={`conclusion-${idx}`} className="text-lg text-gray-700 mb-4">
                                {text}
                              </p>
                            ))}
                          </div>
                        );
                      }

                      return null;
                    })}
                  </section>

                  <div className="article-container">
                    {/* Share Section */}
                    <div className="mt-10">
                      <hr className="border-t-2 border-dotted border-gray-400" />
                      <div className="flex justify-between items-center mt-6">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold">Share</span>
                        </div>
                        <div className="flex items-center gap-3">
                          {/* Facebook Icon */}
                          <a href="#" target="_blank" title="Share on Facebook" className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-400 text-gray-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition">
                            <FaFacebookF className="w-5 h-5" />
                          </a>
                          {/* Twitter Icon */}
                          <a href="#" target="_blank" title="Share on X" className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-400 text-gray-600 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition">
                            <FaXTwitter className="w-5 h-5" />
                          </a>
                          {/* Reddit Icon */}
                          <a href="#" target="_blank" title="Share on reddit" className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-400 text-gray-600 hover:bg-blue-700 hover:text-white hover:border-blue-700 transition">
                            <FaRedditAlien className="w-5 h-5" />
                          </a>
                          {/* Instagram Icon */}
                          <a href="#" target="_blank" title="Share on Instagram" className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-400 text-gray-600 hover:bg-black hover:text-white hover:border-black transition">
                            <FaInstagram className="w-5 h-5" />
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Author Section */}
                    <div className="mt-10">
                      <div className="mt-6 flex justify-between items-center gap-6">
                        <div className="flex items-center gap-4">
                          {/* Author Image */}
                          <img 
                            src={author.profileImage} 
                            alt={author.name} 
                            className="w-16 h-16 object-cover rounded-full" 
                          />
                          <div>
                            {/* Author Name */}
                            <a href="#" title={author.name} className="font-semibold text-sm text-gray-900 hover:text-blue-600 hover:underline">
                              {author.name}
                            </a>
                            {/* Author Role */}
                            <p className="text-gray-500 text-xs">{author.role || "Senior Editor"}</p>
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                          <span className="text-sm text-gray-600 hidden sm:block">Follow:</span>
                          <div className="flex items-center gap-3">
                            {/* Social Media Icons */}
                            <a href="#" target="_blank" className="text-gray-600 hover:text-blue-600">
                              <FaXTwitter className="w-5 h-5" />
                            </a>
                            <a href="#" target="_blank" className="text-gray-600 hover:text-blue-600">
                              <FaInstagram className="w-5 h-5" />
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* Author Bio */}
                      <p className="mt-6 text-sm text-gray-600">
                        {author.bio || "Inspiring the world through Personal Development and Entrepreneurship. Experimenter in life, productivity, and creativity. Work in Foxiz."}
                      </p>
                    </div>

                    {/* Previous/Next Articles Section */}
                    <div className="mt-10">
                      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Previous Article */}
                        <div className="flex flex-col items-start gap-4 lg:block hidden">
                          <span className="text-sm text-gray-600">Previous Article</span>
                          <div className="flex items-center gap-4 mt-4 hover:text-blue-600 cursor-pointer transition">
                            <a href="#" title="Previous Article Title">
                              <div className="flex items-center gap-4">
                                <img src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b35-860x561.jpg" alt="Previous Article" className="w-16 h-16 object-cover rounded-full" />
                                <h3 className="text-sm font-semibold text-gray-900">Previous Article Title</h3>
                              </div>
                            </a>
                          </div>
                        </div>

                        <hr className="my-6 border-t border-gray-300 lg:hidden" />

                        {/* Next Article */}
                        <div className="flex flex-col items-end gap-4 text-right lg:block hidden">
                          <span className="text-sm text-gray-600">Next Article</span>
                          <div className="flex items-center gap-4 mt-4 sm:flex-row-reverse hover:text-blue-600 cursor-pointer transition">
                            <a href="#" title="Next Article Title">
                              <div className="flex items-center gap-4">
                                <img src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b35-860x561.jpg" alt="Next Article" className="w-16 h-16 object-cover rounded-full" />
                                <h3 className="text-sm font-semibold text-gray-900">Next Article Title</h3>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </article>

              </div>
            </section>

          </div>

          {/* RIGHT – SIDEBAR */}
          <Sidecontent />

        </div>
        
        {/* related news components */}
        <RelatedNews />

      </section>

    </main>
  );
}