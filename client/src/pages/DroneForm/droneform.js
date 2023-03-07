import React from 'react'
import Navbar from '../../components/Navbar/navbar'
import '../DroneForm/droneform.css'
import { useNavigate } from 'react-router-dom'
import Navbar2 from '../../components/Navbar2/navbar2';

export default function DroneForm() {
    const navigate = useNavigate();
    const submit_form = () => {
        alert("Your data has been collected");
        return navigate('/', { replace: true });
    }
    return (
        <div className="body">
            <Navbar2 />
            <div className="drone-window">
                <div className="drone-form">
                    <h4>Book your Drone</h4>
                    <div className="fields">
                        <div className="input-field">
                            <input type="text" className="name" placeholder='Name' />
                        </div>
                        <div className="input-field">
                            <input type="text" className="name" placeholder='Email' />
                        </div>
                        <div className="input-field">
                            <input type="text" className="name" placeholder='Phone Number' />
                        </div>
                        <div className="input-field">
                            <input type="text" className="name" placeholder='Alternate Number' />
                        </div>
                        <div className="input-field">
                            <select>
                                <option>Select Package Type</option>
                                <option>Package 1</option>
                                <option>Package 2</option>
                                <option>Package 2</option>
                            </select>
                        </div>
                        <div className="input-field">
                            <select>
                                <option>Payment Type</option>
                                <option>Net Banking</option>
                                <option>UPI</option>
                                <option>Cash On Delivery(COD)</option>
                            </select>
                        </div>
                        <div className="input-field">
                            <textarea name="address" placeholder='Enter Your Address'></textarea>
                        </div>
                    </div>
                    <div className="submit-btn">
                        <button onClick={submit_form}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
