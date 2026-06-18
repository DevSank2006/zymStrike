import {Navigate}from "react-router-dom" 
const PrivateRoute=({children})=>{
const token=localStorage.getItem("token")
const id=localStorage.getItem("id")
if(!token || !id){
    return <Navigate to="/login" replace/>
}
return children;

}
export default PrivateRoute;