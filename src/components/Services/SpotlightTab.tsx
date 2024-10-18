import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation from react-router-dom
import communityTabImage from "@/assets/services/social.png";
import socialTabImage from "@/assets/services/table.jpg";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";
import provide from "@/assets/services/tabs/provide.png";
import engage from "@/assets/services/tabs/engage.png";
import spread from "@/assets/services/tabs/spread.png";
import healthcare from "@/assets/services/tabs/healthcare.png";
import assist from "@/assets/services/tabs/financial_assistance.png";
import youth from "@/assets/services/tabs/youth_programs.png";
import legal from "@/assets/services/tabs/legal.png";
import career from "@/assets/services/tabs/career.png";

// Tabbed section data
const tabs = [
  { id: "socialImpact", label: "Social Impact Organizations" },
  { id: "communityMembers", label: "Community Members" },
];

// Content for the Social Impact tab
const impactContent = [
  {
    title: "Support and Empower",
    description:
      "Together, we empower social impact organizations by equipping them with vital tools and resources to amplify their mission. With our comprehensive solutions, you can confidently drive positive change and shape a better future for all.",
    image: socialTabImage,
  },
  {
    title: "Provide For Those In Need",
    description:
      "Your offered services uplift individuals seeking representation and bolstering your organizations’ reputation. Not only do we support those navigating their respective areas and environments, but we also provide a platform that naturally enhances SIO’s reputation and strives to better the relationship between people achieving more.",
    image: provide,
  },
  {
    title: "Engage with Community",
    description:
      "We empower Social Impact Organizations with direct messaging and a space to truly listen and understand the voices of those in need. Join us in creating meaningful connections and collaborating towards a brighter future.",
    image: engage,
  },
  {
    title: "Spread Awareness",
    description:
      "With Spotlight, share and express your work like never before. Not only can you showcase what you do, but we also amplify your impact by sharing your posts and stories across popular social media platforms like Facebook, Twitter, and LinkedIn.",
    image: spread,
  },
];

// Content for the Community Members tab
const communityContent = [
  {
    title: "Healthcare",
    description:
      "Gain access to healthcare including emergency services, counseling & therapy, and support groups through organizations with Spotlight.",
    image: healthcare,
  },
  {
    title: "Financial Assistance",
    description:
      "Get financial literacy and learn about any grants or scholarships available to you.",
    image: assist,
  },
  {
    title: "Youth Programs",
    description:
      "Learn about childcare programs or opportunities that positively engage and enrich young people.",
    image: youth,
  },
  {
    title: "Housing and Legal",
    description:
      "Get information about affordable housing, legal aid, and welfare.",
    image: legal,
  },
  {
    title: "Career Support",
    description:
      "Jumpstart or further your career with workforce training, career coaching, resume writing, and mock interviews.",
    image: career,
  },
];

const SpotlightTab = () => {
  const location = useLocation(); // Get the current route location
  const [activeTab, setActiveTab] = useState<string>("communityMembers"); // Default to 'communityMembers'
  const [openAccordion, setOpenAccordion] = useState<null | number>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Check the location to set the default tab on mount
  useEffect(() => {
    if (location.pathname.includes("ImpactService")) {
      setActiveTab("socialImpact"); // Set tab to 'socialImpact' if on 'impact-service' page
    } else if (location.pathname.includes("CommunityService")) {
      setActiveTab("communityMembers"); // Set tab to 'communityMembers' if on 'community-service' page
    }
  }, [location.pathname]); // Update the activeTab whenever the pathname changes

  const handleAccordionClick = (index: number, image: string | null) => {
    if (openAccordion === index) {
      setOpenAccordion(null);
      setSelectedImage(null); // Reset to default image when accordion is closed
    } else {
      setOpenAccordion(index);
      setSelectedImage(image); // Set the image corresponding to the accordion
    }
  };

  // Choose content and image based on the active tab
  const isSocialTab = activeTab === "socialImpact";
  const content = isSocialTab ? impactContent : communityContent;
  const defaultImageSrc = isSocialTab ? socialTabImage : communityTabImage;
  const headerText = isSocialTab
    ? "Make an Impact with Spotlight!"
    : "We've Got You Covered";
  const paragraphText = isSocialTab
    ? "Our platform opens doors to essential services and programs, empowering you to confidently strive towards a brighter future."
    : "As a community member, we provide everything you need to engage, grow, and impact your surroundings.";

  return (
    <div className="">
      {/* Tabs Navigation */}
      <div className="flex justify-center border-b border-gray-400 mx-8 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-4 py-2 text-lg font-semibold ${
              activeTab === tab.id
                ? "text-black border-b-4 border-yellow-400"
                : "text-gray-400"
            }`}
            onClick={() => {
              setActiveTab(tab.id);
              setOpenAccordion(null); // Reset accordion when tab changes
              setSelectedImage(null); // Reset selected image when tab changes
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="bg-gray-900 border-b py-10 md:py-16 px-4 md:px-8 sm:m-4 md:m-0 text-white">
        {/* Content Section */}
        <div className="mx-auto max-w-[85%] md:max-w-[70%] text-center px-2 md:px-4">
          <h3 className="text-xl md:text-4xl font-bold font-grotesque mb-4">{headerText}</h3>
          <p className="mb-6 text-gray-400">{paragraphText}</p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8 rounded-lg p-6 md:p-8">
          {/* Right side (image for mobile first) */}
          <div className="order-1 md:order-2 w-full md:w-1/2">
            <img
              src={selectedImage || defaultImageSrc}
              alt={isSocialTab ? "Impact image" : "Community image"}
              className="rounded-md object-cover"
            />
          </div>

          {/* Left side (accordion for mobile last) */}
          <div className="order-2 md:order-1 w-full md:w-1/2 mt-4 md:mt-0">
            {/* Accordion items */}
            {content.map((item, index) => (
              <div
                key={index}
                className="border border-gray-600 bg-gray-500 rounded-md mb-2"
              >
                <button
                  onClick={() => handleAccordionClick(index, item.image)}
                  className="w-full text-left px-4 py-3 flex justify-between items-center"
                >
                  {item.title}
                  <span className="text-gray-900 p-1 rounded-full bg-yellow-400">
                    {openAccordion === index ? <RxCaretUp /> : <RxCaretDown />}
                  </span>
                </button>
                {/* Accordion content */}
                {openAccordion === index && (
                  <div className="px-4 py-2 text-gray-300">{item.description}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotlightTab;
