
import nurseImage from "@/assets/serviceaction/strengthen.png"
const Strengthen = () => {
  return (
    <div>
                 <div className=" mt-[7rem] py-10 px-4 md:px-12 lg:px-16">
        {/* Main Container */}
        <div className="flex flex-col md:flex-row items-center gap-8"> 

            {/* Image Section */}
            <div className="md:w-1/2">
                <h2 className="block md:hidden text-center text-2xl md:text-3xl font-bold mb-4">
                Strengthen the Community by Connecting Clients to Our Network of Non-Profits    
                </h2>
                <img
                src={nurseImage}
                alt="Strengthen Community"
                className="rounded-md object-cover"
                />
          </div>
        {/* Text Section */}
          <div className="md:w-1/2 ">
                <h2 className="hidden md:block text-2xl md:text-3xl font-bold mb-4">
                Strengthen the Community by Connecting Clients to Our Network of Non-Profits
                </h2>
                <p className="text-gray-800 mb-4">
                Your voice is important to us and we believe it could help us reach a wider audience. <br/> We're looking for committed and enthusiastic individuals to join our community of brand ambassadors. As a Spotlight ambassador, you'll share our mission, participate in events, and help build social buzz around our brand. If you're passionate about Spotlight and eager to spread the word, apply to become an ambassador today.            
                </p>
           </div>
         </div>
        </div>
    </div>
  )
}

export default Strengthen