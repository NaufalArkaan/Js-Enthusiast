// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     eat(){
//         console.log(`${this.name} is eatinmg`);
//     }
// }
// const person1 = new Person("Angel", 19);
// const person2 = new Person("Acep", 18);

// console.log(person1);
// console.log(person2);
// person1.eat();

// class Smartphones {
//     constructor(color, brand, model){
//         this.color = color;
//         this.brand = brand;
//         this.model = model;
//     }
//     charging(){
//         console.log(`Charging ${this.model}`);
//     }
// }

// class Ios extends Smartphones{
//     airDrop(){
//         console.log("Ios have a behavior AirDrop");
//     }
// }

// class Android extends Smartphones{
//     splitScreen(){
//         console.log("Android have a Split Screen");
//     }
// }

// const ios = new Ios("white", "A", "iphhone 12 pro max");
// const android = new Android("Black", "B", "Samsung S15 Ultra");

// ios.airDrop();
// ios.charging();
// android.splitScreen();
// console.log(ios.model);
// console.log(android.model);
// console.log(ios instanceof Smartphones); //untuk cek apakah nilai induk yang di sambungkan sudah benar atau belum
// console.log(android instanceof Smartphones);


// function SmartPhones(color, brand, model) {
//     this.color = color;
//     this.brand = brand;
//     this.model = model;
//   }

//   SmartPhones.prototype.charging = function() {
//     console.log(`Charging ${this.model}`);
//   };

//   function iOS(color, brand, model) {
//     SmartPhones.call(this, color, brand, model);
//   }

//   iOS.prototype = Object.create(SmartPhones.prototype);
//   iOS.prototype.constructor = iOS;

//   iOS.prototype.airDrop = function() {
//     console.log('iOS have a behavior AirDrop');
//   };

//   function Android(color, brand, model) {
//     SmartPhones.call(this, color, brand, model);
//   }

//   Android.prototype = Object.create(SmartPhones.prototype);
//   Android.prototype.constructor = Android;

//   Android.prototype.splitScreen = function() {
//     console.log('Android have a Split Screen');
//   };

//   const ios = new iOS('black', 'A', '12 Pro Max');
//   const android = new Android('white', 'B', 'Galaxy S21');

//   ios.charging(); // Output: Charging 12 Pro Max
//   ios.airDrop(); // Output: iOS have a behavior AirDrop

//   android.charging(); // Output: Charging Galaxy S21
//   android.splitScreen(); // Output: Android have a Split Screen


// class Kopi{
//     constructor(jumlahAir){
//         this.jumlahAir = jumlahAir;
//         this._suhu = 90;
//     }
//     set suhu(suhu){
//         console.log("you are not allowed to change the temperature");
//     }
//     get suhu(){
//         return this._suhu;
//     }
// }
// const kopi = new Kopi(10);
// console.log('sebelum di ubah ', kopi.suhu);
// kopi.suhu = 100;
// console.log('setelah di ubah ', kopi.suhu);

// class Hp{
//     constructor(name, tipe){
//         this.name = name;
//         this.tipe = tipe;
//     }
//     charger(){
//         console.log(`fast charging, asal dari ${this.asal}`);
//     }
// }

// class Android extends Hp{
//     constructor(name, tipe, asal){
//         super(name, tipe);
//         this.asal = asal;
//     }
//     charger(){
//         super.charger();
//         console.log(`${this.name} sangat fast charging`);
//     }
// }

// const android = new Android("Samsung S15", "Android", "indonesia");
// android.charger();
// console.log(android.name);

// class Character {
//   constructor(name, health, position) {
//     this.name = name;
//     this.health = health;
//     this.position = position;
//   }

//   canMove() {
//     console.log(`${this.name} moves to another position!`);
//   }
// }

// function canAttack(character) {
//   return {
//     attack: () => {
//       console.log(`${character.name} attacks with a weapon!`);
//     }
//   };
// }

// function canDefend(character) {
//   return {
//     defend: () => {
//       console.log(`${character.name} defends with a shield!`);
//     }
//   };
// }

// function canCastSpell(character) {
//   return {
//     castSpell: () => {
//       console.log(`${character.name} casts a spell!`);
//     }
//   };
// }

// function createMonster(name) {
//   const character = new Character(name, 100, 0);
//   return Object.assign(character, canAttack(character));
// }

// function createGuardian(name) {
//   const character = new Character(name, 100, 0);
//   return Object.assign(character, canDefend(character));
// }

// function createWizard(name) {
//   const character = new Character(name, 100, 0);
//   return Object.assign(character, canCastSpell(character));
// }

// function createWarrior(name) {
//   const character = new Character(name, 100, 0);
//   return Object.assign(character, canAttack(character), canDefend(character));
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

// const warrior = createWarrior('Warrior');
// warrior.canMove();
// warrior.attack();
// warrior.defend();

// class Animal {
//     constructor(name, age, isMamal) {
//         this.name = name;
//         this.age = age;
//         this.isMamal = isMamal;
//     }
// }
// class Rabbit extends Animal {
//     constructor(name, age) {
//         super(name, age, false);
//     }
//     eat() {
//         return `${this.name} sedang terbang!`;
//     }
// }
// class Eagle extends Animal {
//     constructor(name, age){
//         super(name, age, false);
//     }
//     fly() {
//         return `${this.name} sedang terbang!`;
//     }
// }

// const myRabbit = new Rabbit("Labi", 2);
// const myEagle = new Rabbit("Elo", 4);

// console.log(myRabbit.eat());
// console.log(myEagle.fly());