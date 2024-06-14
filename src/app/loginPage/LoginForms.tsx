import React, { useEffect, useState } from "react";

import EmailForm from "./EmailForm";
import { GitHubLogin, GoogleLogin } from "../libs/firebase/auth";
import { auth } from "../libs/firebase/initialize";
import { useAuthState } from "react-firebase-hooks/auth";
import Link from "next/link";
import { ArrowBack } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";
import { saveUserData } from "../libs/firebase/firestore";

const LoginForms = () => {
  const [login, setLogin] = useState<boolean>(true);
  const [emailLogin, setEmailLogin] = useState<boolean>(false);
  const [user] = useAuthState(auth);
  const router = useRouter();

  const handleToggle = () => {
    setLogin(!login);
  };

  return (
    <div className="w-96 md:w-5/12 h-auto mx-auto bg-gray-300 rounded-3xl shadow-xl ">
      {login ? (
        <div className="relative mt-10 md:w-11/12 mx-auto h-auto  ">
          <h2 className=" mt-8 inline-block text-black text-2xl border-b-2 border-black font-bold">
            ログイン
          </h2>
          <button
            className="absolute top-2 left-3 text-blue-400 hover:opacity-70"
            onClick={() => router.back()}
          >
            {/* <ArrowBack></ArrowBack>
    <span className="ml-1">前のページへ
    </span> */}
          </button>
          <ul className="flex-col items-center mx-auto py-10 w-8/12">
            <li
              className="bg-blue-600 text-xl rounded-full py-3  text-white border-4 border-blue-600 mb-3 hover:boder-2  hover:border-gray-50 cursor-pointer shadow-lg"
              onClick={() => GoogleLogin(login)}
            >
              Googleでログイン
            </li>
            <li
              className="bg-green-600 text-xl rounded-full py-3 text-white border-4 border-green-600 mb-3 hover:boder-2  hover:border-gray-50 cursor-pointer shadow-lg"
              onClick={() => GitHubLogin(login)}
            >
              GitHubでログイン
            </li>
            <li
              className={`bg-red-600 text-white text-xl rounded-full py-3 border-4 border-red-600 mb-3 hover:boder-2  hover:border-gray-50 cursor-pointer shadow-lg`}
              onClick={() => setEmailLogin(!emailLogin)}
            >
              emailでログイン
            </li>
          {emailLogin === true ? <EmailForm login={login} /> : <div></div>}
          </ul>
          <button
            className="bg-green-500 w-5/12 h-10 rounded-md mb-12 border-2 border-gray-50 shadow-md"
            onClick={() => setLogin(!login)}
          >
            新規登録はこちら
          </button>
        </div>
      ) : (
        <div className="relative mt-10 md:w-11/12 mx-auto h-auto  ">
          <h2 className=" mt-8 inline-block text-black text-2xl border-b-2 border-black font-bold">
            新規登録
          </h2>
          <button
            className="absolute top-2 left-3 text-blue-400 hover:opacity-70"
            onClick={() => router.back()}
          >
            {/* <ArrowBack></ArrowBack>
          <span className="ml-1">前のページへ
          </span> */}
          </button>
          <ul className="flex-col items-center mx-auto py-10 w-8/12">
            <li
              className="bg-blue-600 text-xl rounded-full py-3  text-white border-4 border-blue-600 mb-3 hover:boder-2  hover:border-gray-50 cursor-pointer shadow-lg"
              onClick={() => GoogleLogin(login)}
            >
              Googleで新規登録
            </li>
            <li
              className="bg-green-600 text-xl rounded-full py-3  text-white border-4 border-green-600 mb-3 hover:boder-2  hover:border-gray-50 cursor-pointer shadow-lg"
              onClick={() => GitHubLogin(login)}
            >
              GitHubで新規登録
            </li>
            <li
              className={`bg-red-600 text-white text-xl rounded-full py-3 border-4 border-red-600 mb-3 hover:boder-2  hover:border-gray-50 cursor-pointer shadow-lg`}
              onClick={() => setEmailLogin(!emailLogin)}
            >
              emailで新規登録
            </li>
            {emailLogin === true ? <EmailForm login={login} /> : <div></div>}
          </ul>
          <button
            className="bg-green-500 w-5/12 h-10 rounded-md mb-12 border-2 border-gray-50 shadow-md"
            onClick={() => setLogin(!login)}
          >
            ログインはこちら
          </button>
        </div>
      )}
    </div>
  );
};

export default LoginForms;
