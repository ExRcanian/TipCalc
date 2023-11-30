let bill = 0
let partysize = 0

function calculateTip(tipPercent) {
    bill = Number(document.querySelector('.billAmount').value)
    partysize = Number(document.querySelector('.partySize').value)
    let tip = Number(bill * (tipPercent/100))
    let total = bill + tip
    console.log(total)
    console.log(tip)
    let tipPerPerson = tip / partysize
    let totalPerPerson = total / partysize
    document.querySelector('.tipnumber').innerHTML = `$${tipPerPerson}`
    document.querySelector('.totalnumber').innerHTML = `$${totalPerPerson}`
}

document.querySelector('#one').addEventListener('click', () => {
    calculateTip(5)
})

document.querySelector('#two').addEventListener('click', () => {
    calculateTip(10)
})

document.querySelector('#three').addEventListener('click', () => {
    calculateTip(15)
})

document.querySelector('#four').addEventListener('click', () => {
    calculateTip(25)
})

document.querySelector('#five').addEventListener('click', () => {
    calculateTip(50)
})

document.querySelector('#six').addEventListener('click', () => {
    custom = prompt('What percent tip?')
    calculateTip(custom)
})

document.querySelector('.reset').addEventListener('click', () => {
    document.querySelector('.billAmount').value = 0
    document.querySelector('.partySize').value = 1
    calculateTip(0)
})
