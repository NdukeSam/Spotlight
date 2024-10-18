// import React from 'react'

// type Props = {}
import reportsImage from "@/assets/services/reports.png"



const Reports = () => {
  return (
    <div>
        <div className="bg-[#FBD100] text-[#3A4145] mt-[7rem] mb-[12rem] py-10 px-4 md:px-12 lg:px-16">
      {/* Main Container */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-8">
        {/* Text Section */}
        <div className="md:w-1/2">
          <h2 className="hidden md:block text-2xl md:text-3xl font-bold mb-4">
          Social Impact Reports
          </h2>
          <p className="mb-4">
          With Spotlight's case management tool, track services offered to program participants with ease. 
          Convert daily leads without hassle, thanks to the user-friendly UI and data-oriented reports. 
          Stay organized and in control!
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2">
        <h2 className="block md:hidden text-2xl md:text-3xl font-bold mb-4">
          Social Impact Reports
          </h2>
          <img
            src={reportsImage}
            alt="Social Import Report"
            className="rounded-md object-cover"
          />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Reports