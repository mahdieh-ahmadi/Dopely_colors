import React from 'react'

import './buttons.css'

const Button = props => {
return <button className={`${props.class} btn` }>{props.children}</button>
}

export default Button