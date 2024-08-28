'use client';
import React, { useEffect, useState } from 'react';
import { KeyboardArrowDown, Search } from '@mui/icons-material';
import Link from 'next/link';
import Blogs from './selectBlogPage/[blogId]/Blog';
import SearchBlog from './selectBlogPage/[blogId]/SearchBlog';
// import { useBlogData } from "../contexts/BlogDataContext";
import Image from 'next/image';
import useBlogsFilter from '@/Hooks/useBlogsFilter';

const BLogLIst = ({ blogData }: { blogData: BlogDataType[] }) => {
  const { filterToggle, isSelect, buttonText, recentSort, oldestSort} = useBlogsFilter(blogData);
  // const [isSelect, setIsSelect] = useState<boolean>(false);
  // const [buttonText, setButtonText] = useState<string>('新しい順');

  const pageTitle = (title: any) => {
    if (title.length > 15) {
      return title.substring(0, 15) + '...';
    } else {
      return title;
    }
  };


  return (
    <div>
      <div className="relative w-11/12 mx-auto mt-5 text-orange-600">
        <h1 className="text-4xl text-orange-600 font-bold">Blogs</h1>
        <button
          className="bg-white border-2 focus:border-orange-600 rounded-md px-3 py-1 block ml-auto w-32"
          // onClick={() => setIsSelect(!isSelect)}
          onClick={filterToggle}
        >
          <span>{buttonText}</span>
          <KeyboardArrowDown></KeyboardArrowDown>
        </button>
        <ul
          style={{ display: isSelect ? 'block' : 'none' }}
          className="flex-col text-center bg-white rounded-md shadow-xl w-32 absolute  right-0 z-20 border-2 duration-300"
        >
          <li
            className="cursor-pointer py-1 border-2 hover:bg-gray-300 rounded-md hover:border-orange-600"
            onClick={recentSort}
          >
            新しい順
          </li>
          <li
            className="cursor-pointer py-1 border-2  hover:bg-gray-300 rounded-md hover:border-orange-600"
            onClick={oldestSort}
          >
            古い順
          </li>
        </ul>
      </div>

      {blogData?.length === 0 ? (
        <p className="block text-2xl w-96 h-9 mx-auto mt-16 text-center opacity-70">
          記事が見つかりません。
        </p>
      ) : (
        <div className="w-11/12  block mx-auto pl-10 md:px-10 h-full overflow-x-auto">
          <ul className="flex flex-row justify-between  mt-12 w-full h-auto gap-12 ">
            {blogData.map((data: any) => (
              <Link
                key={data.id}
                href={`selectBlogPage/${data.id}`}
                className="md:w-72 w-72 h-auto mb-10 "
              >
                <li className="inline-block w-72 h-full bg-white rounded-md shadow-lg relative hover:opacity-70 hover:duration-1500">
                  <img
                    src={data.eyecatch?.url}
                    width={data.eyecatch?.width}
                    height={data.eyecatch?.height}
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
