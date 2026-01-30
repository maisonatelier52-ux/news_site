"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { BsSubstack } from "react-icons/bs";
import { SiMedium } from "react-icons/si";

const Header = ({ allSearchItems = [] }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // ✅ Categories with slugs (FINAL ORDER)
  const categories = [
    { name: "Crime", slug: "/crime" },
    { name: "Politics", slug: "/politics" },
    { name: "Courts", slug: "/courts" },
    { name: "Investigations", slug: "/investigations" },
    { name: "Civil Rights", slug: "/civil-rights" },
    { name: "Law & Justice", slug: "/law-and-justice" },
    { name: "U.S. News", slug: "/us-news" },
  ];

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
      <div className="flex items-center justify-between px-4 md:px-[10%] py-3">

        {/* LOGO */}
        <Link href="/" className="block">
          <img
            src="https://foxiz.io/business/wp-content/uploads/sites/6/2022/02/logo.png"
            alt="CourtNews.org"
            className="h-[60px] w-auto"
          />
        </Link>

        {/* DESKTOP RIGHT */}
        <div className="hidden md:flex items-center gap-4">

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-4 text-gray-700 text-lg">
            <a href="#" aria-label="Facebook" className="hover:text-orange-500">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="X" className="hover:text-orange-500">
              <FaXTwitter />
            </a>
            <a href="#" aria-label="Substack" className="hover:text-orange-500">
              <BsSubstack />
            </a>
            <a href="#" aria-label="Medium" className="hover:text-orange-500">
              <SiMedium />
            </a>
          </div>

          {/* SEARCH */}
          <input
            type="text"
            placeholder="Search news..."
            value={query}
            onChange={handleSearchInput}
            className="border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-orange-500 w-[200px]"
          />
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col justify-between w-7 h-6"
          aria-label="Menu"
        >
          <span className="block h-[3px] bg-gray-800"></span>
          <span className="block h-[3px] bg-gray-800"></span>
          <span className="block h-[3px] bg-gray-800"></span>
        </button>
      </div>

      {/* SEARCH RESULTS */}
      {results.length > 0 && (
        <div className="absolute left-0 right-0 bg-white border shadow-lg z-50">
          {results.map((item) => (
            <Link
              key={item.slug}
              href={item.href || `/${item.category}/${item.slug}`}
              className="block px-4 py-2 text-sm hover:bg-gray-100"
              onClick={() => {
                setResults([]);
                setQuery("");
              }}
            >
              {item.heading.length > 60
                ? item.heading.slice(0, 60) + "…"
                : item.heading}
            </Link>
          ))}
        </div>
      )}

      {/* NAVIGATION */}
      <nav
        className={`border-t border-gray-200 md:block ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col md:flex-row md:items-center gap-2 md:gap-1 px-4 md:px-[10%] py-2">

          {/* HOME */}
          <li>
            <Link
              href="/"
              className="block px-4 py-2 font-semibold text-gray-700 rounded hover:bg-gray-100 hover:text-orange-500"
            >
              Home
            </Link>
          </li>

          {/* CATEGORY LINKS */}
          {categories.map((cat) => (
            <li key={cat.slug}>
              <Link
                href={cat.slug}
                className="block px-4 py-2 font-semibold text-gray-700 rounded hover:bg-gray-100 hover:text-orange-500"
              >
                {cat.name}
              </Link>
            </li>
          ))}

        </ul>
      </nav>
    </header>
  );
};

export default Header;
