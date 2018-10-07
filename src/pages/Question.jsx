import React from 'react';
import TextQuestion from './TextQuestion.jsx'
import '../styles/question.css'

const Question = ( {
                       name = '',
                       question = '',
                       id,
                       validation
                   } = {} ) => {
    return (
        <li className="list-element">
            {question}
            <TextQuestion/>
        </li>

    );
};

export default Question;
