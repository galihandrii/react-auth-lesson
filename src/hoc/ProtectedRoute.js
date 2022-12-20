import { useState, useEffect, useLayoutEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Login from "../pages/Login";

const ProtectedRoute = () => {
const [isLogin,setIsLogin] = useState(false);
const [loading, setLoading] = useState(true);

useEffect(()=>{
    setLoading(true);
    const token = localStorage.getItem("token");
    if(!token){
        setIsLogin(false)
        setLoading(false)
    } else{
        setIsLogin(true)
        setLoading(false)
    }
},[isLogin]);

if (loading){
    return "Loadingggg...."
}
return isLogin ? <Outlet/> : <Navigate to="/Login"/>


    
}

export default ProtectedRoute