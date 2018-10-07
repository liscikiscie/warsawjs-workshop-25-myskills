import React from 'react';
import TextQuestion from './TextQuestion.jsx'
import '../styles/question.css'

const Question = ( {
                       name = '',
                       question = '',
                       id,
                       onValueChange,
                       validation
                   } = {} ) => {
    return (
        <li className="list-element">
            {question}
            <TextQuestion
                {...validation}
                id={id}
                onValueChange={onValueChange}
            />
        </li>

    );
};

export default Question;
