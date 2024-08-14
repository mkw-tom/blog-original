"use client"
import { Login, Send } from "@mui/icons-material";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";;
import CommentArea from "./CommentArea ";

const CommentForm = ({ page }: { page: any }) => {
  const [newText, setNewText] = useState<string>("");
  const [commentList, setCommentList] = useState<any[]>([]);
  const [isLike, setIsLike] = useState<boolean>();
  const [commentLikes, setCommentLikes] = useState<string[]>([]);
  const ref = useRef<HTMLTextAreaElement>(null!);
  // const {data} = useData()

  // useEffect(() => {
  //   const getContents = async () => {
  //     const contents: any | undefined = await getBlogContents(
  //       page.id,
  //       page.title
  //     );
  //     if (user === null) {
  //       setCommentLikes(contents.likes);
  //       setCommentList(contents.comments);
  //       return;
  //     }
  //     setCommentLikes(contents.likes);
  //     setCommentList(contents.comments);
  //   };
  //   getContents();
  // }, []);

  // const handleCommented = async () => {
  //   const newList: CommentDataProps[] = [
  //     ...commentList,
  //     {
  //       uid: user?.uid,
  //       userName: user?.displayName,
  //       userPhoto: user?.photoURL,
  //       text: newText,
  //       likes: [],
  //     },
  //   ];
  //   setCommentList(newList);
  //   await addComment(page.id, newList);
  //   ref.current.value = "";
  // };

  const commentLikesToggle = () => {
    if (isLike === true) {
    }
  };

  return (
    <div className="mt-16 border-t-2 border-gray-400">
      <p className="mt-5 text-amber-600">コメントを書く</p>
        <div className="items-center justify-center w-full h-24 rounded-md  border-2 border-amber-600">
          <p className=" mt-2 text-center text-lg">
            コメント機能にはログインが必要です💦
          </p>
          <Link href="/loginPage">
            <button className="block bg-amber-600 text-white mx-auto px-2 py-2 mt-1 rounded-md opacity-100 shadow-md shadow-amber-950 active:shadow-none active:translate-y-1">
              <Login></Login>
              <span className="ml-2 ">ログイン</span>
            </button>
          </Link>
        </div>
        <textarea
          className="shadow-inner border-2 border-gray-200 w-full h-24 outline-2 outline-amber-300"
          onChange={(e) => setNewText(e.target.value)}
          ref={ref}
        ></textarea>
        <button
          className="block ml-auto text-amber-600 border-2 border-amber-600 hover:bg-amber-600 hover:text-white px-3 -y-1 rounded-md"
        >
          <Send></Send>
        </button>
      <div className="mt-10 border-y-2 border-gray-400 text-center">
          <p className="my-5 text-gray-400">コメントがありません。</p>
          <ul className="flex-col w-full h-auto ">
            <CommentArea />
          </ul>
      </div>
    </div>
  );
};

export default CommentForm;
