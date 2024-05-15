import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer ";
import { useState } from "react";
import { getBlogData } from "./libs/client";
import BlogList from "./components/blogList/BlogList";

export default async function Home() {
  const blogData = await getBlogData();

  return (
    <div>
      <Header />
      <BlogList blogData={blogData} />
      <Footer />
    </div>
  );
}
