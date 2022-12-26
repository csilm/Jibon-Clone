import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import "./Login.css"

const Login = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigate=useNavigate();

    const handleEmailBlur=event=>{
        setEmail(event.target.value);
    }

    const handlePasswordBlur=event=>{
        setPassword(event.target.value);
    }

    const handleUserSignIn=event=>{
        event.preventDefault();

    }

    return (

        <div  className='background'>
            <div className='form-container'>

                <div>
                    <h2 className='form-title'>Please Login</h2>
                    <form onSubmit={handleUserSignIn}>
                        <div className='input-group'>
                            <label htmlFor="email">Email</label>
                            <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                        </div>
                        <input className='form-submit' type="submit" value="Login" />
                    </form>
                    <p>
                        New Member?<Link
                            className='form-link text-success' to="/signup">Create an account</Link>
                    </p>
                    <p>Forget Password? <button className=' btn btn-link text-success pe-auto text-decoration-none' >Reset Password</button> </p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;