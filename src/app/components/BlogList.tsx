
import React from "react";
import Blog from "./Blog";

const BlogList = () => {
  
  return (
    <div className="group flex-col w-10/12 min-w-96 mx-auto items-center mt-7 mb-40 bg-amber-600 px-6 py-6 rounded-md">
      <h2 className="block text-center text-xl text-white text-bold">
        最近の投稿
      </h2>
      <hr />
      <div className="flex items-center overflow-x-auto ">
        <ul className="flex w-full h-52 gap-7 mt-5 ">
          <Blog />
        </ul>
      </div>
    </div>
  );
};

export default BlogList;
