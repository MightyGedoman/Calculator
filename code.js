let num1 = null;
let num2 = null;
let sum = null;
let screen = document.querySelector('.screen')
let number = document.querySelectorAll('.number')
let divide = document.querySelector('./')
let time = document.querySelector('.x')
let add = document.querySelector('.+')
let subtract = document.querySelector('.-')
let equal = document.querySelector('.=')

function add(num1, num2) {
    sum = num1 + num2
    return sum
}

function subtract(num1, num2) {
    sum = num1 - num2
    return sum
}

function times(num1, num2) {
    sum = num1 * num2
    return sum
}

function divide(num1, num2) {
    sum = num1 / num2
    return sum
}

function operator() {
    
}

function operate(num1, num2) {
    operator(num1, num2)
}