const bill = document.querySelector(".input-bill");
const selectTip = document.querySelectorAll(".btn-tip")
const inputTip = document.querySelector(".custom-input")
const inputNumberOfPeople = document.querySelector(".input-number-of-people")
const tipAmount = document.querySelector(".tip-amount")
const totalTip = document.querySelector(".total-tip")

let billState;
let tipPercent;
let numberOfPeople;

function updateState() {
   tipAmount.textContent = (billState * tipPercent)/100 
    totalTip.textContent = (billState * tipPercent)/100  * numberOfPeople
}

bill.addEventListener("input", () => {
    billState = bill.value
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

inputTip.addEventListener("input", (e)=>{
    selectTip.forEach(tip => tip.setAttribute("aria-selected", "false"))
    tipPercent = e.target.value
    updateState()
})

inputNumberOfPeople.addEventListener("input", (e)=> {
    numberOfPeople = e.target.value
    updateState()
})











