// import React from 'react'
import Navbar from "../components/Navbar"
import ServicesHero from "../components/Services/ServicesHero"
import SpotlightTab from "../components/Services/SpotlightTab"
import EqualCommunity from "../components/Services/EqualCommunity"
import Roadmap from "../components/Services/Roadmap"
import BuildConnections from "../components/Services/BuildConnections"
import BridgeGap from "../components/Landing/BridgeGap"
import Footer from "../components/Footer/Footer"


const CommunityServices = () => {
  return (
    <div>
        <Navbar/>
        <ServicesHero/>
        <SpotlightTab/>
        <EqualCommunity/>
        <Roadmap/>
        <BuildConnections/>
        <BridgeGap/>
        <Footer/>
    </div>
  )
}

export default CommunityServices;