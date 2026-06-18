const LogoutFunc=(navigate)=>{
localStorage.removeItem("id");
localStorage.removeItem("token");
navigate("/")
}
export default LogoutFunc;