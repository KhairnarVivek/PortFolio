import { toBeDisabled } from "@testing-library/jest-dom/matchers";
import React from "react";

export const EducationTable = () => {
  const DATA = [
    {
      Class: "S.S.C.",
      board:
        "Maharastra State Board of Secondary and Higher Secondary Education, Pune",
      year: "2014",
      percentage: "80.40",
      grade: "A",
    },

    {
      Class: "H.S.C.",
      board:
        "Maharastra State Board of Secondary and Higher Secondary Education, Pune",
      year: "2016",
      percentage: "66.62",
      grade: "A",
    },

    {
      Class: "B.Sc.",
      board: "Savitribai Phule Pune University",
      year: "2020",
      percentage: "57.41",
      grade: "B",
    },

    {
      Class: "M.Sc.",
      board: "Savitribai Phule Pune University",
      year: "2022",
      percentage: "69.95",
      grade: "A",
    },

    {
      Class: "PG-DAC",
      board: "Centre for Development of Advanced Computing, Hyderabad",
      year: "September - 2023",
      percentage: "70.00",
      grade: "A",
    },
  ];
    
    const Heading = [
      {
        title1: "Sr.No.",
        title2: "Class",
        title3: "Board/University Name",
        title4: "Year",
        title5: "Result",
        title6: "Grade",
      },
    ];
  return (
    <table className="border-collapse border border-slate-500">
      <caption className="caption-top my-4 font-bold text-emerald-500 sm0:text-base md:text-3xl">
        Education
      </caption>
      <thead className="text-lg text-indigo-600 bg-gradient-to-r from-amber-500 via-white to-amber-500 sm0:text-[9px] sm1_1:text-[10px] md:text-lg lg:text-xl">
        {Heading.map((data) => (
          <tr>
            <th className="border border-[#ddd] text-center w-20 py-5">
              {data.title1}
            </th>
            <th className="border border-[#ddd] text-center w-52">
              {data.title2}
            </th>
            <th className="border border-[#ddd] text-center w-[950px]">
              {data.title3}
            </th>
            <th className="border border-[#ddd] text-center w-52">
              {data.title4}
            </th>
            <th className="border border-[#ddd] text-center w-56">
              {data.title5}
            </th>
            <th className="border border-[#ddd] text-center w-56">
              {data.title6}
            </th>
          </tr>
        ))}
      </thead>

      <tbody className="[&>*:nth-child(even)]:bg-amber-200 [&>*:nth-child(odd)]:bg-amber-100  sm0:text-[8px] sm1_1:text-[9px] md:text-base lg:text-lg">
        {DATA.map((data, index) => (
          <tr className="hover:bg-gradient-to-r hover:from-blue-300 hover:via-gray-400 hover:to-blue-300">
            <td className="border border-[#ddd] text-center w-20 py-4">
              {index + 1}
            </td>
            <td className="border border-[#ddd] text-center w-20">
              {data.Class}
            </td>
            <td className="border border-[#ddd] text-center w-20">
              {data.board}
            </td>
            <td className="border border-[#ddd] text-center w-20">
              {data.year}
            </td>
            <td className="border border-[#ddd] text-center w-20">
              {data.percentage} %
            </td>
            <td className="border border-[#ddd] text-center w-20">
              {data.grade}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
