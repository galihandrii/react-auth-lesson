import React, { useEffect, useState } from "react";
import "./Editpage.css"
import { Link, useParams } from "react-router-dom";



const Editpage = () => {
    const [car,setCar] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        getData();
    },[])

    const getData = () => {
        const token = localStorage.getItem("token")
        


    }



    return(
        <div className="editcar">
        <h2>Edit Car</h2>
        <h2>ini id {id}</h2>    
        <div><input  placeholder="nama"/></div>
        <div><input  placeholder="Harga"/></div>
        <div><input  type="file"/></div>
        <div><input  placeholder="kategori"/></div>
        <div><Link to="/Discovery"><button>Cancel</button></Link></div>
        <div><button>Save</button></div>
    </div>
    )
}


export default Editpage;