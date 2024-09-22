import hero from "@/assets/about/kellyVid.mp4"


// import React from 'react'

// type Props = {}

const AboutHero = () => {
  return (
    <div>
        <div className="h-full w-full">
          <video className=" " loop autoPlay muted>
            <source src={hero} type="video/mp4"/>
          </video>
        </div>
    </div>
  )
}

export default AboutHero