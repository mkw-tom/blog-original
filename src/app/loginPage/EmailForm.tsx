import { Send, Visibility, VisibilityOff } from '@mui/icons-material';
import React, { useState } from 'react'

const EmailForm = () => {
  const [type, setType]  = useState<string>("password");
 

  return (
    <form action="" className="relative flex-col w-full ">
      <input
        placeholder="email"
        type="email"
        className="shadow-inner border-2 border-gray-200 pl-2 w-full mb-2"
      />
      <input
        id="passwordInput"
        placeholder="password"
        type={type}
        className="relative shadow-inner border-2 border-gray-200 pl-2 w-full mb-2"
      />
      <div className="absolute top-9 right-2 hover:opacity-60" onClick={() => {
        if(type === "password") {
          setType("text")
        }
        if(type === "text") {
          setType("password")
        }
      }}>
        {type === "password" ? (<Visibility></Visibility>): (<VisibilityOff></VisibilityOff>)}
      </div>
      <button className='border-2 border-red-600 px-5 py-1 rounded-md text-red-500 hover:bg-red-500 hover:text-white' ><span className=' mr-2'>送信</span><Send></Send></button> 
    </form>
  );
}

export default EmailForm