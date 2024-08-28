'use client';
import { Login, Send, Comment } from '@mui/icons-material';
import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import CommentArea from './CommentArea ';
import { useAuth } from '@/contexts/AuthContext';

const CommentForm = ({ page }: { page: any }) => {
  const { user } = useAuth();
  const [newText, setNewText] = useState<string>('');
  const [commentList, setCommentList] = useState<any[]>([]);
  const [isLike, setIsLike] = useState<boolean>();
  const [commentLikes, setCommentLikes] = useState<string[]>([]);
  const ref = useRef<HTMLTextAreaElement>(null!);

  const commentLikesToggle = () => {
    if (isLike === true) {
    }
  };

  return (
    <>
      {user ? (
        <>
          <textarea
            className="shadow-inner border-2 border-gray-200 w-full h-24 outline-2 outline-amber-300"
            onChange={(e) => setNewText(e.target.value)}
            ref={ref}
          ></textarea>
          <button className="block ml-auto text-orange-600 border-2 border-orange-600 hover:bg-orange-600 hover:text-white px-3 -y-1 rounded-md">
            <Send></Send>
          </button>
          <div className="mt-10 border-y-2 border-gray-400 text-center">
            <p className="my-5 text-gray-400">コメントがありません。</p>
            <ul className="flex-col w-full h-auto ">
              <CommentArea />
            </ul>
          </div>
        </>
      ) : (
        <div className="border-t-2 border-gray-400">
          <p className="mt-5 text-orange-600">
            <Comment className="mr-2" />
            <span>Leave a comment</span>
          </p>
          <div className="items-center justify-center w-full h-24 rounded-md  border-2 border-orange-600">
            <p className=" mt-2 text-center text-lg">
              You need to sign in or sign up 💦
            </p>
            <Link href="/loginPage">
              <button className="block bg-orange-600 text-white mx-auto px-2 py-2 mt-1 rounded-md opacity-100 shadow-md shadow-amber-950 active:shadow-none active:translate-y-1">
                <Login></Login>
                <span className="ml-2 ">Sign In/up</span>
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default CommentForm;
