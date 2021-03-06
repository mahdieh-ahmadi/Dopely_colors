import React from 'react'

import Headers from '../../../components/headers/Header'
import Button from '../../../components/button/btn/buttons'
import Block from '../../../components/blocks/blocks'

import './head.css'

const Head = () => {
    const bgcolors1 = ['#240e8b' , '#00f5d4' , '#f04393' , '#825de7' , '#3a3fc2' , '#d616c2' , '#1ca7ec']
    const bgcolors2 = ['#f9c449' , '#3c591f' , '#0c1d14' , '#ef6222' , '#e3d2b0' , '#faad9d' , '#293e5d']


    return <div className = 'head'>
        <div className='page1__header'>
            <Headers class={'black_head'}>Super Fast </Headers>
            <Headers class={'blue_head'}>Color Explorer </Headers>
            <Button class={'blue_btn'}>Explores Color &#8594; </Button>
        </div>
        
        <div className='main__block'>
            <div>
            {
                bgcolors1.map(item => {
                    return <Block bgcolor={item} class='blocks' key={item}/>
                })
            }
            </div>
            <div>
            {
                bgcolors2.map(item => {
                    return <Block bgcolor={item} class='blocks' key={item}/>
                })
            }
            </div>
             
        </div>
    </div>
}

export default  Head