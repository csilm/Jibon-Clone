import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error,setError]=useState('');
    const navigate=useNavigate();

    const handleNameBlur = event => {
        setName(event.target.value);
    }

    const handleAddressBlur = event => {
        setAddress(event.target.value);
    }

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePhoneBlur = event => {
        setPhone(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handleConfirmPassword = event => {
        setConfirmPassword(event.target.value);
    }


    const handleCreateUser=event=>{
        event.preventDefault();
        if(password !==confirmPassword){
            setError('Your two password didnot match');
            return;
        }
    }

    return (
        <div className='background'>
           
            <div className='form-container'>
                <div>
                    <h2 className='form-title'>Sign Up</h2>
                    <form  onSubmit={handleCreateUser}>
                        <div className='input-group'>
                            <label htmlFor="name">Name</label>
                            <input onBlur={handleNameBlur} type="name" name="name" id="" required />
                        </div>
                        <div className='input-group'>
                            <label htmlFor="address">Address</label>
                            <input onBlur={handleAddressBlur} type="address" name="address" id="" required />
                        </div>
                        <div className='input-group'>
                            <label htmlFor="email">Email</label>
                            <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                        </div>

                        <div className='input-group'>
                            <label htmlFor="phone">Phone</label>
                            <input onBlur={handlePhoneBlur} type="phone" name="phone" id="" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="confirm-password">Confirm Password</label>
                            <input onBlur={handleConfirmPassword} type="password" name="confirm-password" id="" required />
                        </div>
                         <p style={{ color: 'red' }}>{error}</p>
                        <input className='form-submit' type="submit" value="Sign Up" />
                    </form>
                    <p>
                        Already have an account? <Link className='form-link' to="/login">Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;