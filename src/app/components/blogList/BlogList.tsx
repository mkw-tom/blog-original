"use client";
import React, { useState } from "react";
import { Search } from "@mui/icons-material";
import Link from "next/link";
import Blogs from "./Blog";
import SearchBlog from "./SearchBlog";


const BLogLIst = ({ blogData }: any) => {
  const [inputText, setInputText] = useState<string>();

  return (
    <div>
      <div className="mt-40 bg-blue-100"></div>
      <main className="flex-col items-center text-center">
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
      </main>
      {inputText === undefined ? (
        <Blogs blogData={blogData} />
      ) : (
        <SearchBlog blogData={blogData} inputText={inputText} />
      )}
    </div>
  );
};

export default BLogLIst;
