import React from 'react'
import ReactDOM from 'react-dom/client'
import {useRef,useEffect,useState} from 'react'
import LoginDataSendFunc from "./LoginDataSendFunc"
// 

const CreateForm=({setIsLogin,setUserId})=>{
const[name,setName]=useState("");
const[email,setEmail]=useState("");
const [password, setPassword] = useState("");
const [age, setAge] = useState("");
const [height, setHeight] = useState("");
const [weight, setWeight] = useState("");
const [goal, setGoal] = useState("");
const [errors, setErrors] = useState({});
const[message,setMessage]=useState("");
const[accMsg,setAccMsg]=useState(false);
const[accContent,setAccContent]=useState("")
//

    return <div className=" bg-white/5 backdrop-blur-xl
    border-[0.5px] border-[#79797967]  w-72 md:w-80 h-[400px] mt-12 rounded-xl grid content-start justify-center md:absolute md:right-8  lg:h-[350px] lg:w-[350px] lg:px-8 lg:py-8 lg:mt-15 overflow-y-auto no [&::-webkit-scrollbar]:hidden [scrollbar-width:none] [-ms-overflow-style:none]">
        <div className=" w-48 inline-block m-auto mt-2 lg:-mt-6">
            <div className=" inline mx-7"> <span className=" inline  text-[#d7d7d7] font-semibold text-[20px] text-center  ">Signup/</span>
            <span onClick={()=>{
                setIsLogin(true)
            }} className="  text-[#d7d7d7] font-semibold text-[20px] text-center ">Login</span></div>
            
           
            <br />
            <span className="text-sm inline-block w-full text-center text-[#d4d4d4]">Sign up with your account</span>
        </div>
      <form className=" h-[370px] gap-y-2 mt-2 w-72 flex flex-col gap-2  lg:w-72 lg:h-[380px] lg:mt-8 lg:gap-2.5 " action="">
        
          <div className=" flex flex-col gap-3  h-[370px] lg:h-[350px] lg:-mt-5">
            <input onChange={(e)=>{setName(e.target.value
            )}} className=" h-10 outline-none border p-0.5 px-1.5 placeholder-[#ffffff68]  text-[#ffffff68] border-[#ffffff68]  rounded-md w-4/5 m-auto placeholder:text-sm focus:border-[#b4b4b4]
        lg:w-full lg:h-12" type="text" placeholder="Name" />
        <span className="text-red-800 text-sm h-0 relative left-8 bottom-2.5">{errors.name}</span>
        <input onChange={(e)=>{setEmail(e.target.value
            )}} className=" h-10 outline-none border p-0.5 px-1.5 placeholder-[#ffffff68]  text-[#ffffff68] border-[#ffffff68]  rounded-md w-4/5 m-auto placeholder:text-sm focus:border-[#b4b4b4]
        lg:w-full lg:h-12" type="email" placeholder="Email" />
        <span className="text-red-800 text-sm h-0 relative left-8 bottom-2.5">{errors.email}</span>
               <input onChange={(e)=>{setPassword(e.target.value)}} className=" h-10 outline-none border p-0.5 px-1.5 placeholder-[#ffffff68]  text-[#ffffff68] border-[#ffffff68]  rounded-md w-4/5 m-auto placeholder:text-sm focus:border-[#b4b4b4]
        lg:w-full lg:h-12" type="password" placeholder="Password" />
        <span className="text-red-800 text-sm h-0 relative left-8 bottom-2.5">{errors.password}</span>
<input onChange={(e)=>{setAge(e.target.value
            )}} className=" h-10 outline-none border p-0.5 px-1.5 placeholder-[#ffffff68]  text-[#ffffff68] border-[#ffffff68]  rounded-md w-4/5 m-auto placeholder:text-sm focus:border-[#b4b4b4]
        lg:w-full lg:h-12" type="number" placeholder="Age" />
        <span className="text-red-800 text-sm h-0 relative left-8 bottom-2.5">{errors.age}</span>

        <input onChange={(e)=>{setHeight(e.target.value
            )}} className=" h-10 outline-none border p-0.5 px-1.5 placeholder-[#ffffff68]  text-[#ffffff68] border-[#ffffff68]  rounded-md w-4/5 m-auto placeholder:text-sm focus:border-[#b4b4b4]
        lg:w-full lg:h-12" type="number" placeholder="Height (CM)" />
        <span className="text-red-800 text-sm h-0 relative left-8 bottom-2.5">{errors.height}</span>

        <input onChange={(e)=>{setWeight(e.target.value
            )}} className=" h-10 outline-none border p-0.5 px-1.5 placeholder-[#ffffff68]  text-[#ffffff68] border-[#ffffff68]  rounded-md w-4/5 m-auto placeholder:text-sm focus:border-[#b4b4b4]
        lg:w-full lg:h-12" type="number" placeholder="Weight (KG)" />
        <span className="text-red-800 text-sm h-0 relative left-8 bottom-2.5">{errors.weight}</span>

        <input onChange={(e)=>{setGoal(e.target.value
            )}} className=" h-10 outline-none border p-0.5 px-1.5 placeholder-[#ffffff68]  text-[#ffffff68] border-[#ffffff68]  rounded-md w-4/5 m-auto placeholder:text-sm focus:border-[#b4b4b4]
        lg:w-full lg:h-12" type="text" placeholder="Goal e.g Muscle Gain" />
        <span className="text-red-800 text-sm h-0 relative left-8 bottom-2.5">{errors.goal}</span>
            {accMsg && <span className="text-[#c5c5c5] text-center text-xs h-0 relative left-0 bottom-2.5 lg:-top-1.5 lg:text-md">{accContent}</span>}

          </div>
          
          
      </form>
            
       <div className="h-12 mt-5 m-auto  lg:relative bottom-10">
        <button onClick={(e)=>{e.preventDefault()
             LoginDataSendFunc(name,email,password,age,height,weight,goal,setErrors,setUserId,setMessage,setAccMsg,setAccContent)}} className="bg-orange-500 rounded-md w-44 h-8 text-white/90 ">Create Account</button>
       </div>
     
    </div>
}
export default CreateForm;