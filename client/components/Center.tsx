import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContextProvider";
import { BsPlus } from "react-icons/bs";
import { AiFillPicture } from "react-icons/ai";
import SinglePost from "./SinglePost";
import { axiosRequest } from "../utils/axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";

const Center = () => {
  const { darkMode } = useContext(ThemeContext);
  const [text, setText] = useState<string>("");
  const [image, setImage] = useState<File>();
  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery(["posts"], () =>
    axiosRequest.get("/posts").then((res) => {
      return res.data;
    })
  );

  const upload = async () => {
    const formData = new FormData();
    formData.append("image", image);
    const result = await axiosRequest.post("/image", formData);

    return result.data;
  };

  const mutation: any = useMutation(
    (newPost) => {
      return axiosRequest.post("/posts", newPost);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["posts"]);
      },
    }
  );

  const handleClick = async () => {
    let imgUrl = "";
    if (image) imgUrl = await upload();
    mutation.mutate({ desc: text, postPic: imgUrl });
    setText("");
    setImage(null);
  };

  return isLoading ? (
    "Loading"
  ) : (
    <div
      className={`w-full py-5 px-4 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="w-full h-[70px] relative mb-14">
        <textarea
          value={text}
          placeholder="Add post"
          onChange={(e) => setText(e.target.value)}
          className="bg-transparent resize-none w-full outline-none px-2 border-b border-solid border-blue-600 h-full "
        />
        <div
          onClick={handleClick}
          className="absolute top-1/2 -translate-y-1/2 right-2 flex items-center justify-center text-3xl w-10 h-10 bg-blue-600 text-white rounded-full"
        >
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
        {image && (
          <div className="absolute top-0 right-32 w-20 h-20">
            <Image
              src={URL.createObjectURL(image)}
              width={180}
              height={180}
              alt="Image"
            />
          </div>
        )}
      </div>
      <div>
        {data.map((post, index) => (
          <SinglePost
            postId={post.id}
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
