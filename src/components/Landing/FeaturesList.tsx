import { useState } from "react";
import feat1 from "@/assets/landing/features/feat-1.png";
import feat2 from "@/assets/landing/features/feat-2.png";
import feat3 from "@/assets/landing/features/feat-3.png";
import feat4 from "@/assets/landing/features/feat-4.png";
import feat5 from "@/assets/landing/features/feat-5.png";
import feat6 from "@/assets/landing/features/feat-6.png";

const features = [
  {
    title: "KPI & Data Management",
    icon: feat1,
    description: "Capture important data points related to service-based offerings measuring your organization’s community impact."
  },
  {
    title: "Case Management",
    icon: feat2,
    description: "Leverage a structured case management tool for tracking services offered to program participants."
  },
  {
    title: "Community Networking",
    icon: feat3,
    description: "Engage with other social good organizations to increase impact through collaboration"
  },
  {
    title: "Program Visibility",
    icon: feat4,
    description: "Market directly to a targeted audience within the community"
  },
  {
    title: "Service Reimbursement",
    icon: feat5,
    description: "Get rewarded for every successful service rendered through Spotlight as a Social good organization"
  },
  {
    title: "Equity and Diversity",
    icon: feat6,
    description: "Promote equity and diversity through delivery of services that support & equip underserved communities"
  },
];

const FeatureCard = ({ feature }: { feature: any }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`relative w-40 mt-10 h-40 md:w-48 md:h-48 flex items-center justify-center text-center bg-gray-700 rounded-full transform transition-transform duration-500 cursor-pointer ${
        flipped ? "rotate-y-180" : ""
      }`}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      {/* Front Side - Circle with Icon */}
      <div
        className={`absolute w-full h-full flex flex-col items-center justify-center text-white transition-opacity duration-500 ${
          flipped ? "opacity-0" : "opacity-100"
        }`}
      >
        <img src={feature.icon} alt={feature.title} className="h-12 w-12 mb-2" />
        <p className="text-sm p-2">{feature.title}</p>
      </div>

      {/* Back Side - Flip to Show Description */}
      <div
        className={`absolute w-full h-full flex flex-col items-center justify-center text-white transition-opacity duration-500 ${
          flipped ? "opacity-100" : "opacity-0"
        } bg-yellow-500 rounded-lg transition-all p-4`}
      >
        <p className="text-sm">{feature.description}</p>
      </div>
    </div>
  );
};

const FeatureList = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold">Feature List & Benefits</h2>
      </div>
      {/* Updated grid layout with padding and alignment */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-10 lg:px-20 justify-items-center">
        {features.map((feature, index) => (
          <FeatureCard key={index} feature={feature} />
        ))}
      </div>
    </section>
  );
};

export default FeatureList;