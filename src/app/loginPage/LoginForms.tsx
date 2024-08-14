"use client"
import { GoogleLogin } from "@/libs/firebase/auth";
import { useEffect, useState } from "react";

const LoginForms = () => {

  return (
    <div className="w-96 md:w-5/12 h-auto mx-auto bg-gray-300 rounded-3xl shadow-xl ">
      <button className="w-56 bg-blue-500 h-36" onClick={GoogleLogin}>google</button>
    </div>
  );
};

export default LoginForms;
