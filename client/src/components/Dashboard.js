import "./DasboardStyles.css"
import React from "react";
import HomeImg from "../images/Home.jpg";

const Dashboard = () =>{
    return(
        <div className="dash">
            <div className="mask">
                <img className="home-img" src = {HomeImg} alt="home"/>
            </div>
            <div className="content">
                <h1>We are a </h1>
                <p>IT Service and Consulting Agency</p>
            </div>
        </div>
    )
}; 

export default Dashboard;