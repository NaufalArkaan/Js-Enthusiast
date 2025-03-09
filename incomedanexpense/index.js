const Note = require('./Note'); //import

let note = new Note();
note.addIncome("Gaji bulanan", 5000);
note.addExpense("Bayar air", 5000);
note.listIncome();
note.listExpense();
note.balance();