"use client"
import { useAuth } from '@/contexts/AuthContext';
import { Login, Logout } from '@mui/icons-material';
import Link from 'next/link';
import React from 'react';

const SignInUp = () => {
  const { user, signOut } = useAuth()
  return (
    <>
      {user ? (
        <button
        className="hover:opacity-65 duration-150 text-orange-600 flex flex-col md:flex-row items-center md:gap-1 "
        onClick={signOut}
        // style={{ display: user  ? 'inlineBlock' : 'none' }}
      >
        <Logout className="mr-2" />
        <span className="text-sm md:text-lg">SignOut</span>
      </button>
      ) : (
        <Link
          href="/loginPage"
          className="hover:opacity-65 duration-150 text-orange-600 flex flex-col md:flex-row items-center md:gap-1"
          // style={{ display: user ? 'none' : 'inlineBlock' }}
        >
          <Login />
          <span className="text-sm md:text-lg">SignIn/Up</span>
        </Link>
      )}
    </>
  );
};

export default SignInUp;
