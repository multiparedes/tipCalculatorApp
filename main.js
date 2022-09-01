const buttons = document.querySelectorAll(".tip-button");
const billComp = document.querySelector(".bill-input");
const numbComp = document.querySelector(".people-input");

const outputPersonComp = document.querySelector(".tip-amount");
const outputTotalComp = document.querySelector(".total-person");

const resetButton = document.querySelector(".reset-button")

const billError = document.querySelector(".error.bill");
const personError = document.querySelector(".error.people");

//Variables used to get user input.
var tipPercent;
var billAmount;
var numberPersons;
//Variables calculated.
var outputPerson;
var outputTotal;


//USED TO ACTIVATE AND DESACTIVATE THE SELECTED TIP %.
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        buttons.forEach((b) =>  b.classList.remove("active"))
        button.classList.add("active");
        tipPercent = button.innerHTML.replace("%","") || button.value;
        calculateAll();
    })
})

buttons[5].addEventListener("keyup", () => {
    if(billComp.value == "")  {
        tipPercent == undefined;
    } else {
        tipPercent = buttons[5].value;
    }
    calculateAll();
})

billComp.addEventListener("keyup", () => {
    if(billComp.value == "")  {
        billAmount = undefined;
        billError.style.display = "block";
    } else {
        billAmount = parseInt(billComp.value);
        billError.style.display = "none";
    }
    calculateAll();
})

numbComp.addEventListener("keyup", () => {
    if(numbComp.value == "")  {
        numberPersons = undefined;
        personError.style.display = "block";
    } else {
        personError.style.display = "none";
        numberPersons = parseInt(numbComp.value);
    }
    calculateAll();
})

resetButton.addEventListener("click",() => {
    removeAll();
}) 

function removeAll() {
    outputTotalComp.innerHTML = 0;
    outputPersonComp.innerHTML = 0;

    billComp.value = undefined;
    numbComp.value = undefined;

    tipPercent = undefined;
    billAmount = undefined;
    numberPersons = undefined;

    buttons.forEach((b) =>  b.classList.remove("active"));
    resetButton.classList.remove("active");
}

function calculateAll() {
    if(tipPercent != undefined && numberPersons != undefined && billAmount != undefined) {
        outputTotal = Math.round((billAmount * (tipPercent / 100)) * 100) / 100;
        outputPerson = Math.round((outputTotal / numberPersons) * 100) / 100;

        outputTotalComp.innerHTML = outputTotal;
        outputPersonComp.innerHTML = outputPerson;

        resetButton.classList.add("active");
    } 
}
