import React from 'react'
import ReactDOM  from 'react-dom/client'
import {useRef,useEffect,useState} from 'react'
import Typed from "typed.js"
import Form from "./Form";
import CreateForm from "./CreateForm";

const LoginPage=({setUserId,setToken})=>{
    const[isLogin,setIsLogin]=useState(true)
    const el=useRef(null);
    useEffect(()=>{
        const typed=new Typed(el.current,{
            strings:['Your journey to stength starts here.<br/>Log in to dominate.^2000'],
            typeSpeed:80,
            backSpeed:40,
            loop:false,
            contentType:"html"
        });
        return ()=>{
            typed.destroy();
        }
    },[])
    return <div className="
      w-screen h-screen 
    bg-black
    bg-[url('/MobBG.avif')] 
    md:bg-[url('/TabBG.avif')]
    lg:bg-[url('/DesktopBG.avif')]
    bg-cover bg-center
  ">
    <div className=" flex flex-col gap-y-3  h-screen w-screen px-4 md:flex-row md:items-center  md:p-30 md:gap-x-25 lg:flex-row lg:justify-between lg:p-10 lg:pt-35">
        <div className="   inline-block pt-2 lg:mb-25 ">
             <div className="text-[#c45022] mt-5 [text-shadow:4px_4px_4px_rgba(25,25,25,1)] font-bebas text-7xl lg:text-9xl ">UNLEASE <br/>YOUR <br /> POTENTIAL
             </div>


            <div  className=" text-sm font-mono  font-semibold absolute text-[#e3e3e3] lg:text-xl">
                <span ref={el}></span>
            </div>
        </div>
       
        {isLogin?(<Form setIsLogin={setIsLogin} setUserId={setUserId} setToken={setToken}/>):(<CreateForm setIsLogin={setIsLogin} setUserId={setUserId}/>)}
    </div>

    
   
    </div>
}
export default LoginPage;