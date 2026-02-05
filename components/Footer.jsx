import React from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { SiYoutube, SiRss } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-[#111] text-white py-10 w-full">
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-5 px-4">

        {/* Logo Section */}
        <div>
          <img
            src="https://foxiz.io/business/wp-content/uploads/sites/6/2022/02/logo.png"
            alt="Foxiz Logo"
            className="w-[180px] mb-3"
          />
          <p className="text-sm text-gray-300">
            Court News is a U.S.-based legal news platform covering courts, crime, civil rights, investigations, and law & justice across America.
          </p>
        </div>

{/* Categories */}
<div className="md:col-span-2">
  <div className="grid grid-cols-2 gap-6 text-gray-300 md:grid-cols-3">

    {/* Column 1 */}
    <div className="flex flex-col gap-2">
      <Link href="#" className="hover:text-orange-500">Innovate</Link>
      <Link href="#" className="hover:text-orange-500">Gadget</Link>
      <Link href="#" className="hover:text-orange-500">PC Hardware</Link>
      <Link href="#" className="hover:text-orange-500">Review</Link>
      <Link href="#" className="hover:text-orange-500">Software</Link>
    </div>

    {/* Column 2 */}
    <div className="flex flex-col gap-2">
      <Link href="#" className="hover:text-orange-500">Medicine</Link>
      <Link href="#" className="hover:text-orange-500">Children</Link>
      <Link href="#" className="hover:text-orange-500">Coronavirus</Link>
      <Link href="#" className="hover:text-orange-500">Nutrition</Link>
      <Link href="#" className="hover:text-orange-500">Disease</Link>
    </div>


  </div>
</div>


        {/* Social */}
        <div className="md:pl-5 text-center md:text-left">
          <h4 className="mb-3 font-semibold">Find Us on Socials</h4>
          <div className="flex justify-center md:justify-start gap-4 text-xl text-gray-300">
            <Link href="#" aria-label="Facebook" className="hover:text-orange-500">
              <FaFacebookF />
            </Link>
            <Link href="#" aria-label="Twitter" className="hover:text-orange-500">
              <FaTwitter />
            </Link>
            <Link href="#" aria-label="YouTube" className="hover:text-orange-500">
              <SiYoutube />
            </Link>
            <Link href="#" aria-label="RSS Feed" className="hover:text-orange-500">
              <SiRss />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-xs text-gray-500 mt-8 px-4">
        Copyright © Court News {new Date().getFullYear()}. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
