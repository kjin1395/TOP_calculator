let GLOBAL_firstNum;
let GLOBAL_secondNum;
let GLOBAL_operator;

let addition = (a,b) => {
    return +a + +b;
}
let subtraction = (a,b) => {
    return +a - +b;
}
let multiplication = (a,b) => {
    return +a * +b;
}
let division = (a,b) => {
    return +a / +b;
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

let addValueOnClick = () => {
    let numpad = document.querySelector('.numpad');
    let buttons = numpad.querySelectorAll('input');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const display = document.querySelector('.display');
            if (display.textContent === '0') {
                display.textContent = '';
            }
            display.append(button.value);
        });
    });
}

let clearDisplay = () => {
    const clearButton = document.querySelector('.clear');
    clearButton.onclick = () => {
        const display = document.querySelector('.display');
        display.textContent = '0';
    }
}

let operation = () => {
    const mathFunctions = document.querySelector('.operators');
    const operators = mathFunctions.querySelectorAll('input');
    const display = document.querySelector('.display');
    operators.forEach(operator => operator.onclick = () => {
        GLOBAL_firstNum = display.textContent;
        GLOBAL_operator = operator.value;
        display.textContent = '0';
    })
}

let Equate = () => {
    const equals = document.querySelector('.operate');
    const display = document.querySelector('.display');
    equals.addEventListener('click',() => {
        GLOBAL_secondNum = display.textContent;
        display.textContent = operate(GLOBAL_firstNum, GLOBAL_secondNum, GLOBAL_operator);
    });
}

addValueOnClick();
clearDisplay();
operation();
Equate();