"use client";
import React, { useEffect, useState } from "react";
import { KeyboardArrowDown, Search } from "@mui/icons-material";
import Link from "next/link";
import Blogs from "./Blog";
import SearchBlog from "./SearchBlog";

const BLogLIst = ({ blogData }: any) => {
  const [blogs, setBlogs] = useState<any[]>(blogData);
  const [isSelect, setIsSelect] = useState<boolean>(false);
  const [buttonText, setButtonText] = useState<string>("新しい順");

  const pageTitle = (title: any) => {
    if (title.length > 15) {
      return title.substring(0, 15) + "...";
    } else {
      return title;
    }
  };

  const recentSort = () => {
    const newData: any[] = blogData.sort(
      (a: any, b: any) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt)
    );
    setBlogs(newData);
    setButtonText("新しい順");
    setIsSelect(false);
  };

  const oldestSort = () => {
    const newData = blogData.sort(
      (a: any, b: any) => Date.parse(a.publishedAt) - Date.parse(b.publishedAt)
    );
    setBlogs(newData);
    setButtonText("古い順");
    setIsSelect(false);
  };

  return (
    <div>
      <div className="mt-40 bg-blue-100"></div>
      <h1 className="block mx-auto text-center text-5xl text-amber-700 font-bold animate-bounce">
        welcom to my Blog
      </h1>

      <div className="relative w-11/12 mx-auto mt-5 text-amber-700">
        <button
          className="bg-white border-2 focus:border-amber-500 rounded-md px-3 py-1 block ml-auto w-32"
          onClick={() => setIsSelect(!isSelect)}
        >
          <span>{buttonText}</span>
          <KeyboardArrowDown></KeyboardArrowDown>
        </button>
        <ul
          style={{ display: isSelect ? "block" : "none" }}
          className="flex-col text-center bg-white rounded-md shadow-xl w-32 absolute  right-0 z-20 border-2 duration-300"
        >
          <li
            className="cursor-pointer py-1 border-2 hover:bg-gray-300 rounded-md hover:border-amber-500"
            onClick={recentSort}
          >
            新しい順
          </li>
          <li
            className="cursor-pointer py-1 border-2  hover:bg-gray-300 rounded-md hover:border-amber-500"
            onClick={oldestSort}
          >
            古い順
          </li>
        </ul>
      </div>

      {blogs?.length === 0 ? (
        <p className="block text-2xl w-96 h-9 mx-auto mt-16 text-center opacity-70">
          記事が見つかりません。
        </p>
      ) : (
        <div className="block mx-auto pl-10 md:px-10 w-11/12 h-full ">
          <ul className="flex flex-wrap md:justify-between  mt-12 w-full h-auto gap-8 ">
            {blogs.map((data: any) => (
              <Link
                key={data.id}
                href={`blogPages/${data.id}`}
                className="md:w-3/12 w-5/12 h-auto bg-orange-300 mb-10 "
              >
                <li className="inline-block w-full h-full bg-white rounded-md shadow-lg relative hover:opacity-70 hover:duration-1500">
                  <img
                    src={data.eyecatch?.url}
                    alt="eyecatch"
                    className="rounded-t-md"
                  />
                  <h2 className="text-center px-3 pt-5 pb-10 text-lg">
                    {pageTitle(data.title)}
                  </h2>
                  <p className="absolute bottom-1 right-2 text-sm">
                    投稿：{new Date(data.publishedAt).toLocaleDateString()}
                  </p>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BLogLIst;
