let firstNum = '';
let secondNum = '';
let currentOperation = null;
let screenReset = false;

const runningOperation = document.getElementById('operation');
const selectedNumbers = document.getElementById('results');
const numberBtns = document.querySelectorAll('[data-number]');
const operatorBtns = document.querySelectorAll('[data-operator');
const clearBtn = document.querySelector('#clear');
const equalsBtn = document.querySelector('#equals-btn');
const decimalBtn = document.querySelector('#decimal');
const deleteBtn = document.querySelector('#delete');

clearBtn.addEventListener('click',clear);
equalsBtn.addEventListener('click',eval);
decimalBtn.addEventListener('click',() => selectedNumbers.textContent += '.');
deleteBtn.addEventListener('click',deleter);

numberBtns.forEach((button) => 
    button.addEventListener('click',() => setNumber(button.textContent)));

operatorBtns.forEach((button) => 
    button.addEventListener('click',() => setOperator(button.textContent)))

function setNumber(number){
    if (selectedNumbers.textContent === '0' || screenReset)
        resetScreen()
        selectedNumbers.textContent += number
};

function resetScreen() {
    selectedNumbers.textContent = '';
    screenReset = false;
};

function setOperator(op){
    if (selectedNumbers.textContent === '0') return;
    if (currentOperation !== null) eval();
    firstNum = selectedNumbers.textContent;
    currentOperation = op;
    runningOperation.textContent = `${firstNum} ${currentOperation}`;
    screenReset = true;
};

function clear(){
    selectedNumbers.textContent = 0;
    runningOperation.textContent = '';
    firstNum = '';
    secondNum = '';
    currentOperation = null;
    decimalBtn.disabled=false;
};

function deleter() {
    selectedNumbers.textContent = selectedNumbers.textContent.toString().slice(0,-1);
}

function eval(){
    if (currentOperation === null) return;
    secondNum = selectedNumbers.textContent;
    selectedNumbers.textContent = roundResult(operate(currentOperation,firstNum,secondNum))
    runningOperation.textContent = `${firstNum} ${currentOperation} ${secondNum}`;
    currentOperation = null;
};

function operate(operator,a,b) {
    a = Number(a);
    b = Number(b);
    if (operator === '+') {
        return add(a,b);
    } else if (operator === '-') {
        return subtract(a,b);
    } else if (operator === 'X') {
        return mulitply(a,b);
    } else {
        return divide(a,b);
    };
};

function add(a,b) {return a+b};

function subtract(a,b) {return a-b};

function mulitply(a,b) { return a*b };

function divide(a,b) { return a/b };

function roundResult(number) {
    return Math.round(( number + Number.EPSILON) * 1000) /1000
};