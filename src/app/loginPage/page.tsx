"use client";
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer ";
import EmailForm from "./EmailForm";
import { GoogleLogin } from "../libs/firebase.ts/auth";

const page = () => {
  const [emailLogin, setEmailLogin] = useState<boolean>(false);

  const hanndlePasswordHidden = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
  };

  return (
    <div>
      <Header />
      <div className="mt-40"></div>
      <main className="flex-col items-center text-center">
        <h1 className="inline-block text-3xl font-bold text-amber-700 border-b-2 border-amber-700">
          ログイン
        </h1>
        <div className="mt-10 bg-gray-50 md:w-7/12 w-96 h-auto mx-auto rounded-3xl shadow-xl ">
          <ul className="flex-col items-center mx-auto py-10 w-6/12">
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
      </main>
      <Footer />
    </div>
  );
};

export default page;
