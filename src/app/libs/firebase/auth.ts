import {
  GithubAuthProvider,
  GoogleAuthProvider,
  OAuthCredential,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";

import { GitHubProvider, GoogleProvider, auth } from "./initialize";

//-------サインアウト--ーーー
export const handleLogout = () => {
  if(!confirm("ログアウトしますか？")) {
    return;
  }
  auth.signOut();
}


//ーーーーーgoogleログインーーーーー
export const GoogleLogin = async () => {
  await signInWithPopup(auth, GoogleProvider)
    .then((result) => {
      const credential: OAuthCredential | null =
        GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
    })
    .catch((error) => {
      window.alert("ログインに失敗しました。");
    });
};


//ーーーーーgithubログインーーーーー
export const GitHubLogin = async () => {
  await signInWithPopup(auth, GitHubProvider)
    .then((result) => {
      const credential: OAuthCredential | null =
        GithubAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
    })
    .catch((error) => {
      window.confirm("ログインに失敗しました。");
    });
};

export const EmailLogin = async (email: string, password: string) => {

  await createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      window.alert(`${errorCode}:${errorMessage}`);
    });
};