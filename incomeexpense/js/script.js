let BtnIncome = document.getElementById('btnIncome');
let BtnExpense = document.getElementById('btnExpense');

let transactions = {
    income : [
        {
            id:1,
            transaksi:"Sallry",
            saldo:50000
        }
    ],
    expense : [
        {
            id:1,
            transaksi:"Bayar Tagihan",
            saldo:15000
        }
    ]
}

function incomeHandler(){
    let namaValue = document.getElementById('nama').value;
    let saldoValue = document.getElementById('saldo').value;
    let id;
    if(transactions.income.length === 0){
        id = 1;
    }else{
        id = transactions.income[transactions.income.length - 1].id + 1;
    }
    let tempObj = {
        id,
        transaksi : namaValue,
        saldo : saldoValue
    }
    transactions.income.push(tempObj);
    getTransactions();
    saldoCount();
    alert(`"${namaValue}" telah ditambahkan!`)
}

function expenseHandler(){
    let namaValue = document.getElementById('nama').value;
    let saldoValue = document.getElementById('saldo').value;
    let id;
    if(transactions.expense.length === 0){
        id = 1;
    }else{
        id = transactions.expense[transactions.expense.length - 1].id + 1;
    }
    let tempObj = {
        id,
        transaksi : namaValue,
        saldo : saldoValue
    }
    transactions.expense.push(tempObj);
    getTransactions();
    saldoCount();
    alert(`"${namaValue}" telah ditambahkan!`)
}

function getTransactions(){
    let tBodyInc = document.getElementById('tBody-inc');
    let tBodyExp = document.getElementById('tBody-exp');   
    tBodyInc.innerHTML = '';
    tBodyExp.innerHTML = '';

    transactions.income.forEach(inc =>{
        tBodyInc.innerHTML += `<tr> 
            <td>${inc.id}</td>
            <td>${inc.transaksi}</td>
            <td>${inc.saldo}</td>
        </tr>`
    })
    transactions.expense.forEach(exp =>{
        tBodyExp.innerHTML += `<tr> 
            <td>${exp.id}</td>
            <td>${exp.transaksi}</td>
            <td>${exp.saldo}</td>
        </tr>`
    })
}

function saldoCount(){
    let saldoIncome = 0;
    let saldoExpense = 0;

    transactions.income.forEach(inc => {
        saldoIncome += +inc.saldo
    })
    transactions.expense.forEach(exp => {
        saldoExpense+= +exp.saldo
    })

    let selisih = saldoIncome - saldoExpense;

    let saldoValue = document.getElementById('saldo-value')
    saldoValue.innerHTML = selisih;
    // console.log(selisih);
}

BtnIncome.addEventListener('click', incomeHandler)
BtnExpense.addEventListener('click', expenseHandler)
getTransactions();
saldoCount();
