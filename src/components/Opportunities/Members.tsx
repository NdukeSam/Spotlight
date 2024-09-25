import members from "@/assets/opportunities/members.png"

const Members = () => {
  return (
    <div>
        <div className="bg-[#25292C] mt-[7rem] py-10 px-4 md:px-12 lg:px-16">
        {/* Main Container */}
        <div className="flex flex-col md:flex-row items-center gap-8"> 

          {/* Text Section */}
          <div className="md:w-1/2 text-white">
            <h2 className="hidden md:block text-2xl md:text-3xl font-bold mb-4">
            Connecting Community Members to Opportunities
            </h2>
            <p className="text-gray-300 mb-4">
            Spotlight helps people access opportunities offered by Georgia's 42,000 nonprofit organizations, which are often hard to find and access. It eliminates the need to search for these opportunities through various channels and provides a centralized and curated way to discover them.
            </p>
          </div>

            {/* Image Section */}
            <div className="md:w-1/2">
            <h2 className="block md:hidden text-center text-2xl md:text-3xl font-bold mb-4">
            Connecting Community Members to Opportunities
            </h2>
            <img
              src={members}
              alt="Connecting members"
              className="rounded-md object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Members