import React from "react";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import { User } from "firebase/auth";
import { CommentDataProps } from "@/app/type";



const CommentArea = ({ commentList, user }: {commentList: CommentDataProps[], user: User | null | undefined}) => {
  return (
    <ul className="flex-col w-full h-auto bg-gray-50 ">
      {commentList.map((data: any, index: number) => (
        <div
          key={index}
          className="block border-b-2 w-full h-auto mx-auto py-3 px-2  border-b-gray-300 bg-gray-50"
        >
          <div className="flex justify-start items-center pl-2">
            <img
              src={`${user?.photoURL}`}
              alt=""
              className="w-10 h-10 rounded-full mr-2"
            />
            <h3 className="font-bold">{user?.displayName}</h3>
            <small className="ml-3 text-gray-500">2024/05/15</small>
          </div>
          <p className="text-left mx-12 my-3">{data.text}</p>
          <div className="text-right mr-2">
            <ThumbUpAltIcon></ThumbUpAltIcon>
            <span className="ml-2">10</span>
          </div>
        </div>
      ))}
    </ul>
  );
};

export default CommentArea;
