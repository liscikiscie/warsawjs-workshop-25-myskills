import UPDATE_QUESTIONS_VALUE from './index'

export default updateQuestionValue = ( id, newValue ) => ({
    type: UPDATE_QUESTIONS_VALUE,
    id: id,
    newValue: newValue
})

export default clearQuestionValue = ( id ) => ({
    type: CLEAR_QUESTIONS_VALUE,
    id: id,
})
