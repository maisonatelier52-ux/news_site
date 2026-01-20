import React from "react";
import "./globals.css"; // Ensure your global CSS is linked here.
import Link from "next/link";

const MainSection = () => {
  return (
    <main>
    <div className="article-body">
      <div className="main-section">
        {/* First column - One large card */}
        <div className="large-card">
          <img
            className="card-image"
            src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b35-860x561.jpg"
            alt="Inflation Menace"
          />
          <h2 className="card-title">
            <Link href="/category/demo">
              Inflation Menace vs Pandemic Recovery: CEO of the AEA Bank Guide</Link>
          </h2>
          <p className="card-description">
            Music expresses feeling and thought, without language...Music
            expresses feeling and thought, without language...Music expresses
            feeling and thought, without language...Music expresses feeling and
            thought, without language...Music expresses feeling and thought,
            without language...Music expresses feeling and thought, without
            language...Music expresses feeling and thought, without
            
          </p>
          <span className="card-meta">By Hugh Son | 4 years ago</span>
        </div>

        {/* Second column - 4 smaller cards arranged in 2x2 grid */}
        <div className="small-cards">
          <div className="small-card">
            <img
              className="card-image"
              src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b35-860x561.jpg"
              alt="Garmin Venu Fitness Tracker"
            />
            <h2 className="card-title">
              Garmin Venu: Solid Fitness Tracker with Smartwatch
            </h2>
            <p className="card-description">
              Explore the latest Garmin Venu, a solid fitness tracker...
            </p>
            <span className="card-meta">By Jane Doe | 2 years ago</span>
          </div>

          <div className="small-card">
            <img
              className="card-image"
              src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b35-860x561.jpg"
              alt="COVID-19 Impact"
            />
            <h2 className="card-title">
              The Impact of COVID-19 on The Worldwide Air Transportation
            </h2>
            <p className="card-description">
              A detailed study on how COVID-19 affected the air industry...
            </p>
            <span className="card-meta">By John Smith | 3 years ago</span>
          </div>

          <div className="small-card">
            <img
              className="card-image"
              src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b35-860x561.jpg"
              alt="Better Choice Company"
            />
            <h2 className="card-title">
              Better Choice Company to Ring New York Stock Exchange
            </h2>
            <p className="card-description">
              Better Choice Company's debut on the stock exchange...
            </p>
            <span className="card-meta">By Robert Brown | 1 year ago</span>
          </div>

          <div className="small-card">
            <img
              className="card-image"
              src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b35-860x561.jpg"
              alt="Life Insurance Needs"
            />
            <h2 className="card-title">
              Life insurance Needs Can Change Over Time
            </h2>
            <p className="card-description">
              Understand how your life insurance needs evolve over time...
            </p>
            <span className="card-meta">By Alan Grey | 1 year ago</span>
          </div>
        </div>
      </div>
      {/* { second section } */}
      <div className="four-card-section">
        <div className="four-card">
          <img
            src="https://images.unsplash.com/photo-1509395176047-4a66953fd231"
            alt="Energy Consumption of Full Electric Vehicles"
          />
          <h3>Energy Consumption of Full Electric Vehicles</h3>
          <div className="card-meta">
            <span>Business</span> · <span>4 years ago</span>
          </div>
        </div>

        <div className="four-card">
          <img
            src="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144"
            alt="New Covid Variants"
          />
          <h3>What You Need to Know about New Covid Variants</h3>
          <div className="card-meta">
            <span>Wellness</span> · <span>4 years ago</span>
          </div>
        </div>

        <div className="four-card">
          <img
            src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72"
            alt="Stock Market Opens"
          />
          <h3>5 Things to Know before The Stock Market Opens Monday</h3>
          <div className="card-meta">
            <span>Economics</span> · <span>4 years ago</span>
          </div>
        </div>

        {/* {third section} */}
        <div className="four-card">
          <img
            src="https://images.unsplash.com/photo-1621761191319-c6fb62004040"
            alt="Crypto Restricted Countries"
          />
          <h3>These are The Countries Where Crypto is Restricted or Illegal</h3>
          <div className="card-meta">
            <span>Economics</span> · <span>4 years ago</span>
          </div>
        </div>
      </div>

      <div className="three-column-news">
        {/* COLUMN 1 – BIG FEATURED */}
        <div className="col-left">
          <article className="big-news">
            <img
              src="https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba"
              alt="National Day Rally"
            />
            <h2>
              National Day Rally 2023: Sacrifice, Effort Needed to Preserve
              Harmony
            </h2>
            <p>
              Politics is the art of looking for trouble, finding it everywhere,
              diagnosing it incorrectly and applying the wrong remedies.
            </p>
            <span className="meta">By Hugh Son · 4 years ago</span>
          </article>
        </div>

        {/* COLUMN 2 – ADS + TEXT NEWS */}
        <div className="col-middle">
          {/* ADVERTISEMENT */}
          <div className="ad-box">
            <span className="ad-label">-Advertisement-</span>
            <img
              src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b35-860x561.jpg"
              alt="Advertisement"
            />
          </div>

          {/* TEXT-ONLY NEWS */}
          <article className="text-news">
            <h3>High Number of EV Chargers Did Not Jump Start The Market</h3>
            <p>The real test is not whether you avoid failure...</p>
            <span className="meta">Economics · 4 years ago</span>
          </article>

          <article className="text-news">
            <h3>New Census Data Will Shake Up Alabama Politics</h3>
            <p>Politics is the art of looking for trouble...</p>
            <span className="meta">Politics · 4 years ago</span>
          </article>
          <article className="text-news">
            <h3>New Census Data Will Shake Up Alabama Politics</h3>
            <p>Politics is the art of looking for trouble...</p>
            <span className="meta">Politics · 4 years ago</span>
          </article>
        </div>

        {/* COLUMN 3 – IMAGE NEWS */}
        <div className="col-right">
          <article className="image-news">
            <img
              src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7"
              alt="Social Media Safety"
            />
            <h3>How to Mark Yourself ‘Safe’ on Social Media</h3>
            <span className="meta">Technology · 4 years ago</span>
          </article>

          <article className="image-news">
            <img
              src="https://images.unsplash.com/photo-1603988363607-e1e4a66962c6"
              alt="Election Ballot"
            />
            <h3>
              It’s Final: 12 Names on The 2025 Ballot for President, 9 for VP
            </h3>
            <span className="meta">Politics · 4 years ago</span>
          </article>
        </div>
      </div>

      {/* SPONSORED AD SECTION */}
      <div className="sponsored-section">
        <span className="sponsored-label">– Sponsored –</span>

        <div className="sponsored-ad">
          <img
            src="https://foxiz.io/business/wp-content/uploads/sites/6/2022/03/banner.jpg"
            alt="Sponsored Advertisement"
          />
        </div>
      </div>

      {/* { fourth section} */}
      <div className="image-list-section">

  {/* ITEM 1 */}
  <article className="image-list-item">
    <div className="text-content">
      <span className="category economics">Economics</span>
      <h3><Link href="#">High Number Of EV Chargers Did Not Jump Start The Market</Link></h3>
      <div className="meta">
        By Hugh Son · 4 years ago
        {/* <span className="bookmark">🔖</span> */}
      </div>
    </div>

    <div className="image-content">
      <img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
        alt="EV Chargers"
      />
    </div>
  </article>

  {/* ITEM 2 */}
  <article className="image-list-item">
    <div className="text-content">
      <span className="category politics">Politics</span>
      <h3><Link href="">High Number Of EV Chargers Did Not Jump Start The Market</Link></h3>
      <div className="meta">
        By Hugh Son · 4 years ago
        {/* <span className="bookmark">🔖</span> */}
      </div>
    </div>

    <div className="image-content">
      <img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
        alt="Protest"
      />
    </div>
  </article>

  {/* ITEM 3 */}
  <article className="image-list-item">
    <div className="text-content">
      <span className="category economics">Economics</span>
      <h3><Link href="">High Number Of EV Chargers Did Not Jump Start The Market</Link></h3>
      <div className="meta">
        By Hugh Son · 4 years ago
        {/* <span className="bookmark">🔖</span> */}
      </div>
    </div>

    <div className="image-content">
      <img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
        alt="Factory Emissions"
      />
    </div>
  </article>

  {/* ITEM 4 */}
  <article className="image-list-item">
    <div className="text-content">
      <span className="category business">Business</span>
      <h3><Link href="">High Number Of EV Chargers Did Not Jump Start The Market</Link></h3>
      <div className="meta">
        By Hugh Son · 4 years ago
        {/* <span className="bookmark">🔖</span> */}
      </div>
    </div>

    <div className="image-content">
      <img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
        alt="Office Workers"
      />
    </div>
  </article>

</div>

{/* { fith section} */}

<div className="watch-section">
  <div className="container">

    {/* SECTION TITLE */}
    <div className="section-title">
      <span className="dot" />
      <h2>What to Watch</h2>
    </div>

    {/* ROW 1 */}
    <div className="row-featured">
      <div className="text-block">
        <span className="category">TECHNOLOGY</span>
        <h1>
          Garmin Venu: Solid<br />
          Fitness Tracker with<br />
          Smartwatch
        </h1>
        <p>
          Modern technology has become a total phenomenon for civilization,
          the defining force of a new social order in which efficiency...
        </p>
        <span className="meta">By Hugh Son · 4 years ago</span>
      </div>

      <div className="media-block">
        <img src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b36-860x573.jpg" />
        
      </div>
    </div>

    {/* ROW 2 */}
    <div className="row-double">
  <div className="small-media">
    <img src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b36-860x573.jpg" />
    <div className="content">
      <span className="category">PURSuits</span>
      <h3>10 Places You Can't Miss If It's Your First Time in European</h3>
      <span className="meta">By Hugh Son · 4 years ago</span>
    </div>
  </div>

  <div className="small-media">
    <img src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b36-860x573.jpg" />
    <div className="content">
      <span className="category">Technology</span>
      <h3>Explained: What are Smart Glasses and How Do It Work?</h3>
      <span className="meta">By Hugh Son · 4 years ago</span>
    </div>
  </div>
</div>



    {/* ROW 3 */}
    <div className="category-row">
      {[
        "Politics",
        "Technology",
        "Economics",
        "Wellness",
        "Business"
      ].map((cat) => (
        <div key={cat} className="category-card">
          <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d" />
          <h4>{cat}</h4>
          <div className="plus">+</div>
        </div>
      ))}
    </div>

  </div>
</div>

{/* {sixth section} */}
<div className="main-container">
      <div className="left-column">
        {/* Ad Section */}
        <div className="advertisement-section">
          <p>Advertisement</p>
          <img src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b36-860x573.jpg" alt="ad" />
        </div>

        {/* News Articles */}
        <div className="news-article">
          <h3>NASA Sets Coverage for Two Spacewalks Outside Space Station</h3>
          <p>We are just an advanced breed of monkeys on a minor planet...</p>
        </div>
        <div className="news-article">
          <h3>How Science Failed to Unlock The Mysteries of the Human Brain</h3>
          <p>Exploring the complexities of the human mind...</p>
        </div>
        
      </div>

      <div className="middle-column">
        {/* Large Featured Image & Article */}
        <div className="large-featured-image">
          <img
            src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b36-860x573.jpg"
            alt="Mars Module"
          />
          <h2>NASA is Looking for 4 People to Live Inside 3D-Printed Mars Module</h2>
          <p>The space agency is selecting candidates for a groundbreaking mission...</p>
        </div>

        {/* Smaller News Item */}
        <div className="small-article">
          <h3>The Impact of COVID-19 on The Worldwide Air Transportation</h3>
          <p>Exploring the effects of the pandemic on air travel...</p>
        </div>
      </div>

      <div className="right-column">
        {/* Subscription Section */}
        <div className="newsletter-subscription">
          <h3>Subscribe to Our Newsletter</h3>
          <input type="email" placeholder="Your email address" />
          <button>Sign Up</button>
        </div>

        {/* Social Media Links */}
        <div className="social-media-links">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com">Facebook</a>
            <a href="https://twitter.com">X</a>
            <a href="https://pinterest.com">Pinterest</a>
            <a href="https://instagram.com">Instagram</a>
            <a href="https://youtube.com">YouTube</a>
            <a href="https://telegram.com">Telegram</a>
          </div>
        </div>
      </div>
    </div>

<div className="three-column-container">
    <div className="custom-container">
  {/* Left Column */}
  <div className="left-custom-column">
    <div className="custom-image">
      <img src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b36-860x573.jpg" alt="Image" />
    </div>
    <div className="custom-title">Benefits of Yoga: 10 Ways Your Practice Can Improve Your Life</div>
    <div className="custom-description">We are just an advanced breed of monkeys on a minor planet...</div>
    <div className="custom-meta">
      By Hugh Son | 4 years ago
    </div>
  </div>

  {/* Separator Line */}
  <div className="custom-separator"></div>

  {/* Middle Column */}
  <div className="middle-custom-column">
    <div className="custom-image">
      <img src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b36-860x573.jpg" alt="Image" />
    </div>
    <div className="custom-title">Gout Drug Could Show Promise in Fighting COVID-19</div>
    <div className="custom-description">Exploring the complexities of the human mind...</div>
    <div className="custom-meta">
      By Hugh Son | 4 years ago
    </div>
  </div>

  {/* Separator Line */}
  <div className="custom-separator"></div>

  {/* Right Column */}
  <div className="right-custom-column">
    <div className="custom-image">
      <img src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b36-860x573.jpg" alt="Image" />
    </div>
    <div className="custom-title">How Sleeping Less Than 7 Hours a Night Can Lead to Weight Gain</div>
    <div className="custom-description">The ongoing environmental challenges...</div>
    <div className="custom-meta">
      By Hugh Son | 4 years ago
    </div>
  </div>
</div>
</div>

<div className="news-container">
  <div className="news-header">
    <div className="more-news">More News</div>
    <div className="all-stories">All Stories</div>
  </div>

  <div className="news-grid">
    {/* News Item 1 */}
    <div className="news-item">
      <img src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b36-860x573.jpg" alt="News Image" />
      <h3>One Day Noticed, Politicians Wary Resignation Timetable</h3>
      <p>4 years ago</p>
    </div>

    {/* News Item 2 */}
    <div className="news-item">
      <img src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b36-860x573.jpg" alt="News Image" />
      <h3>What is the Presidential Records Act, and How Did Thomas Violate It?</h3>
      <p>4 years ago</p>
    </div>

    {/* News Item 3 */}
    <div className="news-item">
      <img src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b36-860x573.jpg" alt="News Image" />
      <h3>Bad Credit Shouldn't Affect Health Insurance, Experts Say</h3>
      <p>4 years ago</p>
    </div>

    {/* News Item 4 */}
    <div className="news-item">
      <img src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b36-860x573.jpg" alt="News Image" />
      <h3>How to Protect Yourself While Using Social Media</h3>
      <p>4 years ago</p>
    </div>

    {/* News Item 5 */}
    <div className="news-item">
      <img src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b36-860x573.jpg" alt="News Image" />
      <h3>White House Reminds Lawmakers not to Travel to Afghanistan</h3>
      <p>4 years ago</p>
    </div>

    {/* News Item 6 */}
    <div className="news-item">
      <img src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b36-860x573.jpg" alt="News Image" />
      <h3>AE Shipping on a Roll Once Again with Soaring Bulk Shipping Rates</h3>
      <p>4 years ago</p>
    </div>

    {/* News Item 7 */}
    <div className="news-item">
      <img src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b36-860x573.jpg" alt="News Image" />
      <h3>The Car Industry's Chip Shortage is Far From Over</h3>
      <p>4 years ago</p>
    </div>

    {/* News Item 8 */}
    <div className="news-item">
      <img src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b36-860x573.jpg" alt="News Image" />
      <h3>Medicaid Expansion Improves Hypertension and Diabetes Control</h3>
      <p>4 years ago</p>
    </div>
  </div>
</div>



</div>




    </main>
  );
};

export default MainSection;
