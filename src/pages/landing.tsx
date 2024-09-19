import Navbar from "../components/Navbar";
// import NavBar from "../components/Navbar/test";
// import HeroSection from "@pages/HeroSection";

import HeroSection from "../components/Landing/HeroSection";
import TrustedBySection from "../components/Landing/TrustedBy";
import SpotlightParent from "../components/Landing/spotlight/SpotlightParent";
import FeatureList from "../components/Landing/FeaturesList";
import EmpowerClient from "../components/Landing/EmpowerClient";
import BridgeGap from "../components/Landing/BridgeGap";

import Footer from "../components/Footer/Footer";



const LandingPage = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection />
      <TrustedBySection />
      <SpotlightParent/>
      <FeatureList/>
      <EmpowerClient/>
      <BridgeGap/>
      <Footer/>
      
    </div>
  );
};

export default LandingPage;
