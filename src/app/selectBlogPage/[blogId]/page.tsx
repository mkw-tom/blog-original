import Footer from "@/components/Footer ";
import Header from "@/components/Header";
import { getBlogData } from "@/libs/micro-cms/client";
import parse from "html-react-parser";
import Link from "next/link";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import CommentIcon from "@mui/icons-material/Comment";
import { Send } from "@mui/icons-material";
import SideMenu from "./SideMenu";
import CommentForm from "./CommentForm";


const page = async ({ params }: { params: { blogId: string } }) => {

  const blogData = await getBlogData();
  // const blogPageId: string = params.blogId;
  const page: any = blogData.find((data) => data.id === params.blogId);
  console.log(page)
  

  return (
    <div>
      <Header />
      <div className="w-full h-full bg-mainColor">
        <main className="flex justify-around w-11/12 h-auto mb-16 mx-auto pt-10">
          <div className="w-auto h-auto min-w-96 mx-5 px-7 py-10 rounded-md shadow-lg bg-white flex-1 relative">
            <Link href="/blogPage" className="text-sm text-blue-400 hover:opacity-65 absolute top-2 right-2">Back to</Link>
            <h1 className="h-auto text-3xl font-bold mb-6 border-l-8 border-l-orange-600 pl-5">{page.title}</h1>
              <p className=" text-gray-500  ml-auto text-right">
                <span className="mr-3 ml-auto">
                  更新日:{new Date(page.updatedAt).toLocaleDateString()}
                </span>
                <span className="">
                  投稿日:{new Date(page.publishedAt).toLocaleDateString()}
                </span>
              </p>
            <img src={page.eyecatch?.url} alt="" />
            {parse(page.content)}

            <CommentForm page={page}/>
          </div>
          
          <SideMenu blogData={blogData} page={page}/>
        </main>

      </div>
      <Footer />
    </div>
  );
};

export default page;
