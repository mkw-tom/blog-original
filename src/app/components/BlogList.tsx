import React from "react";
import { getBlogData } from "../libs/client";
import Article from "./Article";

const BlogList = async () => {
  const blogData = await getBlogData();
  return (
    <div className="w-full mt-7">
      <Article blogData={blogData} />
    </div>
  );
};

export default BlogList;
