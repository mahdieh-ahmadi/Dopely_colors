import React from 'react'

import './navbar.css'

import HamberBtn from '../button/hamberBtn/hamberBtn'
import Button from '../button/navBtn/naviconBtn'
import Logo from '../../img/logo.png'

const Nav = () => {
    return <div className='navbar'>
        <HamberBtn />
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
}

export default Nav