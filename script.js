const bill = document.querySelector(".input-bill");
const selectTip = document.querySelectorAll(".btn-tip")
const inputCustomTip = document.querySelector(".custom-input")
const inputNumberOfPeople = document.querySelector(".input-number-of-people")
const tipAmount = document.querySelector(".tip-amount")
const totalTip = document.querySelector(".total-tip")
const btnReset = document.querySelector('.btn-reset')
const invalidInputs = document.querySelectorAll(".input-container span")

let billState = "";
let tipPercent = "";
let numberOfPeople = "";

function resetData() {
    selectTip.forEach(tip => {
        tip.setAttribute("aria-selected" , "false")
    })
    bill.value = "";
    inputCustomTip.value = "";
    inputNumberOfPeople.value = "";
    tipAmount.textContent = "0.00"
    totalTip.textContent = "0.00"
}

function updateState() {
    tipAmount.textContent = ((billState * tipPercent)/100).toFixed(2) 
    totalTip.textContent = ((billState * tipPercent)/100 / numberOfPeople).toFixed(2)
    if(tipAmount.textContent == "Infinity") tipAmount.textContent = "0.00"
    if(totalTip.textContent == "Infinity") totalTip.textContent = "0.00"
    if(tipAmount.textContent == "NaN") tipAmount.textContent = "0.00"
    if(totalTip.textContent == "NaN") totalTip.textContent = "0.00"
}

function validationBill() {
    if(billState == "0") {
        invalidInputs[0].style.display = "initial"
        bill.style.outline = '2px solid hsl(var(--clr-invalid))'
    }
    else {
        invalidInputs[0].style.display = "none"
        bill.style.outline = "2px solid hsl(var(--clr-strong-cyan))"
    }
}

function validationNumberOfPeople() {
    if(numberOfPeople == "0") {
        invalidInputs[1].style.display = "initial"
        inputNumberOfPeople.style.outline = '2px solid hsl(var(--clr-invalid))'
    }
    else {
        invalidInputs[1].style.display = "none"
        inputNumberOfPeople.style.outline = "2px solid hsl(var(--clr-strong-cyan))"
    }
}

updateState()

bill.addEventListener("input", () => {
    billState = bill.value
    updateState()
    validationBill()
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
    validationNumberOfPeople()
})

btnReset.addEventListener("click", () => {
    updateState()
    resetData()
})

body.addEventListener("click", ()=> {
    if(invalidInputs[0].style.display == "none") invalidInputs[0].style.outline = ""
    if(invalidInputs[1].style.display == "none") invalidInputs[1].style.outline = ""
})




