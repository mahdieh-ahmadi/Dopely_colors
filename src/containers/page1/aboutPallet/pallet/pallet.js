import React from 'react'

import './pallet.css'

import Block from '../../../../components/blocks/blocks'
import Circle from '../../../../components/blocks/circle/circle'
import Nav from '../../../../components/navbar/Navbar'
import Footer from './footerPallet/footerPallet'


const colors = [{firstColor : '#1d2733' , second_color : '#3c4958' } , 
{firstColor : '#293e5d' , second_color : '#657fa7' },
{firstColor : '#f4e4a8' , second_color : '#fff8e1' },
{firstColor : '#a483ff' , second_color : '#d5ddf8' },
{firstColor : '#5de2e7' , second_color : '#d5feff' },
{firstColor : '#5d62e7' , second_color : '#abaefa' }]

const Pallet = () => {
    return <div className='pallet'>
        <div className='pallet_nav'>
            <Nav />
        </div>
        
        <div className='pallet__colors'>
            {
                colors.map(item => {
                    return <div className='pallet__colors--item'>
                            <Block class= {'oval'} bgcolor = {item.firstColor}/>
                            <span style={{'color':item.firstColor}}>{item.firstColor}</span>
                            <Circle firstColor={item.firstColor}  
                            second_color={item.second_color}/>
                        </div>
                })
            }
        </div>

        <Footer />
        
    </div>
}

export default Pallet