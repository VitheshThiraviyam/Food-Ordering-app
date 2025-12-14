import React, { useState } from 'react';
import './Loginpopup.css';
import { assets } from '../assets/assets';
const Loginpopup = ({ setshowlogin }) => {
    const [currstate, setcurrstate] = useState("Sign Up");
    return (
        <div className='login-popup'>
            <form className='loginpopup-container'>
                <div className='loginpopup-title'>
                    <h2>{currstate}</h2>
                    <img onClick={() => setshowlogin(false)} src={assets.cross_icon}></img>
                </div>
                <div className='loginpopup-input'>
                    {currstate === "Sign Up" ? <input type='text' placeholder='Enter your name' required /> : <></>}
                    <input type='email' placeholder='Enter your email' required />
                    <input type='password' placeholder='Enter your password' required />
                </div>
                <button>{currstate === "Sign Up" ? "Create Account" : "Login"}</button>
                <div className="loginpopup-checkbox">
                    <input type='checkbox' required />
                    <p>I agree the terms and conditions</p>
                </div>
                {currstate === "Sign Up" ?
                    <p>Already have an account ? <span onClick={() => setcurrstate("Login")}>Login here</span></p> :
                    <p>Create a new account <span onClick={() => setcurrstate("Sign Up")}>Create here</span></p>}

            </form>
        </div>
    )
}

export default Loginpopup