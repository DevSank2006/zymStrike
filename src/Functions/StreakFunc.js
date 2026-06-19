const getStreak=async function(setStreak,userId,token){
    console.log(token)
    console.log(userId)

        const getData=await fetch(`https://zymstrike-backend.onrender.com/attendance/streak/${userId}`,{
            method:"GET",
            headers:{
                "Authorization":`Bearer ${token}`
            }
        })
        const jsonData=await getData.json();
        console.log(jsonData)
        setStreak(jsonData.data);

    }
    export default getStreak;
