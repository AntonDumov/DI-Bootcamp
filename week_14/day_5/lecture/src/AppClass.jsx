import React from 'react';

class AppClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "John"
        }
    }

    handleChange = (e) => {
        this.setState({username:e.target.value})
    }

    render() {
        return (
            <div>
                <h1>Class Component</h1>
                <h2>Username: {this.state.username}</h2>
                <input onChange={this.handleChange}/>
            </div>
        )
    }

}

export default AppClass