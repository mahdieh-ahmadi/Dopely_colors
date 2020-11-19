import React from 'react'

import Spots from './spots/spots'

import './slideSpot.css'

const SlideSpot = () => {
    const actives = [true,false,false,false]
    let i = 0;

    const click = event => {
        console.log(event)
    }

    return <div className='slideSpot'>
        {
            actives.map(item => {
                i = i+1;
                return <Spots active={item} key={Math.random()} clicked={event => click(i)}/>
            })
        }
    </div>
}

export default SlideSpot