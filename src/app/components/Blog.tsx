import { KeyboardArrowDown, ReceiptTwoTone } from "@mui/icons-material";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Blogs = ({ blogData }: { blogData: any }) => {
  const [blogs, setBlogs] = useState<any[]>([...blogData])
  const [isSelect, setIsSelect] = useState<boolean>(false);
  const [buttonText, setButtonText] = useState<string>("新しい順")
  

  const recentSort = () => {
    const newData = blogData.sort((a:any, b:any) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt));
    console.log(newData)
    setBlogs(newData);
    setButtonText("新しい順");
    setIsSelect(false)
    console.log(blogs);
  };

  const oldestSort = () => {
    const newData = blogData.sort((a:any, b:any) => Date.parse(a.publishedAt) - Date.parse(b.publishedAt));
    console.log(newData)
    setBlogs(newData)
    setButtonText("古い順");
    setIsSelect(false)
    console.log(blogs);
  };

  return (
    <>
      <div className="relative w-8/12 mx-auto mt-5 text-amber-700">
        <button
          className="bg-white border-2 focus:border-amber-500 rounded-md px-3 py-1 block ml-auto w-32"
          onClick={() => setIsSelect(!isSelect)}
        >
          <span>{buttonText}</span><KeyboardArrowDown></KeyboardArrowDown>
        </button>
        <ul
          style={{ display: isSelect ? "block" : "none"}}
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

      <ul className="flex flex-wrap gap-7 mt-12 mx-auto w-11/12 md:w-11/12 min-h-96">
        {blogs.map((data: any, index: number) => (
          <Link
            key={data.id}
            href={`blogPages/${index}`}
            className="w-full h-full bg-orange-300"
          >
            <li className="inline-block w-full h-full  bg-white rounded-md shadow-lg px-3 py-3 relative hover:opacity-70 hover:duration-1500">
              <img src={data.eyecatch?.url} alt="eyecatch" />
              <h2 className="text-center mt-5 ">{data.title}</h2>
              <p className="absolute bottom-1 right-2 text-sm">
                投稿：{new Date(data.publishedAt).toLocaleDateString()}
              </p>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default Blogs;
