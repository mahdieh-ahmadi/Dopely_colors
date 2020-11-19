import React from 'react'

import './footerblock.css'

const FooterBlock = props => {
    return <div className='footerblock'>
        <h5>{props.title}</h5>
        {
            props.list.map(item => {
            return <div key={item}>{item}</div>
            })
        }
</div>
}

export default FooterBlock