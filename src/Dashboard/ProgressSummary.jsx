import {AreaChart,Area,XAxis,YAxis,ResponsiveContainer} from "recharts"
const data = [
  { day: "Sun", weight: 0 },
  { day: "Mon", weight: 1 },
  { day: "Tue", weight: 3 },
  { day: "Wed", weight: 4 },
  { day: "Thur", weight: 5 },
  { day: "Fri", weight: 6 },
  { day: "Sat", weight: 6 },
  { day: "Sun", weight: 8 }
];
const ProgressSumary=()=>{
    return <div className="bg-[#c1c1c1] w-[350px]  rounded-md  -mt-14 mb-20 backdrop-blur-md py-0.5  md:w-[690px] md:h-[220px] lg:mb-12 lg:w-[800px] lg:h-[220px]">
       <div className="w-full h-48 -ml-8 mt-1"> <ResponsiveContainer height="100%" width="110%">
            <AreaChart data={data} margin={{right:65}}>
            <defs>
                <linearGradient id="gradientGraph" x1="0" y1="0" x2='0' y2="1">
                    <stop offset="0%" stopColor="#ea580c" stopOpacity={1}></stop>
                    <stop offset="95%" stopColor="#ea580c" stopOpacity={0.08}></stop>


                </linearGradient>
            </defs>
            <XAxis dataKey="day"/>
            <YAxis dataKey="weight"/>

            <Area dataKey="weight" fill="url(#gradientGraph)" stroke="red"/>
            </AreaChart>
        </ResponsiveContainer></div>
    </div>
}
export default ProgressSumary;