// import React from 'react'
import empowerClient from "@/assets/landing/empower/empowerClient.png"
import { useNavigate } from "react-router";

// type Props = {}

const EmpowerClient = () => {
  const navigate = useNavigate(); 

  return (
    <div
    className={`mt-10 md:mt-[7rem] flex flex-col md:flex-row items-center md:items-start justify-center gap-6 md:gap-8 px-4 
    }`}
  >
    {/* Image div */}
    <div className="relative max-w-xs md:max-w-md overflow-hidden">
      <img
        src={empowerClient}
        alt="Doctor field"
        className="h-full md:h-auto w-full rounded-lg transform transition-transform duration-500 ease-in-out hover:scale-105"
      />
    </div>

    {/* Text container with max-width for better control on larger screens */}
    <div className="text-left max-w-lg">
      <h3 className="text-lg md:text-xl font-bold">Empower Your Clients with Spotlight's Service Referrals</h3>
      <p className="mt-4 text-sm md:text-base">Are you a social case manager or an organization dedicated to helping individuals in need? By referring your clients to Spotlight, you can unlock a world of opportunities for them. Our platform connects underserved communities in Atlanta to a wide range of services and opportunities offered by non-profit organizations. Join us in making a lasting impact and empowering those who need it most.</p>
      <button onClick={()=> {navigate('/ServiceAction')}} className="mt-4 bg-black text-white px-4 py-2 md:mt-[3.5rem] rounded-3xl hover:bg-gray-800 transition-colors duration-300">
        Refer A Candidate
      </button>
    </div>
  </div>
  )
}

export default EmpowerClient;