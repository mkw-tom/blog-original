import { doc, getDoc, setDoc } from "firebase/firestore"
import { auth, db } from "./initialize"
import { updateProfile } from "firebase/auth";
import { v4 as uuidv4 } from "uuid";
import { CommentDataProps } from "@/app/type";

//ユーザーデータ作成の手続き
const createUserData = async () => {
  await setDoc(doc(db, "users", `${auth.currentUser?.uid}`), {
    displayName: auth.currentUser?.displayName,
    photoURL: auth.currentUser?.photoURL,
  });
}

//ユーザープロフィール編集の手続き
const updateProf = async (name: string | null | undefined, photo: any) => {
  if (auth.currentUser === null) {
    return
  }

  await updateProfile(auth.currentUser, {
    displayName: name,
    photoURL: photo,
  })
    .then(() => {
      console.log("Profile Updaete");
    })
    .catch((error) => {
      console.log(`${error.message}`);
    });

  await setDoc(doc(db, "users", `${auth.currentUser?.uid}`), {
    displayName: auth.currentUser?.displayName,
    photoURL: auth.currentUser?.photoURL,
  });
};


//⭐️ユーザー情報を保存⭐️
export const saveUserData = async () => {
  if (auth.currentUser === null) {
    return
  }

  const profName = await getDoc(doc(db, "users", `${auth.currentUser?.uid}`));
  if (profName.exists()) {
    return;
  }

  if (auth.currentUser?.displayName === null && auth.currentUser?.photoURL !== null) {
    updateProf("unknownUser", auth.currentUser?.photoURL);
    createUserData();
    alert("はじめまして！");
  } else if (auth.currentUser?.displayName !== null && auth.currentUser?.photoURL === null) {
    updateProf(
      auth.currentUser?.displayName,
      "https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_1280.png"
    );
    createUserData()
    alert("はじめまして！");
  } else if (auth.currentUser?.displayName === null && auth.currentUser?.photoURL === null) {
    updateProf(
      "unknownUser",
      "https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_1280.png"
    );
    createUserData()
    alert("はじめまして！");
  } else {
    updateProf(auth.currentUser?.displayName, auth.currentUser?.photoURL);
    createUserData()
    alert("はじめまして！");
  }
};

//⭐️ユーザーのコメントデータを保存⭐️
export const setCommentedData = async (pageId: any, pageTitle: any, newData: CommentDataProps ) => {
  const docId: string = uuidv4();
  await setDoc(doc(db, "comments", `${pageId}`, `${pageTitle}`, `${docId}`), {
    ...newData
  })
}