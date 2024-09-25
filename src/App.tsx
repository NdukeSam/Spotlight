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


function App() {
  return (
    <Router>
      {/* <LandingPage /> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/opportunities" element={<Opportunities />} />
        <Route path="/serviceaction" element={<ServiceAction />} />
        <Route path="/spotlightsignup" element={<SpotlightSignup />} />
        <Route path="/faq" element={<FAQ />} />

       
      </Routes>
    </Router>
  );
}

export default App;
