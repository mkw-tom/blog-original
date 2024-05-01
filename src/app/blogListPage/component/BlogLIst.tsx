"use client";
import React, { useState } from "react";
import { Search } from "@mui/icons-material";
import SearchBlog from "./SearchBlogs";
import Link from "next/link";

const BLogLIst = ({ blogData }: any) => {
  const [inputText, setInputText] = useState<string>();

  return (
    <div>
      <div className="mt-40 bg-blue-100"></div>
      <main className="flex-col items-center text-center">
        <h1 className="inline-block text-3xl font-bold text-amber-700 border-b-2 border-amber-700">
          投稿一覧
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
      <ul className="flex flex-wrap gap-7 mt-10 mx-auto w-11/12 md:w-10/12 min-h-96 mb-24 ">
        {inputText === undefined ? (
           <>
           {blogData.map((data: any, index: number) => (
             <Link
               key={data.id}
               href={`blogPages/${index}`}
               className="w-52 h-52 bg-orange-300"
             >
               <li className="inline-block w-full h-full bg-white rounded-md shadow-lg px-3 py-3 relative hover:opacity-70 hover:duration-1500">
                 <img src={data.eyecatch?.url} alt="eyecatch" />
                 <h2 className="text-center mt-5 ">{data.title}</h2>
                 <p className="absolute bottom-1 right-2 text-sm">
                   更新：{new Date().toLocaleDateString(data.updataDateAt)}
                 </p>
               </li>
             </Link>
           ))}
         </> 
        ) : (<SearchBlog blogData={blogData} inputText={inputText} />)}

        
      </ul>
    </div>
  );
};

export default BLogLIst;
