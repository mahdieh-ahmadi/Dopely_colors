import React from 'react'

import './QuestionItem.css'

const QuestonItem = props => {
    return <div className='QuestionItem'>
        <h3>{props.header}</h3>
        <p>{props.detail}</p>
        <div>{props.btnTxt} &#8594;</div>
        <div className='QuestionItem__line'></div>
    </div>
}

export default QuestonItem