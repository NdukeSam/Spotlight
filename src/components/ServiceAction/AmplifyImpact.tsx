import amplify from "@/assets/serviceaction/amplify.png"

const AmplifyImpact = () => {
    return (
      <div className="relative w-full h-[400px] md:h-[500px] bg-cover bg-center flex items-center justify-center text-center" 
        style={{
          backgroundImage: `url(${amplify})`,
        }}>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        
        {/* Text and Button */}
        <div className="relative z-10 text-white px-4 md:px-8">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Amplify Your Impact, <br className="hidden md:block"/>Refer Clients to Spotlight
          </h2>
          <button className="mt-4 bg-yellow-400 text-black px-6 py-3 rounded-full hover:bg-yellow-500 transition duration-300">
            Get Started
          </button>
        </div>
      </div>
    );
  };
  
  export default AmplifyImpact;
  