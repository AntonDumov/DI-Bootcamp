import { Component } from 'react';

class BuggyCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
        this.handleClick = () => {
            this.setState({ counter: this.state.counter + 1 });
            if (this.state.counter === 4) {
                throw new Error('I crashed!');
            }
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Counter: {this.state.counter}</button>
            </div>
        );
    }

}

export default BuggyCounter;