import join from "@/assets/opportunities/join.png"

const JoinCommunity = () => {
  return (
    <div>
        <div className="mt-[7rem] py-10 px-4 md:px-12 lg:px-16 bg-[#FBD100]">
        {/* Main Container */}
        <div className="flex flex-col md:flex-row items-center gap-8"> 

          {/* Text Section */}
          <div className="md:w-1/2">
            <h2 className="hidden md:block text-2xl md:text-3xl font-bold mb-4">
            Join our Spotlight Community!
            </h2>
            <p className="text-gray-800 mb-4 leading-loose">
            Spotlight provides a community for networking, forming partnerships, and sharing opportunities among users. As a member, you can access exclusive content, new products, and connect with others who share your interests. The platform is dedicated to promoting a supportive and collaborative environment for everyone to thrive and achieve great things together.            
            </p>
          </div>

            {/* Image Section */}
          <div className="md:w-1/2">
            <h2 className="block md:hidden text-center text-2xl md:text-3xl font-bold mb-4">
            Join our Spotlight Community!
            </h2>
            <img
              src={join}
              alt="Join Spotlight Community"
              className="rounded-md object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default JoinCommunity