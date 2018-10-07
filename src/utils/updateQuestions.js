const getQuestionId = id => question => question.id === id;

export default function updateQuestions( prevState, id, newValue ) {
    const {questions = []} = prevState;
    const foundIndex = questions.findIndex(getQuestionId(id));

    const prevQuestions = questions.slice(0, foundIndex);
    const nextQuestions = questions.slice(foundIndex + 1);
    const oldQuestion = questions[ foundIndex ];
    const updateQuestion = {
        ...oldQuestion,
        currentValue: newValue
    };
    console.log(id);
    console.log(prevState);
    console.log(newValue);
    console.log(foundIndex);
    return [ ...prevQuestions, updateQuestion, ...nextQuestions ]
}
