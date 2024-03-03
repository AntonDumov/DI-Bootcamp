import logo from '../logo.svg'
import React from 'react'
import './Exercise.css'

class Exercise extends React.Component {
    constructor() {
        super();
        this.style_header = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial"
        };
    }
    render () {
        return (
            <div>
                <h1 style={this.style_header}>This is a header</h1>
                <p className={'para'}>This is a paragraph</p>
                <a href={'/'}>This is a link</a>
                <img src={logo} alt={''}/>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </div>
        )
    }
}

export default Exercise