import { Component } from 'react';

class Child extends Component {
    componentWillUnmount() {
        alert('Unmounted message');
    }

    render() {
            return <h2>Hello World!</h2>
    }
}

export default Child;