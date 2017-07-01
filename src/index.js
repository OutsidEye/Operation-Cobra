import React, { Component } from 'react';
import { render } from 'react-dom';
import Home from './components/home/home.js';

class App extends Component {
    render(){
        return (
            <Home/>
        )
    }
}

render(
    <App />,
    document.getElementById('root')
)
