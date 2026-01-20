
import Link from "next/link";
import { FaFacebookF, FaXTwitter, FaEnvelope } from "react-icons/fa6";
import { FiShare2, FiMoreHorizontal } from "react-icons/fi";
import { FaYoutube, FaTelegramPlane } from "react-icons/fa";

export default function Page({ params }) {
  return (
    <main>
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-4 hidden md:block">
          <Link href="/" className="hover:text-black">Home</Link> &gt;{" "}
          <Link href="/business" className="hover:text-black">Business</Link> &gt;{" "}
          <span className="text-gray-700">Inflation Menace vs Pandemic Recovery</span>
        </nav>

        {/* Category */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          <span className="text-sm font-semibold uppercase tracking-wide text-gray-700">
            Business
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-black mb-4">
          Inflation Menace vs Pandemic Recovery: CEO of the AEA Bank Guide
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mb-6">
          Music expresses feeling and thought, without language. It was below and
          before speech, and it is above and beyond all words.
        </p>

        {/* Author + Meta */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-t border-b py-4">

          {/* Author */}
          <div className="flex items-center gap-3">
            <img
                src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
                alt="Author"
                className="w-12 h-12 rounded-full object-cover"
              />


            <div className="text-sm">
              <p className="font-semibold text-black">
                Hugh Son{" "}
                <span className="text-gray-500 font-normal">
                  – Senior Editor
                </span>
              </p>
              <p className="text-gray-500">
                4 years ago · Updated Feb 15, 2022
              </p>
            </div>
          </div>

          {/* Share Icons */}
          <div className="flex items-center gap-4 text-gray-600">
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
    <div className="min-h-[2000px]">
  <img
    src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b35-860x561.jpg"
    alt="Article"
    className="w-full h-auto object-cover"
  />
</div>

    {/* RIGHT – SIDEBAR */}
    <aside className="relative">
      <div className="sticky top-24 pl-6 border-l border-gray-200 space-y-8">

        {/* ========== BLOCK 1: FOLLOW US ========== */}
        <div className="bg-white p-6">
          <h3 className="text-lg font-bold mb-2 text-center">Follow Us</h3>
          <p className="text-sm text-gray-500 mb-4 text-center">
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
        <div className="bg-white p-6 text-center border border-dashed border-gray-400">
          <h3 className="text-xl font-extrabold mb-2">
            FOXIZ<span className="text-orange-500">.</span>
          </h3>

          <h4 className="font-semibold mb-2">Weekly Newsletter</h4>

          <p className="text-sm text-gray-500 mb-4">
            Subscribe to our newsletter to get our newest articles instantly!
          </p>

          <input
            type="email"
            placeholder="Your email address"
            className="w-full border px-3 py-2 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <button className="w-full bg-orange-500 text-white py-2 rounded font-semibold hover:bg-orange-600 transition">
            Sign Up Now
          </button>

          <p className="text-xs text-gray-400 mt-3 flex items-start justify-center">
            <input type="checkbox" className="mr-2 mt-1" />
            I have read and agree to the terms & conditions
          </p>
        </div>

        {/* ---------- FUTURE BLOCK PLACE ---------- */}
        
        <div className="border-t border-dashed border-gray-300"></div>

        <div className="bg-white p-6">
          <h3 className="font-bold mb-2">Popular Posts</h3>
          ...
        </div>
       

      </div>
    </aside>

  </div>
</section>


    </main>

  );
}
