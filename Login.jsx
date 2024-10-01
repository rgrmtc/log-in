import React, { useState } from 'react';
import './login.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const Login = () => {

    const [action, setAction] = useState('')
    return (
        <div className='wrapper'>
            <div className="form-box login">
                <form action="">
                    <h1>LABEEIS</h1>
                    <div className="input-box">
                        <input type="text" placeholder='Username' required />
                        <FaUser className='icon' />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder='Password' required />
                        <FaLock className='icon' />
                    </div>
    
                    <button type="submit">Login</button>

                </form>
            </div>
        </div>
    );
};

export default Login;