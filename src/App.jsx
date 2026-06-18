import React,{useState,useEffect} from 'react'
import ReactDOM,{createRoot} from 'react-dom/client'
import LoginPage from "./Login/LoginPage"
import ProfileMain from "./Profile/ProfileMain"
import HealthAssistantMain from "./HealthAssitant/HealthAssistantMain"
import DashBoardMain from "./Dashboard/DashBoardMain"
import Attendance_Pro from "./Attendance/Attendance_Pro"
import {Routes,Route} from "react-router-dom"
import Navbar from "./Dashboard/Navigation"
import PrivateRoute from "./PrivateRoute"
import Layout from "./Layout"
import NotFound from "./NotFound"
const App=()=>{
    const[userId,setUserId]=useState(()=>{
        return localStorage.getItem("id");
    });
    const[token,setToken]=useState(()=>{
        return localStorage.getItem("token");
    })
     return ( 
        
        
                <Routes>
                    <Route path="/" element={<LoginPage setUserId={setUserId} setToken={setToken}/>}/>

                    <Route element={<Layout/>}>
            <Route path="/home" element={
                <PrivateRoute>
                    <DashBoardMain userId={userId} token={token}/>
                </PrivateRoute>
                }
                
             />
            <Route path="/profile" element={
                
                <PrivateRoute>
                    <ProfileMain userId={userId} token={token}/>
                    </PrivateRoute>
                }
                />
            <Route path="/attendance" element={

                <PrivateRoute>
                    <Attendance_Pro userId={userId} token={token}/>
                </PrivateRoute>
            }/>
            <Route path="/health"element={

                    <PrivateRoute>
                        <HealthAssistantMain/>
                    </PrivateRoute>

            }/>

            </Route>
                 <Route path="*" element={
                    <NotFound/>
                 }/>
                </Routes>
     );
}
export default App;