import React from 'react';

class AppClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "John"
        }
        console.log('1=> constructor')
    }

    handleChange = (e) => {
        this.setState({username:e.target.value})
    }

    componentDidMount() {
        console.log('3=> componentDiMount');
    }

    render() {
        console.log('2=> render');
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