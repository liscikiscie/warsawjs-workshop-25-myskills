import React from 'react';

const TextQuestion = ( {
                           onValueChange,
                           id
                       } = {} ) => {
    return (
        <input
            type="text"
            placeholder="Write your answer right here"
            onKeyPress={onValueChange(id)}
        />
    );
};

export default TextQuestion;
