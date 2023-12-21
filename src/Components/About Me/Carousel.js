// Carousel.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AutoSlidingCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Set the autoplay speed in milliseconds
  };

  return (
    <Slider {...settings}>
      <div>
        <img
          src="https://placekitten.com/800/400" // Replace with your image URL
          alt="Slide 1"
          className="w-full h-96"
        />
      </div>
      <div>
        <img
          src="https://placekitten.com/800/401" // Replace with your image URL
          alt="Slide 2"
          className="w-full h-96"
        />
      </div>
      <div>
        <img
          src="https://placekitten.com/800/402" // Replace with your image URL
          alt="Slide 3"
          className="w-full h-96"
        />
      </div>
      {/* Add more slides as needed */}
    </Slider>
  );
};

export default AutoSlidingCarousel;
