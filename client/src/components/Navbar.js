import "./NavbarStyles.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa";
import logo from "../images/CCC_LOGO.jpg";

const Navbar =() => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <div className ="header" >
            <Link to ={"/"}>
                <img className="logo" src={logo} alt="SpiderWeb"  height={70}/>
            </Link>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li>
                    <Link to ="/" className="bttn-hov">Home</Link>
                </li>
                <li>
                    <Link to ="/AboutUs" className="bttn-hov">About Us</Link>
                </li>
                <li>
                    <Link to ="/Services" className="bttn-hov">Services</Link>
                </li>
                <li>
                    <Link to ="/ContactUs" className="bttn-hov">Contact Us</Link>
                </li>
            </ul>
            <Link to = "/UserLogin"  className="btn">Log In</Link>
            
            {/* More Option button on the screen */}
            <div className="hamburger" onClick={handleClick}>
                {click ? 
                (<FaTimes size={20} style={{color: "#fff"}} />) : 
                (<FaBars  size={20} style={{color: "#fff"}} />)
                }
            </div>
        </div>
    )
}
export default Navbar