import React from "react";
import profilePhoto from "../Accets/Latest_Photo.jpg";
const Home = () => {
  return (
    <div className="mb-20">
      <div>
        {/* welcome Name  */}
        <div className="sm:text-2xl md:text-3xl text-center bg-gray-500 p-4 font-extrabold animate-pulse">
          Welcome to Vivek's Portfolio
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
              className="sm0:w-60 sm1:w-56 sm2:w-60 md:mx-0 md:w-56 shadow-2xl shadow-slate-900 rounded-xl"
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
                  Name:
                </span>{" "}
                <span className="sm0:text-[15px] font-bold text-indigo-500 md:text-[15.7px]">
                  Vivek Ramdas Khairnar
                </span>
              </div>
            </div>{" "}
            {/* End of Name Section  */}
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
                    <span className="absolute rounded-full left-0 shadow-2xl shadow-gray-400 -bottom-3 xl_1:w-[1190px] xl_2:w-[1340px] 2xl:w-[1430px] h-[2px] bg-gradient-to-r from-pink-400 via-gray-400 to-yellow-200 -z-10 xl_1:group-hover:h-[120px] 2xl:group-hover:h-[98px]   group-hover:duration-700  group-hover:transition-all duration-700"></span>
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
                  <table className="border-collapse border border-slate-500">
                    <caption className="caption-top my-4 font-bold text-emerald-500 sm0:text-base md:text-3xl">
                      Education
                    </caption>
                    <thead className="text-lg text-indigo-600 bg-gradient-to-r from-amber-500 via-white to-amber-500 sm0:text-[9px] sm1_1:text-[10px] md:text-lg lg:text-xl">
                      <tr>
                        <th className="border border-slate-900 text-center w-20 py-5">
                          Sr.No.
                        </th>
                        <th className="border border-slate-900 text-center w-52">
                          Class
                        </th>
                        <th className="border border-slate-900 text-center w-[950px]">
                          Board/University Name
                        </th>
                        <th className="border border-slate-900 text-center w-52">
                          Year
                        </th>
                        <th className="border border-slate-900 text-center w-56">
                          Result
                        </th>
                        <th className="border border-slate-900 text-center w-56">
                          Grade/Class
                        </th>
                      </tr>
                    </thead>

                    <tbody className="bg-gradient-to-r from-amber-200 via-gray-400 to-amber-200 sm0:text-[8px] sm1_1:text-[9px] md:text-base lg:text-lg ">
                      {/* S.S.C.  */}
                      <tr className="">
                        <td className="border border-slate-900 text-center w-20 py-4">
                          1
                        </td>
                        <td className="border border-slate-900 text-center w-20">
                          S.S.C.
                        </td>
                        <td className="border border-slate-900 text-center w-20">
                          Maharastra State Board of Secondary and Higher
                          Secondary Education, Pune
                        </td>
                        <td className="border border-slate-900 text-center w-20">
                          2014
                        </td>
                        <td className="border border-slate-900 text-center w-20">
                          80.40%
                        </td>
                        <td className="border border-slate-900 text-center w-20">
                          A
                        </td>
                      </tr>

                      {/* H.S.C.  */}
                      <tr className="">
                        <td className="border border-slate-900 text-center w-20 py-4">
                          2
                        </td>
                        <td className="border border-slate-900 text-center w-20">
                          H.S.C.
                        </td>
                        <td className="border border-slate-900 text-center w-20">
                          Maharastra State Board of Secondary and Higher
                          Secondary Education, Pune
                        </td>
                        <td className="border border-slate-900 text-center w-20">
                          2016
                        </td>
                        <td className="border border-slate-900 text-center w-20">
                          66.62%
                        </td>
                        <td className="border border-slate-900 text-center w-20">
                          A
                        </td>
                      </tr>
                      {/* Graduate  */}
                      <tr>
                        <td className="border border-slate-900 text-center w-20 py-4">
                          3
                        </td>
                        <td className="border border-slate-900 text-center w-20">
                          B.Sc.
                        </td>
                        <td className="border border-slate-900 text-center w-20">
                          Savitribai Phule Pune University
                        </td>
                        <td className="border border-slate-900 text-center w-20">
                          2020
                        </td>
                        <td className="border border-slate-900 text-center w-20">
                          57.41%
                        </td>
                        <td className="border border-slate-900 text-center w-20">
                          B
                        </td>
                      </tr>
                      {/* Post Graduate  */}
                      <tr>
                        <td className="border border-slate-900 text-center w-20 py-4">
                          4
                        </td>
                        <td className="border border-slate-900 text-center w-20">
                          M.Sc.
                        </td>
                        <td className="border border-slate-900 text-center w-20">
                          Savitribai Phule Pune University
                        </td>
                        <td className="border border-slate-900 text-center w-20">
                          2022
                        </td>
                        <td className="border border-slate-900 text-center w-20">
                          79.95%
                        </td>
                        <td className="border border-slate-900 text-center w-20">
                          A
                        </td>
                      </tr>
                      {/* Post Graduate  */}
                      <tr>
                        <td className="border border-slate-900 text-center w-20 py-4">
                          5
                        </td>
                        <td className="border border-slate-900 text-center w-20">
                          C-DAC
                        </td>
                        <td className="border border-slate-900 text-center w-20">
                          Scientific Society of the Ministry of Electronics and
                          Information Technology, Government of India
                        </td>
                        <td className="border border-slate-900 text-center w-20">
                          September-2023
                        </td>
                        <td className="border border-slate-900 text-center w-20">
                          70.00%
                        </td>
                        <td className="border border-slate-900 text-center w-20">
                          A
                        </td>
                      </tr>
                    </tbody>
                  </table>
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
    </div>
  );
};

export default Home;
// I am a Full Stack Web Developer with experience in building web applications using various technologies such as HTML, CSS, JavaScript, Node.js
//xl_1:w-[1190px]