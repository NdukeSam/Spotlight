// import Navbar from "@/components/Navbar"
// import Navbar from "../src/components/Navbar"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/Landing";
import About from "./pages/About";
import Services from "./pages/ImpactServices";
import Opportunities from "./pages/Opportunities";
import ServiceAction from "./pages/ServiceAction";
import SpotlightSignup from "./pages/SpotlightSignup";
import FAQ from "./pages/FAQ";
import ContactUs from "./pages/ContactUs";
import CommunityServices from "./pages/CommunityServices";
import ImpactServices from "./pages/ImpactServices";


function App() {
  return (
    <Router>
      {/* <LandingPage /> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/opportunities" element={<Opportunities />} />
        <Route path="/serviceaction" element={<ServiceAction />} />
        <Route path="/signup" element={<SpotlightSignup />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/CommunityService" element={<CommunityServices />} />
        <Route path="/ImpactService" element={<ImpactServices />} />

       
      </Routes>
    </Router>
  );
}

export default App;
