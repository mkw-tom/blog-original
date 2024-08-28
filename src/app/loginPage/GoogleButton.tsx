"use client"
import { useAuth } from '@/contexts/AuthContext';
import { Google } from '@mui/icons-material';
import React from 'react';

const GoogleButton = () => {
  const {user, signInWithGoogle} = useAuth();
  return (
    <button
      className="flex items-center justify-center w-64 border-2 border-orange-600 h-10 rounded-md text-orange-600 gap-2 font-bold mx-auto hover:bg-orange-600 hover:text-white duration-300"
      onClick={signInWithGoogle}
      style={{display: user ? "none" : "block"}}
    >
      <Google className='mr-2'/>
      <span>sign up with Google</span>
    </button>
  );
};

export default GoogleButton;
