import React, { useEffect, useState } from "react";
import Feedback1 from "./FeedbackData";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import config from "../../utils/config";
const Feedback = () => {
  const navigate = useNavigate();

  let { id } = useParams();

  const [formData, setFormData] = useState({
    feedback_name: "",
    feedback_email: "",
    feedback_rating: "",
    feedback_message: "",
  });

  // Update form data and save to localStorage
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Save data to localStorage on every form data change
  useEffect(() => {
    if (id) {
      axios.get(`${config.api_url}/feedback/${id}`).then((res) => {
        console.log(res.data);
        setFormData(res.data);
      });
    }
  }, [id]);

  const reset = () => {
    setFormData({
      feedback_name: "",
      feedback_email: "",
      feedback_rating: "",
      feedback_message: "",
    });
  };

  // Handling Submit
  const feedbackData = async (e) => {
    e.preventDefault();
    // On submit //
    if (id) {
      axios({
        method: "put",
        url: `${config.api_url}/feedback/${id}`,
        data: formData,
      })
        .then(function (response) {
          //handle success
          console.log("Success  : ");
          console.log(response);
          navigate("/feedback");
        })
        .catch(function (response) {
          //handle error
          console.log("Error  : ");
          console.log(response);
        });
    } else {
      axios({
        method: "post",
        url: `${config.api_url}/feedback`,
        data: formData,
      })
        .then(function (response) {
          //handle success
          console.log("Success  : ");
          console.log(response);
          navigate("/feedback");
          setFormData({
            feedback_name: "",
            feedback_email: "",
            feedback_rating: "",
            feedback_message: "",
          });
        })
        .catch(function (response) {
          //handle error
          console.log("Error  : ");
          console.log(response);
        });
    }
  };

  return (
    <div className="bg-gray-100">
      <div className="text-center md:text-3xl font-semibold bg-gray-400 mt-1 p-4">
        FeedBack Form
      </div>
      <div className="mt-20">
        <div className="lg:mx-36 md:mx-20 sm0:mx-5 sm0:text-sm sm:text-base md:text-2xl font-bold">
          Write Your Feedback{" "}
        </div>
        <hr className="xl:mx-10 lg:mx-14 md:mx-10 sm0:mx-[12px] border-[1.5px] mb-4" />
        <div className="pb-20">
          <form onSubmit={feedbackData}>
            <div className="lg:mx-36 md:mx-20 sm0:mx-5">
              <div className="">
                {/* Full Name  */}
                <label
                  className="font-bold flex items-center"
                  htmlFor="feedback_name"
                >
                  {" "}
                  <span className="sm0:text-[12px] sm0:w-[100px] md:w-[185px] xl:w-[200px] sm1_1:text-[13px] md:text-lg ">
                    Full Name :
                  </span>
                  <input
                    className="font-mono sm0:w-full sm0:placeholder:text-[12px] md:placeholder:text-base justify-center sm0:mx-auto sm:placeholder:text-md bg-gray-100 border ml-[102px] border-slate-500 md:w-1/2 pl-2 md:p-2 sm0:p-1 my-2 rounded-md focus:outline-none text-black placeholder-gray-600"
                    type="text"
                    id="feedback_name"
                    name="feedback_name"
                    value={formData.feedback_name}
                    onChange={handleChange}
                    placeholder="Enter Your Full Name Here"
                    required
                  />
                </label>
              </div>
              <div>
                {/* Email Id  */}
                <label
                  className="font-bold flex items-center"
                  htmlFor="feedback_email"
                >
                  <span className="sm0:text-[12px] sm0:w-[100px] md:w-[185px] xl:w-[200px] sm1_1:text-[13px] md:text-lg">
                    Email ID :
                  </span>
                  <input
                    className="font-mono sm0:w-full sm0:placeholder:text-[12px] md:placeholder:text-base sm0:mx-auto sm:placeholder:text-md bg-gray-100 border ml-[118px] border-slate-500 md:w-1/2 pl-2 md:p-2 sm0:p-1 my-2 rounded-md focus:outline-none text-black placeholder-gray-600"
                    type="text"
                    id="feedback_email"
                    name="feedback_email"
                    value={formData.feedback_email}
                    onChange={handleChange}
                    required
                    placeholder="Enter Your Email Here"
                  />
                </label>
              </div>
              {/* Rating  */}
              <div>
                {" "}
                <label
                  className="font-bold flex items-center"
                  htmlFor="feedback_rating"
                >
                  {" "}
                  <span className="sm0:text-[12px] sm0:w-[100px] md:w-[185px] xl:w-[200px] sm1_1:text-[13px] md:text-lg">
                    Select Rating :
                  </span>
                  {/* <select
                    name="feedback_rating "
                    value={formData.feedback_rating}
                    onChange={handleChange}
                    className="font-mono sm0:text-[12px] sm0:w-full sm0:mx-auto md:text-base bg-gray-100 border-2 ml-[77px] border-slate-500 md:w-1/2 md:px-1 sm0:pl-[3px] sm0:py-[8px] md:py-2  my-2 rounded-md focus:outline-none text-gray-600"
                    required
                  >
                    <option className="sm0:text-[12px] sm1_1:text-sm sm:text-base ">
                      Select Your Rating ...
                    </option>
                    {Array.from({ length: 5 }, (value, key) => (
                      <option
                        key={key}
                        value={key + 1}
                        className="sm0:text-[12px] sm1_1:text-sm sm:text-base"
                      >
                        {key + 1} Star
                      </option>
                    ))}
                  </select> */}
                  <select
                    name="feedback_rating"
                    id="feedback_rating"
                    value={formData.feedback_rating}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        feedback_rating: e.target.value,
                      })
                    }
                    className="font-mono sm0:text-[12px] sm0:w-full sm0:mx-auto md:text-base bg-gray-100 border ml-[77px] border-slate-500 md:w-1/2 md:px-1 sm0:pl-[3px] sm0:py-[8px] md:py-2  my-2 rounded-md focus:outline-none text-gray-600  focus:text-black "
                    required
                  >
                    <option
                      className="sm0:text-[12px] sm1_1:text-sm sm:text-base"
                      value=""
                    >
                      Select Your Rating...
                    </option>
                    {Array.from({ length: 5 }, (value, key) => (
                      <option
                        key={key}
                        value={key + 1}
                        className="sm0:text-[12px] sm1_1:text-sm sm:text-base text-black"
                      >
                        {key + 1} Star
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              {/* Feedback Note  */}
              <div>
                {" "}
                <label
                  className="font-bold flex items-center"
                  htmlFor="feedback_message"
                >
                  <span className="sm0:text-[12px] sm0:w-[100px] md:w-[185px] xl:w-[200px] sm1_1:text-[13px] md:text-lg">
                    Write Your Feedback :
                  </span>{" "}
                  <textarea
                    type="textarea"
                    rows="5"
                    id="feedback_message"
                    name="feedback_message"
                    value={formData.feedback_message}
                    onChange={handleChange}
                    required
                    className="font-mono sm0:w-full sm0:placeholder:text-[12px] md:placeholder:text-base sm0:mx-auto sm:placeholder:text-md bg-gray-100 border ml-3 border-slate-500 md:w-1/2 sm0:pl-1 md:pl-2 sm0:p-1 my-2 rounded-md focus:outline-none text-black placeholder-gray-600 "
                    placeholder="Write Your Feedback"
                  />
                </label>
                {/* Buttons  */}
                <div className="mt-8 mx-5">
                  <span>
                    <button
                      type="submit"
                      className="bg-teal-500 hover:bg-teal-600 hover:text-gray-200 duration-500 rounded-md px-6 py-2 m-2 xl:ml-[440px] lg:ml-60 md:ml-44 sm2:ml-12 sm1_1:ml-7 sm0:text-sm sm:text-base md:text-xl"
                    >
                      submit
                    </button>
                  </span>
                  <span>
                    <button
                      type="reset"
                      onClick={reset}
                      className="mb-20 bg-teal-500 hover:bg-teal-600 hover:text-gray-200 duration-500 rounded-md px-7 py-2 m-2 xl:ml-28 lg:ml-20 md:ml-12 sm2:ml-10 sm1_1:ml-8 sm0:text-sm sm:text-base md:text-xl"
                    >
                      Reset
                    </button>
                  </span>
                </div>
              </div>
            </div>
            <Feedback1 />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
