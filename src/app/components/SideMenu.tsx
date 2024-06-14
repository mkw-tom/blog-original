"use client";
import React, { useEffect, useState } from "react";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ShareIcon from "@mui/icons-material/Share";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../libs/firebase/initialize";
import { AnyMxRecord } from "dns";
import { likesFunc } from "../libs/firebase/firestore";
import { doc, getDoc } from "firebase/firestore";

type SideMenuProps = {
  blogData: any;
  page: any;
};

const SideMenu = ({ blogData, page }: SideMenuProps) => {
  const [inputText, setInputText] = useState<string | undefined>("");
  const [likesList, setlikesList] = useState<any>([]);
  const [isLike, setIsLike] = useState<boolean>()
  const [user] = useAuthState(auth);
  const searchBlog: any = blogData.filter((data: any) =>
    data.title.includes(`${inputText}`)
  );

 
  const pageTitle = (title: any) => {
    if (title.length > 15) {
      return title.substring(0, 15) + "...";
    } else {
      return title;
    }
  };


  //UIの変更がまだ
  const likesToggle = async () => {
  
    setIsLike(!isLike);
    if (isLike === true) {
      const newList = likesList.filter((data: string) => data !== user?.uid);
      setlikesList(newList);
      await likesFunc(page.id, page.title, likesList);
    } else {
      setlikesList([...likesList, user?.uid]);
      await likesFunc(page.id, page.title, likesList);
    }
    console.log(likesList)
  };

  return (
    <>
      <div className="flex-col w-auto max-w-80 h-auto mx-5 rounded-md ">
        <button className="rounded-full  text-gray-500 bg-red-200 px-3 py-3 fixed top-40 right-5 z-10 bg-opacity-75 md:hidden hover:opacity-65">
          <ThumbUpAltIcon></ThumbUpAltIcon>
        </button>
        <button className="rounded-full text-gray-500 bg-green-200 px-3 py-3 fixed top-56 right-5 z-10 bg-opacity-75 md:hidden hover:opacity-65">
          <ShareIcon></ShareIcon>
        </button>
      </div>
      <div className="hidden md:flex flex-col w-3/12">
        <div className="flex justify-center w-full mx-auto ">
          <button
            className={`${isLike ? "text-red-600" : "text-white"} rounded-full text-white bg-red-200 px-2 py-4 hidden md:block hover:opacity-65 mr-2 w-20`}
            onClick={likesToggle}
          >
            <ThumbUpAltIcon></ThumbUpAltIcon>
          </button>
          <button className="rounded-full text-gray-500 bg-green-200 px-2 py-4 hidden md:block hover:opacity-65 w-20">
            <ShareIcon></ShareIcon>
          </button>
        </div>
        <div className="flex-col w-full h-auto bg-white px-2 py-2 rounded-md shadow-md mt-10 ">
          <input
            placeholder="記事を検索"
            type="text"
            className="w-full shadow-inner px-2 py-2 rounded-md border-2 border-gray-200 mb-5"
            onChange={(e) => setInputText(e.target.value)}
          />
          <ul
            style={{ height: "600px" }}
            className="block h-96 overflow-scroll"
          >
            {searchBlog.length === 0 ? (
              <div className="text-center mt-10">
                <span className="text-gray-500">記事が見つかりません。</span>
              </div>
            ) : (
              searchBlog.map((data: any, index: number) => (
                <Link
                  key={index}
                  href={`./${data.id}`}
                  className="shadow-xl px-3 py-3 mb-5 rounded-md"
                >
                  <div className=" border-2 rounded-md shadow-xl">
                    <img
                      src={data.eyecatch?.url}
                      alt=""
                      className="rounded-t-md"
                    />
                    <h3 className="my-3 text-center">
                      {pageTitle(data.title)}
                    </h3>
                    <small className="block  text-right pb-1 pr-1">
                      投稿：{new Date(data.publishedAt).toLocaleDateString()}
                    </small>
                  </div>
                </Link>
              ))
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideMenu;
