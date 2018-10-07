import React, { Component } from 'react';
import Title from './pages/Title.jsx';
import QuestionView from './pages/QuestionView.jsx';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Title/>
                <QuestionView/>
            </div>
        );
    }
}

export default App;
