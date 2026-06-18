
const LoginPostFunc=async(email,passkey,setMessage,navigate,setUserId,setToken)=>{


    const sendData=await fetch("http://localhost:8080/users/login",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            username:email,
            password:passkey
        })
    });

if(!sendData.ok){
    const msg=await sendData.text();
    setMessage(msg);
    return;
}


    const data=await sendData.json();
   if(data.id){
    console.log(data)
    console.log(data.id)
    console.log(data.token)


     localStorage.setItem("id",data.id);
    localStorage.setItem("token",data.token);
    setUserId(data.id);
    setToken(data.token);
    navigate("/home")
   }

  

}
export default LoginPostFunc;
