import { useEffect, useState } from "react";
import axios from "axios";
import { API } from "./const/endpoint";
import "./Login.css"
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [isLogin, setIsLogin] = useState(false);
    const navigate = useNavigate();
    
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handlePassword = (e) =>{
        setPassword(e.target.value);
    };
    
    const handleLogin = () => {
        const payloadLogin = {
            email: email,
            password: password,
           
        };
    
    axios.post(API.LOGIN,payloadLogin)
    .then((res)=> {
        console.log(res)
    localStorage.setItem('token', res.data.access_token);
    navigate("/Discovery");
    
    })
    .catch((err)=> console.log(err.message))
    }
    
    useEffect(()=>{
        const token = localStorage.getItem("token");
        if (!token){
            setIsLogin(false);
        } else {
            setIsLogin(true);
        }
    },[])

    const handleLogout = () => {
        localStorage.removeItem("token");
        //api logout ... di be harus remove di cookies
        navigate("/");
    }


    return(
        <div>
            <Navbar/>
            {
                isLogin ? (<button onClick={handleLogout}>Log Out</button>) : (<div className='login'>
                <div><h2>Login admin</h2></div>
                <div>
                    <input onChange={handleEmail} placeholder='email'/>
                </div>
                <div>
                    <input onChange={handlePassword} placeholder='password'/>
                </div>
                <div><button onClick={handleLogin}>Login</button></div>
                </div>)
            }
            
        </div>
        
    )
}

export default Login;