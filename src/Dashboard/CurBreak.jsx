import circleTick from "../../public/fire.svg"
import {useState,useEffect} from "react"
import StreakFunc from "../Functions/StreakFunc"
const CurBreak=({streak,setStreak,userId,token})=>{

    useEffect(()=>{
    
    StreakFunc(setStreak,userId,token)
},[])

return <div className="w-[322px] h-[262px]  rounded-xl bg-orange-500/60 shadow-amber-500 shadow-[0.3px_0.3px_6px_rgba(0,0,0,1)] ">
    <div className=" bg-[#c1c1c1] w-80 h-64 rounded-xl m-auto mt-[2.5px] backdrop-blur-md ">
        <div className="text-xl font-semibold relative top-2 left-4">Streak</div>
        <div className=" w-36 h-36 mx-auto mt-4"><img className="ml-1" src={circleTick} alt="" />
        <div className="text-center font-semibold relative top-3.5 right-4 w-48 ">Current Break: {streak} Days</div>
       
        </div>
    </div>
    </div>
}
export default CurBreak;