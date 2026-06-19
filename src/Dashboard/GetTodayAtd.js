 const getTodayDate=async function (setIsTrue,userId,token){
    console.log(userId)
        const getData=await fetch(`https://zymstrike-backend.onrender.com/attendance/${userId}`,{
            method:"GET",
            headers:{
                "Authorization":`Bearer ${token}`
            }
        });
        const jsonData=await getData.json();
        const data=jsonData.data;
         const todayDate=new Date();
        const today=todayDate.toISOString().split("T")[0];
        const exists=(data|| []).some((dates)=>dates.date==today)
        setIsTrue(exists)
            
    }
    export default getTodayDate;