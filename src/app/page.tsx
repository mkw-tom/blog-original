import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer ";
import { getBlogData } from "../libs/micro-cms/client";
import BlogList from "./blogPage/BlogList";
import MainArticle from "./blogPage/MainArticle";
// import { BlogDataProvider } from "./contexts/BlogDataContext";

export default async function Home() {

  return (
    <div className="w-full h-auto bg-mainColor">
      <Header />
      <Footer />
    </div>
  );
}
