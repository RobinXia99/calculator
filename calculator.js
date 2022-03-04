const numberButtons = document.getElementsByClassName('calcnumber');
const symbolButtons = document.getElementsByClassName('calcsymbol');
const input = document.getElementById('result');
let addition = false;
let subtraction = false;
let isCalculated = false;
let inputArray = [];


for(const btn of numberButtons) {
    btn.addEventListener('click', function() {
        numClick(btn.innerText);
    })
}

for(const btn of symbolButtons) {
    btn.addEventListener('click', function() {
        toggleOperation(btn.innerText);
        

    })
}

function toggleOperation(operator) {

    switch (operator) {
        case "+":
            addition = !addition;
            subtraction = false;
            break;
        case "-":
            subtraction = !subtraction;
            addition = false;
            break;
        case "=":
            pushNumber()
            calculate();
            break;
    }
}

function calculate() {
    let result = "";
    for(const element of inputArray) {
        console.log(element);
        result += element;
    }
    input.innerText = eval(result);
    isCalculated = true;
    inputArray = [];
}

function clearText() {
    input.innerText = "0";
}

function pushNumber() {
    inputArray.push(input.innerText);
}

function numClick(num) {
    if(isCalculated) {
        isCalculated = false;
        clearText();
    }

    if(addition) {
        pushNumber();
        inputArray.push("+");
        addition = !addition;
        clearText();
    } else if(subtraction) {
        pushNumber();
        inputArray.push("-");
        subtraction = !subtraction;
        clearText();
    }
    if(input.innerText == "0" && num != ".") {
        input.innerText = num;
    } else if(!input.innerText.includes(".") && num == ".") {
        input.innerText += num;
    } else if(num != "."){
        input.innerText += num;
    }
}