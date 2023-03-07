import React, { useState } from 'react'
import './login.css'
import loginImage from '../../assets/login.png'
import { FaUserAlt, FaLock } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar/navbar'
export default function Login() {
    const [user, setuser] = useState('');
    const [psswd, setpsswd] = useState('');
    const navigate = useNavigate();
    const login_submit = async () => {
        const response = await fetch("https://hackoverflow-backend.onrender.com/login", {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                "username": user,
                "password": psswd
            }),
        }).then(res => res.json())
            .then(data => {
                if (data["isLogin"] == true) {
                    console.log("yes");
                    return navigate('/', { replace: true });
                }
                else {
                    alert("Invaild data");
                }
            })
    }
    return (
        <div className="body">
            <Navbar />
            <div className="login-container">

                <div className="login-window">
                    <div className="top">
                        <img src={loginImage} alt="Login Image" />
                    </div>
                    <div className="bottom">
                        <div className="fields">
                            <h3>Login</h3>
                            <div className="input-box">
                                <FaUserAlt />
                                <input type="text" placeholder='Email' className='email' value={user} onChange={(e) => {
                                    setuser(e.target.value)
                                }} />
                            </div>
                            <div className="input-box">
                                <FaLock />
                                <input type="password" placeholder='Password' className='password' value={psswd} onChange={(e) => {
                                    setpsswd(e.target.value)
                                }} />
                            </div>
                            <div className="extra">
                                <div className="remember_me">
                                    <input type="checkbox" name="remember" id="remember" />
                                    <label htmlFor="remember">Remember Me</label>
                                </div>
                                <div className="forgot">
                                    <a href="/forgot">Forgot Password?</a>
                                </div>
                            </div>
                            <button type="submit" className='login-btn' onClick={login_submit}>Login </button>
                            <div className="new_acc">
                                <p>Don't have an account? </p>
                                <a href="/register">Register</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
