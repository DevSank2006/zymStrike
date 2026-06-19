// http://localhost:8080/health-records/9
const UpdateHealthRecordsFunc=async(weight,editedWeight,height,editedHeight,editedGoal,userId,token)=>{
    if(weight!=editedWeight || height!=editedHeight){
        const date=new Date();
    const today=date.toISOString();

        const body={
             date:today,
                weight:editedWeight,
                height:editedHeight,
        };
        if(editedGoal.length>0){
            body.goal=editedGoal
        }

        const sendData=await fetch(`https://zymstrike-backend.onrender.com/health-records/${userId}`,{
            method:"POST",
            headers:{
                "Content-type":"application/json",
                "Authorization":`Bearer ${token}`
            },
            body:JSON.stringify(body)
            
        });

    }
    }
    export default UpdateHealthRecordsFunc;