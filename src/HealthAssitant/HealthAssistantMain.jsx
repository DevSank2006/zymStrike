import React,{useState} from "react";
import ReactDOM from "react-dom/client"
import BmiCalculator from "./BmiCalculator"
import Recommendations from "./Recommendations"
import ChatBotLogo from "./ChatBotLogo"
const HealthAssistantMain=()=>{
        const [bmi,setBmi]=useState(null);
    return <div className="w-screen min-h-screen mt-14 bg-[#989898]"> 
    <div className="absolute text-3xl font-semibold  m-8 text-[#e3e3e3]">Health Assitant</div>
    <div className="bg-linear-to-r  from-[#bd3301] to-[#ca4916] h-48 w-screen"></div>   
    <div className=" w-80 m-auto mt-5 h-[550px] relative  flex items-center flex-col bottom-20 p-1  md:flex-col md:w-full md:h-[450px] md:items-center md:gap-1 md:m-auto md:content-center  lg:px-56">
        <BmiCalculator setBmi={setBmi} bmi={bmi}/>
        <Recommendations bmi={bmi}/>
        
    </div>
    
    </div>
}
export default HealthAssistantMain;