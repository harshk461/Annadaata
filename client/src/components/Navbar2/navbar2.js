import React from 'react'
import './navbar2.css'
import logo from '../../assets/reckon_logo.png'
import { FaSearch } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'
import { VscThreeBars } from 'react-icons/vsc'

export default function Navbar2() {
    function toggle() {
        const hamburger = document.getElementById('ham');
        const menu = document.getElementById("menu");
        hamburger.addEventListener('click', () => {
            menu.style.display = 'block';
        })
    }
    function backtoNav() {
        const cross = document.getElementById('cross');
        const menu = document.getElementById("menu");
        cross.addEventListener('click', () => {
            menu.style.display = 'none';
        })
    }
    return (
        <div className="nav2">
            <div className="nav2_active">
                <div className="nav2_left flex">
                    <img src={logo} alt="logo" />
                </div>
                <div className="nav2_center">
                    <a href="/" className='nav_underline'>Home</a>
                    <a href="/predict" className='nav_underline'>Services</a>
                    <a href="/blog" className='nav_underline'>Blogs</a>
                    <a href="/contact" className='nav_underline'>Contact us</a>
                </div>
                <div className="nav2_right">
                    <FaSearch size={30} />
                    <a href="/login">Log in</a>
                </div>
                <div className="ham hidden">
                    <button className="hamburger" id='ham' onClick={toggle}>
                        <VscThreeBars size={35} />
                    </button>
                </div>
            </div>

            <div className="menu hidden" id='menu'>
                <div className="top-bar">
                    <ImCross id='cross' onClick={backtoNav} size={30} />
                </div>
                <div className="fields">
                    <a href="/" className="link">Home</a>
                    <a href="/blog" className="link">Blog</a>
                    <a href="#" className="link">Prediction</a>
                    <a href="/contact" className="link">Contact us</a>
                </div>
            </div>
        </div>
    )
}
