// import React from 'react'

import caseImage from "@/assets/services/case.png"

const CaseManagement = () => {
  return (
    <div className="bg-gray-900 text-white mt-[7rem] py-10 px-4 md:px-12 lg:px-16">
      {/* Main Container */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-8">
        {/* Text Section */}
        <div className="md:w-1/2">
          <h2 className="hidden md:block text-2xl md:text-3xl font-bold mb-4">
            Case Management
          </h2>
          <p className="text-gray-400 mb-4">
            Data management is complex but Spotlight seamlessly allows you to:
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Track services you offer to program participants easily.</li>
            <li>Convert daily leads without hassle.</li>
            <li>Manage data-oriented reports and stay in control.</li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2">
        <h2 className=" block md:hidden text-center text-2xl md:text-3xl font-bold mb-4">
            Case Management
          </h2>
          <img
            src={caseImage}
            alt="Case Management Dashboard"
            className="rounded-md object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default CaseManagement;
