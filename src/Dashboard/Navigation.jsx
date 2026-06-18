import home from "../../public/home.svg"
import celendar from "../../public/calendar.svg"
import stethoscope from "../../public/stethoscope.svg"
import avatar from "../../public/avatar.svg"
import {Link} from "react-router-dom"


const Navigation=()=>{
    return <div className=" absolute top-0 w-screen h-18 bg-[#993800] flex justify-center p-1 z-10">
            <Link to="/home" className="border-amber-100  flex-1"><div className=" ">
            <img src={home} className="w-14 m-auto mt-1" alt="" />
        </div></Link>
        <Link to="/attendance" className="border-amber-100  flex-1"><div className=" ">
            <img src={celendar} className="w-14 m-auto mt-1" alt="" />
        </div></Link>
        <Link to="/health" className="border-amber-100  flex-1"><div className=" ">
            <img src={stethoscope} className="w-14 m-auto mt-1" alt="" />
        </div></Link>
             <Link to="/profile" className="border-amber-100  flex-1"><div className=" ">
            <img src={avatar} className="w-14 m-auto mt-1" alt="" />
        </div></Link>
    </div>
}
export default Navigation;