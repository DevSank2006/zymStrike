import TodaysAtd from "./TodaysAtd"
import CurBreak from "./CurBreak"
import {useState,useEffect} from "react"
import BmiOverview from "./BmiOverview"
import ProgressSummary from "./ProgressSummary"
import WeightProChart from "./WeightProChart"
import Navigation from "./Navigation"


const DashBoardMain=({userId,token})=>{
    const [streak,setStreak]=useState(0);

return <div className="w-full min-h-screen overflow-x-hidden bg-[#8e8e8e] flex flex-col gap-5 items-center  lg:h-[1400px] p-12 ">
    <Navigation/>
   <div className=" flex flex-col  mt-8 h-[1000px] gap-y-4  lg:flex-row  lg:mt-16 lg:w-[1000px] lg:py-3 lg:h-96 lg:gap-x-6 " > 
    <TodaysAtd setStreak={setStreak} userId={userId} token={token}/>
    <CurBreak streak={streak} setStreak={setStreak} userId={userId} token={token}/>
    <BmiOverview userId={userId} token={token}/></div>
    <WeightProChart userId={userId} token={token} />
    {/* <ProgressSummary/> */}
</div>
}
export default DashBoardMain;