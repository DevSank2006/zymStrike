import React,{useState} from "react";
import ReactDOM from "react-dom/client"
import reList from "./RecommmendationList"
const Recommendations=({bmi})=>{
    const[list,setList]=useState({});
  const filteredList= reList.filter((data)=>{
            return Number(bmi)>=data.min && Number(bmi)<=data.max;
    })
        if(bmi!=null){
    console.log(filteredList);
    console.log(bmi)

        }
        return ( bmi && 
            <div className="w-sceen "> 
        <div className="bg-[#efefef] w-72 rounded-md mt-4 p-2 md:w-96">
            Recommendations 
<br />
<ul className="list-disc  list-inside px-2 ">
    {filteredList && 
     filteredList.map((data)=>{
      return  data.recommendations.map((relist)=>{
            return <li>{relist}</li>;
        })
     })
     }
    </ul>
        
        </div>
    </div>
        )
}
export default Recommendations;