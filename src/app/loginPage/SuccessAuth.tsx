"use client";  // クライアントコンポーネントとして指定
import { useRouter } from 'next/router';
import { useAuth } from '@/contexts/AuthContext';
import { ArrowBack } from '@mui/icons-material';
import React from 'react';
import Link from 'next/link';


const SuccessAuth = () => {
  const { user } = useAuth();

  // const pageBack = () => {
  //   router.back();
  // };
  return (
    <div
      className="flex-col py-20"
      style={{ display: user ? 'block' : 'none' }}
    >
      <p className="text-xl mb-5">ログインが完了しました！</p>
      <Link
        href="/"
        className="inline-block pl-7 pr-8 py-1 text-orange-600 border-2 border-orange-600 hover:bg-orange-600 hover:text-white rounded-md"
        // onClick={pageBack}
      >
        <ArrowBack></ArrowBack>
        <span className="ml-2">続行</span>
      </Link>
    </div>
  );
};

export default SuccessAuth;
