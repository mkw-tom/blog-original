import Footer from "@/app/components/Footer ";
import Header from "@/app/components/Header";
import { getBlogData } from "@/app/libs/client";
import parse from "html-react-parser";
import Link from "next/link";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import CommentIcon from "@mui/icons-material/Comment";
import { Send } from "@mui/icons-material";
import SideMenu from "../component/SideMenu";
import CommentForm from "../component/CommentForm";

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
          <h1 className="h-auto text-3xl font-bold mb-6 border-l-8 border-l-amber-700 pl-5">{page.title}</h1>
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

          <CommentForm page={page}/>
        </div>
        
        <SideMenu blogData={blogData}/>
      </main>
      <Footer />
    </div>
  );
};

export default page;
