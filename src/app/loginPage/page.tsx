import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer ';
import LoginForms from './LoginForms';
import { LockOpen } from '@mui/icons-material';

const page = () => {
  return (
    <div className="bg-mainColor">
      <Header />
      <main className="flex-col items-center text-center ">
        <div className="flex flex-col md:flex-row mt-28 mb-20">
          <div className=" block md:w-6/12 w-11/12 h-auto my-auto pb-20">
            <h1 className="w-74 text-4xl inline-block font-bold text-orange-600 border-b-2 border-orange-600 mx-auto">
              Let's Sign Up !
            </h1>
            <h2 className='text-xl font-bold flex items-center justify-center text-center mt-5 gap-2 text-orange-700'>
              <LockOpen></LockOpen>
              <span>サインアップで機能をアンロック</span>
            </h2>
            <ul className="w-full flex justify-center mx-auto pl-12 mt-6 list-type-none gap-5">
              <li className="text-lg font-bold">コメント</li>
              <li className="text-lg font-bold">いいね＆シェア</li>
              <li className="text-lg font-bold">ブックマーク</li>
            </ul>
          </div>
          <LoginForms />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default page;
