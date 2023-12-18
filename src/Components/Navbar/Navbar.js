import React, { useState } from "react";
import { Link } from "react-router-dom";
import profilePhoto from "../Accets/Latest_Photo.jpg";
const Navbar = () => {
  const [isClick, setisClick] = useState(false);

  const toggleNavbar = () => {
    setisClick(!isClick);
  };

  const adminLinks = (
    <div className="flex flex-row py-1">
      <ul className="flex sm0:flex-col sm1:flex-col sm:flex-col md:flex-col lg:flex-row">
        <li className="nav-component">
          <Link to="/">Home</Link>
        </li>

        <li className="nav-component">
          <Link to="/ABOUT-ME">About Me</Link>
        </li>

        <li className="nav-component ">
          <Link to="/CERTIFICATES">Certificates</Link>
        </li>

        <li className="nav-component">
          <Link to="/FEEDBACK">Feedback</Link>
        </li>
      </ul>
    </div>
  );

  return (
    <nav className="">
      <div className="nav-style">
        <div className="">
          {/* company name  */}
          <div className=" flex justify-end">
            {/* email and phone */}
            <div className="email-phone">
              {/* email  */}
              <div className="flex sm0:hidden sm1:hidden sm:hidden md:inline-flex items-center text-sm">
                <svg
                  className="mt-1 w-4 text-red-600"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {" "}
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <rect x="3" y="5" width="18" height="14" rx="2" />{" "}
                  <polyline points="3 7 12 13 21 7" />
                </svg>
                <div className="text-white pl-1 font-normal">
                  vivekkhairnar1997@gmail.com
                </div>
              </div>
              {/* phone  */}
              <div className="flex sm0:hidden sm1:hidden sm:hidden md:inline-flex items-center text-sm pl-[70px] md:pl-[40px]">
                <svg
                  className="h-4 w-4 text-red-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {" "}
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <div className="text-white pl-1 pr-[100px] font-normal md:pr-[60px]">
                  +91 8668994375
                </div>
              </div>
              {/* Image  */}
              <div className="">
                <img
                  className="text-sm font-normal text-white rounded-full h-[80px] w-[80px] mr-4  lg:mr-14"
                  src={profilePhoto}
                  alt="profile photo"
                />
              </div>
            </div>

            {/* toggler icon */}
            <div className="flex items-center lg:hidden">
              <button className="btn" onClick={toggleNavbar}>
                {isClick ? (
                  <svg
                    className="sm0:h-6 sm0:w-6 sm:h-8 sm:w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="sm0:h-6 sm0:w-6 sm:h-8 sm:w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <hr className="hr" />
          <div className="ml-[50px] flex-col items-end hidden lg:block lg:ml-[20px]">
            {adminLinks}
          </div>
        </div>
      </div>
      {isClick && (
        <div className="">
          <div>
            <div className="px-0 pt-0 pb-0 space-y-0 sm:px-0 lg:hidden">
              <div className="navbar">{adminLinks}</div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
