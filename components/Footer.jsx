import React from "react";
import Link from "next/link";
import { FaXTwitter,FaInstagram } from "react-icons/fa6";
import { FaRedditAlien } from "react-icons/fa";
import { BsSubstack } from "react-icons/bs";
import Image from "next/image";


// Correct imports – using relative paths from components/ folder
import categoryPageData from "../public/data/category/categorypagedata.json";
import authorsData from "../public/data/authors.json";

const Footer = () => {
  // Get first 5 category names (from object keys)
  const categories = Object.keys(categoryPageData).slice(0, 5);

  // Get first 5 authors safely
  const authors = authorsData?.categories?.slice(0, 5) || [];

  return (
    <footer className="bg-[#111] text-white pt-10 pb-5 w-full mt-auto">
      <div className="max-w-[1250px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">

        {/* Logo & Description */}
        <div className="space-y-4">
          <Image
              src="/images/logo-w.png"           // ← starts with / (public folder root)
              alt="Court News Logo"
              width={180}
              height={60}                      // ← change to match real proportions
              className="w-[180px] h-auto"
              loading="lazy"

            />
          <p className="text-sm text-gray-300 leading-relaxed">
            Court News is a U.S.-based legal news platform covering courts, crime, civil rights, investigations, and law & justice across America.
          </p>
        </div>

        {/* Categories */}
        <div>
          <p className="mb-4 font-semibold text-lg text-white">Categories</p>
          <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-gray-300 md:flex md:flex-col md:gap-2">
            {categories.map((cat) => (
              <Link
                key={cat}
                href={`/${cat}`}
                title={`View ${cat.replace("-", " ")} news`}
                className="hover:text-orange-500 transition-colors capitalize"
              >
                {cat.replace("-", " ")}
              </Link>
            ))}
          </div>
        </div>

        {/* Authors */}
        <div>
          <p className="mb-4 font-semibold text-lg text-white">Authors</p>
          <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-gray-300 md:flex md:flex-col md:gap-2">
            {authors.length > 0 ? (
              authors.map((item) => {
                const auth = item.author;
                return (
                  <Link
                    key={auth.id || auth.name}
                    href={`/authors/${auth.slug || slugify(auth.name)}`}
                    title={`View articles by ${auth.name}`}
                    className="hover:text-orange-500 transition-colors"
                  >
                    {auth.name}
                  </Link>
                );
              })
            ) : (
              <p className="text-gray-500 text-sm col-span-2">No authors listed</p>
            )}
          </div>
        </div>

        {/* Social & More */}
        <div className="text-center md:text-left">
          <p className="mb-4 font-semibold text-lg text-white">Follow Us</p>
          <div className="flex justify-center md:justify-start gap-5 text-2xl text-gray-300 mb-6">
             <Link href="https://x.com/CourtNews10" aria-label="x" title="Follow us on X" className="hover:text-orange-500 transition-colors">
              <FaXTwitter />
            </Link>
            <Link href="https://www.instagram.com/_court_news/" aria-label="Instagram" title="Follow us on Instagram" className="hover:text-orange-500 transition-colors">
              <FaInstagram />
            </Link>
           
            <Link href="https://www.reddit.com/user/court_news/" aria-label="Reddit" title="Follow us on Reddit" className="hover:text-orange-500 transition-colors">
              <FaRedditAlien />
            </Link>
            <Link href="https://substack.com/@courtnews" aria-label="substack" title="Follow us on Substack" className="hover:text-orange-500 transition-colors">
              <BsSubstack />
            </Link>
          </div>

          {/* Extra links (optional) */}
          <div className="flex flex-col gap-2 text-sm text-gray-300 ">
            <Link href="/about-us" title="Learn more about Court News" className="hover:text-orange-500 transition-colors">About Us</Link>
            <Link href="/privacy-policy" title="View our privacy policy" className="hover:text-orange-500 transition-colors">Privacy Policy</Link>
            <Link href="/terms-and-conditions" title="View our terms and conditions" className="hover:text-orange-500 transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-gray-100 mt-10 border-t border-gray-800 pt-6 px-4">
        Copyright © Court News {new Date().getFullYear()}. All rights reserved.
      </div>
    </footer>
  );
};

// Optional helper if you didn't add slug field
function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export default Footer;

