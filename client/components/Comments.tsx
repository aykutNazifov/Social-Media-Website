import Image from "next/image";
import React, { useContext, useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { AuthContext } from "../context/AuthContextProvider";
import { ThemeContext } from "../context/ThemeContextProvider";
import { axiosRequest } from "../utils/axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import moment from "moment";

interface IComments {
  postId: Number;
}

const Comments: React.FC<IComments> = ({ postId }) => {
  const { user } = useContext(AuthContext);
  const { darkMode } = useContext(ThemeContext);
  const [text, setText] = useState("");
  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery(["comments"], () =>
    axiosRequest.get("/comment/" + postId).then((res) => {
      return res.data;
    })
  );

  const mutation: any = useMutation(
    (newPost) => {
      return axiosRequest.post("/comment", newPost);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["comments"]);
      },
    }
  );

  const handleClick = () => {
    mutation.mutate({ comment: text, postId });
    setText("");
  };

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
          <textarea
            className="bg-transparent w-full h-full border-none outline-none p-2 resize-none"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            className="absolute bottom-2 right-2 p-2 rounded-full bg-gray-400"
            onClick={handleClick}
          >
            <AiOutlineSend />
          </button>
        </div>
      </div>

      {isLoading
        ? "Loading"
        : data.map((item, index) => (
            <div className="mb-5">
              <div className="flex items-center gap-1">
                <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
                  <Image
                    src={
                      item.profilePic
                        ? item.profilePic
                        : "/images/default-user.jpeg"
                    }
                    alt="Profile Pic"
                    width={60}
                    height={60}
                  />
                </div>
                <div>
                  <p>{item.username}</p>
                  <p>{moment(item.createdAt).fromNow()}</p>
                </div>
              </div>
              <p className="mt-2">{item.comment}</p>
            </div>
          ))}
    </div>
  );
};

export default Comments;
