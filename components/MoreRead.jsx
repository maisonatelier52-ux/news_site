import React from 'react'

const MoreRead = () => {
  return (
    <>
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
    </>
  )
}

export default MoreRead
