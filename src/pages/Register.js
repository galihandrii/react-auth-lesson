import axios from "axios";
import { useState } from "react";
import "./Register.css"
import { API } from "./const/endpoint";

const Register = () => {
const [email, setEmail] = useState("")
const [password, setPassword] = useState("");

const handleEmail = (e) => {
    setEmail(e.target.value);
};
const handlePassword = (e) =>{
    setPassword(e.target.value);
};

const handleRegis = () => {
    const payload = {
        email: email,
        password: password,
        role: "Admin",
    };

axios.post(API.REGISTER,payload)
.then((res)=> console.log(res))
.catch((err)=> console.log(err.message))
}








    return(
        <div className='regis'>
        <div><h2>Register admin</h2></div>
        <div>
            <input onChange={handleEmail} placeholder='email'/>
        </div>
        <div>
            <input onChange={handlePassword} placeholder='password'/>
        </div>
        <div><button onClick={handleRegis}>Register</button></div>
        </div>
       
    )
}

export default Register;