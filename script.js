const calculatorDisplay = document.querySelector('h1');
const inputBtns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');

let firstValue = 0;
let operatorValue = '';
let awaitingNextValue = false;


function sendNumberValue(number) {
    // Replace curent display value if first value is entered
    if (awaitingNextValue) {
        calculatorDisplay.textContent = number;
        awaitingNextValue = false;
    } else {
           
    // if current display value is 0, replace it, else append number to the end
    
    const displayValue = calculatorDisplay.textContent;
    calculatorDisplay.textContent = displayValue === '0' ? number : displayValue + number;
    }
}

function addDecimal() {
    // If operator pressed, don't add decimal
    if(awaitingNextValue) {
        return;
    }
    // if no decimal add one
    if(!calculatorDisplay.textContent.includes('.')) {
        calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
    }
}

function useOperator(operator){
    const currentValue = Number(calculatorDisplay.textContent);
    //assign first value if no value already exists
    if(!firstValue) {
        firstValue = currentValue;
        operatorValue = operator;
        
    } else{
        console.log('current value ', currentValue);
    }
    // once operator is clicked like + or - etc, store the operator value and get ready for storing the  next value
    awaitingNextValue = true;
    console.log('fisrt value', firstValue);
    console.log("operator", operator);

}
// adding event listeners
inputBtns.forEach((inputBtn) => {
    if(inputBtn.classList.length === 0) {
        inputBtn.addEventListener('click', () =>  sendNumberValue(inputBtn.value));
    }
    else if (inputBtn.classList.contains('operator')){
        inputBtn.addEventListener('click', () =>  useOperator(inputBtn.value));
    }
    else if (inputBtn.classList.contains('decimal')){
        inputBtn.addEventListener('click', () => addDecimal());
    }

});

// Reset All value & Display

function resetAll() {
     firstValue = 0;
     operatorValue = '';
     awaitingNextValue = false;
     calculatorDisplay.textContent = "0";
}
// Event listner
clearBtn.addEventListener('click', resetAll);