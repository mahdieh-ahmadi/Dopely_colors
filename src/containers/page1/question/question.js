import React from 'react'

import QuestionItem from './Question_item/QuestionItem'
import Header from '../../../components/headers/Header'

import './question.css'

const Question = () => {
    const questiondata = [{header : 'What is Color theory?', 
    detail : 'There are a number of predefined color scheme standards that make creating new schemes easier, especially for beginners.Below are the traditional schemes, with a few examples for each.', 
    btntext:'Read more about Color Theory'},
    {header : 'How to Create your own Color Palette?', 
    detail : 'There are a number of predefined color scheme standards that make creating new schemes easier, especially for beginners.Below are the traditional schemes, with a few examples for each.', 
    btntext:'Read more about Color Theory'},
    {header : 'How does a color palette work?', 
    detail : "A color palette is the set of colors that a designer chooses to create a visual style for an image, graphic or website – basically any design they do. It's also a powerful user experience tool that sets the tone of the design, so being able to create an effective color palette makes you a sneaky master of manipulation.", 
    btntext:'Read more about Color Theory'},
    {header : 'How do I find the hex color of an image?', 
    detail : "A color palette is the set of colors that a designer chooses to create a visual style for an image, graphic or website – basically any design they do. It's also a powerful user experience tool that sets the tone of the design, so being able to create an effective color palette makes you a sneaky master of manipulation.", 
    btntext:'Read more about Color Theory'},
]

    return <div className='question'>
        <div className='question__head'>
            <Header class='black_head'>Have a question?</Header>
        </div>
        <div className='question__item'>
            {
                questiondata.map(item => {
                    return <QuestionItem header={item.header}
                            detail={item.detail}
                            btnTxt={item.btntext}
                            key={item.detail+Math.random()}/>
                })
            }
        </div>
        
    </div>
}

export default Question