let bill = 0
let partysize = 0

function calculateTip(tipPercent) {
    bill = document.querySelector('.billAmount').value
    partysize = document.querySelector('.partySize').value
    let tip = bill * (5/100)
    let total = bill + tip
    console.log(total)
    let tipPerPerson = tip / partysize
    let totalPerPerson = total / partysize
}