let BtnIncome = document.getElementById('btnIncome');
let BtnExpense = document.getElementById('btnExpense');

let tBodyInc = document.getElementById('tBody-inc');
let tBodyExp = document.getElementById('tBody-exp');

function incomeHandler(){
    console.log("inc")
}

function expenseHandler(){
    console.log("exp")
}

BtnIncome.addEventListener('click', incomeHandler)
BtnExpense.addEventListener('click', expenseHandler)