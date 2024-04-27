"use server";
import Blog from "@/app/components/Blog";
import Header from "@/app/components/Header";
import { getBlogData } from "@/app/libs/client";
import parse from "html-react-parser";
import Link from "next/link";

import React, { ReactNode } from "react";

const page = async ({ params }: { params: { blogId: number } }) => {
  const blogData = await getBlogData();
  const blogNum: number = params.blogId;
  const page = blogData[blogNum];

  return (
    <div>
      <Header />
      <main className="flex justify-around mt-10 w-10/12 h-auto mb-16 mx-auto">
        <div className="w-auto h-auto mx-5 px-7 py-10 rounded-md shadow-lg bg-white flex-1">
          <h1 className="h-auto text-2xl font-bold mb-6">{page.title}</h1>
          <p className="text-right text-gray-600">
            <span className="mr-3 ">
              最終更新日:{new Date().toLocaleDateString(page.updataDateAt)}
            </span>
            <span>
              投稿日:{new Date().toLocaleDateString(page.updataDateAt)}
            </span>
          </p>
          <img src={page.eyecatch?.url} alt="" />
          {parse(page.content)}
        </div>

        <div className="w-3/12 max-w-80 mx-5 px-5 py-10 rounded-md shadow-lg bg-yellow-100">
          <h2>最新の投稿</h2>
          <hr />
          <ul className="flex-col ">
            {blogData.map((data, index) => (
              <Link href={`/blogPages/${index}`}>
                <article className="bg-white mt-5 px-3 py-3 rounded-md shadow--md">
                  <h3>{data.title}</h3>
                  <img src={data.eyecatch?.url} alt="アイキャッチ画像" />
                </article>
              </Link>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default page;
