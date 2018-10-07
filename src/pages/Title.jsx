import { Component } from 'react';
import React from 'react';
import logo from '../assets/ogp-v1.png';
import '../styles/title.css';


class Title extends Component {
    render() {
        return (
            <div className="App-title">
                <header className="App-header">
                    <h1>Zapraszamy do ankiety</h1>
                    <img src={logo} alt=""/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eos, error harum, in laborum magni
                        maiores maxime necessitatibus odit officia officiis pariatur perspiciatis quam quibusdam quos,
                        recusandae suscipit velit voluptatem.</p>
                </header>

            </div>
        );
    }
}

export default Title;
    
