function test() {
    alert("Connection Established")
}

let firstNumber  = null;
let currentNumber = null;
let currentOperator = null;
let isCurrentNumberOriginal = true;


function clearCalculator() {   
    const output = document.getElementById("output");
    console.log(output.innerText);
    output.innerText = 0;
    firstNumber = null;
    currentNumber = null;
    currentOperator = null;
    isCurrentNumberOriginal = true;
}

function selection(userInput) {
    const output = document.getElementById("output");
    if (userInput == ".") {
        if (String(currentNumber).includes(".")) {
        } else {
            output.innerText = output.innerText + userInput;
            currentNumber = output.innerText;
        }
    } else if (currentNumber == null && !String(currentNumber).includes(".")) {
        output.innerText = userInput;
        currentNumber = userInput;
    } else {
        output.innerText = output.innerText + userInput;
        currentNumber = output.innerText;
    }
    
}

function operatorSelection(operator) {
    const output = document.getElementById("output");
    

    if (!String(operator).includes("=")) {
        if (isCurrentNumberOriginal) {
            currentOperator = operator;
            firstNumber = currentNumber;
            output.innerText = 0;
            currentNumber = null;
        } else {
            currentOperator = operator;
            currentNumber = null;
            output.innerText = 0;
        }
    } else { 
        if (currentOperator == null) {
            output.innerText = "Undefined Operator";
        } else if (firstNumber == null) {
            
        } else {
            let completedFunction = doMath(firstNumber, currentNumber);
            output.innerText = completedFunction;
            firstNumber = completedFunction;
            isCurrentNumberOriginal = false;
        }
    }
}

function doMath(numberOne, numberTwo) {
    if (currentOperator == '+') {
        return Number(numberOne) + Number(numberTwo);
    } else if (currentOperator == '-') {
        return Number(numberOne) - Number(numberTwo);
    } else if (currentOperator == '*') {
        return Number(numberOne) * Number(currentNumber);
    } else if (currentOperator == '/') {
        if (numberTwo == 0) {
            return "Divide by 0 Err"
        } else {
            return numberOne / numberTwo;
        }
    }
}