import React from 'react'
import '../HomeHeader/homeheader.css'
import home_bg from '../../assets/home_bg.jpeg'

export default function HomeHeader() {
    return (
        <div className="header-container">
            <img src={home_bg} alt="" />
            <div className="header-text">
                <h5>Digital Agriculture</h5>
                <h2>The Future of </h2>
                <h2>Indian Agriculture</h2>
            </div>
        </div>
    )
}
