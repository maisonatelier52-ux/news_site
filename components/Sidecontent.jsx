import React from 'react'
import { FaFacebookF, FaXTwitter } from "react-icons/fa6"
import { FaYoutube, FaTelegramPlane, FaPlus } from "react-icons/fa"

const Sidecontent = () => {
  return (
    <div className="text-black">
      <div className="sticky top-0 border-l border-gray-200 space-y-8 lg:pl-6">

        {/* ========== BLOCK 1: FOLLOW US ========== */}
        <div className="bg-white p-6">
          <h3 className="text-lg font-bold mb-2 text-center">
            Follow Us
          </h3>

          <p className="text-sm mb-4 text-center">
            Find us on social media
          </p>

          <div className="grid grid-cols-4 gap-4 text-center">
            <div className="flex flex-col items-center text-sm">
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white">
                <FaFacebookF />
              </span>
              <span className="mt-1">Facebook</span>
            </div>

            <div className="flex flex-col items-center text-sm">
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white">
                <FaXTwitter />
              </span>
              <span className="mt-1">X</span>
            </div>

            <div className="flex flex-col items-center text-sm">
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-red-600 text-white">
                <FaYoutube />
              </span>
              <span className="mt-1">YouTube</span>
            </div>

            <div className="flex flex-col items-center text-sm">
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-400 text-white">
                <FaTelegramPlane />
              </span>
              <span className="mt-1">Telegram</span>
            </div>
          </div>
        </div>

        {/* ---------- DIVIDER ---------- */}
        <div className="border-t border-dashed border-gray-300"></div>

        {/* ========== BLOCK 2: NEWSLETTER ========== */}
      

        {/* ========== POPULAR NEWS ========== */}
        <div className="sidebar-container p-4 bg-white">
          <div className="popular-news mb-6">
            <h2 className="text-xl font-semibold">
              Popular News
            </h2>

            <div className="main-news mt-4">
              <div className="news-image mt-4">
                <img
                  src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b48-420x280.jpg"
                  alt="News"
                  className="w-full h-auto object-cover"
                />
              </div>

              <h3 className="text-lg font-semibold hover:text-blue-600 cursor-pointer">
                Wall Street Interns Return To Office, After 2 Year Of Zoom Meetings
              </h3>

              <div className="flex items-center gap-4 mt-2">
                <img
                  src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b48-420x280.jpg"
                  alt="Author"
                  className="w-10 h-10 rounded-full"
                />

                <div>
                  <p className="text-sm font-semibold">
                    By Hugh Son
                  </p>
                </div>

                <div>
                  <p className="text-xs">
                    4 years ago
                  </p>
                </div>
              </div>
            </div>

            {/* Additional News */}
            <div className="additional-news mt-6">
              <ul className="space-y-4">
                {[
                  "Here Are 12 Names on The 2025 Ballot for President, 9 for VP",
                  "Here Are The 4 Cheapest Electric Vehicles You Can Buy",
                  "How to Mark Yourself ‘Safe’ on Socials Media",
                  "Corsair HS80 RGB Wireless Gaming Headset Review",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <FaPlus />
                    <a
                      href="#"
                      className="text-sm hover:text-orange-500 hover:underline transition"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Advertisement */}
          <div className="ad-image mt-8">
            <p className="text-center text-sm mb-2">
              - Ads -
            </p>

            <img
              src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b48-420x280.jpg"
              alt="Advertisement"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Sidecontent
