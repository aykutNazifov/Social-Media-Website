import Image from "next/image";
import React, { useContext } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { AuthContext } from "../context/AuthContextProvider";
import { ThemeContext } from "../context/ThemeContextProvider";

const Comments = () => {
  const { user } = useContext(AuthContext);
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={` ${darkMode ? "text-white" : "text-black"}`}>
      <div className="flex gap-2 mb-8">
        <div className="flex flex-col items-center gap-1">
          <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
            <Image
              src={
                user.profilePic ? user.profilePic : "/images/default-user.jpeg"
              }
              alt="Profile Pic"
              width={60}
              height={60}
            />
          </div>
          <div>
            <p>{user.username}</p>
          </div>
        </div>
        <div className="relative flex-1 border border-solid border-gray-500">
          <textarea className="bg-transparent w-full h-full border-none outline-none p-2 resize-none" />
          <button className="absolute bottom-2 right-2 p-2 rounded-full bg-gray-400">
            <AiOutlineSend />
          </button>
        </div>
      </div>

      <div className="mb-5">
        <div className="flex items-center gap-1">
          <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
            <Image
              src={
                user.profilePic ? user.profilePic : "/images/default-user.jpeg"
              }
              alt="Profile Pic"
              width={60}
              height={60}
            />
          </div>
          <div>
            <p>{user.username}</p>
            <p>13 mins ago</p>
          </div>
        </div>
        <p className="mt-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
          cum!
        </p>
      </div>

      <div className="mb-5">
        <div className="flex items-center gap-1">
          <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
            <Image
              src={
                user.profilePic ? user.profilePic : "/images/default-user.jpeg"
              }
              alt="Profile Pic"
              width={60}
              height={60}
            />
          </div>
          <div>
            <p>{user.username}</p>
            <p>13 mins ago</p>
          </div>
        </div>
        <p className="mt-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
          cum!
        </p>
      </div>

      <div className="mb-5">
        <div className="flex items-center gap-1">
          <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
            <Image
              src={
                user.profilePic ? user.profilePic : "/images/default-user.jpeg"
              }
              alt="Profile Pic"
              width={60}
              height={60}
            />
          </div>
          <div>
            <p>{user.username}</p>
            <p>13 mins ago</p>
          </div>
        </div>
        <p className="mt-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
          cum!
        </p>
      </div>
    </div>
  );
};

export default Comments;
