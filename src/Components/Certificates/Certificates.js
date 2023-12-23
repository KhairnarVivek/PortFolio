import React from "react";
import Core_Java from "../CertificatesImages/Core_Java.jpg";
import JAVA from "../CertificatesImages/Java.jpg";
import JAVASCRIPT from "../CertificatesImages/JavaScript.jpg";
import REACT from "../CertificatesImages/React.jpg";
import PRE_CAT from "../CertificatesImages/Pre-Cat.jpg";
import CDAC_MARKSHEET from '../CertificatesImages/CDAC-Certificate/CDAC-MarkSheet.jpg';
import CDAC_CERTIFICATE from "../CertificatesImages/CDAC-Certificate/CDAC-Certificate.jpg";
import POST_MAN_API from '../CertificatesImages/Post Man.jpg'
const Certificates = () => {

  


  return (
    <div className="bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300">
      <div>
        <div>
          <div className="cursor-pointer grid sm0:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[108px] sm0:p-10 md:px-20">
            {/* first Image  */}
            <div className="sm0:flex sm0:justify-center items-cente">
              <div className="sm0:w-60 md:w-96 md:mb-10 ">
                <img
                  className="rounded-xl md:mt-10 hover:shadow-2xl hover:shadow-gray-600 hover:scale-125 duration-700"
                  src={PRE_CAT}
                />
              </div>
            </div>

            {/* Second Image  */}
            <div className="sm0:flex sm0:justify-center items-cente">
              <div className="sm0:w-60 md:w-96 md:mb-10 ">
                <img
                  className="rounded-xl md:mt-10 hover:shadow-2xl hover:shadow-gray-600 hover:scale-125 duration-700"
                  src={CDAC_CERTIFICATE}
                />
              </div>
            </div>

            {/* Third Image  */}
            <div className="sm0:flex sm0:justify-center items-cente">
              <div className="sm0:w-60 md:w-96 m05mb-10">
                <img
                  className="rounded-xl mt-10 hover:shadow-2xl hover:shadow-gray-600 hover:scale-125 duration-700"
                  src={CDAC_MARKSHEET}
                />
              </div>
            </div>
          </div>

          <div className="cursor-pointer grid sm0:grid-cols-1 md:grid-cols-2 gap-10 sm0:p-10 md:p-20">
            <div>
              <img
                className="rounded-xl hover:shadow-2xl hover:shadow-gray-600 hover:scale-105 duration-700"
                src={Core_Java}
              />
            </div>
            <div>
              <img
                className="rounded-xl hover:shadow-2xl hover:shadow-gray-600 hover:scale-105 duration-700"
                src={REACT}
              />
            </div>
            <div>
              <img
                className="rounded-xl hover:shadow-2xl hover:shadow-gray-600 hover:scale-105 duration-700"
                src={JAVA}
              />
            </div>
            <div>
              <img
                className="rounded-xl hover:shadow-2xl hover:shadow-gray-600 hover:scale-105 duration-700"
                src={JAVASCRIPT}
              />
            </div>
            <div>
              <img
                className="rounded-xl hover:shadow-2xl hover:shadow-gray-600 hover:scale-105 duration-700"
                src={POST_MAN_API}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
