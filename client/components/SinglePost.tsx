import Image from "next/image";
import React, { useContext, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import { ThemeContext } from "../context/ThemeContextProvider";
import Comments from "./Comments";

interface ISinglePost {
  image: String;
  title: String;
  desc: String;
}

const SinglePost: React.FC<ISinglePost> = ({ image, title, desc }) => {
  const { darkMode } = useContext(ThemeContext);

  const [showComments, setShowComments] = useState(false);

  console.log(image);
  return (
    <div
      className={`w-full  p-3 mb-8 border border-solid  ${
        darkMode ? "border-white" : "border-black"
      }  rounded-xl`}
    >
      <div className="flex items-center gap-5 mb-3">
        <div className="max-w-[60px] rounded-full overflow-hidden">
          <Image
            src="/images/profile-pic.jfif"
            alt="Profile Pic"
            width={60}
            height={60}
          />
        </div>
        <div className="flex flex-col gap-1">
          <span>John Doe</span>
          <span className="text-gray-500 text-[14px]">12 mins ago</span>
        </div>
      </div>
      <div className=" mb-5">
        <Image
          src={`${image}`}
          alt="img1"
          width={1200}
          height={400}
          style={{ objectFit: "cover", width: "100%", maxHeight: "400px" }}
        />
      </div>
      <div>
        <h2 className="text-2xl mb-2">{title}</h2>
        <p className="text-xl font-light">{desc}</p>
      </div>
      <div className="mt-5 flex items-center gap-x-16 text-2xl">
        <span className="cursor-pointer">
          <AiOutlineHeart />
          {/* <AiFillHeart /> */}
        </span>
        <span
          className="cursor-pointer"
          onClick={() => setShowComments(!showComments)}
        >
          <FaRegCommentDots />
        </span>
        <span className="cursor-pointer">
          <FiShare2 />
        </span>
      </div>
      {showComments && (
        <div className="mt-8">
          <Comments />
        </div>
      )}
    </div>
  );
};

export default SinglePost;
