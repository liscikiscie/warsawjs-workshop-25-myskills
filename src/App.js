import React, { Component } from 'react';
import Title from './pages/Title';
import List from './pages/List';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Title/>
                <List/>
            </div>
        );
    }
}

export default App;
