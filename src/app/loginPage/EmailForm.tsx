import { Send, Visibility, VisibilityOff } from "@mui/icons-material";
import React, { ReactNode, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { EmailLogin } from "../libs/firebase/auth";
import { Inputs } from "@/app/type";


const EmailForm = ({login}: {login: boolean}) => {
  const [type, setType] = useState<string>("password");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({mode: "onChange"});
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    EmailLogin(data.email, data.password)
  }
  return (
    <form className="relative flex-col w-full" onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="email"
        type="email"
        className="relative shadow-inner border-2 border-gray-200 pl-2 w-full mb-2"
        {...register("email", {required: "メールアドレスの入力は必須です。"})}
      />
      <p>{errors.email?.message as ReactNode}</p>

      <input
        id="passwordInput"
        placeholder="password"
        type={type}
        className="relative shadow-inner border-2 border-gray-200 pl-2 w-full mb-2"
        {...register("password", {required: "パスワードの入力は必須です。"})}
      />

      <div
        className="absolute top-9 right-2 hover:opacity-60"
        onClick={() => {
          if (type === "password") {
            setType("text");
          }
          if (type === "text") {
            setType("password");
          }
        }}
      >
        {type === "password" ? (
          <Visibility></Visibility>
        ) : (
          <VisibilityOff></VisibilityOff>
        )}
      </div>

      <button type="submit" className="border-2 border-red-600 px-5 py-1 rounded-md text-red-500 hover:bg-red-500 hover:text-white">
        <span className=" mr-2">送信</span>
        <Send></Send>
      </button>
    </form>
  );
};

export default EmailForm;
