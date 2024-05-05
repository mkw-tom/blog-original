import Footer from "@/app/components/Footer ";
import Header from "@/app/components/Header";
import { getBlogData } from "@/app/libs/client";
import parse from "html-react-parser";
import Link from "next/link";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import CommentIcon from "@mui/icons-material/Comment";
import { Send } from "@mui/icons-material";
import SideMenu from "../component/SideMenu";

const page = async ({ params }: { params: { blogId: number } }) => {
  const blogData = await getBlogData();
  const blogNum: number = params.blogId;
  const page = blogData[blogNum];

  return (
    <div>
      <Header />
      <div className="mt-40"></div>
      <main className="flex justify-around mt-10 w-10/12 h-auto mb-16 mx-auto">
        <div className="w-auto h-auto min-w-96 mx-5 px-7 py-10 rounded-md shadow-lg bg-white flex-1">
          <h1 className="h-auto text-3xl font-bold mb-6">{page.title}</h1>
          <div className="flex w-full justify-between ">
            <p className="flex flex-wrap  text-gray-500 w-8/12">
              <span className="mr-3">
                最終更新日:{new Date().toLocaleDateString(page.updataDateAt)}
              </span>
              <span>
                投稿日:{new Date().toLocaleDateString(page.updataDateAt)}
              </span>
            </p>
            <span>
              <ThumbUpAltIcon></ThumbUpAltIcon> 100
            </span>
          </div>
          <img src={page.eyecatch?.url} alt="" />
          {parse(page.content)}
          <div className="mt-16 border-t-2 border-gray-400">
            <p className="mt-5 text-amber-600">コメントを書く</p>
            <textarea className="shadow-inner border-2 border-gray-200 w-full h-24 outline-2 outline-amber-300"></textarea>
            <button className="block ml-auto text-amber-600 border-2 border-amber-600 hover:bg-amber-600 hover:text-white px-3 -y-1 rounded-md">
              <Send></Send>
            </button>
            <div className="mt-10 border-y-2 border-gray-400 text-center">
              <p className="my-5 text-gray-400">コメントがありません。</p>
            </div>
          </div>
        </div>
        <SideMenu blogData={blogData}/>
      </main>
      <Footer />
    </div>
  );
};

export default page;
