import Navbar from "../components/Navbar";
// import NavBar from "../components/Navbar/test";
// import HeroSection from "@pages/HeroSection";
import support from "@/assets/landing/spotlightWork/support.png"
import community from "@/assets/landing/spotlightWork/community.png"

import HeroSection from "../components/Landing/HeroSection";
import TrustedBySection from "../components/Landing/TrustedBy";
import SpotlightSection from "../components/Landing/SpolightSection";

const LandingPage = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection />
      <TrustedBySection />
      <SpotlightSection
        title="Social Impact Organisations and Nonprofits"
        details="Be a part of the solution, enhance program visibility and service offering participation by engaging directly with your targeted audience."
        buttonText="Support Our Cause"
        image={support}
      />

      <SpotlightSection
        title="Community Residents"
        details="As a community resident you can discover new opportunities, build connections, enhance your skills and knowledge, and make a positive impact in your community."
        buttonText="Join Our Community"
        image={community}
        reverse
      />
    </div>
  );
};

export default LandingPage;
