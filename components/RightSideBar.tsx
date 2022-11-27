import Image from "next/image";
import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContextProvider";

const RightSideBar = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div
      className={`w-[20%] sticky right-0 top-[80px] h-[calc(100vh_-_80px)] overflow-auto scrollbar-hide py-5 px-6 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div
        className={`border border-solid rounded-xl py-3 px-2 ${
          darkMode ? "border-white" : "border-black"
        }`}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <img
              src="/images/cat2.jpg"
              alt="image"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div>
            <p className="mb-1 font-semibold">John Doe</p>
            <span className="font-extralight">@johndoe</span>
          </div>
          <div>
            <button
              className={`${
                darkMode ? "bg-white text-black" : "bg-black text-white"
              } py-1 px-2 rounded-md hover:bg-blue-500 transition-colors duration-300 ease-in`}
            >
              Follow
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <img
              src="/images/cat2.jpg"
              alt="image"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div>
            <p className="mb-1 font-semibold">John Doe</p>
            <span className="font-extralight">@johndoe</span>
          </div>
          <div>
            <button
              className={`${
                darkMode ? "bg-white text-black" : "bg-black text-white"
              } py-1 px-2 rounded-md hover:bg-blue-500 transition-colors duration-300 ease-in`}
            >
              Follow
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <img
              src="/images/cat2.jpg"
              alt="image"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div>
            <p className="mb-1 font-semibold">John Doe</p>
            <span className="font-extralight">@johndoe</span>
          </div>
          <div>
            <button
              className={`${
                darkMode ? "bg-white text-black" : "bg-black text-white"
              } py-1 px-2 rounded-md hover:bg-blue-500 transition-colors duration-300 ease-in`}
            >
              Follow
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
