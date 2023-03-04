import "../components/ServStyle.css";
import React from "react";
import { Link } from "react-router-dom";

const Serv = () =>{
    return (
        <div className="serv-container">
            <div className="serv-left">
                <h3> One Stop Solution For Your <span>Online Presence</span> </h3>
                <p> Combining our technology platform with our skilled team, you may have an unfair advantage over 
                    your competitors and get your website at the top of Google.
                </p>
            </div>
            <div className="serv-right">
                <div className="serv-right-r1c1">
                    <p>Search Engine Optimization (SEO)</p>
                    <h4>We’ll help you get to the top of the search engine results pages through ethical, well-researched methods like using the right keywords.</h4>
                    <Link className="serv-link" to ="/AboutUs">Read More </Link>
                </div>
                <div className="serv-right-r1c2">
                    <p>Website design and development</p>
                    <h4> There are millions of websites out there, so it’s important that yours stands out, closely describes your brand, and ultimately contributes to the growth of your business.</h4>
                    <Link className="serv-link" to ="/AboutUs">Read More </Link>
                </div>
                <div className="serv-right-r1c3">
                    <p>Website marketing</p>
                    <h4>We have years of experience in advertising websites across a wide variety of search engines. Help turn more site visitors into customers!</h4>
                    <Link className="serv-link" to ="/AboutUs">Read More </Link>
                </div>
                <div className="serv-right-r2c1">
                    <p>Mobile Application</p>
                    <h4> We specialize in app creation for many mobile platforms. Each of the major platforms has unique features, and our professionals are well-versed in all of them.</h4>
                    <Link className="serv-link" to ="/AboutUs">Read More </Link>
                </div>
                <div className="serv-right-r2c2">
                    <p>Social Media Marketing</p>
                    <h4>Social media marketing is essential for staying in touch with your audience. Either on our own or in collaboration with you, we ensure that your online community remains active.</h4>
                    <Link className="serv-link" to ="/AboutUs">Read More </Link>
                </div>
                <div className="serv-right-r2c3">
                    <p>Technical Support</p>
                    <h4>To ensure that our customers are always satisfied, we offer first-rate after-sale service that includes both technical assistance and routine maintenance.</h4>
                    <Link className="serv-link" to ="/AboutUs">Read More </Link>
                </div>
                
            </div>

        </div>
    )
}

export default Serv;