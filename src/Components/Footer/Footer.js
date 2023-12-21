import React, {useRef, useEffect} from "react";
import Typed from "typed.js";
import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
import { ICONS } from "./Menus";

const Footer = () => {

const el = useRef(null);

useEffect(() => {
  const typed = new Typed(el.current, {
    strings: ["Welcome to Vivek's Portfolio"], // Strings to display
    // Speed settings, try diffrent values untill you get good results
    startDelay: 100,
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 1000,
    loop: true,
  });

  // Destropying
  return () => {
    typed.destroy();
  };
}, []);

  return (
    <footer className="bg-gray-900">
      <div className=" md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
        <h3
          className="xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl sm1:text-[17.5px] sm0:text-xs md:mb-0 mb-6 lg:leading-normal font-semibold md:w-5/6
         text-white"
        >
          <span className="text-teal-400 " ref={el}>
            
          </span>{" "}
          <span></span>
        </h3>
        <div>
          <input
            type="text"
            placeholder="Enter Your Phone no. "
            className="text-gray-800 md:w-full sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2 rounded px-2 
            focus:outline-none"
          />
          <button
            className="bg-teal-400 hover:bg-teal-500 duration-300 px-5 py-2.5 font-[Poppins] 
          rounded-md text-white md:min-w-full sm0:mt-2 md:mt-2 lg:mt-6 xl:mt-6  w-full"
          >
            Request Code
          </button>
        </div>
      </div>
      <ItemsContainer />
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2
       text-gray-400 text-sm pb-8"
      >
        <span>© 2023 Apply. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <SocialIcons Icons={ICONS} />
      </div>
    </footer>
  );
};

export default Footer;
