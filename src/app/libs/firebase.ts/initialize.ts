// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GithubAuthProvider, GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBRll3tBGrcWlWoogetQnqzqVbJXCOBi94",
  authDomain: "myblog-28ed3.firebaseapp.com",
  projectId: "myblog-28ed3",
  storageBucket: "myblog-28ed3.appspot.com",
  messagingSenderId: "211857021549",
  appId: "1:211857021549:web:af4fdc5102b0fa12efbd64",
  measurementId: "G-0HTDMVY6Q6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const GoogleProvider = new GoogleAuthProvider;
const GitHubProvider = new GithubAuthProvider
const analytics = getAnalytics(app);
export {auth, GoogleProvider, GitHubProvider}