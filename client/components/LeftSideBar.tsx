import React from "react";

import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContextProvider";
import { MdTravelExplore } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { TiMessages } from "react-icons/ti";
import { BsFillBookmarkFill } from "react-icons/bs";
import { TbListSearch } from "react-icons/tb";
import { ImProfile } from "react-icons/im";
import { CiCircleMore } from "react-icons/ci";

const data = [
  { icon: <AiFillHome size={30} />, text: "Home" },
  { icon: <MdTravelExplore size={30} />, text: "Explore" },
  { icon: <IoMdNotifications size={30} />, text: "Notification" },
  { icon: <TiMessages size={30} />, text: "Messages" },
  { icon: <BsFillBookmarkFill size={30} />, text: "Bookmarks" },
  { icon: <TbListSearch size={30} />, text: "Lists" },
  { icon: <ImProfile size={30} />, text: "Profile" },
  { icon: <CiCircleMore size={30} />, text: "More" },
];

const LeftSideBar = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={`w-[20%] sticky left-0 top-[80px] h-[calc(100vh_-_80px)] overflow-auto scrollbar-hide py-5 px-6 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {data.map((item, index) => (
        <div
          key={index}
          className={`flex items-center mb-3 gap-7 py-3 px-2 rounded-lg cursor-pointer hover:bg-gray-400 transition-all duration-300 ease-in  border-b border-solid ${
            darkMode ? "border-white" : "border-black"
          }`}
        >
          <div>{item.icon}</div>
          <span className="text-2xl font-normal">{item.text}</span>
        </div>
      ))}
    </div>
  );
};

export default LeftSideBar;
