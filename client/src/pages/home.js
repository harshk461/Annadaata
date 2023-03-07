import React from 'react'
import Drone from '../components/Drone/drone'
import Footer from '../components/Footer/footer'
import HomeHeader from '../components/HomeHeader/homeheader'
import Navbar from '../components/Navbar/navbar'

export default function Home() {
    return (
        <div className='body'>
            <Navbar />
            <HomeHeader />
            <Drone />
            <Footer />
        </div>
    )
}
