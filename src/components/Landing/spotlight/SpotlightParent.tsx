import SpotlightSection from "./SpolightSection";
import support from "@/assets/landing/spotlightWork/support.png";
import community from "@/assets/landing/spotlightWork/community.png";

// Example data for two spotlight sections
const spotlightData = [
  {
    title: "Social Impact Organisations and Nonprofits",
    details:
      "Be a part of the solution, enhance program visibility and service offering participation by engaging directly with your targeted audience.",
    buttonText: "Support Our Cause",
    image: support,
    reverse: false, // Default layout (image on the left, text on the right)
  },
  {
    title: "Community Residents",
    details:
      "As a community resident you can discover new opportunities, build connections, enhance your skills and knowledge, and make a positive impact in your community.",
    buttonText: "Join Our Community",
    image: community,
    reverse: true, // Reverse layout (image on the right, text on the left)
  },
];

const SpotlightParentSection = () => {
  return (
    <section className="py-10">
      {/* h2 heading only appears once, above the first section */}
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold">How Spotlight Can Work For You</h2>
      </div>

      {/* Render both spotlight sections */}
      {spotlightData.map((spotlight, index) => (
        <SpotlightSection
          key={index}
          title={spotlight.title}
          details={spotlight.details}
          buttonText={spotlight.buttonText}
          image={spotlight.image}
          reverse={spotlight.reverse}
        />
      ))}
    </section>
  );
};

export default SpotlightParentSection;
