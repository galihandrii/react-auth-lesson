import { useState, useEffect, useLayoutEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Login from "../pages/Login";

const ProtectedRoute2 = (props) => {
const [login,setLogin] = useState(false);
const [loading, setLoading] = useState(true);

useLayoutEffect(()=>{
    setLoading(true);
    const token = localStorage.getItem("token");
    if(!token){
        setLogin(false)
        setLoading(false)
    } else{
        setLogin(true)
        setLoading(false)
    }
},[login]);

if (loading){
    return "...Checking Auth..."
}
if(!login) {return <Navigate to="/Login"/>};
return props.children
    
}

export default ProtectedRoute2;
