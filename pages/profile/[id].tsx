import React, { useContext } from "react";
import Header from "../../components/Header";
import LeftSideBar from "../../components/LeftSideBar";
import RightSideBar from "../../components/RightSideBar";
import SinglePost from "../../components/SinglePost";
import { ThemeContext } from "../../context/ThemeContextProvider";
import Image from "next/image";
import { FaCity, FaFirefoxBrowser } from "react-icons/fa";
import { MdWork } from "react-icons/md";

const posts = [
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

const ProfilePage = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div>
      <Header />
      <div className="flex">
        <LeftSideBar />
        <div className="w-[60%]">
          <div
            className={`w-full py-5 px-4 ${
              darkMode ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            <div>
              <div className="flex items-center justify-between my-5">
                <h1>John Doe</h1>
                <div className="max-w-[60px] rounded-full overflow-hidden">
                  <Image
                    src="/images/profile-pic.jfif"
                    alt="Profile Pic"
                    width={60}
                    height={60}
                  />
                </div>
                <button className="px-3 py-1 bg-blue-600 text-white rounded-md">
                  Follow
                </button>
              </div>
              <div className="flex items-center justify-between my-5">
                <div className="flex items-center gap-1">
                  <FaCity />
                  City
                </div>
                <div className="flex items-center gap-1">
                  <MdWork />
                  Job
                </div>
                <div className="flex items-center gap-1">
                  <FaFirefoxBrowser />
                  Wbsite
                </div>
              </div>
            </div>
            <div>
              {posts.map((post, index) => (
                <SinglePost
                  image={post.image}
                  title={post.title}
                  desc={post.desc}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
        <RightSideBar />
      </div>
    </div>
  );
};

export default ProfilePage;
