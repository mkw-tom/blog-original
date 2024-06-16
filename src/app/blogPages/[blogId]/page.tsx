import Footer from "@/app/components/common/Footer ";
import Header from "@/app/components/common/Header";
import { getBlogData } from "@/app/libs/micro-cms/client";
import parse from "html-react-parser";
import Link from "next/link";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import CommentIcon from "@mui/icons-material/Comment";
import { Send } from "@mui/icons-material";
import SideMenu from "../../components/SideMenu";
import CommentForm from "../../components/CommentForm";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/app/libs/firebase/initialize";


const page = async ({ params }: { params: { blogId: string } }) => {

  const blogData: any[] = await getBlogData();
  // const blogPageId: string = params.blogId;
  const page: any = blogData.find((data) => data.id === params.blogId);
  console.log(page)
  
  // const pageData = await getDocs(collection(db, "comments", `${page.id}`));
  // console.log(pageData)


  return (
    <div>
      <Header />
      <div className="mt-40"></div>
      <main className="flex justify-around mt-10 w-10/12 h-auto mb-16 mx-auto">
        <div className="w-auto h-auto min-w-96 mx-5 px-7 py-10 rounded-md shadow-lg bg-white flex-1 relative">
          <Link href="/" className="text-sm text-blue-400 hover:opacity-65 absolute top-2 right-2">HOMEへ戻る</Link>
          <h1 className="h-auto text-3xl font-bold mb-6 border-l-8 border-l-amber-700 pl-5">{page.title}</h1>
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
      <Footer />
    </div>
  );
};

export default page;
