import React from 'react'
import Footer from '../../components/Footer/footer'
import Navbar from '../../components/Navbar/navbar'
import '../Blog/blog.css'

export default function Blog() {
    return (
        <div className="body">
            <Navbar />
            <div className="blog-window" >
                <div className="header">
                    <h3>Stay up to date with the latest Leaf news.</h3>
                    <h5>The farm data ecosystem of the future</h5>
                </div>
                <div className="blog-section">
                    <div className="blog">
                        <img src="	https://leaf.imgix.net/img/hubspot/leaf_402.png?auto=format&h=220&w=400&fit=crop" alt="" />
                        <div className="blog-data">
                            <h4>Farm data:catalyst for agribussiness in 2023</h4>
                            <h6>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum necessitatibus, beatae assumenda maiores fugiat nostrum.</h6>
                        </div>
                    </div>
                    <div className="blog">
                        <img src="	https://leaf.imgix.net/img/hubspot/leaf_130.jpg?auto=format&h=220&w=400&fit=crop" alt="" />
                        <div className="blog-data">
                            <h4>Keep It Clean</h4>
                            <h6>Why it's important to keep ag data 'clean' and how Leaf can help.</h6>
                        </div>
                    </div>
                    <div className="blog">
                        <img src="	https://leaf.imgix.net/img/hubspot/leaf_031.jpg?auto=format&h=220&w=400&fit=crop 1x" alt="" />
                        <div className="blog-data">
                            <h4>Turning Farm Management Data into Carbon Credits</h4>
                            <h6>Leaf helps partners lower the amount of time and money they spend on gathering and submitting data for carbon credit programs.</h6>
                        </div>
                    </div>
                    <div className="blog">
                        <img src="	https://leaf.imgix.net/img/hubspot/leaf_130.jpg?auto=format&h=220&w=400&fit=crop" alt="" />
                        <div className="blog-data">
                            <h4>Keep It Clean</h4>
                            <h6>Why it's important to keep ag data 'clean' and how Leaf can help.</h6>
                        </div>
                    </div>
                    <div className="blog">
                        <img src="	https://leaf.imgix.net/img/hubspot/leaf_402.png?auto=format&h=220&w=400&fit=crop" alt="" />
                        <div className="blog-data">
                            <h4>Farm data:catalyst for agribussiness in 2023</h4>
                            <h6>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum necessitatibus, beatae assumenda maiores fugiat nostrum.</h6>
                        </div>
                    </div>
                    <div className="blog">
                        <img src="	https://leaf.imgix.net/img/hubspot/leaf_130.jpg?auto=format&h=220&w=400&fit=crop" alt="" />
                        <div className="blog-data">
                            <h4>Keep It Clean</h4>
                            <h6>Why it's important to keep ag data 'clean' and how Leaf can help.</h6>
                        </div>
                    </div>
                    <div className="blog">
                        <img src="	https://leaf.imgix.net/img/hubspot/leaf_031.jpg?auto=format&h=220&w=400&fit=crop 1x" alt="" />
                        <div className="blog-data">
                            <h4>Turning Farm Management Data into Carbon Credits</h4>
                            <h6>Leaf helps partners lower the amount of time and money they spend on gathering and submitting data for carbon credit programs.</h6>
                        </div>
                    </div>
                    <div className="blog">
                        <img src="	https://leaf.imgix.net/img/hubspot/leaf_130.jpg?auto=format&h=220&w=400&fit=crop" alt="" />
                        <div className="blog-data">
                            <h4>Keep It Clean</h4>
                            <h6>Why it's important to keep ag data 'clean' and how Leaf can help.</h6>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
