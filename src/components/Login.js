import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Login = (props) => {
    const [userName, setUserName] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userName);
    
    }
    

    return (
        <div className="auth-form-container" >
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="userName">username</label>
                <input value={userName} onChange={(e) => setUserName(e.target.value)}type="userName" placeholder="your name" id="email" name="userName" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button  type="submit" >Log In</button>
            </form>
            <div className="reg-link">
            <Link button to={"/Register"}>
                <button>Don't have an account? Register here</button>
            </Link>

            </div>
         { /*  <button className="link-btn" onClick={() => props.onFormSwitch('register')}>.</button> */}
        </div>
    )
}