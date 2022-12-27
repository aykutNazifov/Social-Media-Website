import Image from "next/image";
import React, { useContext, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import { ThemeContext } from "../context/ThemeContextProvider";
import Comments from "./Comments";
import moment, { MomentInput } from "moment";

interface ISinglePost {
  postId: Number;
  image: String;
  title: String;
  desc: String;
  createdAt: MomentInput;
  profilePic: String;
  username: String;
}

const SinglePost: React.FC<ISinglePost> = ({
  postId,
  image,
  title,
  desc,
  createdAt,
  profilePic,
  username,
}) => {
  const { darkMode } = useContext(ThemeContext);

  const [showComments, setShowComments] = useState(false);

  return (
    <div
      className={`w-full  p-3 mb-8 border border-solid  ${
        darkMode ? "border-white" : "border-black"
      }  rounded-xl`}
    >
      <div className="flex items-center gap-5 mb-3">
        <div className="max-w-[60px] rounded-full overflow-hidden">
          <Image
            src={
              profilePic ? `/images/${profilePic}` : "/images/default-user.jpeg"
            }
            alt="Profile Pic"
            width={60}
            height={60}
          />
        </div>
        <div className="flex flex-col gap-1">
          <span>{username}</span>
          <span className="text-gray-500 text-[14px]">
            {moment(createdAt).fromNow()}
          </span>
        </div>
      </div>
      {image && (
        <div className=" mb-5">
          <Image
            src={image ? `/images/${image}` : ""}
            alt="img1"
            width={1200}
            height={400}
            style={{ objectFit: "cover", width: "100%", maxHeight: "400px" }}
          />
        </div>
      )}
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
          <Comments postId={postId} />
        </div>
      )}
    </div>
  );
};

export default SinglePost;
