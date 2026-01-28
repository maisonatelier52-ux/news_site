import React from 'react'

const RelatedNews = () => {
  return (
    <div className="text-black">
      <div className="mt-10 mb-10">

        {/* Section Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">
            You Might Also Like
          </h2>
        </div>

        <div className="w-full border-t-4 border-orange-500 mb-6"></div>

        {/* ================= DESKTOP VIEW ================= */}
        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Card 1 */}
          <div className="flex flex-col items-start">
            <img
              src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b9-330x220.jpg"
              alt="Article"
            />
            <p className="mt-2 text-sm font-semibold">
              Personal loan Interest Rates Rise, Still Much Lower than Same Time Last Year
            </p>
            <p className="text-xs">
              4 years ago
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-start">
            <img
              src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b9-330x220.jpg"
              alt="Article"
            />
            <p className="mt-2 text-sm font-semibold">
              How Science Failed to Unlock The Mysteries of the Human Brain
            </p>
            <p className="text-xs">
              4 years ago
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-start">
            <img
              src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b9-330x220.jpg"
              alt="Article"
            />
            <p className="mt-2 text-sm font-semibold">
              Black Holes Born With Magnetic Fields Quickly Shed Them
            </p>
            <p className="text-xs">
              4 years ago
            </p>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col items-start">
            <img
              src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b9-330x220.jpg"
              alt="Article"
            />
            <p className="mt-2 text-sm font-semibold">
              Treasury Signals Crypto Miners Won’t Face IRS Reporting Rule
            </p>
            <p className="text-xs">
              4 years ago
            </p>
          </div>
        </div>

        {/* ================= MOBILE VIEW ================= */}
        <div className="lg:hidden space-y-5">

          {/* Item 1 */}
          <div className="flex items-start gap-4 border-b pb-4">
            <div className="flex-1">
              <h3 className="text-sm font-semibold leading-snug">
                Personal loan Interest Rates Rise, Still Much Lower than Same Time Last Year
              </h3>
              <p className="text-xs mt-1">
                4 years ago
              </p>
            </div>
            <img
              src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b9-330x220.jpg"
              alt="Article"
              className="w-20 h-16 object-cover"
            />
          </div>

          {/* Item 2 */}
          <div className="flex items-start gap-4 border-b pb-4">
            <div className="flex-1">
              <h3 className="text-sm font-semibold leading-snug">
                How Science Failed to Unlock The Mysteries of the Human Brain
              </h3>
              <p className="text-xs mt-1">
                4 years ago
              </p>
            </div>
            <img
              src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b9-330x220.jpg"
              alt="Article"
              className="w-20 h-16 object-cover"
            />
          </div>

          {/* Item 3 */}
          <div className="flex items-start gap-4 border-b pb-4">
            <div className="flex-1">
              <h3 className="text-sm font-semibold leading-snug">
                Black Holes Born With Magnetic Fields Quickly Shed Them
              </h3>
              <p className="text-xs mt-1">
                4 years ago
              </p>
            </div>
            <img
              src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b9-330x220.jpg"
              alt="Article"
              className="w-20 h-16 object-cover"
            />
          </div>

          {/* Item 4 */}
          <div className="flex items-start gap-4">
            <div className="flex-1">
              <h3 className="text-sm font-semibold leading-snug">
                Treasury Signals Crypto Miners Won’t Face IRS Reporting Rule
              </h3>
              <p className="text-xs mt-1">
                4 years ago
              </p>
            </div>
            <img
              src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b9-330x220.jpg"
              alt="Article"
              className="w-20 h-16 object-cover"
            />
          </div>

        </div>
      </div>
    </div>
  )
}

export default RelatedNews
