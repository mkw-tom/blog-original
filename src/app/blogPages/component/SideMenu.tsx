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
      <div className="hidden md:flex flex-col  bg-blue-100 w-3/12">
        <div className="flex justify-center w-full mx-auto ">
          <button className="rounded-full text-gray-500 bg-red-200 px-2 py-4 hidden md:block hover:opacity-65 mr-2 w-20">
            <ThumbUpAltIcon></ThumbUpAltIcon>
          </button>
          <button className="rounded-full text-gray-500 bg-green-200 px-2 py-4 hidden md:block hover:opacity-65 w-20">
            <ShareIcon></ShareIcon>
          </button>
        </div>
        <div className="flex-col w-full h-full bg-white px-2 py-2 rounded-md shadow-md mt-10 ">
          <input
            placeholder="記事を検索"
            type="text"
            className="w-full shadow-inner px-2 py-2 rounded-md border-2 border-gray-200"
            onChange={(e) => setInputText(e.target.value)}
          />
          {searchBlog.length === 0 ? (
            <p className="block text-2xl w-96 h-9 mx-auto mt-16 text-center opacity-70">
              記事が見つかりません。
            </p>
          ) : (
            <>
              {searchBlog.map((data: any, index: number) => (
                <Link
                  key={data.id}
                  href={`blogPages/${index}`}
                  className="w-52 h-52 bg-orange-300"
                >
                  <li className="inline-block w-full h-auto max-h-96 bg-white rounded-md shadow-lg px-3 py-3 relative hover:opacity-70 hover:duration-1500">
                    <img src={data.eyecatch?.url} alt="eyecatch" />
                    <h2 className="text-center mt-5 ">{data.title}</h2>
                    <p className="absolute bottom-1 right-2 text-sm">
                      更新：{new Date().toLocaleDateString(data.updataDateAt)}
                    </p>
                  </li>
                </Link>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default SideMenu;
