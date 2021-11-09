const bill = document.querySelector(".input-bill");
const selectTip = document.querySelectorAll(".btn-tip")
const inputTip = document.querySelector(".custom-input")
const inputNumberOfPeople = document.querySelector(".input-number-of-people")

let billState;
let tipPercent;
let numberOfPeople;

bill.addEventListener("input", () => {
    billState = bill.value
})

selectTip.forEach(tip => {
    tip.addEventListener("click", (e)=> {
        selectTip.forEach(tip => tip.setAttribute("aria-selected", "false"))
        e.target.setAttribute("aria-selected", "true")
        let tipValue = e.target.textContent
        tipPercent = Number(tipValue.substring(0,tipValue.length-1))
        // console.log(billState, tipPercent, numberOfPeople)
    })
})

inputTip.addEventListener("input", (e)=>{
    selectTip.forEach(tip => tip.setAttribute("aria-selected", "false"))
    tipPercent = e.target.value
    // console.log(billState, tipPercent, numberOfPeople)
})

inputNumberOfPeople.addEventListener("input", (e)=> {
    numberOfPeople = e.target.value
    // console.log(billState, tipPercent, numberOfPeople)
})

// console.log(billState, tipPercent, numberOfPeople)









