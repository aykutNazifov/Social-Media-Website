import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContextProvider";
import { BiHomeAlt } from "react-icons/bi";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import Image from "next/image";
import { AuthContext } from "../context/AuthContextProvider";
import { axiosRequest } from "../utils/axios";

const Header = () => {
  const { darkMode, togleDarkMode } = useContext(ThemeContext);
  const { user, logout } = useContext(AuthContext);

  const userLogOut = async () => {
    logout();
    await axiosRequest.post("/auth/logout");
  };

  return (
    <header
      className={`sticky z-50 top-0 w-full h-20 overflow-hidden flex items-center justify-between py-1 px-6 ${
        darkMode ? "text-white bg-black" : "text-black bg-white"
      }`}
    >
      <div className="flex items-center gap-5">
        <p className="text-3xl text-blue-600">kdbs</p>
        <BiHomeAlt size={30} />
        <button onClick={togleDarkMode}>
          {darkMode ? (
            <BsFillSunFill size={30} />
          ) : (
            <BsFillMoonFill size={30} />
          )}
        </button>
      </div>

      <div className="flex-1 ml-8">
        <div className="flex items-center w-1/2 border-solid border-b border-gray-600">
          <AiOutlineSearch />
          <input
            className={`py-2 px-1 w-full bg-transparent outline-none ${
              darkMode ? "text-white" : "text-black"
            }`}
            type="text"
            placeholder="Search..."
          />
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
          <Image
            src={
              user && user.profilePic
                ? user.profilePic
                : "/images/default-user.jpeg"
            }
            alt="Profile Pic"
            width={60}
            height={60}
          />
        </div>
        <div>
          <p className={` ${darkMode ? "text-white" : "text-black"}`}>
            {user ? user.username : "test"}
          </p>
          <button className="text-red-500" onClick={userLogOut}>
            Log Out
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
