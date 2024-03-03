import logo from '../logo.svg'
import React from 'react'

class Exercise extends React.Component {
    render () {
        return (
            <div>
                <h1 style={{color:'red', backgroundColor:'lightblue'}}>This is a header</h1>
                <p>This is a paragraph</p>
                <a href={'#'}>This is a link</a>
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