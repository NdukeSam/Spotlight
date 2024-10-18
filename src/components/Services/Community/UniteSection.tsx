// import React from 'react'
import { useNavigate } from "react-router"
import ImageAndText from "../../Constant/ImageAndText"
import volunteers from "@/assets/services/volunteers.png"

const UniteSection = () => {
  const navigate = useNavigate();
  return (
    <div>
        <ImageAndText
        image={volunteers}
        altText="child and elder image"
        textTitle="Unite, Empower, And Solidify Impact with Spotlight"
        textBody="Spotlight connects community members to essential services and programs, fostering community ties and creating opportunities for personal growth and professional development. Empower your community with Spotlight."
        buttonText="Get Involved"
        onButtonClick={()=> navigate('/serviceaction')}
        />
    </div>
  )
}

export default UniteSection