
     const getUserAtdList=async(setAttendanceList,userId,token)=>{
            const getData=await fetch(`https://zymstrike-backend.onrender.com/attendance/${userId}`,{
                method:"GET",
                headers:{
                        "Authorization":`Bearer ${token}`
                }
            });
            const jsonData=await getData.json();
           const list= jsonData.data.map((data)=>{
                   return {
                        title: "Present",
    start: data.date,
    backgroundColor: "#ea580c",
    textColor: "white"
                    }
            })

            setAttendanceList(list);
        }
export default getUserAtdList;