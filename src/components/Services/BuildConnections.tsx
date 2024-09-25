import connectionImage from "@/assets/services/connection.png"

const BuildConnections = () => {
  return (
    <div>
        <div className="mt-[7rem] py-10 px-4 md:px-12 lg:px-16">
        {/* Main Container */}
        <div className="flex flex-col md:flex-row items-center gap-8"> 

          {/* Image Section */}
          <div className="md:w-1/2">
            <h2 className="block md:hidden text-center text-2xl md:text-3xl font-bold mb-4">
              Service Reimbursement
            </h2>
            <img
              src={connectionImage}
              alt="Case Management Dashboard"
              className="rounded-md object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="md:w-1/2">
            <h2 className="hidden md:block text-2xl md:text-3xl font-bold mb-4">
            Build Connections
            </h2>
            <p className="text-gray-800 mb-4">
            We believe that building professional connections is key to unlocking new opportunities and achieving your goals. That's why we've created a platform where community members can connect with like-minded professionals, expand their networks, and grow their careers.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BuildConnections;