import React, { useState } from 'react'
import { FaDotCircle } from 'react-icons/fa'
import drone_img from '../../assets/drone (1).svg'
import '../Drone/drone.css'

export default function Drone() {
    const [connection, setconnection] = useState('CONNECTED');
    const onOff = () => {
        const top = document.getElementById('top');
        const connect = document.getElementById('connect');
        if (connection == 'CONNECTED') {
            setconnection("DISCONNECTED");
            top.style.backgroundColor = 'red';
            connect.style.color = 'greenyellow'
        }
        else {
            setconnection("CONNECTED");
            top.style.backgroundColor = 'greenyellow';
            connect.style.color = 'green'
        }
    }
    return (
        <div className="body">
            <div className="drone-window">
                <div className="drone-body">
                    <div className="top" >
                        <div className="connection" id='top'>
                            <FaDotCircle />
                            <h3 id='connect'>{connection}</h3>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="left">
                            <div className="header">
                                <h4>Speed</h4>
                            </div>
                            <div className="speed-container">
                                <div className="volumne">
                                    <div className="empty"></div>
                                    <div className="full"></div>
                                </div>
                                <div className="speed">
                                    <h2>22 mph</h2>
                                </div>
                            </div>
                        </div>
                        <div className="center">
                            <img src={drone_img} alt="drone" />
                        </div>
                        <div className="left">
                            <div className="header">
                                <h4>Distance</h4>
                            </div>
                            <div className="speed-container">
                                <div className="volumne">
                                    <div className="empty"></div>
                                    <div className="full"></div>
                                </div>
                                <div className="speed">
                                    <h2>80 M</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden-bar">
                        <div className="details">
                            <div className="section">
                                <h4>Speed 22mph</h4>
                            </div>
                            <div className="section">
                                Distance 80M
                            </div>
                        </div>
                    </div>
                    <button className='onOff' onClick={onOff}>ON/OFF</button>
                </div>
            </div>
            <div className="drone-book">
                <button><a href='/drone-form'>Book My Drone</a></button>
            </div>
        </div>
    )
}
