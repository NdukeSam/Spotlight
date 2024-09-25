// import React from 'react'
import Navbar from "../components/Navbar"
import CSRGoals from "../components/Opportunities/CSRGoals";
import JoinCommunity from "../components/Opportunities/JoinCommunity";
import Members from "../components/Opportunities/Members";
import ServeCommunity from "../components/Opportunities/ServeCommunity";
import Ambassador from "../components/Opportunities/Ambassador";
import BridgeGap from "../components/Landing/BridgeGap";
import Footer from "../components/Footer/Footer";

// type Props = {}

const Opportunities = () => {
  return (
    <div>
        <Navbar/>
        <CSRGoals/>
        <Members/>
        <ServeCommunity/>
        <JoinCommunity/>
        <Ambassador/>
        <BridgeGap/>
        <Footer/>
    </div>
  )
}

export default Opportunities;