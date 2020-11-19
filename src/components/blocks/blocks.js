import React from 'react'

import './blocks.css'

const Block = props => {
    return <div className={props.class} style={{'backgroundColor':props.bgcolor}}>

    </div>
}

export default Block