import { useNavigate } from "react-router";

const BridgeGap = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-gray-200 ">
      <div className="w-full bg-gray-200 px-4 mx-auto sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center mt-20 py-10">
          {/* Text Section */}
          <div className="mb-4 md:mb-0 font-grotesque">
            <h2 className="text-3xl mb-5 font-grotesque font-bold">We are bridging the gap!</h2>
            <p className="text-gray-500 font-bold">
              Ready to be a part of our dynamic community today?
            </p>
          </div>
    
          {/* Button Section */}
          <div>
            <button onClick={()=> navigate('/signup')} className="mt-4 md:mt-0 bg-black text-white px-6 py-3 rounded-3xl hover:bg-gray-800 transition-colors duration-300">
              Join Spotlight
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BridgeGap;
