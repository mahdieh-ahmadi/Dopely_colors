import React from 'react'

import './header.css'

const Header = props => {
    return <div className='header_text'>
            <h1 className={`${props.class} header`}>
                {props.children}
            </h1>
        </div>
}

export default Header