
// Input values
const inputBill = document.querySelector(".input-bill");
const inputCustomTip = document.querySelector(".custom-input")
const inputNumberOfPeople = document.querySelector(".input-number-of-people")
const selectTip = document.querySelectorAll(".btn-tip")

// Tip values
const tipAmount = document.querySelector(".tip-amount")
const totalTip = document.querySelector(".total-tip")

// Buttons
const btnReset = document.querySelector('.btn-reset')

// Error messages
const invalidInputBill = document.querySelector("#input-bill span")
const invalidInputNumberOfPeople = document.querySelector("#input-number-of-people span")



let billState = "";
let tipPercent = "";
let numberOfPeople = "";

function resetData() {
    selectTip.forEach(tip => {
        tip.setAttribute("aria-selected" , "false")
    })
    inputBill.value = "";
    inputCustomTip.value = "";
    inputNumberOfPeople.value = "";
    tipAmount.textContent = "0.00"
    totalTip.textContent = "0.00"
}

function updateState() {
    tipAmount.textContent = ((billState * tipPercent)/100).toFixed(2) 
    totalTip.textContent = ((billState * tipPercent)/100 / numberOfPeople).toFixed(2)
    if(tipAmount.textContent == "Infinity" || tipAmount.textContent == "NaN") 
    tipAmount.textContent = "0.00"
    if(totalTip.textContent == "Infinity" || totalTip.textContent == "NaN") 
    totalTip.textContent = "0.00"


    if(billState == "0"){
        inputBill.classList.add('invalid')
        invalidInputBill.style.display = "initial"
    } 
    else {
        inputBill.classList.remove("invalid")
        invalidInputBill.style.display = "none"
    }

    if(numberOfPeople == "0"){
        inputNumberOfPeople.classList.add('invalid')
        invalidInputNumberOfPeople.style.display = "initial"
    } 
    else {
        inputNumberOfPeople.classList.remove("invalid")
        invalidInputNumberOfPeople.style.display = "none"
    }
}

inputBill.addEventListener("input", () => {
    billState = inputBill.value
    updateState()
})

selectTip.forEach(tip => {
    tip.addEventListener("click", (e)=> {
        selectTip.forEach(tip => tip.setAttribute("aria-selected", "false"))
        e.target.setAttribute("aria-selected", "true")
        let tipValue = e.target.textContent
        tipPercent = Number(tipValue.substring(0,tipValue.length-1))
        updateState()
    })
})

inputCustomTip.addEventListener("input", (e) => {
    selectTip.forEach(tip => tip.setAttribute("aria-selected", "false"))
    tipPercent = e.target.value
    updateState()
})

inputNumberOfPeople.addEventListener("input", (e) => {
    numberOfPeople = e.target.value
    updateState()
})

btnReset.addEventListener("click", () => {
    updateState()
    resetData()
    inputBill.classList.remove("invalid")
    invalidInputBill.style.display = "none"
    inputNumberOfPeople.classList.remove("invalid")
    invalidInputNumberOfPeople.style.display = "none"
})