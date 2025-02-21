// const age = 18;
// const name = "Naufal";

// // console.log(`Hallo nama saya ${name}, dan umur saya ${age} tahun.`);
// console.log("Haloo saya " + name + "," + " umur saya " + age + "." );

// const strAge = String(age); //Konversi tipe data ke string
// const strName = name.toString(); //Konversi tipe data ke string
// console.log(strAge);
// console.log(strName);

// const panjang = "20cm";
// const px = '64px';
// const strPanjang = parseInt(panjang);
// const intFromPX = parseInt(px);

// console.log(strPanjang);
// console.log(intFromPX); // output: 64

// const cm = '20.55cm';
// const px = '64.23px';

// const floatFromCM = parseFloat(cm); //Mengubah string ke boolean
// const floatFromPX = parseFloat(px); //Mengubah string ke boolean

// console.log(floatFromCM); // output: 20.55
// console.log(floatFromPX); // output: 64.23

// const x = 50;
// const y = null;

// const ubahY = Boolean(y);
// const ubahx = Boolean(x);

// console.log(ubahx);
// console.log(ubahY);


//note nilai falsy dalam js
// false
// 0
// -0
// 0n
// ''
// null
// undefined
// NaN


// const age = 20;
// const message = 'Umurku: ' + age;

// console.log(message); // output: Umurku: 20 //otomatis angka 20 di konversikan ke string.

// const strNumber = '123';
// const result = strNumber * 2; //string 123, otomatis di konversika ke number, dan masing masing dikali 2

// console.log(result); // output: 246


// const bool = true;
// const result = 1 + bool; //otomatis di konversikan menjadi number dan ditambahkan 1, hasilnya = 2

// console.log(result); // output: 2



//function
// let temperaturCelcius = 90;
// let temperaturInFarenheit;
// temperaturInFarenheit = 9 / 5 * temperaturCelcius + 32;
// console.log("hasil konversi = ", temperaturInFarenheit);

// function temperaturInFarenheit(temperaturCelcius){
//     const Farenheit  = 9 / 5 * temperaturCelcius + 32;
//     return "Hasil konversi = " + Farenheit;
// }
// console.log(temperaturInFarenheit(90));

// function convertCelsiusToFahrenheit(temperature) {
//     const temperatureInFahrenheit = (9 / 5) * temperature + 32;
  
//     console.log('Hasil konversi:', temperatureInFahrenheit);
//   }
  
//   const temperatureInCelsius = 90;
  
//   // Hanya menampilkan nilai function
//   console.log(convertCelsiusToFahrenheit);
//   // Output => [Function: convertCelciusToFahrenheit]
  
//   // Akan menjalankan isi function
//   convertCelsiusToFahrenheit(temperatureInCelsius);
//   // Output => Hasil konversi: 194

// function convertCelsiusToFahrenheit(temperature) {
//     if (temperature !== undefined) { // <-- conditional statement (perintah kondisional)
//       const temperatureInFahrenheit = 9 / 5 * temperature + 32;
   
//       console.log('Hasil konversi:', temperatureInFahrenheit);
//     }
//   }
// convertCelsiusToFahrenheit(10);


// const result = console.log('JavaScript keren!');
// console.log(result);

// function hello(){
//     return "hello";
// }
// const result = hello();
// console.log(result);

// const hello = () => {
//     return "hello";
// }
// console.log(hello());

// const sumNumber = (a, b) => {
//     const result = a + b;
//     return result;
// }
// const result = sumNumber(10, 20);
// console.log("hasil dari 10 + 20 = ", result);

// const luasSegitiga = (a, t) => {
//     const rumus = 1/2 * a * t;
//     return rumus;
// }
// const hasilLuas = luasSegitiga(2, 2);
// console.log(hasilLuas);


//function expression (tidak ada hoisting)

// const luasPersegi = function (s1, s2){ 
//     const result = s1*s2;
//     return result;
// }
// const hasilFuncLuas = luasPersegi(2, 2);
// console.log(hasilFuncLuas);

// hai(); // ada hoisting
// function hai(){ 
//     console.log("hai");
// }

// console.log(hai()); //tidak bisa di hoisting
// const hai = function(){
//     console.log("hai");
// }

// function sum(a, b){
//     return a + b;
// }
// function calculate(operasi, numA, numB){
//     return operasi(numA, numB);
// }
// const result = calculate(sum, 2, 4);
// console.log(result);

// function hitungX(x){
//     return function(y){
//         return x * y;
//     }
// }
// const pertama = hitungX(5);
// const kedua = hitungX(7);
// console.log(pertama(2));
// console.log(kedua(5));


//array

// const a = [1, 2];
// console.log(typeof a);

// const users = new Array();
// const numbers = new Array(5);
// console.log(users);

// const arr = Array.from('Asep');
// console.log(arr);

// const arr = new Array("a", "i", "u");
// const convert = Array.from(arr);
// console.log(convert);

// const arr = ['1', '2', '3'];
// arr[1] = '3'; //edit array
// console.log(arr);

// const myArray = ['Android', 'Data Science', 'Web'];
// delete myArray[1]; //delete array
// console.log(myArray); // Output: ['Android', <1 empty item>, 'Web']

// const arr = ['1', '2'];
// arr.push('10');  //menambahkan value array
// console.log(arr);

// const myArray = ['Android', 'Data Science', 'Web'];
// myArray.splice(1, 1);  //kita menghapus element indeks ke-1 dan jumlah element yang dihapus adalah 1.
// console.log(myArray); // Output: ['Android', 'Web']

// const myArray = ['Android', 'Data Science', 'Web'];
// myArray.splice(1, 2); //kita menghapus element indeks ke-1 dan jumlah element yang dihapus adalah 2.
// console.log(myArray); // Output: ['Android'']

// const myArray = ['Android', 'Data Science', 'Web'];
// myArray.shift(); //shift hanya menghapus element pertama
// console.log(myArray); // Output: ['Data Science', 'Web']

// const myArray = ['Android', 'Data Science', 'Web'];
// myArray.pop(); //pop menghapus element terakhir.
// console.log(myArray); // Output: ["Android", "Data Science"]

// const intro = ['hallo', 'holaa'];
// const [greeting, say] = intro;
// console.log(greeting);

// const myArray = ['Android', 'Data Science', 'Web'];
// myArray.reverse(); //Reverse adalah method yang digunakan untuk membalikkan nilai array.
// console.log(myArray); // Output: [ 'Web', 'Data Science', 'Android' ]

// const myArray = ['Web', 'Android', 'Data Science'];
// myArray.sort(); //Secara default, method sort akan mengurutkan berdasarkan abjadnya.
// console.log(myArray); // Output: [ 'Android', 'Data Science', 'Web' ]

// const laptop = new Map([
//     ['asus rog', 24],
//     ['asus tuf', 25]
// ])
// console.log(laptop);

// const map = new Map();
// map.set("asus vivobook", 20); // set(key, value).
// console.log(map);

// const arr = new Map();
// arr.set('brio', 100000000);
// console.log(arr.get('brio')); //mengakses nilai dari map

// const arr = new Map();
// arr.set('brio', 100000000);
// arr.set('avanza', 150000000);
// arr.set('innova', 200000000);
// arr.delete('brio');
// console.log(arr);

//Set

// const set = new Set();
// set.add('1');  //Menyimpan nilai set
// set.add('2');
// set.add('3');
// console.log(set);

// const set = new Set();
// set.add(1);
// set.add(2);
// set.add(3);
// for(const number of set){
//     console.log(number);
// }

// const set = new Set();
// set.add(1);
// set.add(2);
// set.add(3);
// set.forEach((value) => console.log(value));

// const obj1 = {name1: 'Asep'};
// const obj2 = {name2: 'Kucing', makanan: 'ikan'};
// const result = {...obj1, ...obj2}; //Spread operator digunakan untuk menyebarkan nilai yang ada pada object dan array. 
// console.log(result);

// const arr1 = ['Vincent'];
// const arr2 = ['Bandung'];
// const newArr= [...arr1, ...arr2];
// console.log(newArr);

// const original = ['apple', 'banana', 'cherry'];
// const copy = [...original]; // Spread operator bisa digunakan untuk menyalin nilai sebelumnya ke dalam variabel baru

// console.log(copy); // Output: ['apple', 'banana', 'cherry']


//Rest Operator
// function myFunc(...input){ //Rest parameter memungkinkan kita untuk menulis argument yang tak terbatas pada function.
//     console.log('Angka = ', input);
// }
// myFunc(1,2,3,4,5);

// function myFunc(number, ...manyMoreArgs) {
//     console.log('number', number);
//     console.log('manyMoreArgs', manyMoreArgs);
//   }
  
//   myFunc('one', 'two', 'three');


// function myFunc(...manyMoreArgs) {
//     console.log(manyMoreArgs.length);
//     console.log('manyMoreArgs', manyMoreArgs);
//   }
  
//   myFunc('one', 'two', 'three');

// const foods = ['ayam', 'ikan', 'kue', 'sate', 'seblak'];
// const[makanan1, makanan2, ...selanjutnya] = foods;
// console.log(makanan1);
// console.log(makanan2);
// console.log(selanjutnya);


//eror handling
// const error = new Error('Terjadi error');
// console.error(error);

// const harga = 50000;
// const bayar = 20000;

// if(bayar < harga){
//     throw new Error("Transaksi gagal!.");
// }


// try{
//     console.log("halllo");
//     throw new Error("zzz");
//     console.log("hahah");
// }catch (err){
//     console.log("Eror!");
// }

// try{
//     console.log("halllo");
//     throw new Error("zzz");
//     console.log("hahah");
// }catch (err){
//     console.log("Eror!");
// }finally{  //tidak peduli blok try eror atau tidak blok finally tetap akan dijalankan
//     console.log("ini final!.");
// }

// function cekNilai(nilai){
//     for(let i = 0; i < nilai.length; i++){
//         if(typeof nilai[i] !== 'number'){
//             throw new Error("Program eror");
//         }
//         const grade = nilai[i];
//         let predikat;

//         if(grade >= 81){
//             predikat = "A";
//         }else if(grade >= 70){
//             predikat = "B+";
//         }else if(grade >= 60){
//             predikat = "B";
//         }else if(grade >= 50){
//             predikat = "C+";
//         }else if (grade < 49){
//             predikat = "Tidak lulus";
//         }

//         console.log(`predikat anda adalah ${predikat}.`);
//     }
// }

// try{
//     const hasil = [90, 98, 70, 30];
//     cekNilai(hasil);

// }catch (e){
//     console.error(e);
// }

// for (let i = 0; i < 5; i++) {
//     if (i === 3) {
//       break;
//     }
//     console.log(i);
//   }

// class Character{
//     constructor(name, health, position){
//         this.name = name;
//         this.hehealth =health;
//         this.position = position;
//     }
//     canMove(){
//         console.log(`${this.name} moves to another position!`);
//     }
// }

// function canAttack(character){
//     return{
//         attack: () => {
//             console.log(`${character.name} attack with a weapon!`);
//         }
//     };
// }

// function canDefend(character){
//     return{
//         defend: () => {
//             console.log(`${character.name} defends with a shield!`);
//         }
//     }
// }

// function canCastSpell(character){
//     return{
//         castSpell: () => {
//             console.log(`${character.name} casts a spell!`)
//         }
//     }
// }

// function createMonster(name){
//     const character = new Character(name, 100, 0);
//     return Object.assign(character, canAttack(character));
// }
// function createGuardian(name){
//     const character = new Character(name, 100, 0);
//     return Object.assign(character, canDefend(character));
// }
// function createWizard(name){
//     const character = new Character(name, 100, 0);
//     return Object.assign(character, canCastSpell(character));
// }
// function createWarior(name){
//     const character = new Character(name, 100, 0);
//     return Object.assign(character, canDefend(character), canAttack(character));
// }

// const monster = createMonster('Monster');
// monster.canMove();
// monster.attack();
// const guardian = createGuardian('Guardian');
// guardian.canMove();
// guardian.defend();
// const wizard = createWizard('Wizard');
// wizard.canMove();
// wizard.castSpell();
// const warior = createWarior('Warior');
// warior.canMove();
// warior.attack();
// warior.defend();

// const names = ['anton', 'ani', 'asep'];
// const newNames = [];

// for(let i = 0; i < names.length; i++){
//     newNames.push(`${names[i]}!`);
// }
// console.log(newNames);

// const names = ['anton', 'ani', 'asep'];
// const newNames = names.map((names) => `${names}!`); //.map() adalah metode yang digunakan untuk membuat array baru dengan menerapkan fungsi yang diberikan pada setiap elemen dalam array yang dipanggil.
// console.log(newNames);

// let value = 0;

// function addWith(addingValue){
//     value += addingValue;
//     return value;
// }

// const result1 = addWith(1);
// const result2 = addWith(1);
// const result3 = addWith(1);


// console.log(result1, result2, result3);

//FP(Function Programming)
// function apply(operation, ...args) {
//     // kita bisa menambahkan kode lain sebelum operation dijalankan.
    
//     return operation(...args)
//   }
  
//   function sum(a, b, c) {
//     return a + b + c;
//   }
  
//   function discount(disc, value) {
//     return value - ((disc / 100) * value);
//   }
  
//   const productPrice = apply(sum, 100, 100, 200);
//   const withDiscount = apply(discount, 25, productPrice);
  
//   console.log('Product price:', productPrice); // Output: Product price: 400
//   console.log('With discount 25%:', withDiscount); // Output: With discount 25%: 300

// function apply(operator, ...args){
//     return operator(...args);
// }
// function sum(a, b, c){
//     return a + b + c;
// }
// function discount(disc, value){
//     return value - ((disc / 100) *value);
// }

// const productPrice = apply(sum, 100, 100, 200);
// console.log(productPrice);
// const withDiscount = apply(discount, 25, productPrice);
// console.log(withDiscount);

// function adjectivfy(adjective) {
//   return function (noun) {
//     return `${noun} ${adjective}.`;
//   }
// }

// function multipleBy(x) {
//   return function(y) {
//     return x * y;
//   }
// }

// const coolifier = adjectivfy('keren');
// const funnifier = adjectivfy('seru');

// const multipleByFive = multipleBy(5);

// console.log(coolifier('Dicoding')); // Output: Dicoding keren.
// console.log(funnifier('JavaScript')); // Output: JavaScript seru.
// console.log(multipleByFive(7)); // Output: 35
// console.log(multipleByFive(10)); // Output: 50

// function adjectivy(adjective){
//     return function (noun){
//         return `${noun} ${adjective}`;
//     }
// }
// function multipleBy(x){
//     return function(y){
//         return x * y;
//     }
// }

// const conlifier = adjectivy('wow');
// const funnifierfier = adjectivy('asik');
// const multipleByFive = multipleBy(10);

// console.log(funnifierfier('Golang'));
// console.log(conlifier('ITBOX'));
// console.log(multipleByFive(4));
// console.log(multipleByFive(7));