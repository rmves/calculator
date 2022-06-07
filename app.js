let firstNum = '';
let secondNum = '';
let operation = null;
result = '';

const selectedOperator = document.getElementById('actions');
const selectedNumbers = document.getElementById('results');
const numberBtns = document.querySelectorAll('[data-number]');
const operatorBtns = document.querySelectorAll('[data-operator');
const clearBtn = document.querySelector('#clear');
const equalsBtn = document.querySelector('#equals-btn');
const decimalBtn = document.querySelector('#decimal');

clearBtn.addEventListener('click',clear)
equalsBtn.addEventListener('click',operate)

numberBtns.forEach((button) => 
    button.addEventListener('click',() => setNumber(button.textContent)));

operatorBtns.forEach((button) => 
    button.addEventListener('click',() => setOperator(button.textContent)))

function setNumber(number){
    if (selectedNumbers.textContent == 0){
        selectedNumbers.textContent = '';
    };
    // if (equalsBtn) {
    //     selectedNumbers.textContent = result;
    // }

    selectedNumbers.textContent += number;
}

function setOperator(operator){
    selectedOperator.textContent += `${selectedNumbers.textContent} ${operator}`;
    operation = selectedOperator.textContent;
    firstNum = selectedNumbers.textContent;
    operation = operator;
    // reset();
}

function clear(){
    selectedNumbers.textContent = 0;
    selectedOperator.textContent = '';
    firstNum = '';
    secondNum = '';
    operation = null
}

// function reset() {
//     if (operation !== null) {
        
//     }
// }

// function delete(){

// }

function operate(operator,a,b){
    a = firstNum;
    b = secondNum;
    if (equalsBtn) {
    if (operation === '+') {
        result = add(a,b)
    };
    if (operation === '-') {
        result = subtract(a,b)
    }
    if (operation === 'X') {
        result = mulitply(a,b)
    };
    if (operation === '÷') {
        result = divide(a,b)
    };
    };
};

function add(a,b) {return a+b};

function subtract(a,b) {return a-b};

function mulitply(a,b) {return a*b};

function divide(a,b) {
    if (b=== 0){
        return "Divide by Zero Danger, Will Robinson"
    }
    else {
        return a/b
        }
};