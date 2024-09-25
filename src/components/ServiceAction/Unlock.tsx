import unlock from "@/assets/serviceaction/icons/unlock.png"
import target from "@/assets/serviceaction/icons/target.png"
import referral from "@/assets/serviceaction/icons/referral.png"
import transfer from "@/assets/serviceaction/icons/transfer.png"


const OpportunitiesForClients = () => {
    const cards = [
      {
        title: "Unlock Opportunities",
        description: "Gain access to a wide range of non-profit organizations and their services available on Spotlight. From social services and healthcare to education and employment, our platform brings together a comprehensive range of resources.",
        icon: unlock, // You can replace this with actual icons
      },
      {
        title: "Simplified Referrals",
        description: "Our streamlined referral system makes it easy for you to refer clients to Spotlight. Simply provide us with the necessary details, and we’ll ensure that individuals are connected to the most suitable services.",
        icon: target, // You can replace this with actual icons
      },
      {
        title: "Collaborative Impact",
        description: "By referring clients to Spotlight, you become an integral part of a collaborative ecosystem, working together to uplift and empower underserved communities. Your referrals make a difference in people's lives.",
        icon: referral, // You can replace this with actual icons
      },
      {
        title: "Change Catalyst",
        description: "Join Spotlight today and become a catalyst for change. Together, we can create a brighter future for Atlanta's underserved communities.",
        icon: transfer, // You can replace this with actual icons
      },
    ];
  
    return (
      <div className="bg-[#F9FAFA] mt-[7rem] px-4 py-10 flex flex-col md:flex-row md:px-8 lg:px-16">
        {/* Heading */}
        <h2  className=" w-[40%] text-2xl md:text-3xl lg:text-4xl font-bold text-left mb-8 pr-4">
          Unlock a World of Opportunities for Your Clients
        </h2>
  
        {/* Grid of Cards */}
        <div className=" w-[60%] grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="p-6 bg-gray-100 rounded-lg shadow-lg flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="ml-4 text-xl font-bold">{card.title}</h3>
                <span className="text-4xl"> <img src={card.icon} alt={card.icon} /> </span>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default OpportunitiesForClients;
  