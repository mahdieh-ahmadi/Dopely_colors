import React from 'react'

import Header from '../../../components/headers/Header'
import Pallet from './pallet/pallet'

import './aboutPallet.css'

const AboutPallet = () => {
    return <div className='aboutPallet'>
        <div className='abourpallet__header'>
            <Header >Everything you need to create and managea mazing palettes</Header>
            <div className='aboutpallet_paragrapg'>
                <p>Find the perfect color tools and resources for any project.</p>
                <p>From color palettes to everything you could ever want to learn about 
                    color.
                </p>
            </div>
        </div>
        
        <Pallet />
        

        <div className='coler_pollet_generation'>
            <h2 className='coler_pollet_generation--head' >Coler Palete Genaration</h2>
            <p className='coler_pollet_generation--paragraph'>
            Dopely gradient generator is a 
            happy little website and free tool that lets you 
            </p>
        </div>
    </div>
}

export default AboutPallet