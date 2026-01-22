"use client";

import React, { useState } from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { BsSubstack } from "react-icons/bs";
import { SiMedium } from "react-icons/si";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";

const Header = ({ allSearchItems = [] }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For toggling menu on mobile

  // Function to handle search input
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

  // Toggle mobile menu visibility
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header-wrap">
      {/* Logo Section */}
      <div className="logo-sec">
        <div className="logo-sec-inner">
          <div className="logo-sec-left">
            <a href="/" className="logo" title="Foxiz News">
              <img
                className="logo-default"
                src="https://foxiz.io/business/wp-content/uploads/sites/6/2022/02/logo.png"
                alt="Foxiz News"
                height="70"
                width="269"
              />
            </a>
          </div>

          {/* Hamburger Menu (for mobile) */}
          <div className="hamburger-menu" onClick={toggleMenu}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>

          {/* Navigation and Search */}
          <div className="logo-sec-right">
            <div className="header-social-list">
              <a href="#" aria-label="Facebook" target="_blank" rel="noopener nofollow">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="X" target="_blank" rel="noopener nofollow">
                <FaXTwitter />
              </a>
              <a href="#" aria-label="substack" target="_blank" rel="noopener nofollow">
                <BsSubstack />
              </a>
              <a href="#" aria-label="medium" target="_blank" rel="noopener nofollow">
                <SiMedium />
              </a>
            </div>
            <div className="header-search">
              <input
                type="text"
                className="search-bar"
                placeholder="Search News..."
                value={query}
                onChange={handleSearchInput}
              />
              {/* <CiSearch /> */}
            </div>
          </div>
        </div>
      </div>

      {/* Search Results Dropdown */}
      {results.length > 0 && (
        <div className="absolute z-20 bg-white border w-full shadow-lg mt-1 rounded">
          {results.map((item) => (
            <Link
              key={`${item.type}-${item.slug}`}
              href={item.href}
              title={item.heading}
              className="block px-3 py-2 hover:bg-gray-100 text-sm"
              onClick={() => {
                setResults([]);
                setQuery("");
              }}
            >
              {item.heading.length > 60
                ? item.heading.slice(0, 60) + "..."
                : item.heading}
            </Link>
          ))}
        </div>
      )}

      {/* Navbar - Categories Section (Mobile scrollable categories) */}
      <nav className={`navbar ${isMenuOpen ? "open" : ""}`}>
        <ul className="main-menu">
          <li><a href="">Home</a></li>
          <li><a href="/category">US</a></li>
          <li><a href="">Politics</a></li>
          <li><a href="">Business</a></li>
          <li><a href="">Technology</a></li>
          <li><a href="">Sports</a></li>
          <li><a href="">Investigation</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
