import {
  GithubAuthProvider,
  GoogleAuthProvider,
  OAuthCredential,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import { GitHubProvider, GoogleProvider, auth, db } from "./initialize";
import { doc, getDoc } from "firebase/firestore";

//-------サインアウト--ーーー
export const handleLogout = () => {
  if (!confirm("ログアウトしますか？")) {
    return;
  }
  auth.signOut();
};



//ーーーーーgoogleログインーーーーー
export const GoogleLogin = async (isLogin: boolean) => {
  await signInWithPopup(auth, GoogleProvider)
    .then((result) => {
      const credential: OAuthCredential | null =
        GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
    })
    .catch((error) => {
      window.alert("ログインに失敗しました。");
    });
    if(!isLogin) {
      const userData = await getDoc(doc(db,"users", `${auth.currentUser?.uid}`))
      userData.exists() ? alert("すでに登録済みです"): alert("ようこそ！");
    }
};

//ーーーーーgithubログインーーーーー
export const GitHubLogin = async (isLogin:boolean) => {
  await signInWithPopup(auth, GitHubProvider)
    .then((result) => {
      const credential: OAuthCredential | null =
        GithubAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
    })
    .catch((error) => {
      window.confirm("ログインに失敗しました。");
    });
    if(!isLogin) {
      const userData = await getDoc(doc(db,"users", `${auth.currentUser?.uid}`))
      userData.exists() ? alert("すでに登録済みです"): alert("ようこそ！");
    }
};

export const EmailLogin = async (email: string, password: string, isLogin:boolean) => {
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
      // const user = userCredential.user;
      // return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      window.alert(`${errorCode}:${errorMessage}`);
    });
    if(!isLogin) {
      const userData = await getDoc(doc(db,"users", `${auth.currentUser?.uid}`))
      userData.exists() ? alert("すでに登録済みです"): alert("ようこそ！");
    }
};
