import "./LoginUStyles.css"
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';


function LoginU() {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    let navigate = useNavigate();
    
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault()
        console.log(credentials);

        var dataObj = {
            email: credentials.email,
            password: credentials.password,
        }

        var response = await fetch('/customerSignIn', {
            method: 'POST',
            mode: 'no-cors',
            cache: 'no-cache',
            accessControlAllowOrigin: 'http://localhost:5000,*',
            accept: 'application/json',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dataObj)
        });

        var json = await response.json().catch(err => console.log(err));
        console.log("response received: " + JSON.stringify(json));

        if (json.token) {
            console.log("SIGNIN SUCCESSFUL");
            localStorage.setItem('access-token', json.jwtToken);
            sessionStorage.setItem('usr_data', JSON.stringify(json));
            // handle success - redirect to home page
            // Redirect Here
            navigate("/");
        }
        else {
            console.log("SIGNIN FAILED");
            alert("Invalid Email or Password");
            //alert to show error to be handeled by frontend
        }

    }
    return (
        <>
            <div className='Main'>
                <div className="login">
                    <h1 className='form-heading'>Please Login</h1>
                    <div className='button-container'>
                        <Link to='/UserLogin'> <button id='User1'>User</button> </Link>
                    </div>
                    <br /><br />
                    <input type='email' placeholder="Enter your email" name='email' id="email1" onChange={onChange} required /><br /><br />
                    <input type='password' placeholder="Enter your Password" name='password' id="password1" onChange={onChange} required /> <br /> <br />
                    <button type='submit' data-aos="fade-zoom-in" id="button" onClick={handleOnSubmit}>Login</button>
                    <br></br><br></br>
                    <p id="accountExists1"><b>Don't have an account?</b><Link to="/UserSignUp" id='signInBtn1'><b> Sign Up</b></Link></p>
                    <p id="forgot"><Link to="/UserForgotPassword" id="forgot"> <b>Forgot Password?</b></Link></p><br />
                </div>
            </div>
        </>
    );
}

export default LoginU;