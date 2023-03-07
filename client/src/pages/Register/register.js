import React, { useState } from 'react'
import './register.css'
import loginImage from '../../assets/login.png'
import { FaUserAlt, FaLock, FaMailBulk } from 'react-icons/fa'
import Navbar from '../../components/Navbar/navbar';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setemail] = useState('');
    const [passwd, setpsswd] = useState('');
    const [cnf_passwd, setcnf_psswd] = useState('');

    return (
        <div className="body">
            <Navbar />
            <div className="register-container">
                <div className="register-window">
                    <div className="top">
                        <img src={loginImage} alt="Login Image" />
                    </div>
                    <div className="bottom">
                        <div className="fields">
                            <h3>Create New Account</h3>
                            <div className="input-box">
                                <FaUserAlt />
                                <input type="text" placeholder='Name' className='name' value={name} onChange={(e) => {
                                    setName(e.target.value);
                                }} />
                            </div>
                            <div className="input-box">
                                <FaMailBulk />
                                <input type="text" placeholder='Email' className='email' value={email} onChange={(e) => {
                                    setemail(e.target.value);
                                }} />
                            </div>
                            <div className="input-box">
                                <FaLock />
                                <input type="password" placeholder='Password' className='password' value={passwd} onChange={(e) => {
                                    setpsswd(e.target.value);
                                }} />
                            </div>
                            <div className="input-box">
                                <FaLock />
                                <input type="password" placeholder='Confirm Password' className='cnf_password' value={cnf_passwd} onChange={(e) => {
                                    setName(e.target.value);
                                }} />
                            </div>
                            <button type="submit" className='login-btn'>Register </button>
                            <div className="new_acc">
                                <p>Already have an account?</p>
                                <a href="/login">Login</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
