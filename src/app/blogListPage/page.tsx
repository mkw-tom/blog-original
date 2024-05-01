import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer ";
import BlogLIst from "./component/BlogLIst";
import { getBlogData } from "@/app/libs/client";


const page = async () => {
  const blogData = await getBlogData();
  return (
    <div>
      <Header />

      <BlogLIst blogData={blogData}/>
      <Footer />
    </div>
  );
};

export default page;
