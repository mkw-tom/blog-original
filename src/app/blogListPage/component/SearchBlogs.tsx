import { SearchBlogsProps } from "@/type";
import Link from "next/link";
import React from "react";

const searchBlogs = ({ blogData, inputText }: SearchBlogsProps) => {
  const searchBlog: any = blogData.filter((data: any) =>
    data.title.includes(`${inputText}`)
  );
  console.log(searchBlog);

  return (
    <>
      <ul className="flex flex-wrap gap-7 mt-10 mx-auto w-11/12 md:w-10/12  min-h-96 mb-24 ">
        {searchBlog.length === 0 ? (
          <p className="block text-2xl w-96 h-9 mx-auto mt-16 text-center opacity-70">記事が見つかりません。</p>
        ) : (
          <>
            {searchBlog.map((data: any, index: number) => (
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
        )}
      </ul>
    </>
  );
};

export default searchBlogs;
