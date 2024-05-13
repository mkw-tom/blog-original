"use client";
import Link from "next/link";
import React, { useState } from "react";
import SIdebar from "./SIdebar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../libs/firebase.ts/initialize";
import { signOut } from "firebase/auth";
import { handleLogout } from "../libs/firebase.ts/auth";

const Header = () => {
  const [user] = useAuthState(auth);

  return (
    <header className="flex itmes-center justify-between w-full h-aut bg-amber-700 pb-1 shadow-xl fixed top-0 z-10">
      <SIdebar />
      <h1 className="text-white text-3xl font-bold tracking-widest my-9 mx-auto">
        BLOG
      </h1>
      <nav className="text-white my-9 list-none gap-8 text-lg hidden md:flex mr-16">
        <Link href="/" className="hover:opacity-65 duration-150">
          home
        </Link>
        <Link href="/" className="hover:opacity-65 duration-150">
          サイト概要
        </Link>
        { user === null ? (
          <Link href="/loginPage" className="hover:opacity-65 duration-150">
            ログイン
          </Link>
        ) : (
          <div className="hover:opacity-65 duration-150 cursor-pointer" onClick={handleLogout}>ログアウト</div>
        )}
      </nav>
    </header>
  );
};

export default Header;
