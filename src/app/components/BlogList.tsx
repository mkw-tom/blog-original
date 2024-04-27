import React from "react";
import { getBlogData } from "../libs/client";
import Blog from "./Blog";

const BlogList = async () => {
  const blogData = await getBlogData();
  return (
    <div className="w-full mt-7">
      <ul className='flex  w-11/12 mx-auto items-center gap-8'>
        <Blog blogData={blogData} />
      </ul>
    </div>
  );
};

export default BlogList;
