import "./FooterStyle.css";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {

    return(
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                </div>
                <div className="right">
                    <ul className="foot-menu">
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
                </div>
            </div>   
        </div>
    )
}

export default Footer