import React from 'react'

import Icon from  '../../../../../components/icon/icon'
import './all.min.css'
import './footerPallet.css'

const FooterPallet = () => {
    return <div className = 'footer_pallet'>
        <div className = 'footer_big-icon'>
            <Icon class='big_icon'><i className='fas fa-share-alt' /> </Icon>
            <Icon class='big_icon'><i className='fas fa-download' /> </Icon>
            <Icon class='big_icon'><i className='fas fa-save' > Save </i> </Icon>
        </div>
        <div className='footer_small-icon'>
            <Icon class='small_icon'><i className='fas fa-cog' /> </Icon>
            <Icon class='small_icon'><i className='fas fa-circle' /> </Icon>
        </div>
    </div>
}

export default FooterPallet