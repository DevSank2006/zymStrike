import react,{useState,useEffect} from "react";
import {AreaChart,Area,XAxis,YAxis,ResponsiveContainer,} from "recharts";
import WeightProgFunc from "./WeightProgFunc"



const Area_Progress=({userId,token})=>{
    const [data,setData]=useState([]);
    useEffect(()=>{
WeightProgFunc(setData,userId,token)
},[])
  
    return <div className="w-full h-56 rounded-xl pointer-events-none">
     <ResponsiveContainer height="80%" width="95%">
        

        <AreaChart data={data} margin={{left:-28,top:10,bottom:15}}>
        <defs><linearGradient id="colorOrange" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ea580c" stopOpacity={1}></stop>
            <stop offset="95%" stopColor="#ea580c" stopOpacity={0.06}></stop>

        </linearGradient>
        </defs>
        <XAxis dataKey="date"/>
        <YAxis dataKey="weight"/>
        <Area dataKey="weight" fill='url(#colorOrange)'  stroke="red" />
        </AreaChart>
     </ResponsiveContainer>
    </div>
}
export default Area_Progress;