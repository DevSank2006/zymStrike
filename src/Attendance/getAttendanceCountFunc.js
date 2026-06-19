const getAttendanceCountFunc=async(setData,userId,token)=>{
    const getData=await fetch(`https://zymstrike-backend.onrender.com/attendance/${userId}`,{
        method:"GET",
        headers:{
            "Authorization":`Bearer ${token}`
        }
    });
    const jsonData=await getData.json();
    let presentCount=0;
    jsonData.data.map((obj)=>{
            presentCount++;
    })
    const date=new Date();
    const today=date.toISOString().split("-")[2].split("T")[0];
    const absent =today-presentCount;
    console.log(absent)
    const data=[
        {"status":"Present","count":presentCount},
        {"status":"Absent","count":absent}
    ]
    setData(data);

}
export default getAttendanceCountFunc;