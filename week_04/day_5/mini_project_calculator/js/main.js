const calculator = {
    firstNumber: '',
    firstNumberComplete: false,
    secondNumber: '',
    operator: '',
    result: '',
    outputElement: document.getElementById('calcOutput'),
    refreshOutput: function () {
        if (!this.result) {
            this.outputElement.innerText = `${this.firstNumber} ${this.operator} ${this.secondNumber}`
        } else {
            this.outputElement.innerText = this.result
        }
    },
    resetAfterResult: function () {
        calculator.firstNumber = ''
        calculator.secondNumber = ''
        calculator.operator = ''
        calculator.firstNumberComplete = false
        this.refreshOutput()
    },
    reset: function () {
        this.resetAfterResult();
        this.result = ''
        this.refreshOutput()
    }
}

function number(n) {
    if (calculator.result) {
        calculator.result = ''
    }
    if (!calculator.firstNumberComplete) {
        calculator.firstNumber = `${calculator.firstNumber}${n}`
    } else {
        calculator.secondNumber = `${calculator.secondNumber}${n}`
    }
    calculator.refreshOutput()
}

function operator(o) {
    if (calculator.firstNumber !== '') {
        calculator.operator = o;
        calculator.firstNumberComplete = true;
        calculator.refreshOutput()
    }
}

function equal() {
    switch (calculator.operator) {
        case "+":
            calculator.result = Number(calculator.firstNumber) + Number(calculator.secondNumber)
            break
        case "-":
            calculator.result = Number(calculator.firstNumber) - Number(calculator.secondNumber)
            break
        case "*":
            calculator.result = Number(calculator.firstNumber) * Number(calculator.secondNumber)
            break
        case "/":
            calculator.result = Number(calculator.firstNumber) / Number(calculator.secondNumber)
    }
    calculator.resetAfterResult()
}

function reset() {
    calculator.reset()
}

function clear() {
    if (!calculator.firstNumberComplete) {
        calculator.firstNumber = ''
    } else {
        calculator.secondNumber = ''
    }
    calculator.refreshOutput()
}
