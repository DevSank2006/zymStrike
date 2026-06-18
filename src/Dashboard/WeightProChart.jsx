import Area_Progress from "../Attendance/Area_Progress"
const WeightProChart=({userId,token})=>{
     return <div className="bg-[#e5e5e5] w-72 h-48 px-2.5 py-2 m-auto relative bottom-32 rounded-xl  lg:w-[700px] lg:h-[220px] lg:bottom-80">
          <div className="">Weight Progress (Kg)</div>
          <div className=" h-56 rounded-xl"><Area_Progress userId={userId} token={token}/></div>
     </div>
}
export default WeightProChart;