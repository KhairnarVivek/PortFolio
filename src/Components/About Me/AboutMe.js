import React from 'react'
import Carousel from './Carousel'
import FrontOfCard from './FrontofCard';
import BackOfCard from './BackOfCard';
const AboutMe = () => {
  return (
    <div className="relative w-96 h-60 rounded-2xl text-white overflow-hidden cursor-pointer transition-all duration-700 card">
      <FrontOfCard />
      <BackOfCard />
    </div>
  );
}

export default AboutMe