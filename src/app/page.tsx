import Link from "next/link";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer ";
import { getBlogData } from "./libs/micro-cms/client";
import BlogList from "./components/BlogList";

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
