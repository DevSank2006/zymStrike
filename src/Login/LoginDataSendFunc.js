const LoginDataSendFunc=async(name,email,password,age,height,weight,goal,setErrors,setUserId,setMessage,setAccMsg,setAccContent)=>{
    const sendData=await fetch("https://zymstrike-backend.onrender.com/users/register",{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify({
            name,
            email,
            password,
            age,
            height,
            weight,
            goal
        })
    });

    let data;
    const contentType=sendData.headers.get("Content-type");
    if(contentType && contentType.includes("application/json")){
        data=await sendData.json();
    }else{
        data=await sendData.text();
    }
    if(!sendData.ok){
        console.log(data.message);
        console.log(data);

        setErrors(data);
        setAccContent(data.message)
        setAccMsg(true)
        return;
    }else{
        setErrors({});
        const message=data?.data?.message|| data?.message
        || "Account created Successfully Login to continue"
    setMessage(data.message)
        setAccMsg(true)
        setAccContent(message)
        setTimeout(()=>{
            window.location.reload();
        },3000)
    }
    


}
export default LoginDataSendFunc;