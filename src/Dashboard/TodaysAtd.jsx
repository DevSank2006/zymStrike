
import circleTick from "../../public/circleTick.svg"
import cross from "../../public/cross.svg"
import {useState,useEffect}from "react";
import postAtd from "./PostAttendanceFunc.js";
import getTodayAtd from "./GetTodayAtd.js"
const TodaysAtd=({setStreak,userId,token})=>{
const [checkin,setCheckin]=useState("Check in");
const [isTrue,setIsTrue]=useState(false);
const [status,setStatus]=useState("Pending");
const[todayDate,setTodayDate]=useState(new Date());
    useEffect(()=>{
        if(!userId || !token) return;
        console.log(userId)
        getTodayAtd(setIsTrue,userId,token);
},[userId])
useEffect(()=>{
    if(isTrue){
        setStatus("Done");
        setCheckin("Checked in");
    }else{
           setStatus("Pending");
        setCheckin("Check in");
    }
},[isTrue])
console.log()
return <div className="w-[322px] h-[262px] mt-12 rounded-xl bg-orange-500/60 shadow-amber-500 shadow-[0.3px_0.3px_6px_rgba(0,0,0,1)] lg:mt-0">
    <div className=" bg-[#c1c1c1] w-80 h-64 rounded-xl m-auto mt-[2.5px] backdrop-blur-md ">
        <div className="text-xl font-semibold relative top-2 left-4">Today's Attendance</div>
        <div className=" w-36 h-36 mx-auto mt-4"><img className="ml-1" src={isTrue?circleTick:cross} alt="" />
        <div className="text-center relative bottom-1.5 ml-2">Status: {status}</div>
        <button onClick={()=>{if(!isTrue){postAtd(setIsTrue,userId,setStreak,token)}}} className={`${isTrue?"bg-[#9a9a9a] text-[#636363]":"bg-orange-500/80 text-[#dcdcdc]"} w-56 h-8  relative right-[35px] rounded-lg shadow-orange-500 shadow-[0.1px_0.1px_4px_rgba(0,0,0,1)]  text-center p-2 text-xl `}><span className="relative bottom-1.5">{checkin}</span></button>
        </div>
    </div>
    </div>
}
export default TodaysAtd;