import React from 'react'

import BlockColor from '../../../components/blocks/colors/colors'
import Header from '../../../components/headers/Header'

import './EndleseColor.css'


const EndlessColor = () => {
    const blockdata = [{header : '4,875,123' , detail :'Color Palettes Created' , bgcolor : '#24cbc7'},
    {header : '8,189,923' , detail :'Color used' , bgcolor : '#ff3a97'},
    {header : '2,200,000' , detail :'Gradients Generated' , bgcolor : '#ffd600'},
    {header : '800,000' , detail :'Color Interactions' , bgcolor : '#24cbc7'},
    {header : '123,000,212' , detail :'Color Converted' , bgcolor : '#ff9b00'},
    {header : '21,000' , detail :'Color Names' , bgcolor : '#c1e865'},
    {header : '8,189,923' , detail :'Colors Used' , bgcolor : '#24cbc7'},
    {header : '2,200,000' , detail :'Gradients Generated' , bgcolor : '#d842ef'},
    {header : '800,000' , detail :'Color Interactions' , bgcolor : '#f44336'},
    {header : '123,000,212' , detail :'Color Converted' , bgcolor : '#6842ef'}, ]

    return <div className='EndlessColor'>
        <div className='EndlessColor--header'>
            <Header class='black_head'>Endless colors</Header>
        </div>

        <div className='EndlessColor--detail'>
            Find the perfect color tools and resources for any project.
            From color palettes to everything you could ever want to learn about color.
        </div>
        
        <div className='EndlessColor--blocks'>
        {
            blockdata.map(item => {
                return <BlockColor 
                header={item.header} 
                detail={item.detail} 
                bgcolor={item.bgcolor}
                key = {Math.random()}/>
            })
        }
        </div>
        
    </div>
}

export default EndlessColor