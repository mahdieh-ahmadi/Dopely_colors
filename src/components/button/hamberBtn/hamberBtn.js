import React from 'react'

import './hamberbtn.css'

const HamberBtn = props => {
    return <div className={'HamberBtn'} onClick={props.clicked}>
        <div></div>
    </div>
}

export default HamberBtn