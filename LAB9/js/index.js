let currentNumber = '';
let previousNumber = '';
let operation = null;

const displayCurrentNumber = document.getElementById('currentNumber');
const displayPreviousNumber = document.getElementById('previousNumber');
const displayOperation = document.getElementById('operation');

function appendNumber(number) {
    currentNumber += number;
    displayCurrentNumber.textContent = currentNumber;
}

function setOperation(op) {
    if (currentNumber === '') return;
    if (previousNumber !== '') {
        calculate();
    }
    operation = op;
    previousNumber = currentNumber;
    currentNumber = '';
    displayOperation.textContent = operation;
    displayPreviousNumber.textContent = previousNumber;
}

function calculate() {
    let result;
    const prev = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }
    currentNumber = result.toString();
    operation = null;
    previousNumber = '';
    displayCurrentNumber.textContent = currentNumber;
    displayOperation.textContent = '';
    displayPreviousNumber.textContent = '';
}

function clearCalculator() {
    currentNumber = '';
    previousNumber = '';
    operation = null;
    displayCurrentNumber.textContent = '';
    displayOperation.textContent = '';
    displayPreviousNumber.textContent = '';
}
