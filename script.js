let addition = (a,b) => {
    return a + b;
}
let subtraction = (a,b) => {
    return a - b;
}
let multiplication = (a,b) => {
    return a * b;
}
let division = (a,b) => {
    return a / b;
}

let operate = (a,b,operator) => {
    if (operator === '+') {
        return addition(a,b);
    } else if (operator === '-') {
        return subtraction(a,b);
    } else if (operator === '*') {
        return multiplication(a,b);
    } else if (operator === '/') {
        return division(a,b);
    }
}

let operation = prompt("what operation would you like to perform? (e.g. +, -, *, or /)");
let firstNum = +prompt("first number?");
let secondNum = +prompt("second number?");

console.log(`The answer is ${operate(firstNum, secondNum, operation)}.`);