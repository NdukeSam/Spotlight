import { useNavigate } from 'react-router';
import logo from "@/assets/logo.png";
import google from "@/assets/google_play.png"
import apple from "@/assets/apple_logo.png"
import { IoArrowBackCircleSharp } from "react-icons/io5";




const SpotlightSignup = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-white pr-0 md:pr-4 ">
      <div className="flex flex-col bg-[#F1F2F3] items-center justify-center w-full md:w-1/2 h-screen"> {/* Added h-screen */}
        {/* Logo and App Store Links */}
        <div className="mb-10 flex flex-col items-center">
          <div className="absolute top-10 sm:left-10 md:left-20 cursor-pointer">
            <button className='text-2xl' onClick={()=>{navigate('/')} }>
            <IoArrowBackCircleSharp />
            </button>

          </div>
          <img src={logo} alt="Spotlight Logo" className="w-50 mb-20 " />
          <div className="flex flex-col md:flex-row sm:space-y-4 md:space-y-0 items-center space-x-4">
            <a href="https://play.google.com/store/apps/details?id=com.example">
              <img src={google} alt="Google Play Store" className="w-36" />
            </a>
            <a href="https://apps.apple.com/app/idxxxx">
              <img src={apple} alt="Apple Store" className="w-36" />
            </a>
          </div>
        </div>
        <h3 className="text-4xl text-center font-black font-grotesque px-7 py-4 text-gray-600">
          Coming Soon!
        </h3>
        <h3 className="text-2xl text-center font-bold px-7 text-gray-600">
          Our community Mobile App is coming soon, be the first to get notified and get benefits.
        </h3>
      </div>
      <div className="items-center w-full md:w-1/2 mt-10 md:mt-0 lg:px-10">
        {/* Form Section */}
        <div className="bg-white rounded-lg p-8"> {/* Removed shadow-xl */}
          <h3 className="text-base mb-4">
            Personal Details</h3>
          <form className="space-y-6">
            <input type="text" placeholder="Enter Full Name" className="input" required />
            <div className="flex gap-3">
              <input type="date" placeholder="Date of Birth" className="input" required />
              <select className="input">
                <option>Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            <input type="tel" placeholder="Phone Number" className="input" required />
            <input type="email" placeholder="Email Address" className="input" required />
            <input type="text" placeholder="City" className="input" required />
            <div className="flex justify-center"> {/* Center the button */}
              <button type="submit" className="px-5 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// const inputClassName = "w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent";

export default SpotlightSignup;
