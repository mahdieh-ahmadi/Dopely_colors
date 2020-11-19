import React from 'react'

import './icon.css'

const Icon = props => {
    return <div className={`${props.class} icon`}>
        {props.children}
    </div>
}

export default Icon