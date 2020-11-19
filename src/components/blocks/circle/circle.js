import React from 'react'

import './circle.css'

const Block = props => {
    return <div className={`${props.class} circle_color`} 
    style={{'background': `linear-gradient(to left top ,${props.firstColor},${props.second_color} )`}}>

    </div>
}

export default Block