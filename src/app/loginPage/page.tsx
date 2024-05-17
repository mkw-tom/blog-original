"use client";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer ";
import EmailForm from "./EmailForm";
import { GoogleLogin } from "../libs/firebase.ts/auth";
import { auth } from "../libs/firebase.ts/initialize";
import { useAuthState } from "react-firebase-hooks/auth";
import Link from "next/link";
import { ArrowBack } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";
import { saveUserData } from "../libs/firebase.ts/firestore";

const page = () => {
  const [emailLogin, setEmailLogin] = useState<boolean>(false);
  const [user] = useAuthState(auth);
  const router = useRouter();
  
  useEffect(() => {
    if(user === null) {
      return
    }
    saveUserData();
  }, [user])

  return (
    <div>
      <Header />
      <div className="mt-40"></div>
      <main className="flex-col items-center text-center">
        <h1 className="inline-block text-3xl font-bold text-amber-700 border-b-2 border-amber-700">
          ログイン
        </h1>
        {user === null ? (
          <div className="relative mt-10 bg-gray-50 md:w-7/12 w-96 h-auto mx-auto rounded-3xl shadow-xl ">
            <button className="absolute top-2 left-3 text-blue-400 hover:opacity-70" onClick={() => router.back()}>
              <ArrowBack></ArrowBack><span className="ml-1">前へ戻る</span>
            </button>
            <ul className="flex-col items-center mx-auto py-10 w-8/12">
              <li
                className="bg-white text-xl rounded-full py-3 shadow-gray-200 text-blue-600 border-4 hover:border-blue-600 mb-3 active:bg-blue-600 active:text-white cursor-pointer"
                onClick={GoogleLogin}
              >
                Googleでログイン
              </li>
              <li className="bg-white text-xl rounded-full py-3 shadow-gray-200 text-green-600 border-4 hover:border-green-600 mb-3 active:bg-green-600 active:text-white cursor-pointer">
                GitHubでログイン
              </li>
              <li
                style={{
                  backgroundColor: emailLogin === true ? "red" : "white",
                  color: emailLogin === true ? "white" : "red",
                }}
                className="bg-white text-xl rounded-full py-3 shadow-gray-200 text-red-600 border-4 hover:border-red-600 mb-3 active:bg-red-600 active:text-white cursor-pointer"
                onClick={() => setEmailLogin(!emailLogin)}
              >
                emailでログイン
              </li>
              {emailLogin === true ? <EmailForm /> : <div></div>}
            </ul>
          </div>
        ) : (
          <div className="mt-10 bg-gray-50 md:w-7/12 w-96 h-auto mx-auto rounded-3xl shadow-xl ">
            <div className="flex-col py-20">
              <p className="text-xl mb-5">ログインが完了しました！</p>

              <button
                className="inline-block pl-7 pr-8 py-1 text-amber-600 border-2 border-amber-600 hover:bg-amber-600 hover:text-white rounded-md"
                onClick={() => router.back()}
              >
                <ArrowBack></ArrowBack>
                <span className="ml-2">続行</span>
              </button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default page;
