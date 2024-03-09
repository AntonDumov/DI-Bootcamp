import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true, error: error, errorInfo: info });
        // You can also relay the error and info to an error reporting service here
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI here
            return <h1>Something went wrong.</h1>;
        }
        return this.props.children;
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ErrorBoundary;