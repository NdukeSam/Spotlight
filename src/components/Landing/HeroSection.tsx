import React from 'react';
import HeroTextSection from './HeroText';
import HeroVideoSection from './HeroVideo';

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row h-full h-vh items-center justify-between bg-gray-800 text-white">
      <HeroTextSection />
      <HeroVideoSection />
    </section>
  );
};

export default HeroSection;
