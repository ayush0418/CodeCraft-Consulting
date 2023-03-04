import React from "react";
import Dashboard from "../components/Dashboard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Information from "../components/Information"
import Contact from "../components/Contact"
import Serv from "../components/Serv"

const Home = () =>{
    return(
        <div>
            <Navbar/>
            <Dashboard/>
            <Information/>
            <Serv/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default Home;