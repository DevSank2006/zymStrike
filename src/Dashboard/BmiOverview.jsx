import ReactSpeedometer from "react-d3-speedometer"
import speedometer from "../../public/speedometer.svg"
import {useState,useEffect} from "react"
const BmiOverview=({userId,token})=>{
    const [data,setData]=useState(0);
    const[status,setStatus]=useState("BMI Status");
    
    useEffect(()=>{
        const getBmi=async()=>{
            const getData=await fetch(`https://zymstrike-backend.onrender.com/health-records/recent/${userId}`,{
                method:"GET",
                headers:{
                    "Authorization":`Bearer ${token}`
                }
            });
            const jsonData=await getData.json();
            console.log(jsonData.data.bmi)
            setData(parseFloat(jsonData.data.bmi).toFixed(2));

        }
        getBmi()
       
    },[])
    useEffect(()=>{
 if(data!=null){
            if(data<18.5){
                setStatus("Underweight")
            }else if(data>=18.5 && data<=24.9){
                setStatus("Normal")
            }else if(data>=25.0 && data<=29.9){
                setStatus("Overweight")
            }else if(data>=30.0 && data<=34.9){
                setStatus("Obesity Class 1")
            }else if(data>=35.0 && data<=39.9){
                setStatus("Obesity Class 2")
            }
        }
    },[data])

return <div className="w-[322px] h-[262px] mb-18 rounded-xl bg-orange-500/60 shadow-amber-500 shadow-[0.3px_0.3px_6px_rgba(0,0,0,1)] ">
     <div className=" bg-[#c1c1c1] w-80 h-64 rounded-xl m-auto mt-[2.5px] backdrop-blur-md ">
        <div className="relative top-8 left-2"><ReactSpeedometer
         value={data}
  minValue={10}
  maxValue={50}
  segments={5}
  segmentColors={["#42a508", "#ceac01", "#c70303","#ff9800",  "#d50000"]}

  currentValueText={status}
        /></div>
     </div>
    </div>
}
export default BmiOverview;