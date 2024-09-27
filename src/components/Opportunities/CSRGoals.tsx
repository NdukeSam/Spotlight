import goals from "@/assets/opportunities/goals.png"
import { useNavigate } from "react-router";

const CSRGoals = () => {
  const navigate = useNavigate();
    return (
      <div className="py-10 px-4 md:px-12 lg:px-16">
        {/* Main Container */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          
          {/* Image Section */}
          <div className="md:w-1/2">
          <h2 className=" block md:hidden text-center md:text-left text-2xl md:text-3xl font-bold mb-4">
              Meet Your Corporate Social Responsibility Goals
            </h2>
            <img
              src={goals}
              alt="Corporate Social Responsibility Goals"
              className="rounded-md object-cover w-full"
            />
          </div>
  
          {/* Text Section */}
          <div className="md:w-1/2 items-start">
            <h2 className="hidden md:block text-center md:text-left text-2xl md:text-3xl font-bold mb-4">
              Meet Your Corporate Social Responsibility Goals
            </h2>
            <p className="text-gray-800 text-lg leading-relaxed mb-4">
              By using Spotlight to serve members of the community, your organisation can enhance its reputation, attract and retain high-quality talent, meet stakeholder expectations, gain a competitive edge, and establish long-term sustainability.
            </p>
            <div className="flex justify-center md:justify-start">
              <button onClick={()=> navigate('/serviceaction')} className="bg-black text-white px-5 py-3 rounded-full shadow-lg hover:bg-gray-800 transition duration-300">
                Get Involved
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default CSRGoals;
  