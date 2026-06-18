import React,{useState} from "react";
import ReactDOM from "react-dom/client"
import CalculateBmi from "./CalculateBmi";
const BmiCalculator=({bmi,setBmi})=>{
    const[height,setHeight]=useState(null);
    const[weight,setWeight]=useState(null);


    const [category,setCategory]=useState("")
    return <div className="bg-[#bcbcbc]  w-72 h-56 md:w-96 md:h-64  rounded-xl md:p-2"> 
    <div className="  p-2 rounded-lg md:mt-4"><span className="font-medium text-lg md:w-[400px]">BMI Calculator</span>
    <div className="my-2"><span>Height:</span><input  type="number" onChange={(e)=>{setHeight(e.target.value)}} className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border-1 p-1 rounded-md ml-3 bg-[#e3e3e3] border-[#5c5c5c] focus:outline-none" placeholder="Height (CM)"/></div>
    <div>
        <span>Weight</span>
        <input type="number" onChange={(e)=>{setWeight(e.target.value)}}  className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border-1 p-1 rounded-md  focus:outline-none
         ml-3 bg-[#e3e3e3] border-[#5c5c5c]" placeholder="Weight (KG)"/></div>
    <div className="mt-2  h-6.5">{bmi}</div>
    <div className="h-6 ">
    {category}
    </div>
    <button className="bg-linear-to-r  from-[#f95418] to-[#e04000] w-full text-[#dbdbdb] rounded-md mt-2 p-1" onClick={()=>{
        CalculateBmi(height,weight,setBmi,setCategory);
    }}>Calculate</button>
    </div>

    </div>
}
export default BmiCalculator;