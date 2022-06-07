let firstNum = '';
let secondNum = '';
let operator = null;
let result = '';

const selectedOperator = document.getElementById('operation');
const selectedNumbers = document.getElementById('results');
const numberBtns = document.querySelectorAll('[data-number]');
const operatorBtns = document.querySelectorAll('[data-operator');
const clearBtn = document.querySelector('#clear');
const equalsBtn = document.querySelector('#equals-btn');
const decimalBtn = document.querySelector('#decimal');

clearBtn.addEventListener('click',clear)
equalsBtn.addEventListener('click',operate)
decimalBtn.addEventListener('click',() => selectedNumbers.textContent += '.');

numberBtns.forEach((button) => 
    button.addEventListener('click',() => setNumber(button.textContent)));

operatorBtns.forEach((button) => 
    button.addEventListener('click',() => setOperator(button.textContent)))

function setNumber(number){
    if (selectedNumbers.textContent == 0){
        selectedNumbers.textContent = '';
    }
    if (result !== '' & operator !== null) { 
        selectedNumbers.textContent = secondNum;
    };
    if (operator !== null) {
        secondNum += number;
        selectedNumbers.textContent = secondNum;
    }
    else {
        selectedNumbers.textContent += number;
    }
};

function setOperator(op){
     if (operator === null) {
        selectedOperator.textContent += `${selectedNumbers.textContent} ${op}`;
        operator = op;
        firstNum = selectedNumbers.textContent;
     };
    //  else (

    //  )
};

function clear(){
    selectedNumbers.textContent = 0;
    selectedOperator.textContent = '';
    firstNum = '';
    secondNum = '';
    operator = null;
};

// function delete(){

// }

function operate(){
    if (secondNum !=='') {
        selectedOperator.textContent = `${firstNum} ${operator} ${secondNum}`
    };
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);
    if (operator === '+') {
        result = add(firstNum,secondNum);
        selectedNumbers.textContent = Number(result);
    } else if (operator === '-') {
        result = subtract(firstNum,secondNum);
        selectedNumbers.textContent = result;
    } else if (operator === 'X') {
        result = mulitply(firstNum,secondNum);
        selectedNumbers.textContent = result;
    } else {
        result = divide(firstNum,secondNum);
        selectedNumbers.textContent = result;
    };
};

function add(a,b) {return a+b};

function subtract(a,b) {return a-b};

function mulitply(a,b) {return (a*b).toFixed(14)};

function divide(a,b) {
    if (b=== 0){
        return "Infinity"
    }
    else {
        return (a/b).toFixed(14)
        }
};