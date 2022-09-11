let GLOBAL_firstNum = 0;
let GLOBAL_secondNum = 0;
let GLOBAL_operator = '';
let GLOBAL_displaySwitch = false;

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


/* need to modify multiple functions so that numpad values are not dependent
on textContent, rather a variable (most likely boolean) to reset display and such */
let addValueToDisplay = () => {
    let numpad = document.querySelector('.numpad');
    let buttons = numpad.querySelectorAll('.number');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const display = document.querySelector('.display');
            if (!GLOBAL_displaySwitch) {
                display.textContent = '';
                GLOBAL_displaySwitch = true;
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
        GLOBAL_firstNum = 0;
        GLOBAL_secondNum = 0;
        GLOBAL_operator = '';
        GLOBAL_displaySwitch = false;
    }
}

let operation = () => {
    /* const mathFunctions = document.querySelector('.operators'); */
    const operators = document.querySelectorAll('.operator');
    const display = document.querySelector('.display');
    operators.forEach(operator => operator.onclick = () => {
        if (!GLOBAL_firstNum) {
            GLOBAL_firstNum = display.textContent;
        } else {
            GLOBAL_secondNum = display.textContent;
        } 

        if (GLOBAL_firstNum && GLOBAL_secondNum) {
            display.textContent = operate(GLOBAL_firstNum, GLOBAL_secondNum, GLOBAL_operator);
            GLOBAL_firstNum = operate(GLOBAL_firstNum, GLOBAL_secondNum, GLOBAL_operator);
            GLOBAL_secondNum = 0;
            GLOBAL_displaySwitch = false;
        } else {
            display.textContent = GLOBAL_firstNum;
            GLOBAL_displaySwitch = false;
        }   

        GLOBAL_operator = operator.value;
    });
}

let equate = () => {
    const equals = document.querySelector('.equate');
    const display = document.querySelector('.display');
    equals.addEventListener('click',() => {
        GLOBAL_secondNum = display.textContent;
        display.textContent = operate(GLOBAL_firstNum, GLOBAL_secondNum, GLOBAL_operator);
        GLOBAL_firstNum = 0;
        GLOBAL_secondNum = 0;
        GLOBAL_operator = '';
        GLOBAL_displaySwitch = false;
    });
}

addValueToDisplay();
clearDisplay();
operation();
equate();