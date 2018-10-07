import React from 'react';
import db from '../dummy/db.json'
import Question from './Question.jsx'

const Questions = (
    {
        questions = []
    } = {}
) => {
    return (
        <ol className="questions-list">
            {db.questions.map(question =>
                <Question {...question} key={question.id}/>
            )}
        </ol>
    );
};

export default Questions;
