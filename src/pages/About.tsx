// import React from 'react'
import Navbar from "../components/Navbar"
import AboutHero from "../components/About/AboutHero";
import Diversity from "../components/About/Diversity";
import UsersSection from "../components/About/UsersSection";
import ImpactSection from "../components/About/ImpactSection";
import FAQAccordion from "../components/About/FAQAccordion"
import BridgeGap from "../components/Landing/BridgeGap";
import Footer from "../components/Footer/Footer";




const About = () => {
  return (
    <div>
        <Navbar/>
        <AboutHero/>
        <Diversity/>
        <UsersSection/>
        <ImpactSection/>
        <FAQAccordion/>
        <BridgeGap/>
        <Footer/>
        
    </div>
    
  )
}

export default About;