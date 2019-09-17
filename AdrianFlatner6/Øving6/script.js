let tax = document.getElementById("tax")
let income = document.getElementById("income")
let wealth = document.getElementById("wealth")
function taxCalculator(){ 
    tax.value = (0.35 * income.value) + (0.25 * wealth.value)
}