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
    <Slider className="mb-20"  {...settings}>
      <div>
        <img
          src="https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your image URL
          alt="Slide 1"
          className="w-full h-[600px]"
        />
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1585089858717-f4378c2031d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8fHw%3D" // Replace with your image URL
          alt="Slide 2"
          className="w-full h-[600px]"
        />
      </div>
      <div>
        <img
          src="https://wallpaperaccess.com/full/1124103.jpg" // Replace with your image URL
          alt="Slide 3"
          className="w-full h-[600px]"
        />
      </div>
      {/* Add more slides as needed */}
    </Slider>
  );
};

export default AutoSlidingCarousel;
