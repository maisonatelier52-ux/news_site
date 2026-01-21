
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
    <div >
  <img
    src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b35-860x561.jpg"
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
      <p className="text-gray-700 leading-7 text-lg mb-6">
        <span className="float-left text-8xl font-bold mr-3 leading-none text-black">
          G
        </span>
        ood web design has visual weight, is optimized for various devices, and
        has content that is prioritized for the medium. The most important
        elements of a web page should have more visual weight to “naturally
        attract” a visitor’s attention.
      </p>

      {/* PARAGRAPH */}
      <p className="text-gray-700 leading-7 mb-10">
        Optimization for various types of devices and resolutions plays a
        fundamental role in modern website design. Web page layouts should be
        genuinely responsive and not rely on any fixed-size elements. Web
        designers using fluid grids and flexible images will guarantee that a
        web page will render well on a variety of devices, windows, and screen
        sizes.
      </p>

      {/* QUOTE BLOCK */}
      <blockquote className="text-center max-w-2xl mx-auto my-16">
        <span className="text-orange-500 text-6xl block mb-4">“</span>
        <p className="text-xl font-semibold leading-relaxed mb-4">
          Good design is making something intelligible and memorable. Great
          design is making something memorable and meaningful.
        </p>
        <span className="text-sm text-gray-500 italic">— Dieter Rams</span>
      </blockquote>

      <section className="mt-5">
 

    {/* LEFT – ARTICLE TEXT */}
    <div>
      <h2 className="text-3xl font-bold mb-4">
        A Good Website Should Be Easy to Navigate
      </h2>
      <p className="text-lg text-gray-700 mb-4">
        Not all websites are made equal. Some websites are simple, logical, and easy to use. Others are a messy hodgepodge of pages and links.
      </p>
          {/* RIGHT – IMAGE */}
    <div className="w-full mb-6">
      <img
        src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/09/e41-1024x683.jpg"  // Replace with the actual image URL
        alt="Illustrative Image"
        className="w-full h-auto object-cover "
      />
    </div>

      <p className="text-lg text-gray-700 mb-4">
        Without website navigation, your visitors can’t figure out how to find your blog, your email signup page, your product listings, pricing, contact information, or help docs.
      </p>

      <p className="text-lg text-gray-700 mb-4">
        Quick and easy access to the content they’re after is more important for your website users than a visually stunning design.
      </p>

    </div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

  {/* LEFT – MAIN CONTENT */}
  <div className="lg:col-span-2">
    <h2 className="text-3xl font-bold mb-4">
      A Good Website Should Be Easy to Navigate
    </h2>
    <p className="text-lg text-gray-700 mb-4">
      Not all websites are made equal. Some websites are simple, logical, and easy to use. Others are a messy hodgepodge of pages and links.
    </p>

    <p className="text-lg text-gray-700 mb-4">
      Without website navigation, your visitors can’t figure out how to find your blog, your email signup page, your product listings, pricing, contact information, or help docs.
    </p>

    <p className="text-lg text-gray-700 mb-4">
      Quick and easy access to the content they’re after is more important for your website users than a visually stunning design.
    </p>
  </div>

  {/* RIGHT – MORE READ SECTION (Updated with Static Content) */}
  <div className="bg-gray-100 rounded-lg  p-6">
    <h2 className="text-lg font-semibold flex items-center gap-2">
      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
      More Read
    </h2>

    {/* Related Articles */}
    <div className="space-y-6 mt-4">
      {/* Static Dummy Articles */}
      <div className="flex items-center border-b border-gray-300 gap-3 py-1">
        <div className="w-full">
          <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-600">
            Gout Drug Could Show Promise in Fighting COVID-19
          </a>
        </div>
      </div>

      <div className="flex items-center border-b border-gray-300 gap-3 py-1">
        <div className="w-full">
          <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-600">
            Gout Drug Could Show Promise in Fighting COVID-19
          </a>
        </div>
      </div>

      <div className="flex items-center border-b border-gray-300 gap-3 py-1">
        <div className="w-full">
          <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-600">
            Gout Drug Could Show Promise in Fighting COVID-19
          </a>
        </div>
      </div>

      

      
    </div>
  </div>

</div>

{/* BOTTOM SECTION – SINGLE COLUMN */}
<div className="mt-8">
  <div className="bg-white ">
    <h2 className="text-2xl font-bold mb-4">How Website Navigation Improves User Experience</h2>
    <p className="text-lg text-gray-700 mb-4">
      Navigation is the backbone of a website. It provides users with easy access to content, enhances user experience, and helps build credibility for the site. Good navigation can lead to higher conversion rates and lower bounce rates. In contrast, bad navigation frustrates users and can make them abandon your website.
    </p>

  {/* LEFT - Image */}
  <div>
    <img
      src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b35-860x561.jpg" // Example image, replace with your image URL
      alt="Example Image"
      className="object-cover w-full h-auto"
    />
  </div>

  {/* RIGHT - Content */}
  <div className="flex flex-col justify-start mt-6">
    <h2 className="text-3xl font-bold mb-4">
      Elements that can help website visual composition
    </h2>
    <p className="text-lg text-gray-700 mb-4">
      Nobody enjoys looking at an ugly web page. Garish colors, cluttered images and distracting animation can all turn customers “off” and send them shopping somewhere else.
      Basic composition rules to create more effective:
    </p>

    <h3 className="text-sm font-semibold mb-2"><span className="text-orange-500">✓</span> Direct the Eye With Leading Lines</h3>
    <h3 className="text-sm font-semibold mb-2"><span className="text-orange-500">✓</span> Balance Out Your Elements</h3>
    <h3 className="text-sm font-semibold mb-2"><span className="text-orange-500">✓</span> Use Elements That Complement Each Other</h3>
    <h3 className="text-sm font-semibold mb-2"><span className="text-orange-500">✓</span> Be Clear About Your "Focal Points"</h3>

    <p className="text-lg text-gray-700 mb-4">
      Nobody enjoys looking at an ugly web page. Garish colors, cluttered images and distracting animation can all turn customers “off” and send them shopping somewhere else.
      Basic composition rules to create more effective:
    </p>
  </div>


  <h2 className="text-3xl font-bold mb-4">
      Elements that can help website visual composition
    </h2>
    <p className="text-lg text-gray-700 mb-4">
      Nobody enjoys looking at an ugly web page. Garish colors, cluttered images and distracting animation can all turn customers “off” and send them shopping somewhere else.
      Basic composition rules to create more effective:
    </p>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">


  <div>
    <p className="text-lg text-gray-700 mb-4">
      UX design refers to the term “user experience design”, while UI stands for “user interface design”. Both elements are crucial to a product and work closely together. But despite their relationship, the roles themselves are quite different.
    </p>
  </div>


  <div className="flex items-center justify-center">
    <blockquote className=" text-center text-xl italic text-gray-800 font-semibold  pl-4">
      <span className=" text-center text-orange-500 text-6xl block mb-4">“</span>
      Styles come and go. Good design is a language, not a style.
      <span className=" text-center block mt-2 text-sm text-gray-500">— Massimo Vignelli</span>
    </blockquote>
    
  </div>

  </div>
    <p className="text-lg text-gray-700 mb-4">
      Nobody enjoys looking at an ugly web page. Garish colors, cluttered images and distracting animation can all turn customers “off” and send them shopping somewhere else.
      Basic composition rules to create more effective:
    </p>
    <p className="text-lg text-gray-700 mb-4">
      Nobody enjoys looking at an ugly web page. Garish colors, cluttered images and distracting animation can all turn customers “off” and send them shopping somewhere else.
      Basic composition rules to create more effective:
    </p>
</div>
  </div>
</section>
    </article>

    
    
  </div>
  <div className="mt-10">
  <hr className="border-t-2 border-dotted border-gray-400" />
  <div className="mt-6 flex flex-col sm:flex-row justify-between items-start gap-6">
    {/* Left Side: Share Section */}
    <div className="flex items-center gap-4">
      <span className="text-lg font-semibold">Share This Article</span>
      <div className="flex items-center gap-3">
        <a href="#" className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-400 text-gray-600 hover:bg-blue-600 hover:text-white transition">
          <FaFacebookF />
        </a>
        <a href="#" className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-400 text-gray-600 hover:bg-blue-500 hover:text-white transition">
          <FaXTwitter />
        </a>
        <a href="#" className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-400 text-gray-600 hover:bg-red-600 hover:text-white transition">
          <FaEnvelope />
        </a>
      </div>
    </div>

    {/* Right Side: Author Info */}
    <div className="flex items-center gap-4">
      <img src="https://randomuser.me/api/portraits/women/3.jpg" alt="Author" width={56} height={56} className="rounded-full" />
      <div>
        <p className="font-semibold text-sm">Jane M. Carter</p>
        <p className="text-gray-500 text-xs">Senior Editor</p>
      </div>
    </div>
  </div>

  <hr className="my-6 border-t border-gray-300" />

  {/* Next Article */}
  <div className="flex items-center justify-between mt-6">
    <span className="text-sm text-gray-600">Next Article</span>
    <div className="flex items-center gap-4 hover:text-blue-600 cursor-pointer transition">
      <Link href="/next-article">
        <div className="flex items-center gap-4">
          <img
            src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b43-150x150.jpg"
            alt="Next Article Image"
            width={100}
            height={100}
            className="object-cover rounded-lg flex-shrink-0"
          />
          <h3 className="text-sm font-semibold">How to Mark Yourself Safe on Social Media</h3>
        </div>
      </Link>
    </div>
  </div>

  <hr className="my-6 border-t border-gray-300" />

  {/* Previous Article */}
  <div className="flex items-center justify-between mt-6">
    <span className="text-sm text-gray-600">Previous Article</span>
    <div className="flex items-center gap-4 hover:text-blue-600 cursor-pointer transition">
      <Link href="/previous-article">
        <div className="flex items-center gap-4">
          <img
            src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b43-150x150.jpg"
            alt="Previous Article Image"
            width={100}
            height={100}
            className="object-cover rounded-lg flex-shrink-0"
          />
          <h3 className="text-sm font-semibold">These are The Countries Where Crypto is Restricted or Illegal</h3>
        </div>
      </Link>
    </div>
  </div>

  <hr className="my-6 border-t border-gray-300" />
</div>


  
      
      

</section>

</div>


    {/* RIGHT – SIDEBAR */}
    <aside className="relative">
      <div className="sticky top-0  border-l border-gray-200 space-y-8 lg:pl-6">

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
