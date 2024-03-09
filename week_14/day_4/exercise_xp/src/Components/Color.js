import { Component } from 'react';

class Color extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favoriteColor: 'red'
        };
        this.handleClick = () => {
            this.setState({
                favoriteColor: 'blue',
            });
        };
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("in getSnapshotBeforeUpdate")
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("after update")
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return true;
    }

    render() {
        return (
            <>
                <h2>My favorite color is {this.state.favoriteColor}</h2>
                <button onClick={this.handleClick}>Change to blue</button>
            </>
        );
    }

}

export default Color;