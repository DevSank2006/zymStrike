const TotalAttendace=({attendanceList})=>{
    const date=new Date();
    const today=date.getDate();

    return <div className="bg-[#c5c5c5] max-w-40 h-16 m-auto relative  rounded-xl bottom-28  px-1 py-1 md:max-w-36   4 md:bottom-7">
        <div className="">
            <div className="font-semibold text-xl text-center">Attendance</div>
            
            <div className="font-semibold text-xl text-center">{((attendanceList.length/today)*100).toFixed(2)}%</div>

           
    </div>
    </div>

}
export default TotalAttendace;