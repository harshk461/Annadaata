import React from 'react'
import '../Navbar/navbar.css'
import { FaGithub, FaUser } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'
import { VscThreeBars } from 'react-icons/vsc'
import logo from '../../assets/Group 2.png'
export default function Navbar() {
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
        <nav className='nav-container'>
            <div className="navbar-active">
                <div className="logo">
                    <a href="/"><h2>Pratidhi</h2></a>
                    <img src={logo} alt="logo" />
                </div>
                <div className="links">
                    <a href="/" className="link">Home</a>
                    <a href="/blog" className="link">Blog</a>
                    <a href="/predict" className="link">Prediction</a>
                    <a href="/contact" className="link">Contact</a>
                    <a href="/drone-form" className='link'>Book Drone</a>
                </div>
                <div className="icons">
                    <a href="/login" className="icon-link">{<FaUser size={30} />}</a>

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
                    <a href="/contact" className="link">Contact</a>
                    <a href="/drone-form">Book Drone</a>
                </div>
            </div>
        </nav>
    )
}
