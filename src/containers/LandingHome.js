import React from 'react'

import Page1 from './page1/page1'
import Nav from '../components/navbar/Navbar'
import SlidSpot from '../components/spots/slide_spot'

import './landingpage.css'

const Home = () => {
    return <div className = 'landingPage'>
        <Nav />
        <SlidSpot />
        <Page1 />
        
    </div>
}

export default Home