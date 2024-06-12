"use client";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  ArrowRight,
  Business,
  Close,
  Home,
  LibraryBooks,
  Login,
  Logout,
} from "@mui/icons-material";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../libs/firebase/initialize";
import { handleLogout } from "../../libs/firebase/auth";

const SIdebar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [user] = useAuthState(auth);

  return (
    <div className="md:hidden">
      <button
        className="absolute top-10 text-white px-5"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <Close></Close> : <MenuIcon></MenuIcon>}
      </button>
      <nav
        style={{ left: isOpen ? "0" : "-280px" }}
        className="absolute top-28 bg-white h-auto w-52 duration-300 shadow-xl rounded-r-md"
      >
        <ul className="flex-col">
          {user === null ? (
            <div></div>
          ) : (
            <div className="flex-col items-center text-center  border-b-2 border-r-2 border-gray-300 py-5">
              <Link
                href="./"
                className="flex items-center absolute top-1 right-1 text-gray-500 hover:text-amber-500"
              >
                <small>設定</small><ArrowRight></ArrowRight>
              </Link>
              <img
                src={`${user?.photoURL}`}
                alt=""
                className=" block rounded-full mx-auto w-16 h-16 border-4 border-amber-600"
              />
              <p className="mt-3 text-amber-700">{user?.displayName}</p>
            </div>
          )}
          {user === null ? (
            <Link
              href="/loginPage"
              className="relative block w-full text-center py-3 border-b-2 border-r-2 border-gray-300 text-amber-700 hover:bg-amber-100"
            >
              <span className="absolute left-5 top-3">
                <Login></Login>
              </span>
              ログイン
            </Link>
          ) : (
            <button
              className="relative block w-full text-center py-3 border-b-2 border-r-2 border-gray-300 text-amber-700 hover:bg-amber-100"
              onClick={handleLogout}
            >
              <span className="absolute left-5 top-3">
                <Logout></Logout>
              </span>
              ログアウト
            </button>
          )}

          <Link
            href="/"
            className="relative block w-full text-center py-3 border-b-2 border-r-2 border-gray-300 text-amber-700 hover:bg-amber-100"
          >
            <span className="absolute left-5 top-3">
              <Home></Home>
            </span>
            ホーム
          </Link>
          <Link
            href=""
            className="relative block w-full text-center py-3 border-b-2 border-r-2 border-gray-300 text-amber-700 hover:bg-amber-100"
          >
            <span className="absolute left-5 top-3">
              <Business></Business>
            </span>
            サイト概要
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default SIdebar;
function setSidebarStyle(arg0: string) {
  throw new Error("Function not implemented.");
}
