let num1 = null;
let num2 = null;
let sum = null;
let screen = document.querySelector('screen')
let numbers = document.querySelectorAll('.number')
let divide = document.querySelector('divide')
let time = document.querySelector('time')
let add = document.querySelector('add')
let subtract = document.querySelector('minus')
let equal = document.querySelector('equal')

numbers.forEach((number) => {
    number.addEventListener('click', () => {
        console.log(number)
    })
})



/* function add(num1, num2) {
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
} */

function operator() {
    
}

function operate(num1, num2) {
    operator(num1, num2)
}