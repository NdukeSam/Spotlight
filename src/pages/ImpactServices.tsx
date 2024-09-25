// import React from 'react'
import Navbar from "../components/Navbar"
import ServicesHero from "../components/Services/ServicesHero"
import SpotlightTab from "../components/Services/SpotlightTab"
import UniteSection from "../components/Services/Community/UniteSection"
import CaseManagement from "../components/Services/Community/CaseMngt"
import Reports from "../components/Services/Community/Reports"
import TrustedOrganizations from "../components/Services/TrustedOrganizations"
import ServiceReimbursement from "../components/Services/ServiceReimbursement"
import BridgeGap from "../components/Landing/BridgeGap"
import Footer from "../components/Footer/Footer"


const ImpactServices = () => {
  return (
    <div>
        <Navbar/>
        <ServicesHero/>
        <SpotlightTab/>
        <UniteSection/>
        <CaseManagement/>
        <ServiceReimbursement/>
        <Reports/>
        <TrustedOrganizations/>
        <BridgeGap/>
        <Footer/>
    </div>
  )
}

export default ImpactServices;