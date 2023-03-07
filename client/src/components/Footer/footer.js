import React from 'react'
import { FaArrowLeft, FaArrowRight, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import '../Footer/footer.css'

export default function Footer() {
    return (
        <footer>
            <div className="left">
                <div className="section1 section">
                    <div className="title">SiteMap</div>
                    <div className="fields">
                        <a href="/">Home</a>
                        <a href="/">Home</a>
                        <a href="/">Home</a>
                    </div>
                </div>
                <div className="section1 section">
                    <div className="title">SiteMap</div>
                    <div className="fields">
                        <a href="/">Home</a>
                        <a href="/">Home</a>
                        <a href="/">Home</a>
                    </div>
                </div>
                <div className="section1 section">
                    <div className="title">SiteMap</div>
                    <div className="fields">
                        <a href="/">Home</a>
                        <a href="/">Home</a>
                        <a href="/">Home</a>
                    </div>
                </div>
                <div className="section1 section">
                    <div className="title">SiteMap</div>
                    <div className="fields">
                        <a href="/">Home</a>
                        <a href="/">Home</a>
                        <a href="/">Home</a>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="newsletter">
                    <div className="title"><h3>Join Our Newsletter</h3></div>
                    <div className="subtitle">
                        <h4>We will send you updates on new products and discounts.</h4>
                    </div>
                    <div className="mail">
                        <input type="mail" placeholder='Email Address...' />
                        <button>Send</button>
                    </div>
                    <div className="contact">
                        <div className="icons">
                            <a href="/"><FaFacebook size={25} /></a>
                            <a href="/"><FaInstagram size={25} /></a>
                            <a href="/"><FaLinkedin size={25} /></a>
                            <a href="/"><FaTwitter size={25} /></a>

                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
