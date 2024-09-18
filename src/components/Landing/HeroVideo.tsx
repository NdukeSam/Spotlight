import React, { useState } from 'react';
import heroVid from "@/assets/landing/heroVid.mp4";

const HeroVideoSection = () => {

  return (
    <div className="md:mt-0 h-full sm:w-full aspect-square">

        <video className="w-full aspect-square object-fill" loop autoPlay muted>
          <source src={heroVid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      
    </div>
  );
};

export default HeroVideoSection;
