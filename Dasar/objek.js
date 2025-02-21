//   var durian = {
//     nama : "Durian",
//     harga : 75000,
//     enak : true
//   }
//   console.log(durian.nama);
//   console.log(durian.harga);
//   console.log(durian["enak"]);

// function changeToObject(array){
//     var result = { };
//     result.jenis = array[0];
//     result.harga = array[1];
//     result.enak = array[2];
//     return result;
// }
// console.log(changeToObject(["durian", 75000, true])); 


// var caca = {
//     nama : "caca", //object
//     berat : "45Kg",
//     tinggi : "155 cm",
//     hobby : ["Nonton", "Makan"],

//     sebutkanHobby : function(){  //method
//         console.log("Hobby caca:")
//         for(i=0; i< this.hobby.length; i++){
//             console.log(i+1 + ". " + this.hobby[i]);
//         }
//     }
// }
// caca.sebutkanHobby();


//quiz
// var obj = {
//     name : "james",
//     "is able": true,
//     1 : 100
//     }
//     var kata = "kata";
//     console.log(obj[kata]);

// var student = {
//     name : "andy",
//     gpa : 3.05,
    
//     speak(){
//     console.log(this.name)
//     }
//     }
// student.speak();

// var student = {
//     name : "andy",
//     gpa : 3.05,
    
//     speak(){
//     console.log(undefined)
//     }
//     }

//     console.log(student.speak());