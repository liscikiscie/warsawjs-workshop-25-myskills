import React, { Component } from 'react';
import Questions from './Questions.jsx'
import db from '../dummy/db.json'
import updateQuestions from '../utils/updateQuestions';


class QuestionView extends Component {
    state = {
        questions: []
    };

    componentDidMount() {
        this.setState({
            questions: db.questions
        })
    };

    onValueChange = ( id ) => ( e ) => {
        const value = e.target.value;
        const upd = updateQuestions(this.state, id, value);
        console.log(upd);
    };

    render() {
        const {questions} = this.state;

        return (
            <div>
                <Questions
                    questions={questions}
                    onValueChange={this.onValueChange}/>
            </div>
        );
    }
}

export default QuestionView;
