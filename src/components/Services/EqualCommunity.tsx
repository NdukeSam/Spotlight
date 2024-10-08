// import React from 'react'
import { useNavigate } from 'react-router'
import ImageAndText from '../Constant/ImageAndText'
import communityPeople from "@/assets/services/communityPeople.png"

// type Props = {}

const EqualCommunity = () => {
  const navigate = useNavigate();
  return (
    <div>
        <ImageAndText
        image={communityPeople}
        altText="child and elder image"
        textTitle="Equal Opportunities"
        textBody="We believe in equal access to opportunities and resources for all, and our team is committed to making that a reality. Explore our services and opportunities section today and discover all that our web app has to offer. We're here to help you thrive!"
        buttonText="Join Our Community"
        onButtonClick={()=> navigate('/signup')}
        />
    </div>
  )
}

export default EqualCommunity;