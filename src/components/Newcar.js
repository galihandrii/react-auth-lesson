import { Link, Navigate, useNavigate } from "react-router-dom";
import "./Newcar.css"
import { useState } from "react";
import axios from "axios";
import { API } from "../pages/const/endpoint";

const Newcar = () => {
const [name,setName] = useState('');
const [img,setImg] = useState(null);
const [price,setPrice] = useState('');
const [category,setCategory] = useState('');
const navigate = useNavigate();


const handleName = (e) => {
    setName(e.target.value);
}
const handleImg = (e) => {
    setImg(e.target.files[0]);
}
const handlePrice = (e) => {
    setPrice(e.target.value);
}
const handleCategory = (e) => {
    setCategory(e.target.value);
}

const handleCreate = () => {
    const token = localStorage.getItem("token");

    const config = {
        headers: {
            access_token:token,
        },
    };



    const formData = new FormData();
    formData.append("image", img);
    formData.append("name",name);
    formData.append("category",category);
    formData.append("price",price);
    formData.append("status",false);
    
    axios.post(API.POST_CAR, formData, config)
    .then((res)=>{
        navigate("/Discovery");
    })
    .catch((err)=>console.log(err));
    


}


    return (
        <div className="newcar">
            <div><input onChange={handleName} placeholder="nama"/></div>
            <div><input onChange={handlePrice} placeholder="Harga"/></div>
            <div><input onChange={handleImg} type="file"/></div>
            <div><input onChange={handleCategory} placeholder="kategori"/></div>
            <div><Link to="/Discovery"><button>Cancel</button></Link></div>
            <div><button onClick={handleCreate}>Save</button></div>
        </div>
    )
}

export default Newcar;