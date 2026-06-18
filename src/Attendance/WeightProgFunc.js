const WeightProgFunc= async(setData,userId,token)=>{
    const fetchData=await fetch(`http://localhost:8080/health-records/${userId}`,{
        method:"GET",
        headers:{
            "Authorization":`Bearer ${token}}`
        }
    });
    const jsonData=await fetchData.json();
    const data=jsonData.data.map((record)=>{
        return {
            date:new Date(record.date).toLocaleDateString("en-GB",{
                day:"numeric",
                month:"short"
            }),
            weight:record.weight
            
        }
    })
    setData(data);
}
export default WeightProgFunc;