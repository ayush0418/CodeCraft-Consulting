import "./ResetPasswordUStyles.css";
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function ResetPasswordU() {

    const [credentials, setCredentials] = useState({ email: "", newPassword: "", confirmPassword: "" });
    let navigate = useNavigate();

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault()
        console.log(credentials);

        var dataObj = {
            email: credentials.email,
            newPassword: credentials.newPassword,
            confirmPassword: credentials.confirmPassword,
        }

        var response = await fetch('/userResetPassword', {
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
            alert("Password Changed");
            localStorage.setItem('access-token', json.jwtToken);
            sessionStorage.setItem('usr_data', JSON.stringify(json));
            navigate("/UserLogin")
        }
        else {
            console.log("Entered email is not registered");
            alert("Try Again");
        }
    }

    return (
        <div className="ResetPassword" >
            <h1> RESET PASSWORD</h1>
            <form onSubmit={handleOnSubmit} >
                <div className="ResetPassword-input">
                    <input name='email' className="ResetPassword-email" placeholder="Email" onChange={onChange} required /><br /><br />
                    <input name='newPassword' className="ResetPassword-newPassword" placeholder="New Password" onChange={onChange} required /><br /><br />
                    <input name='confirmPassword' className="ResetPassword-confirmPassword" placeholder="Confirm Password" onChange={onChange} required /><br /><br />
                </div>
                <button type="submit" className="ResetPassword-submit">Submit</button>
            </form>
            <p id="accountExists" className="ResetPassword-signin"><b>Already have an account?</b><Link to="/UserLogin" id='signInBtn'> <b>Sign in</b></Link></p>

        </div>
    )
}
export default ResetPasswordU;
