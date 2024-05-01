"use client"
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Business, Close, Home, LibraryBooks, Login } from "@mui/icons-material";
import Link from "next/link";

const SIdebar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
        className="absolute top-28 bg-white h-72 w-52 duration-300 shadow-xl rounded-r-md"
      >
        <ul className="flex-col">
          <Link
            href="/"
            className="relative block w-full text-center py-3 border-b-2 border-r-2 border-gray-300 text-amber-700 hover:bg-amber-100"
          >
            <span className="absolute left-5 top-3"><Login></Login></span> ログイン
          </Link>
          <Link
            href="/"
            className="relative block w-full text-center py-3 border-b-2 border-r-2 border-gray-300 text-amber-700 hover:bg-amber-100"
          >
            <span className="absolute left-5 top-3"><Home></Home></span>ホーム
          </Link>
          <Link
            href="/blogListPage"
            className="relative block w-full text-center py-3 border-b-2 border-r-2 border-gray-300 text-amber-700 hover:bg-amber-100"
          >
            <span className="absolute left-5 top-3"><LibraryBooks></LibraryBooks></span>投稿一覧
          </Link>
          <Link
            href="/"
            className="relative block w-full text-center py-3 border-b-2 border-r-2 border-gray-300 text-amber-700 hover:bg-amber-100"
          >
            <span className="absolute left-5 top-3"><Business></Business></span>サイト概要
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
