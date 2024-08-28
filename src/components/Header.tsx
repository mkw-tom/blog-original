import Link from 'next/link';
import React, { useState } from 'react';
import { ArrowRight, Article, Drafts, Home, Login } from '@mui/icons-material';
import SignInUp from './SignInUp';

const Header = () => {
  return (
    <header className="flex itmes-center justify-between w-full h-auto bg-primary shadow-md top-0 z-10 bg-mainColor px-7 border-t-8 border-t-orange-600 relative ">
      <h1 className="text-orange-600 text-3xl font-bold tracking-widest mt-6 mb-6 mr-auto">
        TestBlog
      </h1>

      <nav className="items-center justify-end text-orange-600  list-none gap-5 md:gap-12 text-lg  flex   md:mx-28 lg:mr-32 mt-6 mb-6">
        <Link
          href="/"
          className="hover:opacity-65 duration-150 text-orange-600 flex flex-col md:flex-row items-center md:gap-1"
        >
          <Home />
          <span className="text-sm md:text-lg">Home</span>
        </Link>
        <Link
          href="/blogsPage"
          className="hover:opacity-65 duration-150 text-orange-600 flex flex-col md:flex-row items-center md:gap-1"
        >
          <Article />
          <span className="text-sm md:text-lg">Blogs</span>
        </Link>
        <SignInUp />
      </nav>
    </header>
  );
};

export default Header;
