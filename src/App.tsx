// import Navbar from "@/components/Navbar"
// import Navbar from "../src/components/Navbar"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/Landing";
import About from "./pages/About";
import Services from "./pages/Services";
import Opportunities from "./pages/Opportunities";


function App() {
  return (
    <Router>
      {/* <LandingPage /> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/opportunities" element={<Opportunities />} />
      </Routes>
    </Router>
  );
}

export default App;
