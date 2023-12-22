import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "../../utils/config";
import { useParams } from "react-router-dom";
import STAR from "../Accets/star-outline.svg";

const FeedbackData = () => {
  let { id } = useParams();

  const [feedbackData, setFeedbackData] = useState([]);

  useEffect(() => {
    // This is equivalent to componentDidMount in functional components
    axios.get(`${config.api_url}/feedback`).then((res) => {
      const feedbacks = res.data;
      setFeedbackData(feedbacks);
      console.log(feedbacks);
    });
  }, [id]); // Empty dependency array means this effect will run once after the initial render

  const Heading = [
    {
      title1: "Sr.No.",
      title2: "Full Name",
      title3: "Email Id",
      title4: "Rating",
      title5: "Feedback Note",
    },
  ];
  return (
    <div className="">
      {/* feedback details  */}
      <div className="flex justify-center items-center bg-gray-500 mt-1 py-5 sm0:text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold">
        Feedback Details
      </div>
      {/* end of feedback details */}

      {/* feedback table  */}
      <div className="w-full mt-20">
        <table className="xl:mx-14 lg:mx-4 md:mx-3 sm:mx-2">
          <thead className="sm0:text-[8px] sm2:text-[12px] sm:text-base md:text-base bg-gradient-to-r from-teal-600 via-gray-400 to-teal-600">
            {Heading.map((data, index) => (
              <tr id={index} key={index}>
                <th scope="row" className="py-4">
                  {data.title1}
                </th>
                <th className="">{data.title2}</th>
                <th className="">{data.title3}</th>
                <th className="">{data.title4}</th>
                <th className="">{data.title5}</th>
              </tr>
            ))}
          </thead>
          <tbody className="[&>*:nth-child(even)]:bg-teal-200 [&>*:nth-child(odd)]:bg-teal-100  sm0:text-[7px] sm1_1:text-[9px] sm2-[15px] md:text-base lg:text-lg">
            {feedbackData.map((data, index) => (
              <tr
                id={index}
                key={index}
                className="hover:bg-gradient-to-r hover:from-blue-300 hover:via-gray-400 hover:to-blue-300"
              >
                <td className="text-center w-20">{index + 1}</td>
                <td className="pl-5 w-[350px] py-3">{data.feedback_name}</td>
                <td className="pl-5 w-[300px] py-3">{data.feedback_email}</td>
                <td className="text-center sm0:w-11 md:w-36 py-3 flex justify-center items-center">
                  <span className="text-[18px]">{data.feedback_rating}</span>{" "}
                  <ion-icon src={STAR}></ion-icon>
                </td>
                <td className="pl-5 w-[550px] py-3">{data.feedback_message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* end of feedback table  */}
    </div>
  );
};

export default FeedbackData;
