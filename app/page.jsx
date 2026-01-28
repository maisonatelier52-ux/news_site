import React from "react";
import Link from "next/link";
import categoryPageData from "../public/data/category/categorypagedata.json";
import authorsData from "../public/data/authors.json";

const MainSection = () => {
  // Category → Author map
  const authorsByCategory = authorsData.categories.reduce((acc, item) => {
    acc[item.category] = item.author;
    return acc;
  }, {});

  // Collect all posts
  const allPosts = Object.entries(categoryPageData).flatMap(
    ([category, posts]) =>
      posts.map(post => ({
        ...post,
        category,
        author: authorsByCategory[category]
      }))
  );

  // Sort by date
  const sortedPosts = [...allPosts].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const heroPost = sortedPosts[0];
  const smallPosts = sortedPosts.slice(1, 5);
  
  return (
    <main>
      {/* FIRST SECTION - Hero + Small Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-5 py-5 max-w-[1300px] mx-auto border-b border-[#414141]">
        
        {/* First column - One large card */}
        {heroPost && (
          <div className="bg-white overflow-hidden">
            <img
              className="w-full h-[400px] object-cover"
              src={heroPost.image}
              alt={heroPost.heading}
            />

            <h1 className="text-[25px] font-black text-black p-[15px]">
              <Link 
                href={`/${heroPost.category}/${heroPost.slug}`}
                className="no-underline text-inherit relative hover:text-orange-500 transition-colors"
              >
                {heroPost.heading}
              </Link>
            </h1>

            <p className="text-sm text-black px-[15px] pb-[15px]">
              {heroPost.metaDescription}
            </p>

            <span className="text-xs text-black px-[15px] pb-[15px] block">
              By {heroPost.author?.name} | {heroPost.date}
            </span>
          </div>
        )}

        {/* Second column - 4 smaller cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {smallPosts.map((post, index) => (
            <div key={index} className="bg-white overflow-hidden">
              <img
                className="w-full h-[150px] object-cover"
                src={post.image}
                alt={post.heading}
              />

              <h2 className="text-lg font-bold text-black p-[15px]">
                <Link 
                  href={`/${post.category}/${post.slug}`}
                  className="no-underline text-inherit relative hover:text-orange-500 transition-colors"
                >
                  {post.heading}
                </Link>
              </h2>

              <span className="text-xs text-black px-[15px] pb-[15px] block">
                By {post.author?.name} | {post.date}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* SECOND SECTION - Four Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-[1300px] mx-auto pt-5 border-b border-[#414141] p-5">
        <div className="bg-white overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1509395176047-4a66953fd231"
            alt="Energy Consumption of Full Electric Vehicles"
            className="w-full h-[190px] object-cover"
          />
          <h3 className="text-lg font-bold leading-[1.3] px-[14px] pt-3 pb-[6px]">
            Energy Consumption of Full Electric Vehicles
          </h3>
          <div className="text-[13px] text-black px-[14px] pb-[14px]">
            <span>Business</span> · <span>4 years ago</span>
          </div>
        </div>

        <div className="bg-white overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144"
            alt="New Covid Variants"
            className="w-full h-[190px] object-cover"
          />
          <h3 className="text-lg font-bold leading-[1.3] px-[14px] pt-3 pb-[6px]">
            What You Need to Know about New Covid Variants
          </h3>
          <div className="text-[13px] text-black px-[14px] pb-[14px]">
            <span>Wellness</span> · <span>4 years ago</span>
          </div>
        </div>

        <div className="bg-white overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72"
            alt="Stock Market Opens"
            className="w-full h-[190px] object-cover"
          />
          <h3 className="text-lg font-bold leading-[1.3] px-[14px] pt-3 pb-[6px]">
            5 Things to Know before The Stock Market Opens Monday
          </h3>
          <div className="text-[13px] text-black px-[14px] pb-[14px]">
            <span>Economics</span> · <span>4 years ago</span>
          </div>
        </div>

        <div className="bg-white overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1621761191319-c6fb62004040"
            alt="Crypto Restricted Countries"
            className="w-full h-[190px] object-cover"
          />
          <h3 className="text-lg font-bold leading-[1.3] px-[14px] pt-3 pb-[6px]">
            These are The Countries Where Crypto is Restricted or Illegal
          </h3>
          <div className="text-[13px] text-black px-[14px] pb-[14px]">
            <span>Economics</span> · <span>4 years ago</span>
          </div>
        </div>
      </div>

      {/* THIRD SECTION - Three Column News */}
      <div className="grid grid-cols-1 lg:grid-cols-[2.2fr_1.2fr_1.2fr] gap-5 max-w-[1300px] mx-auto pt-5 border-b border-[#414141] pb-[10px] p-5">
        
        {/* COLUMN 1 – BIG FEATURED */}
        <div>
          <article>
            <img
              src="https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba"
              alt="National Day Rally"
              className="w-full h-[380px] object-cover"
            />
            <h2 className="text-[32px] font-extrabold">
              National Day Rally 2023: Sacrifice, Effort Needed to Preserve Harmony
            </h2>
            <p className="text-base text-black leading-[1.6]">
              Politics is the art of looking for trouble, finding it everywhere,
              diagnosing it incorrectly and applying the wrong remedies.
            </p>
            <span className="text-[13px] text-black">By Hugh Son · 4 years ago</span>
          </article>
        </div>

        {/* COLUMN 2 – ADS + TEXT NEWS */}
        <div className="flex flex-col gap-6">
          {/* ADVERTISEMENT */}
          <div>
            <span className="block text-xs text-[#1c1c1c] text-center mb-[6px]">
              -Advertisement-
            </span>
            <img
              src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b35-860x561.jpg"
              alt="Advertisement"
              className="w-full h-auto"
            />
          </div>

          {/* TEXT-ONLY NEWS */}
          <article className="bg-white p-[15px]">
            <h3 className="text-lg font-bold mb-[6px]">
              High Number of EV Chargers Did Not Jump Start The Market
            </h3>
            <p className="text-sm text-black">
              The real test is not whether you avoid failure...
            </p>
            <span className="text-[13px] text-black">Economics · 4 years ago</span>
          </article>

          <article className="bg-white p-[15px]">
            <h3 className="text-lg font-bold mb-[6px]">
              New Census Data Will Shake Up Alabama Politics
            </h3>
            <p className="text-sm text-black">
              Politics is the art of looking for trouble...
            </p>
            <span className="text-[13px] text-black">Politics · 4 years ago</span>
          </article>


        </div>

        {/* COLUMN 3 – IMAGE NEWS */}
        <div className="flex flex-col gap-6">
          <article>
            <img
              src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7"
              alt="Social Media Safety"
              className="w-full h-[200px] object-cover"
            />
            <h3 className="text-lg font-bold mt-[10px]">
              How to Mark Yourself 'Safe' on Social Media
            </h3>
            <span className="text-[13px] text-black">Technology · 4 years ago</span>
          </article>

          <article>
            <img
              src="https://images.unsplash.com/photo-1603988363607-e1e4a66962c6"
              alt="Election Ballot"
              className="w-full h-[200px] object-cover"
            />
            <h3 className="text-lg font-bold mt-[10px]">
              It's Final: 12 Names on The 2025 Ballot for President, 9 for VP
            </h3>
            <span className="text-[13px] text-black">Politics · 4 years ago</span>
          </article>
        </div>
      </div>

      {/* SPONSORED AD SECTION */}
      <div className="w-full bg-white py-[30px] pb-10 mx-auto text-center border-b border-[#414141] p-5 max-w-[1300px]">
        <span className="block text-sm text-black mb-3">– Sponsored –</span>

        <div className="max-w-[1100px] mx-auto">
          <img
            src="https://foxiz.io/business/wp-content/uploads/sites/6/2022/03/banner.jpg"
            alt="Sponsored Advertisement"
            className="w-full h-auto rounded-md object-cover"
          />
        </div>
      </div>

      {/* FOURTH SECTION - Image List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-x-[50px] lg:gap-y-10 max-w-[1300px] mx-auto pt-5 pb-[10px] p-5">
        
        {/* ITEM 1 */}
        <article className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-6 pb-[10px] border-b border-[#eee]">
          <div>
            <span className="text-[13px] font-bold uppercase inline-flex items-center gap-[6px] before:content-[''] before:w-2 before:h-2 before:bg-orange-500 before:rounded-full">
              Economics
            </span>
            <h3 className="text-xl font-extrabold leading-[1.35] my-3">
              <Link href="#" className="hover:text-orange-500 transition-colors">
                High Number Of EV Chargers Did Not Jump Start The Market
              </Link>
            </h3>
            <div className="text-[13px] text-black flex items-center gap-[10px]">
              By Hugh Son · 4 years ago
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="EV Chargers"
              className="w-full h-[150px] object-cover rounded"
            />
          </div>
        </article>

        {/* ITEM 2 */}
        <article className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-6 pb-[10px] border-b border-[#eee]">
          <div>
            <span className="text-[13px] font-bold uppercase inline-flex items-center gap-[6px] before:content-[''] before:w-2 before:h-2 before:bg-orange-500 before:rounded-full">
              Politics
            </span>
            <h3 className="text-xl font-extrabold leading-[1.35] my-3">
              <Link href="" className="hover:text-orange-500 transition-colors">
                High Number Of EV Chargers Did Not Jump Start The Market
              </Link>
            </h3>
            <div className="text-[13px] text-black flex items-center gap-[10px]">
              By Hugh Son · 4 years ago
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="Protest"
              className="w-full h-[150px] object-cover rounded"
            />
          </div>
        </article>

        {/* ITEM 3 */}
        <article className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-6 pb-[10px] border-b border-[#eee]">
          <div>
            <span className="text-[13px] font-bold uppercase inline-flex items-center gap-[6px] before:content-[''] before:w-2 before:h-2 before:bg-orange-500 before:rounded-full">
              Economics
            </span>
            <h3 className="text-xl font-extrabold leading-[1.35] my-3">
              <Link href="" className="hover:text-orange-500 transition-colors">
                High Number Of EV Chargers Did Not Jump Start The Market
              </Link>
            </h3>
            <div className="text-[13px] text-black flex items-center gap-[10px]">
              By Hugh Son · 4 years ago
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="Factory Emissions"
              className="w-full h-[150px] object-cover rounded"
            />
          </div>
        </article>

        {/* ITEM 4 */}
        <article className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-6 pb-[10px] border-b border-[#eee]">
          <div>
            <span className="text-[13px] font-bold uppercase inline-flex items-center gap-[6px] before:content-[''] before:w-2 before:h-2 before:bg-orange-500 before:rounded-full">
              Business
            </span>
            <h3 className="text-xl font-extrabold leading-[1.35] my-3">
              <Link href="" className="hover:text-orange-500 transition-colors">
                High Number Of EV Chargers Did Not Jump Start The Market
              </Link>
            </h3>
            <div className="text-[13px] text-black flex items-center gap-[10px]">
              By Hugh Son · 4 years ago
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="Office Workers"
              className="w-full h-[150px] object-cover rounded"
            />
          </div>
        </article>
      </div>

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
                className="w-full"
                alt="Garmin Venu"
              />
            </div>
          </div>

          {/* ROW 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] mb-[60px]">
            <div className="text-center">
              <img 
                src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b36-860x573.jpg" 
                className="w-full h-[300px]"
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
                className="w-full h-[300px]"
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
                  className="w-full"
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
        <div className="flex flex-col gap-5">
          <div className="bg-[#f0f0f0] p-5 text-center">
            <p>Advertisement</p>
            <img 
              src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b36-860x573.jpg" 
              alt="ad" 
              className="w-full h-auto"
            />
          </div>

          <div className="bg-white p-[15px]">
            <h3 className="text-lg font-bold">
              NASA Sets Coverage for Two Spacewalks Outside Space Station
            </h3>
            <p className="text-sm text-black">
              We are just an advanced breed of monkeys on a minor planet...
            </p>
          </div>

          <div className="bg-white p-[15px]">
            <h3 className="text-lg font-bold">
              How Science Failed to Unlock The Mysteries of the Human Brain
            </h3>
            <p className="text-sm text-black">
              Exploring the complexities of the human mind...
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
          </div>

          <div>
            <h3 className="text-lg font-bold mt-5">
              The Impact of COVID-19 on The Worldwide Air Transportation
            </h3>
            <p className="text-sm text-black">
              Exploring the effects of the pandemic on air travel...
            </p>
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