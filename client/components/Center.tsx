import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContextProvider";
import { BsPlus } from "react-icons/bs";
import { AiFillPicture } from "react-icons/ai";
import SinglePost from "./SinglePost";
import { axiosRequest } from "../utils/axios";

const Center = () => {
  const { darkMode } = useContext(ThemeContext);
  const [text, setText] = useState<string>("");
  const [image, setImage] = useState<File>();
  const [posts, setPosts] = useState([]);

  console.log(posts);

  const fetchPosts = async () => {
    const data = await axiosRequest.get("/posts");
    setPosts(data.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const damiPosts = [
    {
      image: "/images/story1.png",
      title: "Post 1 Title",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, ullam. 1",
    },
    {
      image: "/images/story2.png",
      title: "Post 2 Title",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, ullam. 2 Desc",
    },
    {
      image: "/images/story3.png",
      title: "Post 3 Title",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, ullam. 3Desc",
    },
  ];

  return (
    <div
      className={`w-full py-5 px-4 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="w-full h-[70px] relative mb-14">
        <textarea
          placeholder="Add post"
          onChange={(e) => setText(e.target.value)}
          className="bg-transparent resize-none w-full outline-none px-2 border-b border-solid border-blue-600 h-full "
        />
        <div className="absolute top-1/2 -translate-y-1/2 right-2 flex items-center justify-center text-3xl w-10 h-10 bg-blue-600 text-white rounded-full">
          <BsPlus className="cursor-pointer" />
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-16  bg-green-600 text-2xl flex items-center justify-center text-white w-10 h-10 rounded-full">
          <label htmlFor="image">
            <AiFillPicture className="cursor-pointer" />
          </label>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            name="imgae"
            id="image"
            className="hidden"
          />
        </div>
      </div>
      <div>
        {posts.map((post, index) => (
          <SinglePost
            profilePic={post.profilePic}
            username={post.username}
            createdAt={post.createdAt}
            image={post.postPic}
            title={post.title}
            desc={post.desc}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Center;
