import React, { useState } from 'react'

import './QuestionItem.css'

const QuestonItem = props => {
    const [headclass,setheadclass] = useState(['qusrionItem__arrow'])
    const [questiondetail , setquestiondetail] = useState(['questionItem__detail'])

    const rotate = () => {
        console.log()
        if(headclass.length === 1){
            setheadclass(['qusrionItem__arrow' , 'rotateArrow'])
            setquestiondetail(['questionItem__detail' , 'showdetail'])
        }else{
            setheadclass(['qusrionItem__arrow'])
            setquestiondetail(['questionItem__detail' ])
        }
    }

    return <div className='QuestionItem'>
        <div className='questionItem__head' onClick={rotate}>
            <h3>{props.header}</h3>
            <div className = {headclass.join(' ')}>&#8250;</div>
            <div className='QuestionItem__line'></div>
        </div>
        <div className={questiondetail.join(' ')}>
            <p>{props.detail}</p>
            <div>{props.btnTxt} &#8594;</div>
        </div>
        
       
    </div>
}

export default QuestonItem