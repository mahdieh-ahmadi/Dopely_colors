import React, { useState } from 'react'

import './navbar.css'

import HamberBtn from '../button/hamberBtn/hamberBtn'
import Button from '../button/navBtn/naviconBtn'
import Logo from '../../img/logo.png'

const Nav = () => {
   
    const [show , setShow] = useState(false)
    const toggle = () => {
        setShow(preval => !preval)
    }

    return <div className='navbar'>
        <div className = 'navbar_main'>
            <HamberBtn clicked={toggle}/>
            <img src={Logo} alt="logo" className='navLogo' />
            <div className='navBtns'>
                <Button >Tools &#8250;</Button>
                <Button >Explore  &#8250;</Button>
                <Button >Feature</Button>
                <Button >Blog</Button>
            </div>

            <div className='sign'>
            <Button >Sign in</Button>
            <div className='line'></div>
            <Button class = 'blue_Navbtn'>Sign up</Button>
            </div>
        </div>
        <div className={`dropdown_nav ${show ? 'active_nav' : ''}`}>
                <Button >Tools &#8250;</Button>
                <Button >Explore  &#8250;</Button>
                <Button >Feature</Button>
                <Button >Blog</Button>
        </div>
    </div>
} 

export default Nav