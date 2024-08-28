import { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { GoogleLogin } from '@/libs/firebase/auth';
import { ArrowBack, GitHub, Google } from '@mui/icons-material';
import router from 'next/router';
import GoogleButton from './GoogleButton';
import GitHubButton from './GitHubButton';
import SuccessAuth from './SuccessAuth';

const LoginForms = () => {
  // const { user, signInWithGoogle, signInWithGitHub, signOut } = useAuth();

  return (
    <div className="flex flex-col gap-10 w-11/12 min-w-72 md:w-5/12 h-auto mx-auto bg-white rounded-md shadow-xl py-10">
      <div className="flex w-72 mx-auto text-center">
        <h1 className="text-orange-600 text-2xl font-bold border-b-2 border-b-orange-600 ">
          SignUp
        </h1>
        <h1 className="text-orange-600 text-2xl font-bold border-b-2 border-b-orange-600">
          SignUp
        </h1>
      </div>
      <GoogleButton />
      <GitHubButton />
      <SuccessAuth />
    </div>
  );
};

export default LoginForms;
