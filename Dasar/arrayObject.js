// var makanan = [
//     {
//         name: "Nasi goreng",
//         origin: "Indonesia"
//     },
//     {
//         name: "Sushi",
//         origin: "Japan"
//     },
//     {
//         name: "Steak",
//         origin: "Wastern"
//     }
// ]
// console.log(makanan[0]);
// console.log(makanan[1].name);
// console.log(makanan[2].origin);


// var spesifikasi = [
//     {
//         name: "Asus",
//         type: "Laptop",
//         price: 7500000
//     },
//     {
//         name: "Dell",
//         type: "laptop",
//         price: 5000000
//     },
//     {
//         name: "Corsair",
//         type: "Ram",
//         price: 1250000
//     }
// ]

// function changeToArrayObject(array2D){
//     var result = { };
//     var tempObj = { };

//     for(var i = 0; i < array2D.length; i++){
//         spesifikasi.name = array2D[i][0];
//         spesifikasi.type = array2D[i][1];
//         spesifikasi.price = array2D[i][2];

//         result.push(tempObj);
//         tempObj = { };
//     }
//     return result;
// }

// var students = [
//     ["Charlie", "A", 87],
//     ["Berno", "A", 75],
//     ["Andi", "B", 81],
//     ["Ella", "B", 73]
// ]

// function groupClass(arr2D){
//     var result = [];
//     var classA = {
//         class: "A",
//         students: [],
//         score: []
//     }
//     var classB = {
//         class: "B",
//         students: [],
//         score: []
//     }

//     for(var i = 0; i < arr2D.length; i++){
//         if(arr2D[i][0] === "A"){
//             classA.students.push(arr2D[i][0]);
//             classA.score.push(arr2D[i][2]);
//         }else{
//             classB.students.push(arr2D[i][0]);
//             classB.score.push(arr2D[i][2]);
//         }
//     }
//     result.push(classA);
//     result.push(classB);
//     return result;
// }
// groupClass();


//quiz
// var items = [
//     {
//     id:1,
//     name: "Laptop",
//     price : 100000
//     },{
//     id : 2,
//     name: "Mouse",
//     price: 50000
//     }
//     ]

//     console.log(items[1].price === "50000") 

// var items = [
//     {
//     id:1,
//     name: "Laptop",
//     price : 100000
//     },{
//     id : 2,
//     name: "Mouse",
//     price: 50000,
//     }
//     ]
//     console.log(typeof items[0].name) 