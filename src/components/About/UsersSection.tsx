import { useState } from "react";
import socialImg from "@/assets/about/international-philanthropy-day 1.png";
import communityImg from "@/assets/about/person-studying-online 2.png";

const UsersSection = () => {
  // Separate hover states for each card
  const [isHoveredFirst, setIsHoveredFirst] = useState(false);
  const [isHoveredSecond, setIsHoveredSecond] = useState(false);

  return (
    <section className="w-full md:mt-[4rem] py-10 md:py-16 lg:py-20 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-12">Our Users</h2>
      </div>
      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        {/* First Image and hover effect */}
        <div
          className="relative group"
          onMouseEnter={() => setIsHoveredFirst(true)}
          onMouseLeave={() => setIsHoveredFirst(false)}
        >
          {isHoveredFirst ? (
            <div className="w-full h-full bg-yellow-400 flex justify-center items-center p-6 rounded-lg shadow-md">
              <p className="text-gray-900 text-lg text-center">
              As a Social Impact Organization, you can leverage Spotlight to connect with people in need in your community who are ready and excited to work with you.
              </p>
            </div>
          ) : (
            <div className="flex flex-col align-middle justify-center shadow-md">
              <img
                src={socialImg}
                alt="Social Impact Organizations"
                className="object-contain"
              />
              <p className="mb-4 text-center font-semibold text-lg">
                Social Impact Organizations
              </p>
            </div>
          )}
        </div>

        {/* Second Image and hover effect */}
        <div
          className="relative group"
          onMouseEnter={() => setIsHoveredSecond(true)}
          onMouseLeave={() => setIsHoveredSecond(false)}
        >
          {isHoveredSecond ? (
            <div className="w-full h-full bg-yellow-400 flex justify-center items-center p-6 rounded-lg shadow-md">
              <p className="text-gray-900 text-lg text-center">
                Part of an underprivileged community in Atlanta, Georgia, facing
                various challenges and barriers such as unemployment, lack of access
                to resources and opportunities, and limited social support.
              </p>
            </div>
          ) : (
            <div className="flex flex-col align-middle justify-center shadow-md">
              <img
                src={communityImg}
                alt="Community Members"
                className="object-contain"
              />
              <p className="mb-4 text-center font-semibold text-lg">
                Community Members
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default UsersSection;
