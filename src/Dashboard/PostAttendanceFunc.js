import getTodayAtd from "./GetTodayAtd.js"
import StreakFunc from "../Functions/StreakFunc.js"
const PostAttendanceFunc=async(setIsTrue,userId,setStreak,token)=>{
    const date=new Date();
    console.log(token)
    console.log(userId)

    const todaysDate=date.toISOString().split("T")[0];
    const postData=await 
    fetch(`http://localhost:8080/attendance/${userId}`,{
        method:"POST",
        headers:{
            "Content-type":"application/json",
            "Authorization":`Bearer ${token}`
        },
        body:JSON.stringify({
            date:todaysDate,
            status:"PRESENT"
        })

    });
    if(!postData.ok){
        return;
    }
    getTodayAtd(setIsTrue,userId,token)
    StreakFunc(setStreak,userId,token)

}
export default PostAttendanceFunc;