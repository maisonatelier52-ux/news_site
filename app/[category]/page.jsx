import React from 'react'

function page() {
  return (
    <div>
      <div className=" mb-1 relative  ">
  {/* Background with Radial Gradient Dots */}
  <div
    className="absolute inset-0 bg-gray-100 bg-opacity-20"
    style={{
      backgroundImage: "radial-gradient(#dcdcdc 1.2px, transparent 1.2px)",
      backgroundSize: "16px 16px",
    }}
  ></div>

  {/* Content Container */}
  <div className="relative z-10 px-6 py-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
    {/* Left: Title and Description */}
    <div className="lg:w-2/3">
      <h1 className="text-4xl font-semibold text-gray-900 mb-4">
        Politics
      </h1>
      <p className="text-lg text-gray-700">
        Politics is the art of looking for trouble, finding it everywhere, diagnosing it incorrectly and applying the wrong remedies.
      </p>
    </div>

    {/* Right: Image */}
    <div className="lg:w-1/3 mt-8 lg:mt-0">
      <img
        src="https://foxiz.io/business/wp-content/uploads/sites/6/2022/03/b4.jpg" // Replace with your actual image URL
        alt="Category Image"
        className="w-full h-auto object-cover  shadow-xl shadow-black/40" // Apply shadow
      />
    </div>
  
</div>
</div>
      <div className="max-w-7xl mx-auto px-4 py-8">
  <div className=" mb-10">
  {/* Section Header */}
  <div className="flex items-center justify-between ">
    <h2 className="text-xl font-semibold text-gray-900">You Might Also Like</h2>
  </div>
  <div className="w-full border-t-4 border-orange-500 mb-6"></div>

  {/* Articles Grid */}
  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

    {/* First Row - Large Items (Two Items with Equal Width) */}
    <div className="relative lg:col-span-2">
      <img
        src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b9-330x220.jpg" // Replace with your actual image URL
        alt="Article Image"
        className="w-full h-80 object-cover rounded-lg"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 p-4 flex flex-col justify-end">
        <h3 className="text-2xl font-semibold text-white mb-2">
          It’s Final: 12 Names on The 2025 Ballot for President, 9 for VP
        </h3>
        <p className="text-xs text-gray-300">By Hugh Son · 4 years ago</p>
      </div>
    </div>

    <div className="relative lg:col-span-2">
      <img
        src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b9-330x220.jpg" // Replace with your actual image URL
        alt="Article Image"
        className="w-full h-80 object-cover rounded-lg"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 p-4 flex flex-col justify-end">
        <h3 className="text-2xl font-semibold text-white mb-2">
          What’s Wrong With Asgard’s 2022 Audit? A Lot, Thor Say
        </h3>
        <p className="text-xs text-gray-300">By Hugh Son · 4 years ago</p>
      </div>
    </div>

    {/* Second Row - Regular Items */}
    <div className="relative">
      <img
        src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b9-330x220.jpg" // Replace with your actual image URL
        alt="Article Image"
        className="w-full h-64 object-cover rounded-lg"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 p-4 flex flex-col justify-end">
        <h3 className="text-lg font-semibold text-white mb-2">
          One Day Noticed, Politicians Wary Resignation Timetable
        </h3>
        <p className="text-xs text-gray-300">By Hugh Son · 4 years ago</p>
      </div>
    </div>

    <div className="relative">
      <img
        src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b9-330x220.jpg" // Replace with your actual image URL
        alt="Article Image"
        className="w-full h-64 object-cover rounded-lg"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 p-4 flex flex-col justify-end">
        <h3 className="text-lg font-semibold text-white mb-2">
          National Day Rally 2023: Sacrifice, Effort Needed to Preserve Harmony
        </h3>
        <p className="text-xs text-gray-300">By Hugh Son · 4 years ago</p>
      </div>
    </div>

    <div className="relative">
      <img
        src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b9-330x220.jpg" // Replace with your actual image URL
        alt="Article Image"
        className="w-full h-64 object-cover rounded-lg"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 p-4 flex flex-col justify-end">
        <h3 className="text-lg font-semibold text-white mb-2">
          National Day Rally 2023: Sacrifice, Effort Needed to Preserve Harmony
        </h3>
        <p className="text-xs text-gray-300">By Hugh Son · 4 years ago</p>
      </div>
    </div>
    <div className="relative">
      <img
        src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b9-330x220.jpg" // Replace with your actual image URL
        alt="Article Image"
        className="w-full h-64 object-cover rounded-lg"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 p-4 flex flex-col justify-end">
        <h3 className="text-lg font-semibold text-white mb-2">
          National Day Rally 2023: Sacrifice, Effort Needed to Preserve Harmony
        </h3>
        <p className="text-xs text-gray-300">By Hugh Son · 4 years ago</p>
      </div>
    </div>

  </div>
</div>

  </div>

  


    </div>
  )
}

export default page
