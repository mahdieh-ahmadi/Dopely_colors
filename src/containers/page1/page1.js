import React from 'react'

import Head from './headPage1/Head'
import AboutPallet from './aboutPallet/aboutPallet'
import ManagePalete from './managePalete/managePlete'
import Endless from './EnlessColor/EndlessColor'

import './page1.css'

const Page1 = () => {
    

    return <div className='page1'>
        <Head />
        <AboutPallet />
        <ManagePalete />
        <Endless />
    </div>
}

export default Page1