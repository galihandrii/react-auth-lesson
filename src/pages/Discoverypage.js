import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "./Discoverypage.css"
import { Link } from "react-router-dom";

const Discovery = () => {
    const[cars, setCars]= useState([]);
    
    useEffect(()=>{
        const token = localStorage.getItem('token')
        const config = {
            headers: { access_token: token  }
        };
        axios.get("https://bootcamp-rent-cars.herokuapp.com/admin/v2/car", config)
        .then((res)=>{
           setCars(res.data.cars);
        })
        .catch((err)=>console.log(err.message))

        

    },[])

    


    return (
        
        <div>
            <Navbar/>
            <div><h1>Ini discoverypage</h1></div>
            <div className="discovery-button"><Link to="/add-car"><button>Add New Car</button></Link></div>
            <div className="cards-list">
            {
                     cars.length && cars.map(function(item){
                        return (
                            
                                <div className="card-cars">
                                <div className="card-cars-img"><img src={item.image}/></div>
                                <div className="card-cars-desc">
                                    <h3>{item.name}</h3>
                                    <h4>{item.price}</h4>
                                    <p>{item.category}</p>
                                </div>
                            </div>
                            
                            
                        )
                    })
                }
            </div>
            
                
            
        </div>
    )
}

export default Discovery;