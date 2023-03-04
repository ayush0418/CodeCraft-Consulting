import React from "react";
import {Route, Routes} from "react-router-dom"; 
import "./index.css";
import Home from "./routes/Home";
import AboutUs from "./routes/AboutUs";
import ContactUs from "./routes/ContactUs";
import Services from "./routes/Services";
import UserLogin from "./routes/UserLogin";
import UserSignUp from "./routes/UserSignUp";
import UserForgotPassword from "./routes/UserForgotPassword";
import UserResetPassword from "./routes/UserResetPassword";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/UserLogin" element={<UserLogin />} />
        <Route path="/UserSignUp"  element={<UserSignUp />} />
        <Route path="/UserForgotPassword"  element={<UserForgotPassword />} />
        <Route path="/UserResetPassword"  element={<UserResetPassword />} />
      </Routes>
    </>
  );
}

export default App;
