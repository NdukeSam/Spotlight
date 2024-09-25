// import React from 'react'

import Navbar from "../components/Navbar";
import AmplifyImpact from "../components/ServiceAction/AmplifyImpact";
import ReferralForm from "../components/ServiceAction/ReferralForm";
import OpportunitiesForClients from "../components/ServiceAction/Unlock";
import BridgeGap from "../components/Landing/BridgeGap";
import Footer from "../components/Footer/Footer";
import Strengthen from "../components/ServiceAction/Strengthen";
import PresidentQuote from "../components/ServiceAction/PresidentQuote";


// type Props = {}

const ServiceAction = () => {
  return (
    <div>
        <Navbar/>
        <AmplifyImpact/>
        <Strengthen/>
        <OpportunitiesForClients/>
        <PresidentQuote/>
        <ReferralForm/>
        <BridgeGap/>
        <Footer/>
    </div>
  )
}

export default ServiceAction