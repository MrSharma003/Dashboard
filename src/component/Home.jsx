import React from "react";
import { BiDice1 } from "react-icons/bi";
import { CgScreen } from "react-icons/cg";
import { CiWarning } from "react-icons/ci";
import { FaRegThumbsUp } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { LuAlarmClock } from "react-icons/lu";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function Home() {
  const jobs = [
    {
      name: "RENDERING JOBS",
      value: 14,
      icon: <CgScreen size={20} />,
    },
    {
      name: "COMPLETED JOBS",
      value: 14,
      icon: <FaRegThumbsUp size={20} />,
    },
    {
      name: "WAITING JOBS",
      value: 14,
      icon: <LuAlarmClock size={20} />,
    },
    {
      name: "FAILED JOBS",
      value: 14,
      icon: <CiWarning size={20} />,
    },
  ];
  return (
    <div className="flex flex-col gap-8 my-8">
      <p className="text-2xl font-bold">Dashboard</p>
      <div className="h-40 w-[80vw] bg-white rounded-xl"></div>

      <div className="flex w-[80vw] justify-between gap-4">
        <div className="flex flex-col justify-start items-center w-[39vw] bg-white rounded-lg gap-4">
          <div className="w-full flex justify-between p-4">
            <p className="text-xl font-bold">Running Jobs</p>
            <div className="flex items-center gap-1">
              <p className="text-sm">This Week</p>
              <IoMdArrowDropdown size={24} />
            </div>
          </div>

          <div className="grid grid-cols-2 grid-rows-2 w-[80%] relative -top-5">
            {jobs.map((job, index) => {
              const isRightBorder = index % 2 === 0; // Adds right border for odd indexed jobs
              const isBottomBorder = index < 2; // Adds bottom border for jobs with index 2 or higher

              return (
                <div
                  key={index}
                  className={`flex items-center p-4 ${
                    isRightBorder ? "border-r-[1px]" : ""
                  } ${isBottomBorder ? "border-b-[1px]" : ""} border-textColor`}
                >
                  <div className="flex flex-row !justify-start items-center gap-2">
                    <p className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center">
                      {job.icon}
                    </p>
                    <div className="flex flex-col">
                      <p className="text-xs text-textColor">{job.name}</p>
                      <p className="font-bold text-lg">{job.value}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col justify-start items-center w-[39vw] bg-white rounded-lg gap-4">
          <div className="w-full flex justify-between p-4">
            <p className="text-xl font-bold">Running Frames</p>
            <div className="flex items-center gap-1">
              <p className="text-sm">This Week</p>
              <IoMdArrowDropdown size={24} className="fill-black" />
            </div>
          </div>

          <div className="grid grid-cols-2 grid-rows-2 w-[80%] relative -top-5">
            {jobs.map((job, index) => {
              const isRightBorder = index % 2 === 0; // Adds right border for odd indexed jobs
              const isBottomBorder = index < 2; // Adds bottom border for jobs with index 2 or higher

              return (
                <div
                  key={index}
                  className={`flex items-center p-4 ${
                    isRightBorder ? "border-r-[1px]" : ""
                  } ${isBottomBorder ? "border-b-[1px]" : ""} border-textColor`}
                >
                  <div className="flex flex-row !justify-start items-center gap-2">
                    <p className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center">
                      {job.icon}
                    </p>
                    <div className="flex flex-col">
                      <p className="text-xs text-textColor">{job.name}</p>
                      <p className="font-bold text-lg">{job.value}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
