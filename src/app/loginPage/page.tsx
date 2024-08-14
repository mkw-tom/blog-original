"use client"
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer ";
import LoginForms from "./LoginForms";
import { ArrowBack } from "@mui/icons-material";
import router from "next/router";

const page = () => {
  // const [emailLogin, setEmailLogin] = useState<boolean>(false);
  return (
    <div>
      <Header />
      <div className="mt-40"></div>
      <main className="flex-col items-center text-center">
        <div className="flex flex-col md:flex-row">
          <div className="block md:w-6/12 w-11/12 h-auto my-auto">
            <h1 className="inline-block text-4xl font-bold text-amber-700 border-b-2 border-amber-700">
              ログイン・新規登録
            </h1>
            <ul className="text-left w-6/12 mx-auto pl-12 mt-6">
              <li className="text-bold text-2xl py-6">✔︎ 記事へのコメント</li>
              <li className="text-bold text-2xl py-6">✔︎ 投稿のいいね・シェア</li>
              <li className="text-bold text-2xl py-6">✔︎ ブックマーク機能</li>
            </ul>
          </div>
            <LoginForms />
            <div className="mt-10 bg-gray-50 md:w-6/12 w-96 h-auto mx-auto rounded-3xl shadow-xl ">
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
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default page;
