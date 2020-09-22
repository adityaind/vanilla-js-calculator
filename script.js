const calculatorDisplay = document.querySelector('h1');
const inputBtns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');

function sendNumberValue(number) {
    // calculatorDisplay.textContent = number;
    // if current display value is 0, replace it, else append number to the end
    const displayValue = calculatorDisplay.textContent;
    calculatorDisplay.textContent = displayValue === '0' ? number : displayValue + number;
}

function addDecimal() {
    // if no decimal add one
    if(!calculatorDisplay.textContent.includes('.')) {
        calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
    }
}
// adding event listeners
inputBtns.forEach((inputBtn) => {
    if(inputBtn.classList.length === 0) {
        inputBtn.addEventListener('click', () =>  sendNumberValue(inputBtn.value));
    }
    else if (inputBtn.classList.contains('operator')){
        inputBtn.addEventListener('click', () =>  sendNumberValue(inputBtn.value));
    }
    else if (inputBtn.classList.contains('decimal')){
        inputBtn.addEventListener('click', () => addDecimal());
    }

});

// Reset Display

function resetAll() {
    calculatorDisplay.textContent = "0";
}
// Event listner
clearBtn.addEventListener('click', resetAll);