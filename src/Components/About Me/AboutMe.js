import React, { useRef, useEffect } from "react";
import Typed from "typed.js";
import Carousel from "./Carousel";
import FrontOfCard from "./FrontofCard";
import BackOfCard from "./BackOfCard";
import BackgroundImage from "../Accets/BackgroundImage.jpeg";
const AboutMe = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Developer...", "Frelancer..."], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1000,
      loop: true,
    }); // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div id="background">
      <div className="xl:mt-40 sm0:mt-20 font-mono xl:mx-64 lg:ml-36 md:mx-20 sm2:mx-10 sm0:mx-5">
        <div className=" md:text-2xl sm2:text-base sm0:text-sm text-gray-200 font-semibold">
          Welcome To My Portfolio
        </div>
        <div className="xl:text-6xl xl_1:text-[55px] lg:text-5xl md:text-4xl sm2:text-2xl sm0:text-xl text-gray-200 font-semibold flex mt-4">
          Hello I'm Vivek Khairnar
        </div>
        <div className="md:text-5xl sm2:text-xl sm0:text-[18px] text-gray-200 font-semibold mt-4">
          I am a <span ref={el}></span>
        </div>
        <div className="md:text-xl sm2:text-base sm0:text-sm text-gray-200 font-semibold flex text-justify mt-5">
          Aspiring software engineer and Completed Post Graduation Diploma In
          Advanced Computing (PG-DAC) at CDAC Hyderabad. Adept at translating
          logical thinking into pratical solutions through coding and
          problem-solving. Passionate about clean coding practices, algorithms,
          and emerging technologies. Eager to contribute my skills in spring
          Boot, MySQL and React.Js to develop innovative sofware solutions.
          Quick learner, details-oriented, and excited to collaborate within a
          dynamic team environment.
        </div>
        {/* ICON Section  */}
        <div className="mt-7 flex items-center lg:justify-normal sm0:justify-center ">
          <span className="bg-gray-800 md:px-4 sm1_1:px-3 md:pt-[12px] md:pb-[1px] sm1_1-[10px] sm0:pt-[10px] sm0:pb-[2px] sm0:px-[10px] rounded-full bg-opacity-45 hover:bg-opacity-65 duration-500 text-gray-50 md:text-[35px] sm1_1:text-[25px] sm0:text-[20px] hover:text-teal-400">
            <a href="https://www.instagram.com/vivek_khairnar97/">
              {" "}
              <ion-icon
                className="flex justify-center items-center"
                name="logo-instagram"
              ></ion-icon>
            </a>
          </span>
          <span className="ml-8 bg-gray-800 md:px-4 sm1_1:px-3 md:pt-[12px] md:pb-[1px] sm1_1:pt-[10px] sm0:pt-[10px] sm0:pb-[1px] sm0:px-[10px] rounded-full bg-opacity-45 hover:bg-opacity-65 duration-500 text-gray-50 md:text-[35px] sm1_1:text-[25px] sm0:text-[20px] hover:text-teal-400">
            <a href="https://www.linkedin.com/in/vivek-khairnar-10449626b">
              <ion-icon
                className="flex justify-center items-center"
                name="logo-linkedin"
              ></ion-icon>
            </a>
          </span>
          <span className="ml-8 bg-gray-800 md:px-4 sm1_1:px-3  md:pt-[12px] md:pb-[1px] sm1_1:pt-[10px] sm0:pt-[10px] sm0:pb-[1px] sm0:px-[10px] rounded-full bg-opacity-45 hover:bg-opacity-65 duration-500 text-gray-50 md:text-[35px] sm1_1:text-[25px] sm0:text-[20px] hover:text-teal-400">
            <a href="https://github.com/KhairnarVivek">
              {" "}
              <ion-icon
                className="flex justify-center items-center"
                name="logo-github"
              ></ion-icon>
            </a>
          </span>
        </div>
        {/* Button section  */}
        <div className="mt-12 flex items-center lg:justify-normal sm0:justify-center">
          <div>
            <button className="sm0:text-[9px] md:text-xl border rounded-sm p-3 md:px-6 sm2:px-10 sm0:px-6 text-blue-900 text-opacity-80 hover:text-gray-50 bg-white hover:bg-opacity-0 text bg-opacity-70  md:mr-9 duration-500">
              Read More
            </button>
          </div>
          <div>
            <button className="sm0:text-[9px] md:text-xl border rounded-sm p-3 md:px-6 sm2:px-10 sm0:px-6 text-gray-50 hover:text-blue-900 hover:text-opacity-80 hover:bg-white hover:bg-opacity-70 hover:text-transparent sm1_1:mx-9 sm0:ml-5 duration-500">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
