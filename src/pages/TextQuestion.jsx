import React from 'react';

const TextQuestion = ( {
                           name = '',
                           question = '',
                           id,
                           validation
                       } = {} ) => {
    return (
        <input type="text" value="" placeholder="Write your answer right here"/>
    );
};

export default TextQuestion;
