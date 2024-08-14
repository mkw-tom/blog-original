import Link from "next/link";
import React, { useState } from "react";
import SIdebar from "./SIdebar";
import { Button } from "@mui/material";
import { ArrowRight, Article, Drafts, Home } from "@mui/icons-material";

const Header = () => {
  return (
    <header className="flex flex-col itmes-center justify-between w-full h-auto bg-primary shadow-md top-0 z-10 bg-mainColor px-5 border-t-8 border-t-orange-600 relative ">
      {/* <SIdebar /> */}
      <div className="flex mx-5">
        <h1 className="text-orange-600 text-3xl font-bold tracking-widest mt-8 mb-4 mr-auto">
          TestBlog
        </h1>
        <div className="@container w-[230px] group flex h-full my-auto justify-between">
          <img
            className="block w-12 h-12 rounded-full ml-auto mr-5 border-2 border-orange-600"
            src={``}
            alt=""
          />
          <button className=" w-28 md:w-40 border-2 border-orange-600 text-orange-600 font-bold rounded-sm">
            LOGOUT
          </button>
        </div>
      </div>
      <nav className="items-center justify-end text-orange-600  list-none gap-10 md:gap-16 text-lg  flex h-10 mt-auto mr-10  md:mx-28 lg:mr-32">
        <Link
          href="/"
          className="hover:opacity-65 duration-150 text-orange-600 flex items-center gap-1"
        >
          <Home />
          Home
        </Link>
        <Link
          href="/blogPage"
          className="hover:opacity-65 duration-150 text-orange-600 flex items-center gap-1"
        >
          <Article />
          Blog
        </Link>
        <Link
          href="/products"
          className="hover:opacity-65 duration-150 text-orange-600 flex items-center gap-1"
        >
          <Drafts />
          Product
        </Link>
      </nav>
    </header>
  );
};

export default Header;
