import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex itmes-center justify-around w-full h-aut bg-amber-700 shadow-xl">
      <h1 className="text-white text-3xl my-9">BLOG</h1>
      <nav className="flex text-white my-9 list-none gap-8 text-lg">
        <Link href="/" className="hover:opacity-65 duration-150">
          home
        </Link>
        <Link href="/" className="hover:opacity-65 duration-150">
          ブログ一覧
        </Link>
        <Link href="/" className="hover:opacity-65 duration-150">
          サイト概要
        </Link>
      </nav>
    </header>
  );
};

export default Header;
