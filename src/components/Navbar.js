import "./Navbar.css"
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-list">
                <ul>
                    <li><Link to={"/"}><a>Homepage</a></Link></li>
                    <li><Link to={"/Discovery"} ><a >Discovery</a></Link></li>
                    <li><Link to={"/Login"} ><a>Login</a></Link></li>
                    <li><Link to={"/Register"} ><a>Register</a></Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;