// let object = {
//     name: "fal",
//     prodo: "infor",
//     umur: 18,

//     setHello : () =>{
//         console.log("heloow saya naufal");
//     }
// }
// let Object = new object();
// Object.name;

// class Student {
//     constructor(name, subjects, score){
//         this.name = name;
//         this.subjects = subjects;
//         this.score = score;
//     }
//     sebutkanNama = () => {
//         console.log("Hallo nama saya " + this.name);
//     }
//     sebutkanSubject(){
//         console.log(this.subjects);
//     }
// }
// let asep = new Student("Asep husein",["FLSP, oak"], 100);
// asep.sebutkanNama();
// asep.sebutkanSubject();


//quiz
// class Person{
//     constructor(name,skill){
//     this.name = name;
//     this.age = age;
//     }
//     }
//     let person = new Person("Jack",19);
//     console.log(person);

// class Vehicle{
//     constructor(name,type){
//     this.name = name;
//     this.type = type;
//     }
//     }
//     let vehicle = new Vehicle();
//     console.log(vehicle.name)

// class Vehicle{
//     constructor(name,type){
//     this.name = name;
//     this.type = type;
//     }
//     }
//     let vehicle = new Vehicle("car");
//     console.log(vehicle.name)


// class Person {
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
// }
// class Programmer extends Person {
//     constructor(name,age){
//         super(name,age);
//     }
// }


//OOP Inheritance dan Ecapsulation
// class Person {
//     constructor(name, age){
//         this._name = name;
//         this._age = age;
//     }
//     get name(){
//         return this._name;
//     }
//     get age(){
//         return this._age;
//     }
//     set setName(name){
//         this._name = name;
//     }
//     set setAge(age){
//         this._age = age;
//     }
// }
// class Programmer extends Person {
//     constructor(name, age, skills){
//         super(name,age);
//         this._skills = skills;
//     }
//     get skills(){
//         return this._skills;
//     }
//     set setSkills(skills){
//         this._skills = skills;
//     }
// }
// class Student extends Person{
//     constructor(name,age,scores){
//         super(name,age);
//         this._scores = scores;
//     }
//     get scores(){
//         return this._scores;
//     }
//     set setScores(scores){
//         this._scores = scores;
//     }
// }
// let programmer = new Programmer("Ucok", 19, ["React Js"]);
// let student = new Student("Jamal", 78, [100]);
// // console.log(programmer);
// // console.log(student);
// console.log(programmer.name)
// console.log(student.age)