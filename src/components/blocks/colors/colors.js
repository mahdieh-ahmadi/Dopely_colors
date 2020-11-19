import React from 'react'

import './colors.css'

const BlockColor = props => {
    return <div className='color_block' style={{'backgroundColor':props.bgcolor}}>
        <h4 className='colors_head'>{props.header}</h4>
        <p className='colors_detail'>{props.detail}</p>
        <div className='colors_line'></div>
    </div>
}

export default BlockColor