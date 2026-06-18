import man from "../../public/man.svg"
const Dp=()=>{
    return <div className="absolute mt-10  md:bg-[rgb(187,187,187)] w-36 left-1/2 transform  -translate-x-1/2 top-10  md:left-18  md:w-72 md:top-0 md:h-full lg:w-96">
        <div className="bg-amber-700 w-36 h-36 rounded-full md:ml-28 md:mt-16 lg:w-48 lg:h-48 lg:ml-40 flex justify-center items-center">
            
           <div className=" rounded-full p-1 flex justify-center items-center w-32"> <img className="w-32 mb-4" src={man} alt="" /></div>
        </div>
    </div>
}
export default Dp;