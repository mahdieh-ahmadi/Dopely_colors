import React from 'react'

import './footer1.css'

import FooterBlock from './footerblocks/footerblock'
import Logo from '../../../img/logo.png'

const Footer = () => {
const colortool = ['Color Palette generator' , 'Gradient Generator' , 'Color wheel' , 'Color toner' , 'Color converter' , 'Contrast checker' , 'Color extractor' , 'color visualizer' , 'Explore colors and pelettes' , 'Color interaction' , 'Color pedia' , 'Color grading']
const resources = ['Blog' , 'Case Studies' , 'community'] 
const discover = ["What's new" , 'DopleyColor for Android' , 'Dopleycolor or adobe' , 'Dopleycolor for browser']
const brand = ['Advertise with us']
const connect = ['instagram', 'Facebook' , 'Twitter' , 'Youtube' , 'Tumblr' , 'Pinterest']
const company = ['About us' , 'press' ,'Careers' , 'Community lovs' , 'Cantact us' , 'Media kit', 'Terms of service' , 'Privacy policy' , 'Cookie policy']


    return <div className='footer'>
        <div className = 'footerLogo'>
            <img src={Logo} alt='footerLogo'/>
        </div>
        <div className='footer_detail'>
            <FooterBlock title='color tools' list={colortool}/>
            <FooterBlock title='resources' list={resources}/>
            <div>
            <FooterBlock title='discover' list={discover}/>
            <FooterBlock title='brand' list={brand}/>
            </div>
            <FooterBlock title='connect' list={connect}/>
            <FooterBlock title='company' list={company}/>
        </div>
          

        
    </div>
}

export default Footer