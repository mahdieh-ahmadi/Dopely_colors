import React, { useState } from 'react'

import Spots from './spots/spots'

import './slideSpot.css'

const SlideSpot = () => {
    const [actives,setactive] = useState([true,false,false,false])
    let i = 0;

    const click = event => {
        let index = Array.prototype.indexOf.call(event.target.parentNode.children , event.target)
       let arr = [false,false,false,false];
       arr[index] = true;
        setactive(arr)
        
    }

    return <div className='slideSpot'>
        {
            actives.map(item => {
                i = i+1;
                return <Spots active={item} key={i} clicked={event => click(event)}/>
            })
        }
    </div>
}

export default SlideSpot