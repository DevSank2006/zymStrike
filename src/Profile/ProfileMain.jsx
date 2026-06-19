import React,{useState,useEffect} from 'react'
import ReactDOM from 'react-dom/client'
import Dp from "./Dp"
import streakFunc from "../Functions/StreakFunc"
import UpdateHealthRecordsFunc from "./UpdateHealthRecordsFunc"
import {Link} from "react-router-dom"
import {useNavigate} from "react-router-dom"
import LogoutFunc from "./LogoutFunc"

const ProfileMain=({userId,token})=>{
    const[user,setUser]=useState(null);
    const[streak,setStreak]=useState(0);
    const[editTrue,setEditTrue]=useState(false);
    const[editableHeight,setEditableHeight]=useState(0);
    const[editableWeight,setEditableWeight]=useState(0);
    const[goal,setGoal]=useState("");
    const navigate=useNavigate();

    useEffect(()=>{
        const user =async()=>{
            const getData=await fetch(`https://zymstrike-backend.onrender.com/health-records/recent/${userId}`,{
                method:"GET",
                headers:{
                    "Authorization":`Bearer ${token}`
                }
            })
            console.log("id",userId)
            const jsonData=await getData.json();
            setUser(jsonData)
            setEditableHeight(jsonData.data.height)
            setEditableWeight(jsonData.data.weight)

        };
        streakFunc(setStreak,userId,token)
        user()
    },[userId])
    return <>

        <div className=" w-screen h-screen bg-[#989898] overflow-hidden">
            
            <Dp/>
            <div className="mt-8 bg-linear-to-r  from-[#bd3301] to-[#ca4916] w-screen  h-1/6 flex justify-cente r items-center lg:h-40">
            <span className="hidden md:block  mb-16 mr-24 lg:mb-20 lg:mr-64 text-2xl font-semibold text-white ">Profile & Setting</span>
            </div>
           
               <div className="bg-[#989898]  mt-20 md:ml-50 flex flex-col items-center  h-[450px] md:-mt-20 justify-evenly lg:h-[520px]">
                 <div  className="bg-[rgb(207,207,207)] flex  flex-col w-[320px]  rounded-xl h-24 md:w-[500px] lg:w-[700px]  lg:h-32 lg:ml-20">
                    <span className="inline-blaock p-1.5 px-3 font-semibold font-smooch ">Update Body Metrics</span>
                    <div className=" h-full flex justify-around">
                        <span className=" w-20 flex flex-col">
                            <span className="">Height</span>
                            {editTrue?( <span className="text-amber-600"><input type="number" value={editableHeight} 
                            onChange={(e)=>{
                                if(e.target.value<=300){
                                    setEditableHeight(e.target.value)
                                }
                            }} className=" w-6.5 outline-none border-none"/> CM</span>):(<span className="text-amber-600">{user?.data?.height} CM</span>)}
                           
                        
                        </span>
                        <span className="flex flex-col">
                            <span>
                                Weight
                            </span>
                                {/*  */}
                                {editTrue?( <span className="text-amber-600 "><input type="number" value={editableWeight} 
                            onChange={(e)=>{
                                if(e.target.value<=200){
                                    setEditableWeight(e.target.value)
                                }
                            }} className=" w-4 outline-none border-none"/> Kg</span>):(<span className="text-amber-600">
                                    {user?.data?.weight} Kg
                                </span>)}
                                
                        </span>
                        
                        <button onClick={()=>{
                            if(editTrue){
                                setEditTrue(false)
                            }else{
                                setEditTrue(true)
                            }
                        }} className="mr-15 -mt-9">Edit</button>

                    </div>
                </div>
                <div  className="bg-[rgb(207,207,207)]  flex flex-col  w-[320px]  rounded-xl h-36 md:w-[500px] lg:w-[700px] lg:gap-x-5 lg:h-32 lg:ml-20">
                    <span className="inline-block p-1.5 px-3 font-semibold font-smooch ">Change Goal</span>
                    <div className=" h-full w-max  flex flex-col items-baseline  px-3">
                       <span className=" font-medium">Select</span>
                       <select defaultValue=""   name="" className="bg-[#b2b2b2] mt-1 w-72 overflow-hidden rounded-md outline-none"  id="" onChange={(e)=>{
                        setGoal(e.target.value)
                       }}>
                        <option className="appearance-none outline-none" value=""  disabled>Choose Something</option>
                        <option value="Weight Loss">Weight Loss</option>
                        <option value="Muscle Gain">Weight Gain</option>
                       </select>

                    </div>
                </div>
                 <div  className="bg-[rgb(207,207,207)] flex flex-col  w-[320px]  rounded-xl h-24 md:w-[500px] mx-12 lg:w-[700px] lg:h-32 lg:ml-30">
                    <span className="inline-block p-1.5 px-3 font-semibold font-smooch ">Streak Record</span>
                    <div className=" h-full flex justify-around">
                        <span className=" w-20 flex flex-col">
                            <span className="">Current</span>
                            <span className="text-amber-600">{streak} Days</span>
                        </span>
                        <span className="flex flex-col">
                            <span>
                                Longest
                            </span>
                                <span className="text-amber-600">
                                    -
                                </span>
                        </span>
                    </div>

                </div>
                 <div className=" flex w-64 gap-x-2 lg:w-[500px] lg:gap-x-0"><button className="h-10 active:bg-[#d75a28] outline-none border placeholder-[#ffffff68]  text-[#ffffffb7] border-[#ffffff68]  rounded-xl w-4/5  placeholder:text-sm focus:border-[#b4b4b4]
         lg:h-12 bg-[#c45022] md:w-[300px] lg:w-[400px] lg:ml-20" onClick={()=>{
            UpdateHealthRecordsFunc(user.data.weight,editableWeight,user.data.height,editableHeight,goal,userId,token)
         }}>Update</button>
         <button onClick={()=>{LogoutFunc(navigate)}} className="h-10 outline-none border placeholder-[#ffffff68]  text-[#ffffffb7] border-[#ffffff68]  rounded-xl w-4/5  placeholder:text-sm focus:border-[#b4b4b4]
         lg:h-12  bg-[#c45022] md:w-[300px] lg:w-[400px] lg:ml-20 text-center flex items-center justify-center active:bg-[#d75a28]"><div className=" relative">Logout</div></button>
         </div>

               </div>
            </div>
       
    </>
}
export default ProfileMain;