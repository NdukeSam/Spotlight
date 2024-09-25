// import React from 'react'
import reimburseImage from "@/assets/services/reimburse.png"

// type Props = {}

const ServiceReimbursement = () => {
  return (
    <div>
      <div className="mt-[7rem] py-10 px-4 md:px-12 lg:px-16">
        {/* Main Container */}
        <div className="flex flex-col md:flex-row items-start gap-8"> 

          {/* Image Section */}
          <div className="md:w-1/2">
            <h2 className="block md:hidden text-center text-2xl md:text-3xl font-bold mb-4">
              Service Reimbursement
            </h2>
            <img
              src={reimburseImage}
              alt="Case Management Dashboard"
              className="rounded-md object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="md:w-1/2">
            <h2 className="hidden md:block text-2xl md:text-3xl font-bold mb-4">
              Service Reimbursement
            </h2>
            <p className="text-gray-800 mb-4">
              At Spotlight, we believe in recognizing and supporting the incredible work done by non-profit organizations. With our Service Reimbursement program, the federal government reimburses non-profits for every successful service rendered to members of the community. By partnering with us, you can make a difference while ensuring your organization receives the financial support it deserves. Join us in driving positive change and creating a sustainable impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceReimbursement;
