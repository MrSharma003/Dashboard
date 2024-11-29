import React from "react";
import { IoGiftOutline } from "react-icons/io5";
import { LuBellDot } from "react-icons/lu";
import {
  MdOutlineCloudDownload,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";

export default function Header() {
  return (
    <div className="relative z-10 flex justify-between w-screen p-4 bg-white border border-solid border-slate-100">
      <div className="relative left-60 flex items-center text-sm gap-1">
        <p>CPU Region 11 (16-cores) Normal</p>
        <p>
          <MdOutlineKeyboardArrowDown size={16} />
        </p>
      </div>

      <div className="flex items-center gap-4">
        <IoGiftOutline size={20} className="text-orange-500" />
        <LuBellDot size={20} className="fill-red-500"/>
        <div className="flex gap-2 items-center">
          <MdOutlineCloudDownload size={20} />
          <p>Client Download</p>
        </div>

        <div className="flex items-center gap-2">
          <img
            src="https://img.freepik.com/premium-vector/cute-boy-smiling-cartoon-kawaii-boy-illustration-boy-avatar-happy-kid_1001605-3447.jpg"
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover"
          />
          <p>Daren Joe</p>
          <MdOutlineKeyboardArrowDown size={16} />
        </div>
      </div>
    </div>
  );
}
