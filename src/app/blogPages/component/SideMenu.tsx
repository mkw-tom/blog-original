"use client";
import React, { useState } from "react";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ShareIcon from "@mui/icons-material/Share";
import Link from "next/link";

const SideMenu = ({ blogData }: any) => {
  const [inputText, setInputText] = useState<string | undefined>("");
  const searchBlog: any = blogData.filter((data: any) =>
    data.title.includes(`${inputText}`)
  );
  return (
    <>
      <div className="flex-col w-auto max-w-80 h-auto mx-5 rounded-md ">
        <button className="rounded-full text-gray-500 bg-red-200 px-3 py-3 fixed top-40 right-5 z-10 bg-opacity-75 md:hidden hover:opacity-65">
          <ThumbUpAltIcon></ThumbUpAltIcon>
        </button>
        <button className="rounded-full text-gray-500 bg-green-200 px-3 py-3 fixed top-56 right-5 z-10 bg-opacity-75 md:hidden hover:opacity-65">
          <ShareIcon></ShareIcon>
        </button>
      </div>
      <div className="hidden md:flex flex-col w-3/12">
        <div className="flex justify-center w-full mx-auto ">
          <button className="rounded-full text-gray-500 bg-red-200 px-2 py-4 hidden md:block hover:opacity-65 mr-2 w-20">
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
                href={`./${index}`}
                className="shadow-xl px-3 py-3 mb-5 rounded-md"
              >
                <div className=" border-2 rounded-md shadow-xl">
                  <img src={data.eyecatch?.url} alt="" className="rounded-t-md"/>
                  <h3 className="my-3 text-center">{data.title}</h3>
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
