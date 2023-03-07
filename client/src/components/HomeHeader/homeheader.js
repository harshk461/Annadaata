import React from 'react'
import '../HomeHeader/homeheader.css'
import farmer from '../../assets/farmer.png'

export default function HomeHeader() {
    return (
        <div className="header-container">
            <img src={farmer} alt="Farmer" />
            <div className="header-text">UNLOCK THE<br />
                UNLIMITED<br />
                POSSIBILITIES IN THE<br />
                FIELD OF<br />
                AGRICULTURE<br /></div>
            <div className="hidden-text">
                UNLOCK THE<br />
                UNLIMITED<br />
                POSSIBILITIES IN THE<br />
                FIELD OF<br />
                AGRICULTURE<br />
            </div>
        </div>
    )
}
