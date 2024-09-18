
import support from "@/assets/landing/spotlightWork/support.png"

const howSpotlightWorks =[
    {
    title :  "Social Impact Organisations and Nonprofits",
    details: "Be a part of the solution, enhance program visibility and service offering participation by engaging directly with your targeted audience.",
    buttonText: "Support Our Cause",
    image: {support}
    },
    {
    title :  "Community Residents",
    details: "As a community resident you can discover new opportunities, build connections, enhance your skills and knowledge, and make a positive impact in your community.",
    buttonText: "Join Our Community"
    // image: ""
    }
    
];

type SpotlightProps = {
    title: string;
    details: string;
    buttonText: string;
    image: string;
    reverse?: boolean; // New prop to control the layout order
  };
  
  const SpotlightSection = ({ title, details, buttonText, image, reverse = false }: SpotlightProps) => {
    return (
      <section className="py-10">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold">How Spotlight Can Work For You</h2>
        </div>
        <div
          className={`mt-10 md:mt-[7rem] flex flex-col md:flex-row items-center md:items-start justify-center gap-6 md:gap-8 px-4 ${
            reverse ? "md:flex-row-reverse" : ""
          }`}
        >
            <div className="hover:scale-50">
                 <img
            src={image}
            alt={title}
            className="h-full md:h-auto max-w-xs md:max-w-md rounded-lg"
          />
            </div>
         
          <div className="text-left">
            <h3 className="text-lg md:text-xl font-bold">{title}</h3>
            <p className="mt-4 text-sm md:text-base">{details}</p>
            <button className="mt-4 bg-black text-white px-4 py-2 rounded-3xl">{buttonText}</button>
          </div>
        </div>
      </section>
    );
  };
  
  export default SpotlightSection;
  