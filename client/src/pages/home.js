import React from 'react'
import Drone from '../components/Drone/drone'
import Footer from '../components/Footer/footer'
import HomeHeader from '../components/HomeHeader/homeheader'
import Navbar from '../components/Navbar/navbar'
import Navbar2 from '../components/Navbar2/navbar2'

export default function Home() {
    return (
        <div className='body'>
            <Navbar2 />
            <HomeHeader />
        </div>
    )
}
