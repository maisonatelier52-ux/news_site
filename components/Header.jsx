"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { HiMenu } from 'react-icons/hi';
import { IoClose } from "react-icons/io5";
import { FaXTwitter,FaInstagram } from "react-icons/fa6";
import { FaRedditAlien } from "react-icons/fa";
import { BsSubstack } from "react-icons/bs";
import Image from "next/image";

import categoryPageData from "../public/data/category/categorypagedata.json";

const Header = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dateTime, setDateTime] = useState({
    short: "",
    long: "",
  });

  // ✅ Categories with slugs (FINAL ORDER)
  const categories = [
    { name: "Crime", slug: "/crime" },
    { name: "Political", slug: "/political" },
    { name: "Courts", slug: "/courts" },
    { name: "Investigations", slug: "/investigations" },
    { name: "Civil Rights", slug: "/civil-rights" },
    { name: "Law & Justice", slug: "/law-and-justice" },
    { name: "U.S. News", slug: "/us-news" },
  ];

  // Prepare all news articles for search
  const allSearchItems = Object.entries(categoryPageData).flatMap(
    ([category, posts]) =>
      posts.map(post => ({
        heading: post.heading,
        slug: post.slug,
        category: category,
        image: post.image,
        date: post.date
      }))
  );

  // Live Date + Time
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();

      const shortFormat = now.toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
      });

      const longFormat = now.toLocaleString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
      });

      setDateTime({
        short: shortFormat,
        long: longFormat,
      });
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 60000); // update every minute
    return () => clearInterval(interval);
  }, []);

  function handleSearchInput(e) {
    const value = e.target.value;
    setQuery(value);

    if (value.trim().length < 2) {
      setResults([]);
      return;
    }

    const filtered = allSearchItems.filter((item) =>
      item.heading.toLowerCase().includes(value.toLowerCase())
    );

    setResults(filtered.slice(0, 6));
  }

  return (
    <header className="bg-white border-b border-gray-200 relative">

      {/* TOP BAR */}
      <div className="flex items-center justify-between px-4 md:px-[8%] py-3">

        {/* LOGO */}
        <Link href="/" title="Court News Homepage" className="block">
          <Image
            src="/images/logo-b.png"           // ← starts with /
            alt="CourtNews"
            width={200}
            height={60}
            className="h-[60px] w-auto"
            priority
          />
        </Link>

        {/* DESKTOP RIGHT */}
        <div className="hidden md:flex items-center gap-4">

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-4 text-gray-700 text-lg">
           <Link 
              href="https://x.com/CourtNews10" 
              aria-label="x" 
              title="Follow us on X"
              className="hover:text-orange-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter />
            </Link>

            <Link 
              href="https://www.instagram.com/_court_news/" 
              aria-label="Instagram" 
              title="Follow us on Instagram"
              className="hover:text-orange-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </Link>

            <Link 
              href="https://www.reddit.com/user/court_news/" 
              aria-label="Reddit" 
              title="Follow us on Reddit"
              className="hover:text-orange-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaRedditAlien />
            </Link>

            <Link 
              href="https://substack.com/@courtnews" 
              aria-label="Substack" 
              title="Follow us on Substack"
              className="hover:text-orange-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsSubstack />
            </Link>
          </div>

          {/* SEARCH */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search news..."
              value={query}
              onChange={handleSearchInput}
              className="border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-orange-500 w-[200px]"
            />
            
            {/* DESKTOP SEARCH RESULTS */}
            {results.length > 0 && (
              <div className="absolute top-full mt-2 left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-w-[400px]">
                {results.map((item, index) => (
                  <Link
                    key={`${item.category}-${item.slug}-${index}`}
                    href={`/${item.category}/${item.slug}`}
                    title={`View article: ${item.heading}`}
                    className="block px-4 py-3 text-sm hover:bg-gray-100 border-b border-gray-100 last:border-b-0"
                    onClick={() => {
                      setResults([]);
                      setQuery("");
                    }}
                  >
                    <div className="font-semibold text-gray-800 line-clamp-2">
                      {item.heading}
                    </div>
                    <div className="text-xs text-gray-500 mt-1 capitalize">
                      {item.category.replace('-', ' ')} • {item.date}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden flex flex-col justify-between w-7 h-6"
          aria-label="Menu" title="Open menu"
        >
          <HiMenu size={30} />
        </button>
      </div>

      {/* DESKTOP NAVIGATION */}
      <nav className="border-t border-gray-200 hidden md:block">
        <div className="flex items-center justify-between px-4 md:px-[10%] py-2">
          {/* Left - Categories */}
          <ul className="flex items-center gap-1">
            {/* HOME */}
            <li>
              <Link
                href="/" title="Court News Homepage"
                className="block px-4 py-2 font-semibold text-gray-700 rounded hover:bg-gray-100 hover:text-orange-500"
              >
                Home
              </Link>
            </li>

            {/* CATEGORY LINKS */}
            {categories.map((cat) => (
              <li key={cat.slug}>
                <Link
                  href={cat.slug} title={`${cat.name} News`}
                  className="block px-4 py-2 font-semibold text-gray-700 rounded hover:bg-gray-100 hover:text-orange-500"
                >
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right - Date & Time */}
          <div className="text-sm font-medium text-gray-700 whitespace-nowrap">
            {dateTime.long}
          </div>
        </div>
      </nav>

      {/* MOBILE SIDEBAR MENU */}
      {isMenuOpen && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          ></div>

          {/* Sidebar */}
          <div className="fixed top-0 right-0 h-full w-[280px] bg-white z-50 shadow-xl overflow-y-auto md:hidden">
            {/* Sidebar Header */}
            <div className="flex items-center justify-between p-4 pb-1 pt-6 border-b border-gray-200">
              <p className="text-2xl font-extrabold uppercase tracking-wider text-gray-800">
                Court News
              </p>

              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-600 hover:text-orange-500"
                aria-label="Close menu" title="Close menu"
              >
                <IoClose size={30} />
              </button>
            </div>

            {/* Mobile Search */}
            <div className="p-4  border-b border-gray-200">
              <input
                type="text"
                placeholder="Search news..."
                value={query}
                onChange={handleSearchInput}
                className="w-full border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-orange-500"
              />
              
              {/* MOBILE SEARCH RESULTS */}
              {results.length > 0 && (
                <div className="mt-2 bg-white border border-gray-200 rounded-lg max-h-[300px] overflow-y-auto">
                  {results.map((item, index) => (
                    <Link
                      key={`${item.category}-${item.slug}-${index}`}
                      href={`/${item.category}/${item.slug}`}
                      title={`View article: ${item.heading}`}
                      className="block px-3 py-2 text-sm hover:bg-gray-100 border-b border-gray-100 last:border-b-0"
                      onClick={() => {
                        setResults([]);
                        setQuery("");
                        setIsMenuOpen(false);
                      }}
                    >
                      <div className="font-semibold text-gray-800 line-clamp-2">
                        {item.heading}
                      </div>
                      <div className="text-xs text-gray-500 mt-1 capitalize">
                        {item.category.replace('-', ' ')} • {item.date}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Navigation Links */}
            <nav className="p-4 pt-1">
              <ul className="space-y-2">
                {/* HOME */}
                <li>
                  <Link
                    href="/"
                    title="Court News Homepage"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-3 font-semibold text-gray-700 rounded hover:bg-gray-100 hover:text-orange-500"
                  >
                    Home
                  </Link>
                </li>

                {/* CATEGORY LINKS */}
                {categories.map((cat) => (
                  <li key={cat.slug}>
                    <Link
                      href={cat.slug}
                      title={`${cat.name} News`}
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-4 py-3 font-semibold text-gray-700 rounded hover:bg-gray-100 hover:text-orange-500"
                    >
                      {cat.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Social Media Links */}
            <div className="p-4 border-t border-gray-200">
              <p className="text-sm font-bold text-gray-800 mb-3">Follow Us</p>
              <div className="flex items-center gap-4 text-gray-700 text-xl">
                <Link
                  href="https://x.com/CourtNews10"
                  aria-label="x"
                  className="hover:text-orange-500"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Follow us on X"
                >
                  <FaXTwitter />
                </Link>

                <Link
                  href="https://www.instagram.com/_court_news/"
                  aria-label="Instagram"
                  className="hover:text-orange-500"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Follow us on Instagram"
                >
                  <FaInstagram />
                </Link>

                <Link
                  href="https://www.reddit.com/user/court_news/"
                  aria-label="Reddit"
                  className="hover:text-orange-500"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Follow us on Reddit"
                >
                  <FaRedditAlien />
                </Link>

                <Link
                  href="https://substack.com/@courtnews"
                  aria-label="Substack"
                  className="hover:text-orange-500"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Follow us on Substack"
                >
                  <BsSubstack />
                </Link>
              </div>
            </div>

            {/* Date & Time in Mobile */}
            <div className="p-4 border-t border-gray-200 text-sm text-gray-600">
              {dateTime.long}
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;