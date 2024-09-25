// import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeroTextSection = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center md:text-left w-full px-10 py-6 md:py-4 ">
      <h1 className="text-[38px] md:text-[40px] sm:text-center md:text-left py-4 leading-[45px] md:leading-[80px] font-bold">
        Join our community and gain access to countless opportunities offered by Social Impact Organizations, at no cost.
      </h1>
      <div className="my-4 flex flex-col md:flex-row justify-center md:justify-start gap-12">
        <button onClick={()=> navigate('/spotlightsignup')} className="bg-yellow-500 text-black px-4 py-2 rounded-3xl">
          Start Your Journey
        </button>
        <button
          className="border-2 border-white text-white px-4 py-2 rounded-3xl"
          onClick={() => navigate('/about')}
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default HeroTextSection;
