import React from 'react'

import './naviconbtn.css'

const Button = props => {
return <button className={`${props.class} navBtn` }>{props.children}</button>
}

export default Button