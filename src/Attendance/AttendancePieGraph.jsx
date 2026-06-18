import React,{useState,useEffect} from "react"
import getAttendanceCountFunc from "./getAttendanceCountFunc"
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
const colors = ["#ea580c", "#dc2626"];
const AttendancePieGraph=({userId,token})=>{
const[data,setData]=useState([]);
useEffect(()=>{
  getAttendanceCountFunc(setData,userId,token)
})

    return <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          dataKey="count"
          nameKey="status"
          outerRadius={100}
          strokeWidth={2}
          isAnimationActive={false}
        >
          {data.map((obj,ind)=>{
           return <Cell
            key={ind}
            fill={colors[ind%(colors.length)]}
            />
          })}
        </Pie>
        <Tooltip />
        <Legend formatter={(value) => (
    <span style={{ color: "#ffffff" }}>
      {value}
    </span>
  )} />
      </PieChart>
    </ResponsiveContainer>
}
export default AttendancePieGraph;