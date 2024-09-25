import { useState } from "react";
import socialTabImage from "@/assets/services/social.png";
import communityTabImage from "@/assets/services/social.png";
import { RxCaretDown } from "react-icons/rx";
import { RxCaretUp } from "react-icons/rx";

// Tabbed section data
const tabs = [
  { id: "socialImpact", label: "Social Impact Organizations" },
  { id: "communityMembers", label: "Community Members" },
];

// Content for the Social Impact tab
const impactContent = [
  { title: "Support and Empower", description: "We offer various programs to assist communities in supporting and empowering individuals." },
  { title: "Provide For Those In Need", description: "Join hands in providing essential supplies and services to those in need." },
  { title: "Engage with Community", description: "Build deeper relationships with your community and make an impact together." },
  { title: "Spread Awareness", description: "Help raise awareness about pressing issues and create meaningful change." },
];

// Content for the Community Members tab
const communityContent = [
  { title: "Healthcare", description: "Join the community to make a real impact where it matters most." },
  { title: "Financial Assistance", description: "Join the community to make a real impact where it matters most." },
  { title: "Youth Programs", description: "Find volunteer opportunities that match your passions and availability." },
  { title: "Housing and Legal", description: "Find volunteer opportunities that match your passions and availability." },
  { title: "Career Support", description: "Engage with local events, initiatives, and causes to help your community." },
  { title: "Resources", description: "Access shared resources that support both individuals and groups." },
];

const SpotlightTab = () => {
  const [activeTab, setActiveTab] = useState("socialImpact");
  const [openAccordion, setOpenAccordion] = useState<null | number>(null);

  const handleAccordionClick = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  // Choose content and image based on the active tab
  const isSocialTab = activeTab === "socialImpact";
  const content = isSocialTab ? impactContent : communityContent;
  const imageSrc = isSocialTab ? socialTabImage : communityTabImage;
  const headerText = isSocialTab
    ? "Make an Impact with Spotlight!"
    : "We've Got You Covered";
  const paragraphText = isSocialTab
    ? "Our platform opens doors to essential services and programs, empowering you to confidently stride towards a brighter future. With our comprehensive solutions, rest assured that we're here to support you on your journey to a better tomorrow."
    : "As a community member, we provide everything you need to engage, grow, and impact your surroundings. Whether you're looking to volunteer, connect, or contribute, we've got you covered every step of the way.";

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
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>


        <div className="bg-gray-900 border-b py-10 md:py-16 px-4 md:px-8 sm:m-4 md:m-0  text-white">
      {/* Content Section */}

                {/* Header */}
        <div className=" mx-auto max-w-[85%] md:max-w-[70%] text-center px-2 md:px-4 ">
          <h3 className="text-xl md:text-4xl font-bold font-grotesque mb-4">{headerText}</h3>
          <p className="mb-6 text-gray-400">{paragraphText}</p>
        </div>

      <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8  rounded-lg p-6 md:p-8">


        {/* Right side (image for mobile first) */}
        <div className="order-1 md:order-2 w-full md:w-1/2">
          <img
            src={imageSrc}
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
                onClick={() => handleAccordionClick(index)}
                className="w-full text-left px-4 py-3 flex justify-between items-center"
              >
                {item.title}
                <span className="text-gray-900 p-1 rounded-full bg-yellow-400">
                  {openAccordion === index ? <RxCaretUp /> : <RxCaretDown />} 
                </span>
              </button>
              {/* Accordion content */}
              {openAccordion === index && (
                <div className="px-4 py-2 text-gray-300">
                  {item.description}
                </div>
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
