import { Link } from "react-router-dom";
import "./Newcar.css"
import { useState } from "react";

const Newcar = () => {
const [name,setName] = useState('');
const [img,setImg] = useState(null);
const [price,setPrice] = useState('');
const [category,setCategory] = useState('');

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

console.log(name,img,price,category);



    return (
        <div className="newcar">
            <div><input onChange={handleName} placeholder="nama"/></div>
            <div><input onChange={handlePrice} placeholder="Harga"/></div>
            <div><input onChange={handleImg} type="file"/></div>
            <div><input onChange={handleCategory} placeholder="kategori"/></div>
            <div><button><Link to="/Discovery">Cancel</Link></button></div>
            <div><button>Save</button></div>
        </div>
    )
}

export default Newcar;