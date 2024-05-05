import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer ";

const page = () => {
  return (
    <div>
      <Header />
      <div className="mt-40 bg-blue-100"></div>
        <main className="flex-col items-center text-center"> 
          <h1 className="inline-block text-3xl font-bold text-amber-700 border-b-2 border-amber-700">
          ログイン
          </h1>
          <div className="mt-10 bg-white md:w-7/12 h-96 w-96 mx-auto rounded-3xl shadow-xl ">
            <ul className="flex-col items-center mx-auto py-10 w-6/12 ">
              <li className="bg-blue-500 text-xl rounded-full py-3 text-white shadow-blue-500 shadow-md active:shadow-none active:translate-y-1">Googleでログイン</li>
              <li className="bg-green-500 text-xl rounded-full py-3 text-white shadow-green-500 shadow-md active:shadow-none active:translate-y-1 mt-5">GitHubでログイン</li>
              <li className="bg-orange-500 text-xl rounded-full py-3 text-white shadow-orange-500 shadow-md active:shadow-none active:translate-y-1 mt-5">Emailでログイン</li>
            </ul>
          </div>
        </main>
      <Footer />
    </div>
  );
};

export default page;
