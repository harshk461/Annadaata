import React from 'react'
import '../Contact/contact.css'
import { FaMap, FaPhone } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import Navbar from '../Navbar/navbar'
export default function Contact() {
    return (
        <div className="body">
            <Navbar />
            <div className="contact-window">
                <div className="contact-fields">
                    <h3>Get in touch!</h3>
                    <h4>Contact us for any query</h4>
                    <div className="address-fields">
                        <div className="field">
                            <FaMap size={25} />
                            <h4>102 Street XYZ</h4>
                        </div>
                        <div className="field">
                            <FaPhone size={25} />
                            <h4>+91 XXXXXXXXXX</h4>
                        </div>
                        <div className="field">
                            <AiOutlineMail size={25} />
                            <h4>102 Street XYZ</h4>
                        </div>
                    </div>
                    <div className="input-field">
                        <h4>Contact Form</h4>
                        <div className="text-fields">
                            <div className="left-field">
                                <div className="input">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" className='name' id='name' placeholder='Enter Your Name' />
                                </div>
                                <div className="input">
                                    <label htmlFor="email">Email</label>
                                    <input type="text" className='email' id='email' placeholder='Enter Your Email' />
                                </div>
                                <div className="input">
                                    <label htmlFor="phone">Phone</label>
                                    <input type="text" className='phone' id='phone' placeholder='Enter Your Phone No.' />
                                </div>
                            </div>
                            <div className="right-field">
                                <label htmlFor="message">Message</label>
                                <textarea name="message" id="message" ></textarea>
                            </div>
                        </div>
                        <button>Send Message</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
