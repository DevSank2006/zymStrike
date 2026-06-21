import React,{useState,useEffect} from 'react'
import {useNavigate} from "react-router-dom"
import ReactDOM from 'react-dom/client'
import LoginPostFunc from "./LoginPostFunc"
import WrongCredMessage from "./WrongCredMessage"
const Form=({setIsLogin,setUserId,setToken})=>{
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[message,setMessage]=useState("");
  const navigate=useNavigate();
useEffect(() => {
    setMessage("");
}, []);
    return <div className="bg-[#181818] md:bg-white/5  backdrop-blur-xl
    border-[0.5px] border-[#79797967]  w-72 h-72 mt-12 rounded-xl grid content-start justify-center lg:h-[300px] lg:w-[350px] lg:p-8 lg:mt-15 ">
        <div className=" w-48 inline-block m-auto mt-2 lg:-mt-5">
            <div className="inline ml-7"><span className="  text-[#d7d7d7] font-semibold text-[20px] text-center ">Login/</span>
             <span  onClick={()=>{
              setIsLogin(false)
             }} className="  text-[#d7d7d7] font-semibold text-[20px] text-center ">Signup</span></div>
            <br />
            <span className="text-sm inline-block w-full text-center text-[#d4d4d4]">Sign up with your account</span>
        </div>
      <form className=" h-40 gap-y-2 mt-2 w-72 flex flex-col gap-2 lg:w-72 lg:h-36 lg:mt-8 lg:gap-2.5 " action="">
        <input onChange={(e)=>{setEmail(e.target.value)}} className=" h-10 outline-none border p-0.5 px-1.5 placeholder-[#ffffff68]  text-[#ffffff68] border-[#ffffff68]  rounded-md w-4/5 m-auto placeholder:text-sm focus:border-[#b4b4b4]
        lg:w-full lg:h-12" type="email" placeholder="Email" />
               <input onChange={(e)=>{setPassword(e.target.value)}} className=" h-10 outline-none border p-0.5 px-1.5 placeholder-[#ffffff68]  text-[#ffffff68] border-[#ffffff68]  rounded-md w-4/5 m-auto placeholder:text-sm focus:border-[#b4b4b4]
        lg:w-full lg:h-12" type="password" placeholder="Password" />

              <button type="button" onClick={()=>{LoginPostFunc(email,password,setMessage,navigate,setUserId,setToken)}} className="h-10 outline-none border p-0.5 px-1.5 placeholder-[#ffffff68]  text-[#ffffffb7] border-[#ffffff68]  rounded-md w-4/5 m-auto placeholder:text-sm focus:border-[#b4b4b4]
        lg:w-full lg:h-12 bg-[#c45022] ">Login</button>
      </form>
      {message && <WrongCredMessage/>}
      {/* <span className="text-center text-sm text-[#ffffff68] lg:mt-2  font-mono">Forgot password?</span> */}
    </div>
}
export default Form;
