import React from 'react'

import './spots.css'

const Spots = props => {
    const classes = ['spot']
    if(props.active){
        classes.push('active')
    }

    return <div className={classes.join(' ')} onClick={props.clicked}>

    </div>
}

export default Spots