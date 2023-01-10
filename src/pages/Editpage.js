import React, { useEffect, useState } from "react";
import "./Editpage.css"
import { Link, useParams, useNavigate} from "react-router-dom";
import axios from "axios";
import { Carousel } from "bootstrap";



const Editpage = () => {
    const [car,setCar] = useState({});
    const {id} = useParams();
    const [name,setName] = useState('')
    const [price,setPrice] = useState('')
    const [image,setImage] = useState('')
    const [category,setCategory] = useState('')
    const navigate = useNavigate()

    const handleName = (e) => {
        setName(e.target.value)
    }
    const handlePrice = (e) => {
        setPrice(e.target.value)
    }
    const handleImage = (e) => {
        setImage(e.target.files[0])
    }
    const handleCategory = (e) =>{
        setCategory(e.target.value)
    }

    useEffect(()=>{
        getData();
    },[])

    const getData = () => {
        const token = localStorage.getItem("token")
        const config = {
            headers : {
                access_token : token
            },
        }

        axios.get(`https://bootcamp-rent-cars.herokuapp.com/admin/car/${id}`,config)
        .then((res)=>{
            console.log(res.data)
            setName(res.data.name)
            setPrice(res.data.price)
        })
        .catch((err)=>console.log(err.message))

    }


    const handleEdit = () => {
        const token = localStorage.getItem ('token')
        const config = {
            headers : {
                access_token: token
            }
        }

        const formData = new FormData();
        formData.append('image',image)
        formData.append('name',name)
        formData.append('category',category)
        formData.append('price', price)
        formData.append('status', false)

        axios.put(`https://bootcamp-rent-cars.herokuapp.com/admin/car/${id}`,formData, config)
        .then((res)=>{
            console.log(res)
            navigate('/Discovery')
        })

    }


    return(
        <div className="editcars">
        <h2>Edit Car</h2>
        <h2>ini id {id}</h2>    
        <div><input onChange={handleName}  value={name} /></div>
        <div><input onChange={handlePrice}  value={price}/></div>
        <div><input onChange={handleImage} type="file"/></div>
        <div><input onChange={handleCategory} placeholder="kategori"/></div>
        <div><Link to="/Discovery"><button>Cancel</button></Link></div>
        <div><button onClick={handleEdit}>Save</button></div>
    </div>
    )
}


export default Editpage;