"use client";
import React, { useEffect, useState } from "react";
import { KeyboardArrowDown, Search } from "@mui/icons-material";
import Link from "next/link";
import Blogs from "./Blog";
import SearchBlog from "./SearchBlog";

const BLogLIst = ({ blogData }: any) => {
  const [inputText, setInputText] = useState<string>();

  // const searchBlog:any  = blogData.filter((data: any) =>
  //   data.title.includes(`${inputText}`)
  // );
  const [blogs, setBlogs] = useState<any[]>(blogData);
  const [isSelect, setIsSelect] = useState<boolean>(false);
  const [buttonText, setButtonText] = useState<string>("新しい順");

  const recentSort = () => {
    const newData:any[] = blogData.sort(
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
      {/* <main className="flex-col items-center text-center">
        <h1 className="inline-block text-5xl font-bold text-amber-700 my-10">
          welcome to my Blog !!
        </h1>
        <div className="flex justify-center mt-6">
          <input
            placeholder="検索"
            type="text"
            className="w-6/12 shadow-inner pl-3 rounded-l-full h-8"
            onChange={(e) => setInputText(e.target.value)}
          />
          <button className="bg-amber-700 text-white rounded-r-full pr-2 pl-2 px-2">
            <Search></Search>
          </button>
        </div>
      </main> */}

      <div className="relative w-8/12 mx-auto mt-5 text-amber-700">
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
        <ul className="flex flex-wrap gap-7 mt-12 mx-auto w-11/12 md:w-10/12 min-h-96">
          {blogs.map((data: any, index: number) => (
            <Link
              key={data.id}
              href={`blogPages/${index}`}
              className="w-52 h-52 bg-orange-300"
            >
              <li className="inline-block w-full h-full bg-white rounded-md shadow-lg px-3 py-3 relative hover:opacity-70 hover:duration-1500">
                <img src={data.eyecatch?.url} alt="eyecatch" />
                <h2 className="text-center mt-5 ">{data.title}</h2>
                <p className="absolute bottom-1 right-2 text-sm">
                  投稿：{new Date(data.publishedAt).toLocaleDateString()}
                </p>
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BLogLIst;
