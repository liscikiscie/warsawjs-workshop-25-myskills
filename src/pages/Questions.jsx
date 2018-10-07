import React from 'react';
import Question from './Question.jsx'

const Questions = (
    {
        questions = [],
        onValueChange
    } = {}
) => {
    return (
        <ol className="questions-list">
            {questions.map(question =>
                <Question
                    {...question}
                    key={question.id}
                    // id={question.id}
                    onValueChange={onValueChange}
                />
            )}
        </ol>
    );
};

export default Questions;
