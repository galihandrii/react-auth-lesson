import axios from "axios";
import { useState } from "react";
import "./Register.css"
import { API } from "./const/endpoint";
import { useNavigate } from "react-router-dom";

const Register = () => {
const [email, setEmail] = useState("")
const [password, setPassword] = useState("");
const [error, setError] = useState('');
const navigate = useNavigate();

const handleEmail = (e) => {
    setEmail(e.target.value);
    //console.log(email);
};
const handlePassword = (e) =>{
    setPassword(e.target.value);
};

const handleRegis = async() => {
    if (!email.length && !password.length){
        setError('Maskan email dan Password')
    }
    else if (!email.length ){
        setError('Masukan email')
    }
     else if (!password.length){
        setError('Masukan Password')
    }
    else {
        const payload = {
            email: email,
            password: password,
            role: "Admin",
        };
        //console.log(payload);
    
    try {
         await axios.post(API.REGISTER,payload);
        navigate("/Login");
    } catch (error) {
       // console.log(error);
        // handling error status code 500
        if(error.response.status === 500){
            if(error.response.data.errors[0].message ==='Validation isEmail on email failed'){
                setError('Invalid Email')
            } else if (error.response.data.errors[0].message === 'password must be at least 6 characters'){
                setError('password must be at least 6 characters')
            } else {
                // probably status code 400
                setError(error.response.data.message)
            }
      
        } 
        
    }
    }
    //isi console status code 500 berbeda dengan status code 400
    
    

    const payload = {
        email: email,
        password: password,
        role: "Admin",
    };
    console.log(payload);


//axios.post(API.REGISTER,payload)
//.then((res)=> {
//    navigate("/Login");
//})
//.catch((err)=> console.log(err.message))
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
        <div className="error-message">
        {
            !!error.length && <h2>{error}</h2>
        }
        </div>
        
        </div>
       
    )
}

export default Register;