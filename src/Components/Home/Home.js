import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import profilePhoto from "../Accets/Latest_Photo.jpg";
import { EducationTable } from "./EducationTable";
import Banner from "./Banner";
const Home = () => {

  const el = useRef(null);

   useEffect(() => {
     const typed = new Typed(el.current, {
       strings: [
         "Welcome to Vivek's Portfolio",], // Strings to display
       // Speed settings, try diffrent values untill you get good results
       startDelay: 100,
       typeSpeed: 50,
       backSpeed: 30,
       backDelay: 1000,
       loop:true
     });

     // Destropying
     return () => {
       typed.destroy();
     };
   }, []);
  
  
  return (
    <div className="mb-20">
      <div>
        {/* welcome Name  */}
        <div className="mt-1 sm:text-2xl md:text-3xl text-center text-teal-400 bg-gray-500 p-4 font-semibold animate-puls">
          <span ref={el}></span>
        </div>
        {/*End of welcome Name  */}
        {/* Photo section  */}
        <div>
          <div className="mt-1 flex justify-center ">
            {/* <div className="w-56 h-56 ml-4 mt-5 bg-gradient-to-r from-amber-500 via-pink-300 to-blue-500 rounded-full hover:animate-spin shadow-2xl text-center flex justify-center items-center">
              hover me
            </div>
            <div className="w-56 h-56 ml-4 mt-5 bg-gradient-to-r from-amber-500 via-pink-300 to-blue-500 rounded-full hover:animate-ping shadow-2xl text-center flex justify-center items-center">
              hover me
            </div>
            <div className="w-56 h-56 ml-4 mt-5 bg-gradient-to-r from-amber-500 via-pink-300 to-blue-500 rounded-full hover:animate-bounce shadow-2xl text-center flex justify-center items-center">
              hover me
            </div> */}

            <img
              className="sm0:w-60 sm1:w-56 sm2:w-60 md:mx-0 md:w-56 hover:shadow-2xl shadow-slate-900 rounded-xl"
              src={profilePhoto}
              alt="profile Photo"
            />
          </div>

          {/* End of Photo Section  */}
          <div>
            {/* Name Section  */}
            <div className="">
              <div className="flex justify-center pt-5">
                <span className="sm0:text-[15px] font-bold text-indigo-500 md:text-[15.7px]">
                  Name :
                </span>{" "}
                <span className="sm0:text-[15px] font-bold text-indigo-500 md:text-[15.7px] mx-1 mb-12">
                  Vivek Ramdas Khairnar
                </span>
              </div>
            </div>{" "}
            {/* End of Name Section  */}
            <hr className="px-20 m-auto" />
          </div>
          {/* Objective Section  */}
          <div>
            <div className="">
              <div>
                <div className="text-3xl mt-5 font-bold text-cyan-400 flex justify-center">
                  Objectives
                </div>
                <div className="sm0:mx-1 sm1:mx-1 sm:mx-12 md:mx-12 ">
                  <p className=" relative group felx text-justify">
                    {" "}
                    <div className="m-10">
                      <span className="">
                        Dedicated and highly motivated Java Developer with a
                        strong foundation in backend development technologies,
                        eager to contribute my skills and passion for coding to
                        a dynamic team. As a recent Post Graduate Diploma in
                        Advanced Computing (PG-DAC) at CDAC Hyderabad, I am
                        excited to embark on a journey to apply my theoretical
                        knowledge in practical scenarios while continually
                        learning and growing in the fast-paced world of web
                        development.{" "}
                      </span>{" "}
                    </div>
                     
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* End of Objective Section  */}
        </div>
        {/* Section  */}
        <div>
          <div>
            {/* Education Section  */}
            <div className="sm0:mx-3 md:mx-20 mt-5 flex justify-center">
              <div>
                <div>
                  <EducationTable />
                </div>
              </div>
            </div>
            {/* End of Education Section  */}
            <div>
              <div></div>
            </div>
          </div>
        </div>
        {/* End of Section */}
      </div>
      {/* <Banner/> */}
    </div>
  );
};

export default Home;
// I am a Full Stack Web Developer with experience in building web applications using various technologies such as HTML, CSS, JavaScript, Node.js
//xl_1:w-[1190px]