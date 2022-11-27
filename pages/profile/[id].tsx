import React, { useContext } from "react";
import Header from "../../components/Header";
import LeftSideBar from "../../components/LeftSideBar";
import RightSideBar from "../../components/RightSideBar";
import SinglePost from "../../components/SinglePost";
import { ThemeContext } from "../../context/ThemeContextProvider";

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
            <div>Progile Info</div>
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
