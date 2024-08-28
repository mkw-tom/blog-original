"use client"
import { GitHubLogin, GoogleLogin } from '@/libs/firebase/auth';
import { GitHubProvider, GoogleProvider, auth } from '@/libs/firebase/firebase';
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  OAuthCredential,
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import { ReactNode, createContext, useContext, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

interface AuthContextType {
  user: User | null | undefined;
  signUpWithEmail: (email: string, password: string) => void;
  signInWithEmail: (email: string, password: string) => void;
  signInWithGoogle: () => void;
  signInWithGitHub: () => void;
  signOut: () => void,
}

const authContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(authContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  // const [user, setUser] = useState<any | null>(null);
  const [user] = useAuthState(auth)

  const signUpWithEmail = async (email: string, password: string) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const token = await result.user?.getIdToken();

      // if(token) {
      //   const res = await fetch('/api/verifyToken', {
      //     method: 'POST',
      //     headers: { 'Content-Type': 'application/json' },
      //     body: JSON.stringify({ token }),
      //   });
    } catch (error: any) {
      return alert(`error signIn with Email ${error}`);
    }
  };

  const signInWithEmail = async (email: string, password: string) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const token = await result.user?.getIdToken();

    } catch (error: any) {
      return alert(`error signIn with Email ${error}`);
    }
  };

  const signInWithGoogle = async () => {
    await GoogleLogin()
    // await signInWithPopup(auth, GitHubProvider)
    //   .then((result) => {
    //     const credential: OAuthCredential | null =
    //       GithubAuthProvider.credentialFromResult(result);
    //     const token = credential?.accessToken;
    //     setUser(result);
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     window.confirm('ログインに失敗しました。');
    //   });
  };

  const signInWithGitHub = async () => {
    await GitHubLogin
    await signInWithPopup(auth, GitHubProvider)
      .then((result) => {
        const credential: OAuthCredential | null =
          GithubAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
      })
      .catch((error) => {
        window.confirm('ログインに失敗しました。');
      });
  };


  const signOut = () => {
    if (!confirm("ログアウトしますか？")) {
      return;
    }
    auth.signOut();
  };
  

  const contextValue = {
    user,
    signUpWithEmail,
    signInWithEmail,
    signInWithGoogle,
    signInWithGitHub,
    signOut,
  };

  return (
    <authContext.Provider value={contextValue}>{children}</authContext.Provider>
  );
};
