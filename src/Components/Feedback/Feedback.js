import React from "react";

const Feedback = () => {
  return (
    <div>
      <div>
        <div>
          <div className="text-center md:text-3xl font-bold bg-gray-400 mt-1 p-4">
            FeedBack Form
          </div>
          <div className="my-20">
            <div className="mx-36 text-2xl font-bold">Write Your Feedback </div>
            <hr className="mx-20  border-[1.5px] mb-4 bg-black" />
            <div>
              <div className="mx-36">
                <div className="">
                  {" "}
                  <label htmlFor="name">
                    {" "}
                    Full Name : <span></span>
                    <input
                      className="border-2 border-slate-500 w-1/2 pl-2 p-1 my-2 rounded-md focus:outline-cyan-600 text-indigo-700 placeholder-teal-600"
                      type="text"
                      placeholder="Enter Your Full Name Here"
                    />
                  </label>
                </div>
                <div>
                  {" "}
                  <label htmlFor="email">
                    <span className="mx-1"></span> Email ID : <span></span>
                    <input
                      className="border-2 border-slate-500 w-1/2 pl-2 p-1 my-2 rounded-md focus:outline-cyan-600 text-indigo-700 placeholder-teal-600"
                      type="text"
                      placeholder="Enter Your Email Here"
                    />
                  </label>
                </div>
                <div>
                  {" "}
                  <label htmlFor="rating">
                    {" "}
                    <span></span>Select Rating : <span></span>
                    <input
                      className="border-2 border-slate-500 w-1/2 pl-2 p-1 my-2 rounded-md focus:outline-cyan-600 text-indigo-700 placeholder-teal-600"
                      type="text"
                      placeholder="Enter Your Full Name Here"
                    />
                  </label>
                </div>
                <div>
                  {" "}
                  <label htmlFor="feedback">
                    <span className="text-center justify-center items-center">
                      Write Your Feedback :{" "}
                    </span>
                    <textarea
                      type="textarea"
                      className="border-2 border-slate-500 w-1/2 pl-2 p-1 my-2 rounded-md focus:outline-cyan-600 text-indigo-700 placeholder-teal-600"
                      placeholder="Write Your Feedback"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
