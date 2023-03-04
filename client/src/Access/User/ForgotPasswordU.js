import "./ForgotPasswordUStyles.css";
import React, { useRef, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';


function ForgotPasswordU() {
    const emailRef = useRef();
    const [credentials, setCredentials] = useState({ email: "", otp: "" });
    let navigate = useNavigate();

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault()
        console.log(credentials);

        var dataObj = {
            email: credentials.email,
        }

        var response = await fetch('/userEmailSend', {
            method: 'POST',
            mode: 'no-cors',
            cache: 'no-cache',
            accessControlAllowOrigin: 'http://localhost:5000,*',
            accept: 'application/json',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dataObj)
        });

        var json = await response.json().catch(err => console.log(err));
        console.log("Response received: " + JSON.stringify(json));

        if (json.success) {
            alert("OTP SENT");
            console.log("Email Found");
            localStorage.setItem('access-token', json.jwtToken);
            sessionStorage.setItem('usr_data', JSON.stringify(json));
        }
        else if (json.otpSuccess) {
            console.log("Otp Sent");
            alert("please check your mail Id:");
        }
        else {
            console.log("Entered email is not registered");
            alert("Invalid Email");
        }
    }

    const handleOtp = async (e) => {
        e.preventDefault()
        console.log(credentials);

        var dataObj = {
            email: credentials.email,
            otp: credentials.otp,
        }
        console.log(dataObj);

        var response = await fetch('/userOtpverify', {
            method: 'POST',
            mode: 'no-cors',
            cache: 'no-cache',
            accessControlAllowOrigin: 'http://localhost:5000,*',
            accept: 'application/json',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dataObj)
        });

        var json = await response.json().catch(err => console.log(err));
        console.log("Response received: " + JSON.stringify(json));

        if (json.success) {
            console.log("OTP entered is correct");
            localStorage.setItem('access-token', json.jwtToken);
            sessionStorage.setItem('usr_data', JSON.stringify(json));
            navigate("/UserResetPassword");
        }
        else {
            console.log("Entered email is not registered");
            alert("Invalid Email");
        }
    }

    return (
        <div className="ForgotPassword">
            <div className="ForgotPassword-container">
                <div className="ForgotPassword-text">
                    <h2>Forgot Password</h2>
                </div>
                <form autoComplete="off" id='otpForm'  method="post" onSubmit={handleOnSubmit}>
                    <div className="ForgotPassword-input">
                        <input type='email' name='email' className="ForgotPassword-input-email" placeholder="Enter your Email" onChange={onChange} ref={emailRef} required></input>
                    </div>
                    <div>
                        <button type="submit" className="ForgotPassword-sendotp" >Send Otp</button>
                        <p id="accountExists" className="ForgotPassword-signin"><b>Already have an account?</b><Link to="/UserLogin" id='signInBtn'> <b>Sign in</b></Link></p>
                    </div>
                </form>
                <form method="post" onSubmit={handleOtp}>
                    <div >
                        <input type='otp' name='otp' className="ForgotPassword-OtpCode" placeholder="Enter your otp" onChange={onChange} required />
                    </div>
                    <button className="ForgotPassword-submit" type="submit" >Submit</button>
                </form>
            </div>
        </div>
    );
};

export default ForgotPasswordU;