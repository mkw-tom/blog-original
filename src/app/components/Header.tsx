"use client";
import Link from "next/link";
import React, { useState } from "react";
import SIdebar from "./SIdebar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../libs/firebase.ts/initialize";
import { signOut } from "firebase/auth";
import { handleLogout } from "../libs/firebase.ts/auth";
import { ArrowRight } from "@mui/icons-material";
import { Button } from "@mui/material";

const Header = () => {
  const [user] = useAuthState(auth);
  const userName = user?.displayName;
  const userPhoto = user?.photoURL;

  return (
    <header className="flex itmes-center justify-between w-full h-auto bg-amber-700 pb-1 shadow-xl fixed top-0 z-10">
      <SIdebar />
      <h1 className="text-white text-3xl font-bold tracking-widest my-9 mx-auto">
        TestBlog
      </h1>
      <nav className="hidden items-center text-white  list-none gap-8 text-lg  md:flex mr-16">
        <Link href="/" className="hover:opacity-65 duration-150">
          home
        </Link>
        <Link href="/" className="hover:opacity-65 duration-150">
          サイト概要
        </Link>
        {user === null ? (
          <Link href="/loginPage" className="hover:opacity-65 duration-150">
            ログイン
          </Link>
        ) : (
          <div className="group flex">
            <img
              src={`${userPhoto}`}
              alt=""
              className="block w-12 h-12 rounded-full border-2 border-white"
            />
            <div className="flex-col items-center justify-center hidden group-hover:block z-10 bg-amber-50 w-80 h-52 absolute top-5 right-5 duration-700 rounded-md shadow-lg border-2 border-amber-600 text-center pb-3">
              <Link
                href="./"
                className="flex items-center absolute top-3 right-5 text-gray-500 hover:text-amber-500"
              >
                <small>設定</small>
                <ArrowRight></ArrowRight>
              </Link>
              <img
                src={`${userPhoto}`}
                alt=""
                className="block mx-auto w-16 h-16 rounded-full mt-10 object-cover"
              />
              <p className="text-amber-700 mt-4 mb-2">{userName}</p>
              <p onClick={handleLogout} className="mt-3">
                <Button>ログアウト</Button>
              </p>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
