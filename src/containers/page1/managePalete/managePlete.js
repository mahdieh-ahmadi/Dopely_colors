import React from 'react'

import './managePalete.css'

import Header from '../../../components/headers/Header'
import Button from '../../../components/button/btn/buttons'

const ManagePalete = () => {
    return <div className='managePalete'>
        <div className='managePalete--container'>
            <div className='managePalete--head'></div>
            <Header class='white_head'>Everything you need to create and manage 
            amazing palettes</Header>

            <p className='managePalete_paragraph'>
            Find the perfect color tools and resources for any project.
            </p>
            <p className='managePalete_paragraph'>
                From color palettes to everything you could ever want to learn about color.
            </p>

            <div className = 'managePalete-paletes'>
                <div className='managePalete-palete managePalete-palete--1'>
                    Learn more
                </div>
                <div className='managePalete-palete managePalete-palete--2'>
                    Download
                </div>
                <div className='managePalete-palete managePalete-palete--3'>
                    Download
                </div>
                <div className='managePalete-palete managePalete-palete--4'>
                    Soon...
                </div>
                <div className='managePalete-palete managePalete-palete--5'>
                    <h3>Wish list</h3>
                    <p>
                        Add your dream features and support other 
                        ideas by upvoting them
                    </p>
                    <Button class='gredient_brn'>Open Dopely community</Button>
                </div>
                <div className='managePalete-palete managePalete-palete--6'>
                    Learn more
                </div>
            </div>
        </div>
        
    </div>
}

export default ManagePalete