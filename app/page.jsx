import React from "react";
import Link from "next/link";
import categoryPageData from "../public/data/category/categorypagedata.json";
import authorsData from "../public/data/authors.json";
import DailyNews from "../components/DailyNews"
import CrimeNews from "../components/CrimeNews"
import PoliticsNews from '../components/PoliticsNews';
import CourtNews from '../components/CourtNews'
import Image from "next/image";


const MainSection = () => {

  // LATEST NEWS SECTION
  // Category → Author map
const authorsByCategory = authorsData.categories.reduce((acc, item) => {
  acc[item.category] = item.author;
  return acc;
}, {});

// Collect all posts and add author information
const allPosts = Object.entries(categoryPageData).flatMap(
  ([category, posts]) =>
    posts.map(post => ({
      ...post,
      category,
      author: authorsByCategory[category] || {} // Provide fallback if no author is found
    }))
);

// Sort posts by date (latest first)
const sortedPosts = [...allPosts].sort(
  (a, b) => new Date(b.date) - new Date(a.date)
);

// Hero post (most recent post)
const heroPost = sortedPosts[0];

// Small posts (next 4 posts)
const smallPosts = sortedPosts.slice(1, 5);

// CRIME NEWS SECTION
// Filter only crime category posts
  const crimePosts = sortedPosts.filter(
    (post) => post.category.toLowerCase() === 'crime'
  );

  // Remove any that are already shown in hero or small posts
  const uniqueCrimePosts = crimePosts.filter((post) => {
    // Skip if it's the hero post
    if (heroPost && post.slug === heroPost.slug) return false;
    // Skip if it's one of the small/latest posts
    return !smallPosts.some((small) => small.slug === post.slug);
  });

  // Take the first 4 most recent unique crime posts
  const latestCrimePosts = uniqueCrimePosts.slice(0, 4);

  // Only render section if we have something to show
  if (latestCrimePosts.length === 0) return null;

 
  //POLICTCS NEWS SECTION
    // Filter only politics category posts
    const politicsPosts = sortedPosts.filter(
      (post) => post.category.toLowerCase() === 'politics'
    );
  
    // Remove any that are already shown in hero or small posts (Latest News section)
    const uniquePoliticsPosts = politicsPosts.filter((post) => {
      // Skip if it's the hero post
      if (heroPost && post.slug === heroPost.slug) return false;
      // Skip if it's one of the small/latest posts
      return !smallPosts.some((small) => small.slug === post.slug);
    });
  
    // Only render section if we have enough politics posts to show
    if (uniquePoliticsPosts.length === 0) return null;
  
    // Get posts for each column
    const featuredPost = uniquePoliticsPosts[0]; // Big featured post (Column 1)
    const textPosts = uniquePoliticsPosts.slice(1, 3); // Text-only posts (Column 2)
    const imagePosts = uniquePoliticsPosts.slice(3, 5); // Image posts (Column 3)


    // COURT NEWS SECTION
    // Filter only court category posts
    const courtPosts = sortedPosts.filter(
      (post) => post.category.toLowerCase() === 'courts'
    );

    // Remove any that are already shown in hero or small posts
    const uniqueCourtPosts = courtPosts.filter((post) => {
      // Skip if it's the hero post
      if (heroPost && post.slug === heroPost.slug) return false;
      // Skip if it's one of the small/latest posts
      if (smallPosts.some((small) => small.slug === post.slug)) return false;
      // Skip if it's already in crime posts (if you want to avoid duplication across sections)
      if (latestCrimePosts && latestCrimePosts.some((crime) => crime.slug === post.slug)) return false;
      return true;
    });

    // Take the first 4 most recent unique court posts
    const latestCourtPosts = uniqueCourtPosts.slice(0, 4);
  


  return (
    <main>
      {/* FIRST SECTION - Hero + Small Cards */}
        <DailyNews heroPost={heroPost} smallPosts={smallPosts}/>

      {/* SECOND SECTION - Four Cards */}
       <CrimeNews latestCrimePosts={latestCrimePosts} />

      {/* THIRD SECTION - Three Column News */}
      <PoliticsNews featuredPost={featuredPost} textPosts={textPosts} imagePosts={imagePosts}/>

      {/* SPONSORED AD SECTION */}
      <div className="w-full bg-white py-[30px] pb-10 mx-auto text-center border-b border-[#414141] p-5 max-w-[1300px]">
        <span className="block text-sm text-black mb-3">– Sponsored –</span>

        <div className="max-w-[1100px] mx-auto">
          <Link href="https://www.progresskingdom.com/" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/progresskingdom.png"
              alt="Progress Kingdom"
              className="w-full h-32 object-fit rounded-md"
              width={1100}  // specify the width
              height={125}  // specify the height to match your original h-32
            />
          </Link>
        </div>
      </div>

      {/* FOURTH SECTION - Image List */}
      {/* Court News Section */}
        {latestCourtPosts.length > 0 && (
          <section>
            <CourtNews latestCourtPosts={latestCourtPosts} />
          </section>
        )}
    

      {/* FIFTH SECTION - What to Watch */}
      <div className="bg-gradient-to-b from-[#1b1446] via-[#0e0a2b] to-[#07051c] py-[25px] px-0 text-white">
  <div className="max-w-[1300px] mx-auto gap-5 pt-5 pb-[10px] p-5">
    
    {/* SECTION TITLE */}
    <div className="flex items-center gap-[10px] mb-[25px] pb-[5px] border-b border-[#eee]">
      <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
      <h2 className="text-lg font-bold">What to Watch</h2>
    </div>

    {/* ROW 1 */}
    <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 mb-[50px] border-b border-[#eee] pb-5">
      <div>
        <span className="text-xs text-orange-500 font-bold">TECHNOLOGY</span>
        <h1 className="text-[42px] font-extrabold leading-[1.2] my-[14px]">
          Garmin Venu: Solid<br />
          Fitness Tracker with<br />
          Smartwatch
        </h1>
        <p className="text-[15px] text-[#cfcfe6] max-w-[420px] pb-[10px]">
          Modern technology has become a total phenomenon for civilization,
          the defining force of a new social order in which efficiency...
        </p>
        <span className="text-[13px] text-white pb-[10px] block">
          By Hugh Son · 4 years ago
        </span>
      </div>

      <div>
        <img 
          src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b36-860x573.jpg" 
          className="w-full "  // Hide on mobile (default) and show on medium and up screens
          alt="Garmin Venu"
        />
      </div>
    </div>

    {/* ROW 2 */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] mb-[60px]">
      <div className="text-center">
        <img 
          src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b36-860x573.jpg" 
          className="w-full h-[300px] "  // Hide on mobile and show on larger screens
          alt="European Travel"
        />
        <div className="text-left p-[10px]">
          <span className="text-sm text-orange-500 font-bold">PURSUITS</span>
          <h3 className="text-base mt-3 text-white">
            10 Places You Can't Miss If It's Your First Time in European
          </h3>
          <span className="text-xs text-[#aaa] mt-2 block">
            By Hugh Son · 4 years ago
          </span>
        </div>
      </div>

      <div className="text-center">
        <img 
          src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b36-860x573.jpg" 
          className="w-full h-[300px]"  // Hide on mobile and show on larger screens
          alt="Smart Glasses"
        />
        <div className="text-left p-[10px]">
          <span className="text-sm text-orange-500 font-bold">Technology</span>
          <h3 className="text-base mt-3 text-white">
            Explained: What are Smart Glasses and How Do It Work?
          </h3>
          <span className="text-xs text-[#aaa] mt-2 block">
            By Hugh Son · 4 years ago
          </span>
        </div>
      </div>
    </div>

    {/* ROW 3 - Category Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[10px]">
      {["Politics", "Technology", "Economics", "Wellness", "Business"].map((cat) => (
        <div key={cat} className="bg-white/5 relative">
          <img 
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d" 
            className="w-full hidden md:block"  // Hide on mobile (default) and show on medium and up screens
            alt={cat}
          />
          <h4 className="mt-[10px] text-[15px] p-[10px]">{cat}</h4>
          <div className="absolute bottom-3 right-3 w-[26px] h-[26px] rounded-full border border-white grid place-items-center font-bold">
            +
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


      {/* SIXTH SECTION - Three Column Container */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] gap-5 p-5 max-w-[1300px] mx-auto">
        
        {/* Left Column */}
        <div className="flex flex-col gap-5 ">
          <div className="bg-[#f0f0f0] p-5 text-center rounded-lg">
            <p>-Advertisement-</p>
            
            <Link href="https://www.morenews.org/" target="_blank" rel="noopener noreferrer">
          <img
            src="/images/morenews.png"
            alt="More News"
            className="w-full h-25 rounded-md"
          />
        </Link>
          </div>

          <div className="bg-white p-[15px]">
            <h3 className="text-lg font-bold">
              NASA Sets Coverage for Two Spacewalks Outside Space Station
            </h3>
            <p className="text-sm text-black">
              We are just an advanced breed of monkeys on a minor planet...
            </p>
          </div>

          
        </div>

        {/* Middle Column */}
        <div className="flex flex-col gap-5">
          <div>
            <img
              src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b36-860x573.jpg"
              alt="Mars Module"
              className="w-full h-[300px] object-cover"
            />
            <h2 className="text-2xl font-bold mt-[15px]">
              NASA is Looking for 4 People to Live Inside 3D-Printed Mars Module
            </h2>
            <p className="text-base text-black">
              The space agency is selecting candidates for a groundbreaking mission...
            </p>
             <span className="text-xs text-black mt-2 block">
            By Hugh Son · 4 years ago
          </span>
          </div>

          
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-5">
          <div className="bg-[#f9f9f9] p-5">
            <h3 className="text-xl font-bold mb-[15px] text-center">Follow Us</h3>
            <div className="grid grid-cols-2 gap-[15px] justify-center p-[10px]">
              <a href="https://facebook.com" className="text-base text-black no-underline hover:text-orange-500">
                Facebook
              </a>
              <a href="https://twitter.com" className="text-base text-black no-underline hover:text-orange-500">
                X
              </a>
              <a href="https://pinterest.com" className="text-base text-black no-underline hover:text-orange-500">
                Pinterest
              </a>
              <a href="https://instagram.com" className="text-base text-black no-underline hover:text-orange-500">
                Instagram
              </a>
              <a href="https://youtube.com" className="text-base text-black no-underline hover:text-orange-500">
                YouTube
              </a>
              <a href="https://telegram.com" className="text-base text-black no-underline hover:text-orange-500">
                Telegram
              </a>
            </div>
          </div>
          <div className="bg-white p-[15px]">
            <h3 className="text-lg font-bold">
              NASA Sets Coverage for Two Spacewalks Outside Space Station
            </h3>

          </div>
          <div className="bg-white p-[15px]">
            <h3 className="text-lg font-bold">
              NASA Sets Coverage for Two Spacewalks Outside Space Station
            </h3>

          </div>
        </div>
      </div>

      {/* SEVENTH SECTION - Three Column with Separators */}
      <div className="bg-gradient-to-b from-[#1b1446] via-[#0e0a2b] to-[#07051c] py-[25px] px-[10px] text-white">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr_1px_1fr] gap-5 max-w-[1300px] w-full p-5 mx-auto">
          
          {/* Left Column */}
          <div className="text-white">
            <div className="mb-[15px]">
              <img 
                src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b36-860x573.jpg" 
                className="w-full h-[300px] object-cover"
                alt="Yoga Benefits"
              />
            </div>
            <div className="text-[1.2em] font-bold mb-[10px] text-orange-500">
              Benefits of Yoga: 10 Ways Your Practice Can Improve Your Life
            </div>
            <div className="text-base text-[#d1d1d1] mb-[15px]">
              We are just an advanced breed of monkeys on a minor planet...
            </div>
            <div className="text-[0.9em] text-[#aaa] flex justify-between">
              By Hugh Son | 4 years ago
            </div>
          </div>

          {/* Separator 1 */}
          <div className="hidden lg:block border-l border-[#444] h-full"></div>

          {/* Middle Column */}
          <div className="text-white">
            <div className="mb-[15px]">
              <img 
                src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b36-860x573.jpg" 
                className="w-full h-[300px] object-cover"
                alt="Gout Drug"
              />
            </div>
            <div className="text-[1.2em] font-bold mb-[10px] text-orange-500">
              Gout Drug Could Show Promise in Fighting COVID-19
            </div>
            <div className="text-base text-[#d1d1d1] mb-[15px]">
              Exploring the complexities of the human mind...
            </div>
            <div className="text-[0.9em] text-[#aaa] flex justify-between">
              By Hugh Son | 4 years ago
            </div>
          </div>

          {/* Separator 2 */}
          <div className="hidden lg:block border-l border-[#444] h-full"></div>

          {/* Right Column */}
          <div className="text-white">
            <div className="mb-[15px]">
              <img 
                src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b36-860x573.jpg" 
                className="w-full h-[300px] object-cover"
                alt="Sleep and Weight"
              />
            </div>
            <div className="text-[1.2em] font-bold mb-[10px] text-orange-500">
              How Sleeping Less Than 7 Hours a Night Can Lead to Weight Gain
            </div>
            <div className="text-base text-[#d1d1d1] mb-[15px]">
              The ongoing environmental challenges...
            </div>
            <div className="text-[0.9em] text-[#aaa] flex justify-between">
              By Hugh Son | 4 years ago
            </div>
          </div>
        </div>
      </div>

      {/* EIGHTH SECTION - More News Grid */}
      <div className="bg-white p-5 max-w-[1300px] mx-auto">
        
        {/* Header */}
        <div className="flex justify-between mb-5 font-bold">
          <div className="text-lg text-orange-500">More News</div>
          <div className="text-lg text-orange-500 cursor-pointer hover:underline">
            All Stories
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          
          {/* News Item 1 */}
          <div className="bg-white p-[15px] transition-transform duration-300 hover:-translate-y-[5px] hover:shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
            <img 
              src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b36-860x573.jpg" 
              alt="News Image" 
              className="w-full h-[150px] object-cover mb-[15px]"
            />
            <h3 className="text-base font-bold text-black mb-[10px]">
              One Day Noticed, Politicians Wary Resignation Timetable
            </h3>
            <p className="text-sm text-black">4 years ago</p>
          </div>

          {/* News Item 2 */}
          <div className="bg-white p-[15px] transition-transform duration-300 hover:-translate-y-[5px] hover:shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
            <img 
              src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b36-860x573.jpg" 
              alt="News Image" 
              className="w-full h-[150px] object-cover mb-[15px]"
            />
            <h3 className="text-base font-bold text-black mb-[10px]">
              What is the Presidential Records Act, and How Did Thomas Violate It?
            </h3>
            <p className="text-sm text-black">4 years ago</p>
          </div>

          {/* News Item 3 */}
          <div className="bg-white p-[15px] transition-transform duration-300 hover:-translate-y-[5px] hover:shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
            <img 
              src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b36-860x573.jpg" 
              alt="News Image" 
              className="w-full h-[150px] object-cover mb-[15px]"
            />
            <h3 className="text-base font-bold text-black mb-[10px]">
              Bad Credit Shouldn't Affect Health Insurance, Experts Say
            </h3>
            <p className="text-sm text-black">4 years ago</p>
          </div>

          {/* News Item 4 */}
          <div className="bg-white p-[15px] transition-transform duration-300 hover:-translate-y-[5px] hover:shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
            <img 
              src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b36-860x573.jpg" 
              alt="News Image" 
              className="w-full h-[150px] object-cover mb-[15px]"
            />
            <h3 className="text-base font-bold text-black mb-[10px]">
              How to Protect Yourself While Using Social Media
            </h3>
            <p className="text-sm text-black">4 years ago</p>
          </div>

          {/* News Item 5 */}
          <div className="bg-white p-[15px] transition-transform duration-300 hover:-translate-y-[5px] hover:shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
            <img 
              src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b36-860x573.jpg" 
              alt="News Image" 
              className="w-full h-[150px] object-cover mb-[15px]"
            />
            <h3 className="text-base font-bold text-black mb-[10px]">
              White House Reminds Lawmakers not to Travel to Afghanistan
            </h3>
            <p className="text-sm text-black">4 years ago</p>
          </div>

          {/* News Item 6 */}
          <div className="bg-white p-[15px] transition-transform duration-300 hover:-translate-y-[5px] hover:shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
            <img 
              src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b36-860x573.jpg" 
              alt="News Image" 
              className="w-full h-[150px] object-cover mb-[15px]"
            />
            <h3 className="text-base font-bold text-black mb-[10px]">
              AE Shipping on a Roll Once Again with Soaring Bulk Shipping Rates
            </h3>
            <p className="text-sm text-black">4 years ago</p>
          </div>

          {/* News Item 7 */}
          <div className="bg-white p-[15px] transition-transform duration-300 hover:-translate-y-[5px] hover:shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
            <img 
              src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b36-860x573.jpg" 
              alt="News Image" 
              className="w-full h-[150px] object-cover mb-[15px]"
            />
            <h3 className="text-base font-bold text-black mb-[10px]">
              The Car Industry's Chip Shortage is Far From Over
            </h3>
            <p className="text-sm text-black">4 years ago</p>
          </div>

          {/* News Item 8 */}
          <div className="bg-white p-[15px] transition-transform duration-300 hover:-translate-y-[5px] hover:shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
            <img 
              src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b36-860x573.jpg" 
              alt="News Image" 
              className="w-full h-[150px] object-cover mb-[15px]"
            />
            <h3 className="text-base font-bold text-black mb-[10px]">
              Medicaid Expansion Improves Hypertension and Diabetes Control
            </h3>
            <p className="text-sm text-black">4 years ago</p>
          </div>
        </div>
      </div>

    </main>
  );
};

export default MainSection;