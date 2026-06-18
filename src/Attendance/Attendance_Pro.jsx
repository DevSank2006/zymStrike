import {useEffect,useState} from "react";
import Attendance_sheet from "./Attendance_sheet"
import TotalAttendace from "./TotalAttendace"
import AttendanceListFunc from "./AttendnaceListFunc"
import AttendancePieGraph from "./AttendancePieGraph"
const Attendance_Pro=({userId,token})=>{
    const[attendanceList,setAttendanceList]=useState([]);
    useEffect(()=>{
        AttendanceListFunc(setAttendanceList,userId,token);
    },[])
    return <div className="bg-[#989898] mt-14  min-h-screen w-full">
        <div className="bg-linear-to-r  from-[#bd3301] to-[#ca4916] w-screen h-56 ">
            <div className="absolute text-2xl font-semibold  m-6 text-[#e3e3e3]">Attendance And Progress</div>
            
        </div>
        <div className="bg-[#989898]  w-screen lg:grid lg:grid-cols-2">
            <Attendance_sheet attendanceList={attendanceList}/>
            <div className=" xl:absolute xl:w-[400px] xl:right-44 ">
          
            <div className=" -mt-36 mb-32 md:-mt-12 md:mb-18 lg:-mt-28"><AttendancePieGraph userId={userId} token={token}/></div>
            <TotalAttendace  attendanceList={attendanceList}/>
            </div>
            
        </div>
    </div>
}
export default Attendance_Pro;