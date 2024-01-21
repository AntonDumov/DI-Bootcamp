// Create a function that returns true if all parameters are truthy, and false otherwise.

const allTruthy = (...params) => {
    return params.reduce((result, param) => {
        return Boolean(result && param)
    }, true)
}

